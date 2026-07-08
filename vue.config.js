const { defineConfig } = require('@vue/cli-service')
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
})
