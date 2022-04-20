import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HeadAndMeta } from '../head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadAndMeta />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
