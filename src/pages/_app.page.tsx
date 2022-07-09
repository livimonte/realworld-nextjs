import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HeadAndMeta } from '../head'
import { Theme } from '../components/_common/theme/theme'
import { AuthProvider } from './auth/ctxAuth'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadAndMeta />
      <AuthProvider>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </AuthProvider>
    </>
  )
}

export default MyApp
