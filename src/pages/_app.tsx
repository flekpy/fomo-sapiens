import type { AppProps } from 'next/app'

import { withLayout } from '@/layout/Layout'
import '@/styles/globals.sass'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withLayout(App)
