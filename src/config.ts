import manifest from '../public/manifest.json'
const serverPort = process.env.NEXT_PUBLIC_PORT || 3000

const completeConfig = {
  default: {
    serverPort,
    url: process.env.NEXT_PUBLIC_URL,
    slug: manifest.short_name,
    name: manifest.name,
    description: manifest.description,
    tagline: `${manifest.name} – ${manifest.description}`,
    themeColor: manifest.theme_color,
    bgColor: manifest.background_color,
    locale: 'en',
    isProd: false,
    googleAnalytics: null,
    googleTagManager: null,
    googleSiteVerification: null,
  },

  development: {
    url: `http://localhost:${serverPort}/`,
  },

  production: {
    isProd: true,
    googleAnalytics: null,
    googleTagManager: null,
    googleSiteVerification: null,
  },
}

export const config = {
  ...completeConfig.default,
  ...completeConfig[process.env.NODE_ENV],
}
