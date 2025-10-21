# HNG Stage 0 — Profile Card (Frontend)

A simple accessible, responsive profile card built with semantic HTML, CSS, and vanilla JS.

## Live
(Deploy to Netlify and paste your live URL here)

## Files
- index.html
- styles.css
- script.js

## How to run locally
1. Open `index.html` in a browser (no server required).
2. The timestamp is displayed in milliseconds. Click "Refresh time" to update.
3. Paste an avatar URL and press Apply, or upload an image and press Upload.

## Notes
- Required data-testids included:
  - test-profile-card
  - test-user-name
  - test-user-bio
  - test-user-time
  - test-user-avatar
  - test-user-social-links (and individual social data-testids)
  - test-user-hobbies
  - test-user-dislikes
- Social links open in new tabs with `rel="noopener noreferrer"`.
- Keyboard focus styles visible; controls are keyboard accessible.
