import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import website from './src/website.json'

export default defineConfig({
  site: website.url,
  integrations: [mdx(), sitemap(), tailwind()],
});
