/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://shamil.info', // your domain
  generateRobotsTxt: true, // (optional) creates robots.txt too
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  // Per-URL tuning: boost the homepage and the SEO-critical /about page,
  // and attach an image entry so the profile photo can surface in Google Images.
  transform: async (config, path) => {
    const priority = path === '/' ? 1.0 : path === '/about' ? 0.9 : config.priority;

    const images =
      path === '/' || path === '/about'
        ? [
            {
              loc: new URL('/images/shamil-amiyan.jpg', config.siteUrl),
              title: 'Shamil A (Shamil Amiyan) - Software Engineer & Full Stack Developer',
              caption:
                'Shamil A, also known as Shamil Amiyan, a Software Engineer from Kerala, India.',
            },
          ]
        : undefined;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
      ...(images ? { images } : {}),
    };
  },
};
