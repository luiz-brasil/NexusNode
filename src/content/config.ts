import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string().optional(), // Astro content collections provide the ID automatically based on file name, but we can allow it
    imageUrl: z.string(),
    linkUrl: z.string(),
    caption: z.string(),
    publishDate: z.date(),
    isDraft: z.boolean().default(false),
    category: z.enum(["review", "tutorial", "setup", "lifestyle"])
  })
});

export const collections = {
  'posts': postsCollection,
};
