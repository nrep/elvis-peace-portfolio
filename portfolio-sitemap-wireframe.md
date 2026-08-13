# Elvis Peace Portfolio — Sitemap, Content Hierarchy, and Wireframe

**Task:** ELV-39  
**Company:** Elvis Peace Company  
**Mission context:** Build a SaaS product  
**Prepared:** 13 August 2026

## Decision

Use a **compact multi-page portfolio with a conversion-focused homepage**. The homepage must work as a complete, proof-led introduction; deeper routes provide evidence without making a first-time visitor decode a large site.

This structure supports the approved positioning:

> **Senior full-stack engineer building practical AI, mobile, and enterprise products for African markets and languages.**

The primary audience is hiring managers and product/engineering leaders. SaaS founders, collaborators, and technical peers are important secondary audiences. The visitor mode is **Experience**: real work leads, while the interface stays quiet and direct.

## Sitemap

```text
/
├── /work
│   ├── /work/african-language-ai
│   ├── /work/enterprise-systems
│   └── /work/mobile-founder-product
├── /notes
│   └── /notes/[slug]
├── /about
├── /archive
└── /resume.pdf
```

### Route responsibilities

| Route | Visitor question | Required outcome |
|---|---|---|
| Home | Who is Elvis, what does he build, and is the work relevant? | Open a case study or start contact |
| Work index | What has he shipped across the three proof pillars? | Choose the most relevant case study |
| Case study | What problem did he solve, what did he own, and what changed? | Believe the positioning; continue to another case or contact |
| Notes | How does he think and communicate? | Read one useful technical/product note |
| About | Who is he, what principles guide him, and what is his trajectory? | Open résumé or contact |
| Archive | What else has he built, written, or contributed? | Verify breadth without weakening the main narrative |

## Global navigation

### Desktop

- Left: full-name wordmark, **Elvis Peace**, linking home.
- Right: **Work**, **Notes**, **About**, and a visually distinct **Contact** link.
- Persistent but compact on long pages; no oversized floating navigation.
- Current route is identified by text treatment plus `aria-current`, never color alone.
- A hidden-until-focused **Skip to content** link is first in keyboard order.

### Mobile

- One-row header: name left, **Menu** text button right.
- Menu opens a simple full-width panel containing Work, Notes, About, Archive, Résumé, GitHub, LinkedIn, and Contact.
- Contact and résumé remain reachable without navigating the menu on the homepage: hero actions provide both paths.
- No command palette as the only navigation. A future command palette may be added as progressive enhancement.

## Homepage content hierarchy

### 1. Hero — identity and route to proof

**Purpose:** answer who, what, and next action in the first viewport.

- Eyebrow: `Elvis Peace Ndahayo Rugero · Rwanda`
- H1: `Senior full-stack engineer building practical AI, mobile, and enterprise products for African markets and languages.`
- Supporting sentence: production breadth, African-language focus, and pragmatic product judgment in one concise line.
- Primary CTA: **View selected work** → scrolls to selected work.
- Secondary CTA: **Start a conversation** → preferred professional contact.
- Tertiary text link: **Download résumé**.
- Compact proof strip below actions: three factual pillars—African-language technology, production systems, product leadership. Do not publish dates, employer names, or “10+ years” until verified.

### 2. Selected work — the core proof

Three editorial rows, not equal cards and not a logo grid:

1. **African-language AI / NLP** — distinctive mission and technical depth.
2. **Enterprise systems / MES / ERP / microservices** — reliability, complexity, and business impact.
3. **Mobile or founder-led product** — ownership, product judgment, and shipped delivery.

Each preview contains:

- Project/pillar label and title.
- One-sentence problem.
- Elvis's exact role and ownership.
- One verified outcome or honest qualitative evidence.
- One strong product screen, system diagram, or artifact.
- CTA: **Read case study**; link text includes the project name for accessibility.

### 3. How I build — judgment, not a generic process diagram

- Short thesis: understand the real constraint, choose the smallest sound system, ship, observe, improve.
- Four concise stages: **Frame → Decide → Build → Verify**.
- Signature interaction: an **accessible decision log** from a real flagship project.
  - Tabs or segmented buttons: Problem, Options, Trade-off, Decision, Result.
  - All content exists in semantic HTML and remains readable without JavaScript.
  - On mobile, render the same information as stacked disclosures or a linear sequence.
  - Do not invent project decisions; use verified ELV-40 case-study material.

