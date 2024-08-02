import { ApolloProvider } from "@apollo/client";
import { useMemo, useState } from "react";
import { ToastContainer } from "react-toastify";

import AppContext from "appContext";

import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { inter } from "resources/fonts/fonts";

import Layout from "components/Layout/Layout";

import { useApollo } from "../src/apolloClient";

import "styles/global.scss";
import "styles/scrollbar.css";
import "styles/reset.css";

import "react-toastify/dist/ReactToastify.min.css";

function MyApp({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps);

	const [token, setToken] = useState<string>("");

	const contextUm = useMemo(
		() => ({
			token,
			setToken,
		}),
		[token],
	);

	return (
		<>
			<Head>
				<title>next.js</title>

				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=5"
				/>
			</Head>

			<div className={inter.className}>
				<ApolloProvider client={apolloClient}>
					<AppContext.Provider value={contextUm}>
						<Layout>
							<Component {...pageProps} />
						</Layout>

						<ToastContainer position="bottom-left" theme="dark" />
					</AppContext.Provider>
				</ApolloProvider>
			</div>
		</>
	);
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   // eslint-disable-next-line no-console
//   console.log(metric);
// }

export default appWithTranslation(MyApp);
