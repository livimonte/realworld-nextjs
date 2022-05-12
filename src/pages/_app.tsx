import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HeadAndMeta } from '../head'
import { Theme } from '../components/_common/theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadAndMeta />
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}

export default MyApp
