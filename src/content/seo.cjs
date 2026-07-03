// Atualize `url` e `ogImage` quando o domínio e a imagem de compartilhamento estiverem definidos.
const WHATSAPP_NUMBER = '5561998112533'

const seo = {
  url: 'https://www.mocamboespaco.com.br',
  lang: 'pt-BR',
  locale: 'pt_BR',
  title: 'Espaço Mocambo | Salão de Festas e Eventos em Brasília',
  description:
    'Salão de festas no Lago Norte, Brasília. Casamentos, eventos corporativos e celebrações para até 200 pessoas. Agende uma visita.',
  ogTitle: 'Espaço Mocambo | Salão de Festas em Brasília',
  ogDescription:
    'O refúgio dos momentos que ficam para sempre. Espaço para casamentos e eventos no Lago Norte.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
  name: 'Espaço Mocambo',
}

seo.ogImageUrl = `${seo.url}${seo.ogImage}`

seo.getJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'EventVenue',
  name: seo.name,
  description: seo.description,
  url: seo.url,
  telephone: `+${WHATSAPP_NUMBER}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'SHIN Trecho 1, Lago Norte',
    addressLocality: 'Brasília',
    addressRegion: 'DF',
    postalCode: '71560-100',
    addressCountry: 'BR',
  },
  sameAs: ['https://www.instagram.com/mocamboespaco'],
})

module.exports = seo
