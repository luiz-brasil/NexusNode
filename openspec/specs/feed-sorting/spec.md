## ADDED Requirements

### Requirement: Chronological Sorting
The system SHALL sort the feed posts in descending order based on the `publishDate` field.

#### Scenario: Display multiple posts
- **WHEN** there are multiple posts in the data source
- **THEN** the post with the most recent `publishDate` is displayed first

### Requirement: Draft Exclusion
The system SHALL exclude any post where `isDraft` is true from the visible feed.

#### Scenario: Feed contains draft posts
- **WHEN** the data source contains posts with `isDraft` set to true
- **THEN** these posts are not rendered in the feed layout

### Requirement: Data Schema Adherence
The system SHALL ensure all displayed posts conform to the `posts` collection schema defined in `data_schema.spec.yaml`.

#### Scenario: Invalid post data
- **WHEN** a post is missing required fields like `imageUrl` or `linkUrl`
- **THEN** the system logs a warning during build and does not include the invalid post in the generated static output
