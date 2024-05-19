import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../src/components/commons/layout';
import ApolloSetting from '../src/components/commons/apollo';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles } from '../src/commons/styles/globalStyles';
import { theme } from '../src/commons/styles/theme';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloSetting>
    </RecoilRoot>
  );
}
