## Why

The core functionality of NexusNode is to act as a high-performance link hub. To achieve an engaging, Instagram-like experience, we need to implement the main feed UI that displays the "posts" (links with images and captions) defined in the data schema. This solves the primary user need of discovering and interacting with the curated links in a familiar, visually appealing chronological feed.

## What Changes

- Implementation of the main Feed layout on the home page.
- Addition of a Grid/List view toggle for the feed.
- Creation of individual post components with hover states for captions.
- Implementation of the sorting logic (newest first based on `publishDate`).

## Capabilities

### New Capabilities
- `feed-ui`: Specifies the UI components, layout (grid/list), and interactions (hover effects) for displaying the link posts on the main page.
- `feed-sorting`: Defines the runtime logic for sorting and displaying posts according to the schema rules.

### Modified Capabilities

## Impact

- Astro pages: `src/pages/index.astro` will be updated to include the feed.
- Components: New components will be created in `src/components/` for the feed and individual items.
- Styles: Updates to CSS/Tailwind configuration to support the grid/list layouts and hover animations.
