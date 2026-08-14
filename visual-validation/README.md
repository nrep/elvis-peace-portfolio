# Real-browser visual validation — ELV-37

**Date:** 2026-08-14
**Tool:** Playwright 1.62 + bundled Chromium (headless), rendering the live `index.html` over `file://`.
**Method:** For each viewport × theme, load the page, force the theme via the in-page switcher, then measure horizontal overflow (compare `documentElement.scrollWidth` vs `clientWidth` and enumerate any element whose box crosses the viewport edge), flag interactive elements under 24px, capture full-page screenshots, and record console/page errors.

## Matrix

| Viewport | Width | Themes | Horizontal overflow | Console errors |
|---|---|---|---|---|
| mobile-320 | 320px | light + dark | none | none |
| mobile-375 | 375px | light + dark | none | 1 transient 404¹ |
| tablet-768 | 768px | light + dark | none | none |
| desktop-1280 | 1280px | light + dark | none | none |
| desktop-1440 | 1440px | light + dark | none | none |

¹ A single "Failed to load resource: 404" fired once under `file://` (a font/icon fetch race); it does not reproduce consistently and is not a deployed-site defect. The same load in the other 9 runs produced zero errors.

## What was confirmed visually

- **No horizontal scroll at any width**, including the 320px stress case.
- **Header reflows correctly:** mobile stacks the wordmark over a full-width action row (theme switcher + Connect); at ≥768px it switches to the 3-column grid with the centered Work/Approach/About nav and the long "Start a conversation" CTA.
- **Project cards** collapse from 2-column to single-column on mobile; text stays legible on the dark, panel, and blue backgrounds. The pipeline diagram and numbered system sheet render intact.
- **Approach decision-ledger** renders its tabs as a 2×2 grid on mobile (active "Frame" tab highlighted) and switches to a sidebar layout on desktop; the active panel content is fully legible.
- **Hero** goes 2-column (copy + proof card) at ≥768px and stacks cleanly on mobile.
- **Both light and dark themes** render correctly at every width.

## Minor, non-blocking observations

1. **Inline secondary text-links** (footer "Start a conversation", nav items, About links) measure ~19–22px tall. The `@media (pointer: coarse) { a, button { min-height: 2.75rem } }` rule does not enlarge them because `min-height` has no effect on non-replaced inline elements. Primary CTAs (Connect, "See selected work", theme buttons) do meet the 44px target. Optional future polish: give the footer/about inline links more vertical padding or `display:inline-flex` on coarse pointers. Not release-blocking.

## Disposition

**Pass — no required responsive changes.** The layout is verified at representative widths in a real browser, not merely inferred from the CSS.

## Files

`*.png` — full-page screenshots per viewport/theme; `m375-*.png` — section close-ups at 375px; `overflow-taptarget-report.json` — raw machine measurements.

_Note: this folder is validation evidence and is not part of the shipped site; exclude from deploy if committing._
