import type { Site, Metadata } from "@types";

import websiteDetails from "./website.json";

export const SITE: Site = {
  NAME: `https://${websiteDetails.url}/`,
  TITLE: websiteDetails.title,
  DESCRIPTION: websiteDetails.description,
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};
