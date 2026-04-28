## ADDED Requirements

### Requirement: Feed Grid Layout
The system SHALL display posts in a grid layout as the default view.

#### Scenario: View feed on desktop
- **WHEN** user visits the main page on a desktop device
- **THEN** posts are displayed in a multi-column grid layout

#### Scenario: View feed on mobile
- **WHEN** user visits the main page on a mobile device
- **THEN** posts are displayed in a single or two-column grid responsive layout

### Requirement: Feed List Layout
The system SHALL allow users to toggle the feed into a list layout.

#### Scenario: Toggle to list layout
- **WHEN** user clicks the list layout toggle button
- **THEN** the feed changes to a single-column vertical list layout

### Requirement: Image Hover States
The system SHALL display the post caption when a user hovers over the post image.

#### Scenario: Hover over post image
- **WHEN** user hovers over an image in the feed
- **THEN** an overlay appears showing the `caption` field of the post
