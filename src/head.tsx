import Head from 'next/head'
import { config } from './config'

export const HeadAndMeta = () => (
  <Head>
    <meta charSet="utf-8" />
    <title>{config.name}</title>
    <meta key="description" name="description" content={config.description} />

    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="theme-color" content={config.themeColor} />
    <meta name="application-name" content={config.name} />
    <meta name="apple-mobile-web-app-title" content={config.name} />

    {/*sharing*/}
    <meta property="og:type" content="website" />
    <meta property="og:locale" content={config.locale} />
    <meta property="og:site_name" content={config.name} />
    <meta property="og:title" name="og:title" content={config.name} />
    <meta property="og:description" name="og:description" content={config.description} />
    <meta property="og:url" name="og:url" content={config.url} />
    <meta property="og:image" name="og:image" content={`${config.url}theme/share.jpg`} />

    {/*icons*/}
    <link rel="icon" href={`${config.url}favicon.ico`} />
    <link rel="apple-touch-icon" href={`${config.url}theme/icon-180x180.png`} />

    {/*splash screens*/}
    <link
      href={`${config.url}theme/iphone5_splash.png`}
      media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
    <link
      href={`${config.url}theme/iphone6_splash.png`}
      media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
    <link
      href={`${config.url}theme/iphoneplus_splash.png`}
      media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
      rel="apple-touch-startup-image"
    />
    <link
      href={`${config.url}theme/iphonex_splash.png`}
      media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
      rel="apple-touch-startup-image"
    />
    <link
      href={`${config.url}theme/iphonexr_splash.png`}
      media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
    <link
      href={`${config.url}theme/iphonexsmax_splash.png`}
      media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
      rel="apple-touch-startup-image"
    />
    <link
      href={`${config.url}theme/ipad_splash.png`}
      media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
    <link
      href={`${config.url}theme/ipadpro1_splash.png`}
      media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
    <link
      href={`${config.url}theme/ipadpro3_splash.png`}
      media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
    <link
      href={`${config.url}theme/ipadpro2_splash.png`}
      media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
    <link
      rel="apple-touch-startup-image"
      media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)"
      href={`${config.url}theme/splash-screen-2048x2732.png`}
    />

    <link rel="manifest" href="/manifest.json" />
  </Head>
)
