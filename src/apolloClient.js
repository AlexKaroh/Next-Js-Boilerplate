import { ApolloClient, InMemoryCache, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { concatPagination } from "@apollo/client/utilities";
import { onError } from "@apollo/link-error";
import { createUploadLink } from "apollo-upload-client";
import { merge } from "lodash";
import isEqual from "lodash/isEqual";
import Router from "next/router";
import { useMemo } from "react";
import { toast } from "react-toastify";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient;

const tokenErrors = [
	"Token error: TOKEN_WRONG",
	"Token error: invalid token",
	"Token error: invalid signature",
	"Token error: jwt malformed",
	"Token error: jwt expired",
	"Forbidden resource",
	"Unauthorized",
];
let tokenExist = true;

function createApolloClient() {
	const errorLink = onError(({ graphQLErrors }) => {
		if (graphQLErrors) {
			// biome-ignore lint/complexity/noForEach: <explanation>
			graphQLErrors.forEach(async ({ message }) => {
				if (tokenErrors.includes(message)) {
					localStorage.removeItem("TOKEN");
					if (tokenExist) {
						toast("You are logged out");
						Router.push({
							pathname: "/",
							query: {
								session: "expired",
							},
						});
						tokenExist = false;
					}
				}
			});
		}
	});

	const link = createUploadLink({
		uri: process.env.NEXT_PUBLIC_ENV_GRAPHQL_URL,
	});

	const authLink = setContext((_, { headers }) => {
		// get the authentication token from local storage if it exists
		tokenExist = true;

		const token =
			typeof window !== "undefined" ? localStorage.getItem("TOKEN") : undefined;
		// return the headers to the context so httpLink can read them

		return {
			headers: {
				...headers,
				authorization: token || token !== "" ? `Bearer ${token}` : "",
			},
		};
	});

	return new ApolloClient({
		link: from([errorLink, authLink.concat(link)]),
		cache: new InMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						allPosts: concatPagination(),
					},
				},
			},
		}),
	});
}

export function initializeApollo(initialState = null) {
	const _apolloClient = apolloClient ?? createApolloClient();

	// If your page has Next.js data fetching methods that use Apollo Client, the initial state
	// gets hydrated here
	if (initialState) {
		// Get existing cache, loaded during client side data fetching
		const existingCache = _apolloClient.extract();

		// Merge the existing cache into data passed from getStaticProps/getServerSideProps
		const data = merge(initialState, existingCache, {
			// combine arrays using object equality (like in sets)
			arrayMerge: (destinationArray, sourceArray) => [
				...sourceArray,
				...destinationArray.filter((d) =>
					sourceArray.every((s) => !isEqual(d, s)),
				),
			],
		});

		// Restore the cache with the merged data
		_apolloClient.cache.restore(data);
	}
	// For SSG and SSR always create a new Apollo Client
	if (typeof window === "undefined") return _apolloClient;
	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient;

	return _apolloClient;
}

export function addApolloState(client, pageProps) {
	if (pageProps?.props) {
		pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
	}

	return pageProps;
}

export function useApollo(pageProps) {
	const state = pageProps[APOLLO_STATE_PROP_NAME];
	const store = useMemo(() => initializeApollo(state), [state]);
	return store;
}
