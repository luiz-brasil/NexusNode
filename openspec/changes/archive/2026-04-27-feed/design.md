## Context

NexusNode is a high-performance link hub designed to show an Instagram-like feed. We have defined the data schema for posts in `openspec/data_schema.spec.yaml`. The schema includes `id`, `imageUrl`, `linkUrl`, `caption`, `publishDate`, `isDraft`, and `category`. The feed should display these posts, sorted descending by `publishDate`.
We are using Astro with Tailwind CSS.

## Goals / Non-Goals

**Goals:**
- Implement the Feed component to display posts from the data schema.
- Support both grid and list view layouts for the feed.
- Display hover states on images to show the post caption.
- Ensure performant rendering using Astro (static generation).
- Handle sorting by `publishDate` descending.
- Filter out posts where `isDraft` is true.

**Non-Goals:**
- Pagination or infinite scrolling (for now, display all non-draft posts).
- Backend CMS integration (posts will be managed via Astro content collections).
- Dynamic client-side sorting/filtering (static build is preferred).

## Decisions

1. **Content Management**: Use Astro's `content` collections. We will place post Markdown/JSON/YAML files in `src/content/posts/` following the schema. Astro's `getCollection` API will be used to fetch and filter posts at build time.
2. **Layout Toggle**: While Astro is static-first, the Grid/List toggle requires some interactivity. We will use a minimal vanilla JavaScript snippet (or Alpine.js if already in the stack, but vanilla JS is lighter) to toggle CSS classes on the feed container (e.g., from `grid-cols-3` to `flex-col`), storing preference in `localStorage`.
3. **Image Optimization**: Use Astro's built-in `<Image />` component or responsive image tags to ensure fast loading of the feed images.
4. **Styling**: Tailwind CSS will be used for the grid/list layouts and hover animations.

## Risks / Trade-offs

- **Risk:** Build times could increase significantly if the number of posts grows very large.
  - *Mitigation:* Given this is a link hub, the number of posts is expected to be manageable (hundreds, not millions). If it grows, we can introduce static pagination later.
- **Risk:** The layout toggle causes a flash of unstyled content (FOUC) on load before the JS runs to read `localStorage`.
  - *Mitigation:* Use an inline script in the `<head>` or early in the `<body>` to apply the layout class before rendering the feed.
