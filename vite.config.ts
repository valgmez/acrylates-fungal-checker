import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import prerender from "@prerenderer/rollup-plugin";
import Sitemap from "vite-plugin-sitemap";
import path from "path";
import { blogPosts } from "./src/data/blogPosts";

const staticRoutes = [
  "/",
  "/privacy",
  "/about",
  "/contact",
  "/faq",
  "/how-it-works",
  "/recommendations",
  "/references",
  "/results",
  "/terms",
  "/blog",
];

const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
const allRoutes = [...staticRoutes, ...blogRoutes];

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: "https://acrylis.cc",
      dynamicRoutes: allRoutes,
    }),
    prerender({
      routes: allRoutes,
      renderer: '@prerenderer/renderer-puppeteer',
      server: {
        host: 'localhost',
      },
    }),
  ],
});
