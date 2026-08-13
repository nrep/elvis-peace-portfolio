# Elvis Peace Ndahayo Rugero — Portfolio

A responsive, accessible portfolio MVP for Elvis Peace Ndahayo Rugero, a product-minded software engineer and technical founder based in Kigali, Rwanda. The site presents selected work across African-language technology, enterprise systems, and founder-led SaaS through evidence-led project narratives.

## Overview

This repository contains a dependency-free static website built with HTML, CSS, and JavaScript. It is intentionally framework-free so it remains fast, portable, easy to audit, and simple to deploy.

The MVP includes:

- A concise positioning and contact-focused hero
- Three evidence-qualified project narratives
- A keyboard-accessible decision-led working-process component
- Responsive layouts down to 320 CSS pixels
- Reduced-motion support and progressive enhancement
- SEO, Open Graph, canonical, and structured-data metadata
- `robots.txt`, `sitemap.xml`, and Vercel security headers

## Run locally

No package installation or build step is required.

From the project directory, start any static file server, for example:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

Opening `index.html` directly also works for basic review, although a local HTTP server is recommended because it more closely matches production hosting.

## Project structure

```text
.
├── index.html                         # Page structure, content, and metadata
├── styles.css                         # Responsive design system and motion
├── script.js                          # Reveal behavior and accessible tabs
├── robots.txt                         # Search crawler policy
├── sitemap.xml                        # Canonical URL discovery
├── vercel.json                        # Vercel routing and security headers
├── PRODUCT.md                         # Product context and constraints
├── DESIGN.md                          # Visual and interaction direction
├── ELV-38-public-profile-brief.md     # Positioning and public source register
├── ELV-40-flagship-case-studies.md    # Evidence-qualified case-study briefs
├── portfolio-research.md              # Portfolio pattern research
└── portfolio-sitemap-wireframe.md     # Approved structure and wireframe
```

## Editing guide

- Update page copy, links, metadata, and structured data in `index.html`.
- Update visual tokens, layout, breakpoints, focus states, and motion in `styles.css`.
- Update progressive interactions in `script.js`; keep the core content usable without JavaScript.
- Keep public claims aligned with the source register and case-study briefs. Do not add confidential details or unverified metrics.
- If the production domain changes, update the canonical URL, Open Graph URL, structured-data URL, and `sitemap.xml` together.
- If a project or contact URL changes, review both the visible links and the `sameAs` entries in the structured data.

## Accessibility

The implementation includes semantic landmarks, a skip link, visible keyboard focus, 44px minimum interactive targets, accessible tab semantics and arrow-key navigation, strong contrast, responsive reflow, and `prefers-reduced-motion` handling.

When changing the site, verify at minimum:

1. All navigation and decision-ledger controls work with a keyboard.
2. Focus remains visible and follows a logical order.
3. Content remains usable with JavaScript disabled.
4. Motion is removed when reduced motion is enabled.
5. Layouts do not overflow at 320, 375, 414, and 768 CSS pixels.
6. External links and contact paths still resolve.

## Verification checklist

Before deployment:

1. Serve the site over HTTP and check the browser console for errors.
2. Review desktop and mobile layouts at the supported widths.
3. Exercise tabs with click, Enter/Space, arrow keys, Home, and End.
4. Run an accessibility audit and manually inspect keyboard behavior.
5. Validate the HTML and structured data.
6. Confirm `robots.txt` and `sitemap.xml` use the production domain.
7. Review every factual claim against the included source documents.

## Deployment

The repository is ready for static hosting. For Vercel, import the project and deploy it without a framework preset or build command; the repository root is the output directory. `vercel.json` supplies clean URLs and baseline security headers.

For another static host, publish the repository root and reproduce the headers from `vercel.json` where supported.

After deploying:

- Point the production domain to the deployment.
- Confirm HTTPS and the canonical URL.
- Test the live contact and external project links.
- Submit `sitemap.xml` to the relevant search console.
- Run a final mobile, accessibility, metadata, and performance check against the production URL.

## Content and evidence policy

The portfolio deliberately uses only public, supportable facts. The reported `50 active users` figure for the Waguani MVP is attributed to the public Hanga Central profile and remains qualified because its definition and reporting date have not been independently confirmed. Preserve that qualification unless stronger evidence is approved.

No personal portrait, project screenshots, testimonials, or confidential artifacts are included in this MVP.

## Current scope

This is a single-page MVP. Dedicated case-study routes, a writing archive, analytics, a CMS, and richer media are possible future extensions, not current dependencies.

## Ownership

Built for Elvis Peace Company, whose mission is to build a SaaS product. Portfolio identity and content belong to Elvis Peace Ndahayo Rugero.
