/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.buminusantarahijau.com",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/secret-page"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "test-bot", disallow: ["/"] },
    ],
    additionalSitemaps: [
      "https://www.buminusantarahijau.com/my-custom-sitemap-1.xml",
      "https://www.buminusantarahijau.com/my-custom-sitemap-2.xml",
      "https://www.buminusantarahijau.com/my-custom-sitemap-3.xml",
    ],
  },
};
