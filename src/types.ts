export type Site = {
  NAME: string;
  TITLE: string;
  DESCRIPTION: string;
  ANALYTICS: boolean;
  FOOTER?: string;
  CF: { name: string };
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_WORKS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};
