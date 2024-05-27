// pages/api/sitemap.ts
import { NextApiRequest, NextApiResponse } from "next";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }: any) => {
  const baseUrl = "https://www.buminusantarahijau.com";
  const staticPages = [
    "",
    "about",
    "amdal",
    "fs",
    "de",
    "pertek/emisi",
    "pertek/lb3",
    "pertek/andalalin",
    "pertek/konsultasi",
    "portofolio",
    "tentang",
    "kontak",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((page) => {
          return `
            <url>
              <loc>${baseUrl}/${page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