### 4. Experience — compressed credibility

- Three to five timeline entries maximum.
- Each entry: role, organization, verified dates, scope, and one shipped result.
- Emphasize current senior engineering, founder/CTO, and operating experience only after chronology and role names are confirmed.
- CTA: **About Elvis and full experience** → About.

### 5. Notes — communication and technical judgment

- Three featured notes maximum at launch.
- Suggested editorial pillars: pragmatic AI, production engineering, and African-language/product decisions.
- Show title, one-line premise, topic, and reading time; no empty categories or fake popularity labels.
- CTA: **Browse all notes** → Notes.
- If fewer than three substantive notes exist, replace this section with one **What I’m exploring now** block rather than padding it.

### 6. Contact close — a concrete invitation

- Heading: `Building a useful product or a serious engineering team?`
- One sentence naming relevant conversations: senior engineering roles, product collaborations, and practical AI/mobile/enterprise work.
- Primary CTA: **Email Elvis**.
- Secondary links: LinkedIn and GitHub.
- State location/time zone and availability only when confirmed.

### 7. Footer

- Full name, copyright year, GitHub, LinkedIn, résumé.
- Site version and last-updated date.
- Archive link is present but visually secondary.

## Homepage wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ Elvis Peace                 Work  Notes  About  [Contact]    │
├──────────────────────────────────────────────────────────────┤
│ Elvis Peace Ndahayo Rugero · Rwanda                          │
│                                                              │
│ SENIOR FULL-STACK ENGINEER BUILDING PRACTICAL AI,            │
│ MOBILE, AND ENTERPRISE PRODUCTS FOR AFRICAN                  │
│ MARKETS AND LANGUAGES.                                       │
│                                                              │
│ Supporting line with production + product emphasis.          │
│ [View selected work]  Start a conversation  Download résumé  │
│                                                              │
│ African-language tech  /  Production systems  /  Leadership │
├──────────────────────────────────────────────────────────────┤
│ SELECTED WORK                                                │
│ 01  African-language AI/NLP     [large real artifact]        │
│     problem · role · outcome     Read case study →            │
│                                                              │
│ 02  [large real artifact]        Enterprise systems          │
│                                  problem · role · outcome →   │
│                                                              │
│ 03  Mobile/founder product       [large real artifact]        │
│     problem · role · outcome →                                │
├──────────────────────────────────────────────────────────────┤
│ HOW I BUILD                                                  │
│ Frame → Decide → Build → Verify                              │
│ ┌──────────── real project decision log ──────────────────┐  │
│ │ Problem | Options | Trade-off | Decision | Result       │  │
│ │ Selected panel: concise evidence and small diagram       │  │
│ └──────────────────────────────────────────────────────────┘  │
├──────────────────────────────────────────────────────────────┤
│ EXPERIENCE                     NOTES                         │
│ role / scope / result           3 useful note links          │
│ role / scope / result           Browse all notes →           │
├──────────────────────────────────────────────────────────────┤
│ BUILDING A USEFUL PRODUCT OR A SERIOUS ENGINEERING TEAM?     │
│ [Email Elvis]  LinkedIn  GitHub                              │
├──────────────────────────────────────────────────────────────┤
│ Elvis Peace · Version / updated · Archive · Résumé           │
└──────────────────────────────────────────────────────────────┘
```

## Work index wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ Global navigation                                            │
├──────────────────────────────────────────────────────────────┤
│ WORK                                                         │
│ Products and systems across language AI, enterprise, mobile. │
│ Filter links: All / AI & Language / Systems / Mobile         │
├──────────────────────────────────────────────────────────────┤
│ 01  Flagship artifact  Title · problem · role · outcome  →   │
│ 02  Flagship artifact  Title · problem · role · outcome  →   │
│ 03  Flagship artifact  Title · problem · role · outcome  →   │
├──────────────────────────────────────────────────────────────┤
│ SELECTED OTHER WORK                                          │
│ compact rows: project · contribution · year · link           │
├──────────────────────────────────────────────────────────────┤
│ Contact close                                                │
└──────────────────────────────────────────────────────────────┘
```

