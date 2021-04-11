import type { AppProps } from 'next/app';
import createStore from '../ducks/createStore';
import { Provider } from 'react-redux';
import Layout from '@/components/Layout';
import '@/styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={createStore()}>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </Provider>
  )
}

export default MyApp;
