<!-- Hallmark · pre-emit critique: P5 H5 E4 S5 R5 V4 -->
# Developer Portfolio Research and Reusable Patterns

**Task:** ELV-37  
**Company:** Elvis Peace Company  
**Mission context:** Build a SaaS product  
**Research date:** 13 August 2026

## Executive recommendation

Build Elvis's portfolio as a **proof-led personal product**, not a decorated résumé. The best fit is a fast, text-first site that makes identity, SaaS-building ability, and contact intent obvious in the first screen; supports that claim with three detailed case studies; and adds one small, distinctive interactive signature.

The recommended blend is:

- **Brittany Chiang's clarity:** role, value proposition, experience, projects, writing, and contact are immediately legible.
- **Lee Robinson's restraint:** strong positioning and curated proof without excess navigation or visual noise.
- **Josh Comeau's teaching engine:** useful writing and interactive explanation establish expertise over time.
- **Lynn Fisher's personality:** a recognizable visual voice and evolving details make the site feel authored.
- **Bruno Simon's demonstration principle:** the website itself should prove technical ability—but we should borrow the principle, not the costly full-game format.

## Reference set

### 1. Brittany Chiang — recruiter-first clarity

**Reference:** https://brittanychiang.com/

Her opening states a precise role and promise: frontend engineer building accessible, pixel-perfect web experiences. The page then follows a low-friction sequence: About → Experience → Projects → Writing. Project entries pair a clear description with technology context and links, while the experience timeline shows scope rather than listing employers alone.

**Patterns to reuse**

- One-line professional identity followed by one-line value proposition.
- Sticky or persistent section navigation for a long single page.
- Experience entries that explain what changed or shipped.
- Curated featured work, with a separate archive for breadth.
- Accessibility visible in both the message and implementation.

**Do not copy**

- The exact dark navy/teal palette, two-column composition, or wording; these have become widely imitated.
- Long technology-chip inventories when the case study already proves the skills.

### 2. Lee Robinson — minimal authority

**Reference:** https://leerob.com/

The homepage uses a short biography, a clear mission, a curated list of favorite writing, and direct routes to writing, code, video, social profiles, and contact. Its strength is editorial judgment: the visitor sees the most important evidence without having to decode a large interface.

**Patterns to reuse**

- A short "what I do / where I am going" statement instead of a generic greeting.
- Curated proof rather than an exhaustive feed.
- Plain-language links to code, writing, and contact.
- A site architecture that still works when CSS or JavaScript is unavailable.

**Do not copy**

- Extreme minimalism if Elvis still needs to establish credibility; early-stage portfolios need richer project evidence.

### 3. Josh W. Comeau — expertise through teaching

**Reference:** https://www.joshwcomeau.com/

The homepage is content-led: articles and tutorials dominate, with category navigation and a ranked popular-content section. The portfolio is not merely a gallery; interactive teaching is the product demonstration. Personality appears through language and micro-interactions without preventing scanning.

**Patterns to reuse**

- Publish useful technical notes tied to real problems encountered while building SaaS.
- Create topic routes such as SaaS Engineering, Product Decisions, Frontend, and AI.
- Use small interactive demos inside articles or case studies where they clarify a concept.
- Surface "selected" and "popular" content separately from the newest content.

**Do not copy**

- A content-heavy homepage before Elvis has a meaningful writing library.
- Decorative motion that competes with the project story.

### 4. Bruno Simon — the portfolio as proof

**Reference:** https://bruno-simon.com/

Visitors drive through a 3D world to discover the work. Controls cover keyboard, touch, and gamepad; quality settings and recovery controls acknowledge the performance and usability cost of the concept. The site also exposes behind-the-scenes details, source code, devlogs, and the stack, turning spectacle into credible engineering evidence.

**Patterns to reuse**

- Make one interaction demonstrate a real strength instead of describing it.
- Explain how the signature experience was built.
- Offer graceful controls, recovery, and reduced-quality paths for ambitious interactions.
- Treat source, process, and technical decisions as portfolio material.

**Do not copy**

- A full 3D/game interface unless immersive web work is the service being sold.
- Interaction that delays project discovery, contact, or keyboard access.

### 5. Lynn Fisher — authored identity and evolution

**Reference:** https://lynnandtonic.com/

The homepage is deliberately sparse but unmistakably personal: a strong name lockup, "Designer for the Web" positioning, numbered navigation, an archive, and a visible version marker. The evolving editions turn the personal site itself into an ongoing body of work.

**Patterns to reuse**

- Give the site a recognizable versioned identity rather than a permanent template.
- Maintain an archive so experiments and earlier directions become evidence of growth.
- Use one playful visual system consistently instead of scattered novelty.
- Let the navigation language reflect the owner's voice.

**Do not copy**

- Novelty without project depth or a clear conversion path.

## Cross-site patterns that consistently work

### 1. Positioning before biography

The first screen should answer three questions in seconds:

1. Who is Elvis?
2. What does he build well?
3. What should the visitor do next?

Recommended working copy structure:

> **Elvis Peace — SaaS product builder.**  
> I design and engineer focused software products from idea to reliable release.  
> **Primary action:** View selected work. **Secondary action:** Start a conversation.

This is a starting direction, not approved final copy.

### 2. Case studies over project cards

Use three flagship projects. Each case study should include:

- Problem and audience.
- Elvis's role and constraints.
- The decision that mattered most.
- Screens or a live demo.
- Architecture or system explanation where relevant.
- Outcome, using only verified metrics.
- What Elvis would change next.
- Links to live product and code when disclosure permits.

