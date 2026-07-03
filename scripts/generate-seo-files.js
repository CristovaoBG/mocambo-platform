const fs = require('fs')
const path = require('path')
const seo = require('../src/content/seo.cjs')

const publicDir = path.join(__dirname, '../public')

const robots = `User-agent: *
Allow: /

Sitemap: ${seo.url}/sitemap.xml
`

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${seo.url}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots)
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)

console.log('SEO files generated: robots.txt, sitemap.xml')
