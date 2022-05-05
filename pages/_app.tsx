import '../src/styles/_globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { useStore } from 'react-redux';
import { wrapper } from '@src/store';




function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore();
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )

}

export default wrapper.withRedux(MyApp)