The homepage preview should summarize the problem, role, and outcome—not just show a screenshot and technology tags.

### 3. The site itself as a quiet demonstration

Use one signature interaction that supports the story. Good candidates:

- A compact "SaaS anatomy" diagram showing how product, design, code, and operations connect.
- An interactive case-study decision log that switches between problem, trade-off, and result.
- A command palette for fast navigation, paired with visible conventional navigation.
- A small build-status or changelog module using real data.

Recommendation: choose the **interactive decision log**. It demonstrates product judgment, is useful to recruiters and founders, and remains accessible as ordinary tabbed content without JavaScript.

### 4. Curated depth with an archive

Keep the main route selective:

- 3 flagship case studies.
- 3–6 technical notes.
- 1 short experience summary.
- 1 clear contact action.

Put experiments, smaller projects, talks, and older work in an archive. This preserves breadth without weakening the primary narrative.

### 5. Personality through systems, not decoration

Personality should come from:

- Direct, specific writing.
- A consistent typographic voice.
- One accent color with a restrained footprint.
- Meaningful labels and project annotations.
- A version number or public changelog.

Avoid the common generated-portfolio look: oversized gradient headline, floating blobs, identical rounded cards, skill-percentage bars, fake terminal chrome, and a wall of technology logos.

### 6. Fast and accessible by default

The portfolio should preserve semantic reading order, visible focus states, a skip link, descriptive project links, reduced-motion behavior, strong contrast, useful alt text, and complete keyboard operation. JavaScript should enrich the site, not unlock basic content. Performance is part of the portfolio claim: optimize media, avoid auto-playing heavy assets, and measure real-user experience after launch.

## Recommended information architecture

### Home

1. **Compact hero:** identity, SaaS-building promise, two actions.
2. **Selected work:** three asymmetric editorial rows, not a three-card grid.
3. **How I build:** a short four-step process with one decision-log interaction.
4. **Experience:** concise timeline with scope and shipped outcomes.
5. **Notes:** three useful technical or product essays.
6. **Contact statement:** one direct invitation and expected response channel.

### Case study route

1. Project title, one-sentence outcome, role, timeframe.
2. Product demo or strongest artifact.
3. Problem and constraints.
4. Decision log: options, trade-offs, choice.
5. System or architecture view.
6. Verified outcome and lessons.
7. Next project / contact.

### Notes

A filterable writing index organized around problems Elvis wants to be hired or trusted to solve.

### About

A human biography, operating principles, current focus, compact career history, and downloadable résumé.

### Archive

Experiments, small tools, open-source contributions, talks, and prior site versions.

## Proposed visual DNA

- **Macrostructure:** editorial index with an asymmetric project-led home page.
- **Hero archetype:** compact left-biased statement; no full-screen greeting.
- **Navigation:** name/mark left; Work, Notes, About, Contact right; mobile menu remains conventional.
- **Typography:** expressive roman sans or roman serif for display, neutral grotesque for body, monospace only for metadata. No italic headings.
- **Surface:** light neutral-warm paper or very dark neutral surface; choose one after Elvis provides brand preferences.
- **Accent:** one confident color used in less than 10% of the interface.
- **Imagery:** real product screens and diagrams, not stock illustration.
- **Motion:** one orchestrated entrance and functional state transitions; honor reduced motion.
- **Footer:** short availability/contact statement, social/code links, version and last-updated date.

## Content inventory needed before design

- Preferred professional positioning and target audience: hiring managers, SaaS founders, clients, collaborators, or a ranked mix.
- Three strongest projects and what Elvis personally owned.
- Verified outcomes or honest qualitative evidence for each project.
- Current role, location/time-zone preference, availability, and contact channel.
- Résumé, GitHub, LinkedIn, and any writing or talks.
- Screenshots, logos, demos, architecture sketches, and permission constraints.
- Desired tone from an explicit axis: editorial, technical, playful, austere, or another strong direction.

## Build priorities

1. Establish positioning and audience.
2. Write one complete flagship case study before choosing visual effects.
3. Build the semantic, responsive content skeleton.
4. Define typography, surface, accent, spacing, and component tokens.
5. Add the signature decision-log interaction as progressive enhancement.
6. Test keyboard use, reduced motion, mobile widths, contrast, and media performance.
7. Launch with analytics limited to meaningful goals: case-study views, résumé opens, and contact actions.

## Success criteria

- A new visitor can state what Elvis builds and find selected work within 10 seconds.
- Every flagship project explains a problem, Elvis's contribution, decisions, and evidence.
- Contact and résumé paths are available without scrolling or opening a hidden interaction.
- The complete core experience works with keyboard navigation and reduced motion.
- The design has one memorable signature, not many competing effects.
- Mobile visitors receive the same proof, not a stripped-down afterthought.

## Sources

- Brittany Chiang, current portfolio: https://brittanychiang.com/
- Josh W. Comeau, current homepage: https://www.joshwcomeau.com/
- Bruno Simon, current interactive portfolio and technical notes: https://bruno-simon.com/
- Lee Robinson, current homepage: https://leerob.com/
- Lynn Fisher, current homepage: https://lynnandtonic.com/
- Developer Portfolios directory: https://www.developerportfolios.com/
- 2026 curated overview used for triangulation: https://curious.page/blog/best-personal-website-examples-developers

## Research limits

This is pattern research, not a pixel-copy brief. Live HTML reveals content structure reliably but cannot fully capture visual rhythm, responsive behavior, or every animation state. Before visual design, capture desktop and mobile screenshots of the chosen primary reference and conduct a single-source Hallmark DNA study; use the other references only for individual axis choices.
