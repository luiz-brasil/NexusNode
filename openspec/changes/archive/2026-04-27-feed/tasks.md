## 1. Setup Data Collection

- [x] 1.1 Ensure the `src/content/posts/` directory exists
- [x] 1.2 Configure the Astro content collection schema for `posts` in `src/content/config.ts` based on `openspec/data_schema.spec.yaml`
- [x] 1.3 Add a few mock Markdown/JSON/YAML posts to test the feed rendering

## 2. Implement Feed Data Logic

- [x] 2.1 Fetch posts using Astro's `getCollection('posts')` API
- [x] 2.2 Filter out posts where `isDraft` is true
- [x] 2.3 Sort the fetched posts descending based on the `publishDate` field

## 3. UI Component Creation

- [x] 3.1 Create the `PostCard` Astro component (`src/components/PostCard.astro`)
- [x] 3.2 Implement the image display inside the `PostCard`
- [x] 3.3 Implement the hover state for the image to reveal the `caption`

## 4. Feed Layout Integration

- [x] 4.1 Create the main `Feed` component (`src/components/Feed.astro`)
- [x] 4.2 Iterate over the sorted posts and render a `PostCard` for each
- [x] 4.3 Add the Grid and List view toggle logic (UI button + vanilla JS to swap classes)
- [x] 4.4 Integrate the `Feed` component into `src/pages/index.astro`

## 5. Styling and Polish

- [x] 5.1 Ensure Tailwind classes are applied correctly for the grid layout (`grid-cols-1`, `sm:grid-cols-2`, `md:grid-cols-3` or similar)
- [x] 5.2 Ensure Tailwind classes are applied correctly for the list layout (`flex`, `flex-col`)
- [x] 5.3 Polish hover transitions and layout swap animations