Filters should be ordinary anchor links or client-side enhancement over a complete list. Omit filters until the archive has enough entries to make them useful.

## Case-study wireframe

Use the same structure for all three flagship cases so comparison is easy, while allowing each project's strongest artifact to change the pacing.

```text
┌──────────────────────────────────────────────────────────────┐
│ Global navigation                         Back to work       │
├──────────────────────────────────────────────────────────────┤
│ PILLAR / PROJECT TYPE                                        │
│ PROJECT TITLE                                                │
│ One-sentence verified outcome                                │
│ Role · Team · Timeframe · Stack (brief, verified)            │
├──────────────────────────────────────────────────────────────┤
│ [strongest demo, product screen, or system artifact]         │
├───────────────────────────────┬──────────────────────────────┤
│ CONTEXT + PROBLEM             │ CONSTRAINTS + MY ROLE        │
│ audience, workflow, stakes    │ ownership, limits, team      │
├──────────────────────────────────────────────────────────────┤
│ THE DECISION THAT MATTERED                                   │
│ Problem | Options | Trade-off | Decision | Result            │
├──────────────────────────────────────────────────────────────┤
│ WHAT I BUILT                                                 │
│ product flow + selective system/architecture explanation     │
├──────────────────────────────────────────────────────────────┤
│ OUTCOME                                                      │
│ verified metric(s) or clearly labeled qualitative evidence   │
│ lessons · what I would change next                           │
├──────────────────────────────────────────────────────────────┤
│ Next case study →                          [Contact Elvis]    │
└──────────────────────────────────────────────────────────────┘
```

### Case-study content rules

- Use **Context → Challenge → Decisions → Build → Outcome → Lessons**.
- Clarify Elvis's contribution separately from team output.
- Include architecture only when it helps explain a decision or constraint.
- Never use confidential screenshots, unverifiable metrics, or implied sole ownership.
- If a metric cannot be disclosed, use specific qualitative evidence: workflow adopted, reliability improved, launch completed, stakeholder constraint resolved.
- Every image receives a caption explaining what the visitor should notice.

## Notes index and article wireframes

```text
NOTES INDEX
┌──────────────────────────────────────────────────────────────┐
│ NOTES — field notes from building practical software         │
│ Topics: Pragmatic AI / Production / Product / Languages      │
│ Featured note                                                │
│ All notes: title · premise · topic · date                    │
└──────────────────────────────────────────────────────────────┘

ARTICLE
┌──────────────────────────────────────────────────────────────┐
│ Topic · date · reading time                                  │
│ Title and concise premise                                    │
│ Narrow reading column + optional in-page outline             │
│ Real diagrams/code examples with captions                    │
│ Related case study / next note / contact                     │
└──────────────────────────────────────────────────────────────┘
```

## About wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ ABOUT ELVIS                                                  │
│ Short human biography             [real portrait or artifact] │
├──────────────────────────────────────────────────────────────┤
│ WHAT I CARE ABOUT                                            │
│ practical usefulness · reliability · local relevance         │
├──────────────────────────────────────────────────────────────┤
│ CURRENT FOCUS                                                │
│ confirmed work, interests, and desired conversations         │
├──────────────────────────────────────────────────────────────┤
│ EXPERIENCE                                                   │
│ verified compact chronology                                  │
├──────────────────────────────────────────────────────────────┤
│ [Download résumé]  [Email Elvis]                             │
└──────────────────────────────────────────────────────────────┘
```

## Archive wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ ARCHIVE                                                      │
│ Experiments, smaller products, open source, talks, versions   │
│ Year                                                         │
│ Project / type / contribution / status / external link       │
│ Project / type / contribution / status / external link       │
└──────────────────────────────────────────────────────────────┘
```

The archive is a simple, searchable/filterable table only when content volume warrants it. It must not outrank the three flagship cases.

## Responsive behavior

### Wide desktop (≥ 1200 px)

