const { defineConfig } = require('@vue/cli-service')
const PrerendererWebpackPlugin = require('@prerenderer/webpack-plugin')
const Renderer = require('@prerenderer/renderer-puppeteer')
const seo = require('./src/content/seo.cjs')

const htmlSeo = {
  title: seo.title,
  description: seo.description,
  canonicalUrl: seo.url,
  lang: seo.lang,
  locale: seo.locale,
  ogTitle: seo.ogTitle,
  ogDescription: seo.ogDescription,
  ogImageUrl: seo.ogImageUrl,
  twitterCard: seo.twitterCard,
  jsonLd: JSON.stringify(seo.getJsonLd()),
}

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = seo.title
      args[0].seo = htmlSeo

      return args
    })
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new PrerendererWebpackPlugin({
          routes: ['/'],
          renderer: new Renderer({
            renderAfterDocumentEvent: 'render-event',
            headless: true,
          }),
        }),
      )
    }
  },
})
