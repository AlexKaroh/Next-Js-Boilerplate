import { useMemo } from 'react';
import { ToastContainer } from 'react-toastify';
import { ApolloProvider } from '@apollo/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import AppContext from 'appContext';
import useAuth from 'hooks/useAuth/useAuth';
import useThemeColor from 'hooks/useThemeColor/useThemeColor';
import theme from 'mui/theme/theme';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { abrilFatface, inter } from 'resources/fonts/fonts';

import Layout from 'components/Layout/Layout';

import { useApollo } from '../src/apolloClient';

import '../styles/globals.css';
import '../styles/scrollbar.css';
import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  const { token, setToken } = useAuth();
  const { themeColor, setThemeColor } = useThemeColor();

  const contextUm = useMemo(
    () => ({
      token,
      setToken,
      themeColor,
      setThemeColor
    }),
    [token, setToken, themeColor, setThemeColor]
  );

  return (
    <>
      <Head>
        <title>next.js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </Head>

      <ThemeProvider
        theme={theme(inter.style.fontFamily, abrilFatface.style.fontFamily, themeColor)}
      >
        <CssBaseline />
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
      </ThemeProvider>
    </>
  );
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   // eslint-disable-next-line no-console
//   console.log(metric);
// }

export default appWithTranslation(MyApp);
