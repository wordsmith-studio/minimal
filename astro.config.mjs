import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import website from './src/website.json'

export default defineConfig({
  site: `https://${website.url}`,
  integrations: [mdx(), sitemap(), tailwind(), react()],
});
