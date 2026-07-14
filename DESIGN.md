---
name: Urma Protocol Design System
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#45474b'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#76777b'
  outline-variant: '#c6c6cb'
  surface-tint: '#5c5e65'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#191c21'
  on-primary-container: '#81848a'
  inverse-primary: '#c4c6cd'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2f1500'
  on-tertiary-container: '#c76c00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e2e9'
  primary-fixed-dim: '#c4c6cd'
  on-primary-fixed: '#191c21'
  on-primary-fixed-variant: '#44474d'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
typography:
  display-lg:
    fontFamily: Fraunces
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Fraunces
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Fraunces
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-sm:
    fontFamily: Fraunces
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.65'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '450'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  max-width: 1080px
  sidebar-width: 280px
  content-gap: 64px
  unit-xs: 4px
  unit-sm: 8px
  unit-md: 16px
  unit-lg: 24px
  unit-xl: 48px
  unit-xxl: 80px
---

## Brand & Style

The design system is built on the metaphor of a **technical journal as a constellation**. It balances the weight of scholarly authority with the precision of modern protocol engineering. The visual posture is "Archival Modernism"—avoiding the hyper-gloss of SaaS interfaces in favor of a tactile, paper-like experience that rewards deep reading.

The target audience consists of protocol engineers, researchers, and developers who value clarity over decoration. The emotional response should be one of quiet focus, reliability, and intellectual rigor.

**Design Movements:**
- **Minimalism:** Aggressive use of whitespace to separate complex technical concepts.
- **Editorial Design:** High-contrast serif headlines paired with systematic sans-serif body text.
- **Structural Brutalism:** Thin, precise lines (threads) connecting data points (stars) to reinforce the metaphor of a protocol as a connected map of information.

## Colors

The palette is rooted in physical medium analogs: **Ink** and **Paper**. 

- **Ink (#0E1116):** Used for all primary text and structural boundaries. It is a deep, slightly blue-black that provides maximum legibility without the harshness of pure black.
- **Paper (#FAFAF7):** The foundation. A warm, non-reflective white that reduces eye strain during long-form reading.
- **Paper Alt (#F2F0EA):** Used for sidebar navigation, secondary sections, and structural offsets.
- **Thread (#2563EB):** The primary action color. Represents connectivity, links, and the "threads" of the protocol logic.
- **Origin (#D97706):** Reserved for "stars"—source references, version markers, and critical protocol constants.
- **Muted (#6B7280):** For metadata, captions, and non-essential commentary.

## Typography

This design system employs a strictly tiered typographic scale to manage information density.

- **The Serif (Fraunces):** Used exclusively for headings. It provides an authoritative, editorial feel. Use variable weight at 500 for most headers to maintain a "printed" look.
- **The Sans (Inter):** The workhorse for all body content. Set with a generous 1.65 line height to ensure maximum readability for long technical specifications.
- **The Mono (JetBrains Mono):** Used for code, mathematical notations, and small utilitarian labels. It signals "technical precision."

**Rules:**
- All body text should be left-aligned (ragged right) to maintain an approachable, rhythmic feel.
- Never use the serif font for small text; it loses its character and legibility.

## Layout & Spacing

The layout follows a **Fixed-Column Sidebar** model. 

- **Desktop:** The 280px left rail is fixed for navigation and document hierarchy. The main content resides in a 1080px (max) centered container, with a 64px gap between the rail and the body.
- **Rhythm:** We use an 8px base spacing grid.
- **Verticality:** Large sections are separated by `unit-xxl` (80px) to give concepts room to breathe.
- **Responsive:** On tablet, the sidebar collapses into a top-drawer menu. On mobile, margins reduce to 20px, and `display-lg` typography scales down to 32px.

Content should never stretch to full-width on large screens; the line length must be capped at ~75 characters for optimal readability.

## Elevation & Depth

This design system avoids traditional drop shadows and neomorphism. Depth is communicated through **Tonal Layering** and **Line Work**.

- **Level 0 (Base):** The `Paper` background (#FAFAF7).
- **Level 1 (Sub-surface):** The `Paper Alt` (#F2F0EA) used for the sidebar and inset cards.
- **Level 2 (Inlay):** The `Code Surface` (#0E1116) which appears recessed into the page.
- **Boundaries:** Use 1px borders in `rgba(14, 17, 22, 0.08)` to define sections. 

**Connection Threads:**
Visual hierarchy between related points is established using 1px horizontal or vertical lines in the `Thread` or `Border` color. These represent the logical paths through the protocol.

## Shapes

The shape language is **Soft** but disciplined. 

- **Global Radius:** 0.25rem (4px). This provides a subtle hint of intentional design without feeling "bubbly" or consumer-oriented.
- **Code Blocks:** Use 0.5rem (8px) for larger code containers to distinguish them from inline text.
- **Connectors:** Points (stars) in diagrams or markers should be perfect circles, but limited to small scales (under 12px).
- **Interactive Elements:** Buttons and inputs follow the 4px soft radius.

## Components

### Buttons
- **Primary:** Solid `Ink` (#0E1116) with `Paper` text. No gradients.
- **Ghost:** `Thread` color text with a 1px border that appears only on hover.

### The "Star" (Reference Marker)
- Small circles in `Origin` (#D97706) used to highlight version numbers or specific protocol constants. They act as anchors for the eye.

### Code Blocks
- Background: `Code Surface`.
- Typography: `JetBrains Mono`.
- Syntax Highlighting: Use a limited palette based on `Origin`, `Thread`, and `Muted` to maintain the scholarly aesthetic.

### Cards & Insets
- No shadows. Use `Paper Alt` background and a 1px border. 
- Content inside cards should have increased padding (`unit-lg`) to maintain the journal feel.

### Sidebar Navigation
- Active state: Indicated by a 2px vertical "thread" line to the left of the label in the `Thread` color.
- Font: `JetBrains Mono` for navigation labels to emphasize the technical nature of the spec.

### Links
- Inline links use the `Thread` color with a thin underline that clears descenders. On hover, the underline weight increases.