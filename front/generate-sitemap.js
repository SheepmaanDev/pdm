const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

const sitemap = new SitemapStream({ hostname: 'https://pdm.sheepmaan.com' });

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  // Ajoutez plus de pages ici
];

pages.forEach(page => sitemap.write(page));

sitemap.end();

streamToPromise(sitemap).then(sm => {
  createWriteStream(path.join(__dirname, 'public', 'sitemap.xml')).write(sm);
});
