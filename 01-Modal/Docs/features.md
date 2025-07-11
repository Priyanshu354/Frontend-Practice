# Features / Must-Have Features (Base Level)

- Render modal centered on the screen.
- Dark semi-transparent backdrop overlay.
- A close button inside the modal to close it.
- Clicking outside the modal closes it.
- Pressing the Escape key closes it.
- Accepts dynamic children/content via props.
- Basic styling with consistent spacing, rounded corners, shadow.

# Intermediate / Advance Features.

- Focus Trap: Focus should remain inside the modal while open.
- Return focus to the triggering element when modal closes.
- Keyboard Accessibility
    - Escape to close
    - Tab/Shift+Tab for navigation
- Use React createPortal to render modals outside the parent tree for z-index isolation.
- Animate open/close transitions using Framer Motion or CSS transitions for smoothness.