- Use an editorial grid with generous text measure and asymmetrical case-study rows.
- Keep hero copy left-biased and compact; no full-screen greeting.
- Alternate artifact placement in Selected Work to create rhythm without changing reading order.
- Case-study metadata may sit beside the title; body text stays in a readable column.

### Tablet / small desktop (768–1199 px)

- Reduce to a 6–8-column grid.
- Preserve artifact scale; stack text and media when two-column treatment makes either cramped.
- Navigation remains inline while labels fit without truncation.
- Decision-log controls may horizontally scroll only as a last resort; wrapping or a dropdown-like disclosure is preferred.

### Mobile (< 768 px)

- One content column; semantic reading order always places title/problem before media.
- Hero actions stack or wrap with a full-width primary action and plainly visible secondary links.
- Project previews become: number → title → problem/role/outcome → artifact → CTA.
- Decision log becomes linear disclosures with all headings visible; no tiny tab strip.
- Experience and Notes stack instead of becoming a compressed two-column block.
- Tables become labeled rows, not horizontal-scroll traps.
- Minimum touch target 44×44 px; no hover-only meaning or interactions.

### Small mobile and text scaling

- At 320 px and 200% zoom, navigation, H1, CTA labels, and metadata must not clip.
- Long project names wrap naturally; no fixed-height cards.
- Images use intrinsic aspect ratios to prevent layout shift.

## Calls to action

### Primary conversion path

`Hero → View selected work → Case study → Contact Elvis`

### Secondary paths

- `Hero → Start a conversation`
- `Hero/About → Download résumé`
- `Homepage → Note → Related case study → Contact`
- `Case study → Next case study`

### CTA rules

- Use one dominant action per section.
- Prefer precise verbs: **Read case study**, **Download résumé**, **Email Elvis**, **Browse notes**.
- Do not use vague labels such as Learn more, Explore, or Click here.
- Contact links should open the user's email client or a lightweight, accessible form—not a scheduling gate by default.
- Track only meaningful events: flagship case-study opens, résumé downloads, and contact actions.

## Content requirements and truth gates

The build task must not fabricate missing proof. Before publishing:

1. Confirm the three flagship projects and disclosure permissions.
2. Verify full role names, employers, chronology, and any “10+ years” claim.
3. Confirm Elvis's individual contribution and team context for each case.
4. Gather one strong artifact and one outcome/evidence point per case.
5. Confirm professional email, résumé, GitHub, LinkedIn, availability, and location wording.
6. Select three real notes or use the single current-focus fallback.
7. Ensure the full name is consistent in H1, title, metadata, structured data, and author bylines.

## Accessibility and performance acceptance criteria

- Core content and navigation work without JavaScript.
- Keyboard order matches visual/reading order; focus is always visible.
- Skip link, landmarks, descriptive links, captions, and useful alt text are present.
- Decision log exposes selected state and remains readable without tab behavior.
- Reduced-motion preference removes nonessential animation.
- Contrast meets WCAG AA; color is never the only state indicator.
- Responsive images are sized and compressed; avoid autoplaying video and heavy 3D/canvas.
- First viewport communicates identity, work, and next action within seconds on mobile and desktop.

## Build handoff

ELV-41 should implement this architecture after ELV-40 supplies verified case-study content. The visual design should preserve the structure but establish its own approved world; this document intentionally does not choose palette, typography, or decorative treatment. The first implementation target is the semantic homepage plus one complete flagship case-study route. Once those prove the system, extend it to the other cases, Notes, About, and Archive.

## Explicit anti-goals

- No generic skill-meter section, technology-logo wall, fake terminal, or résumé dump.
- No equal three-card grid for flagship work.
- No full-game/3D navigation or interaction that delays project discovery.
- No hidden contact route, JavaScript-only content, or mobile proof reduction.
- No unverified impact numbers, inflated ownership, or private contact data.
- No premature writing taxonomy or archive filters without sufficient content.

## Definition of done

- Sitemap and route responsibilities are explicit.
- Navigation is defined for desktop and mobile.
- Homepage and all supporting page types have page-level wireframes.
- Section order, proof hierarchy, CTA paths, and responsive transformations are specified.
- Verification gates protect chronology, ownership, metrics, confidentiality, and privacy.
- ELV-41 can build without inventing information architecture or interaction behavior.
