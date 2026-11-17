# Game Development Portfolio — Website Specification

**Owner:** Saul Hanson  
**Document status:** Working specification / initial implementation brief  
**Version:** 0.1 — November 2026  
**Primary audience:** Recruiters, hiring managers, gameplay programmers, engine/systems programmers, and technical interviewers

> **Instructions for a coding agent:** Treat the **Requirements** sections as the source of truth. Implement the first milestone before expanding scope. Keep unclear content as clearly labeled placeholders rather than inventing accomplishments, metrics, screenshots, links, employment details, or technical claims. Use the reference images supplied alongside this document. Ask for approval before making major aesthetic or architectural changes.

## 1. Project vision

Build a polished, professional personal portfolio highlighting **gameplay and systems programming** work. The website should make it easy for an employer to understand my strengths quickly, explore my games, and examine my **specific contributions** and technical decisions.

The portfolio should feel thoughtfully designed and visually appealing, with subtle motion and interaction, while remaining easy to navigate, fast, readable, and focused on the work.

**Core goals**

1. Communicate a clear identity as a **Gameplay & Systems Programmer**.
2. Feature two initial games: **Ultrawave** and **Lantern of Souls**.
3. Give each game a dedicated page with overview, my role, technical feature breakdowns, screenshots, and short videos.
4. Distinguish **what the game/team built** from **what I personally implemented or designed**.
5. Make adding a new project easy without writing new page layouts.
6. Publish as a static website on **GitHub Pages**, with the game source repositories remaining private.
7. Support future Steam store links, but do not render broken or placeholder Steam buttons.

**Non-goals for version 1**

- No blog, database, authentication, login, CMS dashboard, e-commerce, or contact form backend.
- No public access to private game repositories.
- No elaborate 3D graphics, full-screen animation sequences, or navigation that relies on JavaScript effects.
- No requirement to fill the portfolio with additional projects or fabricated content.

## 2. Confirmed decisions vs. design proposals

### Confirmed

- Emphasis: **gameplay and systems programming**, with game design shown where relevant.
- Design character: **professional, clean, appealing**, not generic or overly corporate.
- Initial projects: **Ultrawave** and **Lantern of Souls** only.
- Homepage features the projects; clicking a project opens its **own detail page**.
- Project pages need technical breakdowns and room for **screenshots, clips, and video/GIF demonstrations**.
- Projects' source repositories are **private**.
- Both games may eventually have Steam pages; **neither Steam URL exists yet**.
- Layout and project content must support straightforward future additions.
- Visual inspiration: https://gianellasinghose.com/ — especially its **minimal look, mouse effects, and subtly moving background**.
- Supplied palette: `#5C7E8F`, `#A2A2A2`, `#D4DDE2`, `#FFFFFF`.
- Supplied visual references: one **Lantern of Souls** environment illustration and one **Ultrawave** menu screenshot.

### Proposed defaults (can be refined after the first mockup)

- Dark charcoal/navy background, e.g. `#111920`, with muted blue-gray accents.
- Large project images with restrained cards and generous spacing.
- Short introduction followed quickly by featured work; projects are the homepage's focus.
- Simple global navigation: **Work**, **About**, **Résumé**, **Contact**. These may link to homepage sections rather than separate pages; omit or disable links until content exists.
- Static site built with **Astro**; Markdown/MDX content collections for projects; CSS for styling; minimal client-side JavaScript.
- A **single template** for all project pages, with flexible technical-section components.
- Optional project-specific accent colors: muted purple for Lantern of Souls, muted green for Ultrawave. Keep the site's overall color system consistent.

## 3. Design system and visual language

### 3.1 Colors

| Purpose | Initial token | Hex | Notes |
| --- | --- | --- | --- |
| Main background | `--bg` | `#111920` | Proposed deep charcoal-blue; avoid pure black |
| Elevated surface | `--surface` | `#1B252C` | Cards / section backgrounds; proposed |
| Primary accent | `--accent` | `#5C7E8F` | Supplied slate-blue |
| Muted text | `--muted` | `#A2A2A2` | Supplied gray; verify contrast wherever used |
| Main body text | `--text` | `#D4DDE2` | Supplied pale blue-gray |
| Headings | `--heading` | `#FFFFFF` | Supplied white |

**Design principles**

- The chrome/navigation should be **quiet**. Let the games supply much of the color and visual personality.
- Use generous whitespace, strong hierarchy, few decorative borders, and readable text measure.
- Prefer real project artwork, gameplay screenshots, and videos to generic stock images.
- Use one cohesive typography system, with a distinctive but highly readable heading treatment. Avoid arcade/pixel fonts as primary UI fonts.
- Any glow, blur, gradient, or texture should be subtle and should not reduce readability.
- Contrast must be checked rather than assumed from the listed palette.

### 3.2 Motion and interactions

Use https://gianellasinghose.com/ as *inspiration*, **not** as a design to reproduce exactly.

**Desired effects**

- Very subtle mouse-following glow/gradient in the desktop hero/background.
- Slowly moving low-contrast gradient or fine background texture.
- Small hover effects on project cards: gentle image scale, slight border/brightness change, or small arrow movement.
- Lightweight scroll-entry effects for sections or media, only where they improve presentation.
- Smooth-feeling focus and hover transitions.

**Motion boundaries**

- No heavy particle simulations, custom WebGL scene, bright cursor spotlight, or flashy loading screens.
- Never hide essential content behind a scroll animation or animation-completion requirement.
- Honor `prefers-reduced-motion`; disable/shorten non-essential animation.
- Do not rely on cursor effects on touch devices. Ensure no broken hover states on mobile.
- Keep motion performant; prefer CSS transforms/opacity and only minimal JS for pointer tracking.

### 3.3 Responsive layout

- Design desktop first **and** properly accommodate phones and tablets.
- Clear content order on small screens; single-column project cards when needed.
- No sideways scrolling, clipped headings, or tiny controls.
- Media should maintain aspect ratios and not overflow containers.
- Navigation should work with touch and keyboard; avoid an unnecessarily complex menu.

## 4. Information architecture

```text
/                                 Homepage
/projects/ultrawave/              Ultrawave detail page
/projects/lantern-of-souls/       Lantern of Souls detail page

Optional later:
/about/                            Only if the homepage About section becomes too large
/projects/                        Only if the project count justifies a dedicated index
```

Use descriptive, stable, shareable URLs. Every technical breakdown should support a **deep-linkable anchor**, e.g. `/projects/ultrawave/#particle-system`.

### 4.1 Global navigation and footer

**Header**

- My name / simple wordmark: **Saul Hanson**; link to homepage.
- Links to **Work** and **About** sections.
- **Résumé** link when a public PDF is provided.
- **Contact** link to a supplied email or approved contact destination; do not invent an address.
- Sticky or fixed header is optional, provided it doesn't obscure page content and anchors.

**Footer**

- Name and short role label.
- Optional GitHub, LinkedIn, résumé, and email links **only when actual URLs are provided**.
- Small copyright text if desired.

## 5. Homepage requirements

The homepage should tell someone what I do almost immediately and make the two featured games easy to reach.

### 5.1 Hero / introduction

- Display **Saul Hanson** and **Gameplay & Systems Programmer** prominently.
- Include a brief, natural description of my interest in designing and building gameplay mechanics and underlying game systems.
- Keep text concise; avoid vague marketing language or unsupported claims.
- A restrained scroll indicator or link to **Selected Work** is optional.
- Use a subtle motion background behind the introduction without hindering legibility.

**Draft copy to review — not final:**

> I design and build the systems behind games, from gameplay mechanics to the technology that brings them together.

### 5.2 Featured work

- Two large, visually prominent, clickable project sections/cards.
- **Ultrawave** and **Lantern of Souls** both have image, title, role/discipline summary, core tools/technologies, and a short one-line description.
- Use an actual project image as the card's visual; add a clear hover/focus state.
- Card links lead to the detail pages, not to Steam.
- Do not make the visitor click through a slideshow or carousel to discover the second project.
- Project order should be configurable in data (initial order can be adjusted once both pages are filled out).

### 5.3 About / skills / contact

- Include a **concise** About section below featured work with room for career interests and background.
- Show a compact list of relevant languages, engines, and technical areas — only verified items.
- Make résumé and contact links easy to find.
- Avoid skill proficiency bars, arbitrary percentages, or long unstructured technology lists.

## 6. Project detail page template

Each project is a **case study**, not merely a game description or image gallery. The hierarchy should serve both a recruiter who scans quickly and an engineer who wants implementation detail.

### Required sections

1. **Hero:** project title, large artwork/image or poster video, concise summary.
2. **At a glance:** engine/framework, languages, team/solo context, my role, project status if known, and optional date; show only confirmed facts.
3. **Game overview:** what the game is and what the player does, kept brief.
4. **My contributions:** visually scannable list of systems I personally worked on; clearly distinguish team work from my work.
5. **Technical breakdowns:** one section per relevant system/feature, each with its own anchor.
6. **Gallery and media:** screenshots or demonstrations, either embedded within breakdowns or collected when useful.
7. **Takeaways:** technical challenges, design tradeoffs, what I learned, or what I would change (when there is meaningful content).
8. **External links:** Steam, trailer, playable build, or approved sources, conditionally rendered based on real URLs.
9. **Navigation:** clear link back to work and optionally the next project.

### Technical breakdown format

Keep these flexible and modular; do not force every section into an identical card layout.

Each breakdown may include:

- Feature/system name and a 1–2 sentence purpose statement.
- My specific responsibility.
- Problem or design constraint.
- Approach/architecture; short technical explanation understandable to another programmer.
- Outcome and tradeoffs, where known.
- One or more images, videos, diagrams, code snippets, or supporting links.
- Optional advanced detail that readers can explore without overwhelming the initial scan.

**Layout patterns to support:** text next to media; full-width media with caption; image gallery; responsive code block; text-only section.

**Important:** A project page may have 2 breakdowns or 10. Do not require a fixed number, fixed order, or fixed media type.

## 7. Initial project content

These are starting points for the structure, **not permission to fabricate descriptions or present an unverified detail as final**. Populate final case studies from my own notes and approved materials.

### 7.1 Ultrawave

- Project name: **Ultrawave**.
- Known technical context: **MonoGame**, **C#**, gameplay and engine/systems programming.
- Potential technical areas to document *after confirmation*: particle system, shader/sprite effects, enemy AI, procedural tiling/wave-function-collapse experiments, and other systems I actually contributed to.
- Visual reference supplied: dark, green/neon game menu screenshot.
- Repository link: **private / none shown**.
- Steam URL: **not available yet; omit link**.
- Content still needed: gameplay description, approved role/credit wording, project timeline, real gameplay captures, any performance measurements we can substantiate, exact feature contributions.

### 7.2 Lantern of Souls

- Project name: **Lantern of Souls**.
- Known technical context: **Unreal Engine**, **C++**, gameplay systems and collaborative game development.
- Potential technical areas to document *after confirmation*: player movement, sprint/crouch controls, soul/light mechanics, light pulse, soul fragments, spatial audio / audio propagation investigations, and related technical infrastructure.
- Visual reference supplied: moody illustrated stone interior with a purple portal and character holding a warm light.
- Repository link: **private / none shown**.
- Steam URL: **not available yet; omit link**.
- Content still needed: precise credits, project status, game summary, permission to publish assets, approved feature descriptions and media.

### 7.3 Future projects

New project pages must be addable by creating **one content entry** and adding media files, with no copy/paste of an existing page component or edits to the homepage's markup.

## 8. Content and data architecture

### Recommended approach

- Framework: **Astro** with static output.
- Content: **Astro content collection** for projects, using Markdown or MDX.
- Use **MDX** if needed to embed custom `MediaBlock`, `FeatureSection`, or gallery components inside rich project descriptions.
- A project collection schema should validate metadata, including required and optional fields.
- One generic dynamic route/template renders all published projects.
- Featured project cards are generated from the collection and sorted by a data field.
- Use a `draft` or `published` flag to avoid accidentally exposing unfinished pages.

### Illustrative project frontmatter

> This is a **data-shape example**, not a final schema or final content. The agent may adapt keys to Astro's current collection API while preserving the behavior.

```yaml
title: "Ultrawave"
slug: "ultrawave"
summary: "TODO: Write a factual, one-sentence game summary"
role: "TODO: Confirm credit wording"
engine: "MonoGame"
languages:
  - "C#"
technologies:
  - "MonoGame"
coverImage: "/media/ultrawave/cover.webp"
heroImage: "/media/ultrawave/hero.webp"
accentColor: "#27855A" # Optional, refined later
featured: true
order: 1
published: false
steamUrl: null
repositoryUrl: null
trailerUrl: null
```

**Schema requirements**

- Required for published entries: title, slug, summary, image, and sufficient page content.
- Optional: Steam, playable build, trailer, source code link, credits, team size, dates, status, platform, tag list, accent.
- No empty `href`, `#` links standing in for missing URLs, dummy Steam buttons, or broken media.
- Easily reorder projects and hide drafts without editing page components.
- Stable heading IDs/anchors for feature breakdowns.
- Use a sensible fallback image or explicitly mark missing artwork during development only.

### Suggested repository structure

```text
/
├── .github/workflows/deploy.yml
├── PORTFOLIO_SPEC.md
├── README.md
├── astro.config.mjs
├── package.json
├── public/
│   ├── media/
│   │   ├── ultrawave/
│   │   └── lantern-of-souls/
│   └── resume.pdf             # Only when provided
└── src/
    ├── components/
    │   ├── Header.astro
    │   ├── Footer.astro
    │   ├── ProjectCard.astro
    │   ├── ProjectMetadata.astro
    │   ├── MediaBlock.astro
    │   └── VideoLoop.astro
    ├── content/
    │   └── projects/
    │       ├── ultrawave.mdx
    │       └── lantern-of-souls.mdx
    ├── layouts/
    │   ├── SiteLayout.astro
    │   └── ProjectLayout.astro
    ├── pages/
    │   ├── index.astro
    │   └── projects/[slug].astro
    └── styles/
        └── global.css
```

Use current Astro conventions, including its current content collection configuration file and route API; the structure above is conceptual and may need minor adjustments for the installed version.

## 9. Media behavior and publication rules

### Screenshots and illustrations

- Use the supplied game images as initial **reference assets**; do not imply they are screenshots of mechanics if they are title art or a menu.
- Store published image assets in the website repo only when permission and file size allow.
- Provide descriptive alt text for meaningful images.
- Optimize large source images; prefer modern web formats where supported and retain an appropriate fallback.
- Lazy-load offscreen media; do **not** lazy-load the above-the-fold hero image.
- Media should display well on both desktop and mobile, preserving aspect ratios.

### Mechanic demonstrations

- Prefer short **MP4/WebM** clips over large animated GIF files for looping demonstrations.
- For short inline loops: `muted`, `playsinline`, `loop`, visible poster/preview, and autoplay only when appropriate; respect reduced motion and browser restrictions.
- Provide controls or a discoverable alternative for any non-decorative video that requires user action.
- Include informative captions explaining **what the clip demonstrates**, not just which game it comes from.
- Longer demos/trailers may use an externally hosted video embed to reduce GitHub Pages bandwidth.
- Avoid uploading very large uncompressed video files into the portfolio repo.

### Private/source constraints

- **Never** upload private game source projects, credentials, or restricted team files into the public portfolio repository.
- Only publish screenshots, code excerpts, diagrams, credits, and gameplay captures that I am permitted to share.
- Source code links should simply be absent for private repositories, not shown as broken or locked buttons.
- Steam links should appear **only after** an actual store URL is entered.

## 10. Accessibility, performance, and quality

- Use semantic HTML, accessible headings, keyboard-operable links and controls, visible focus styles, and meaningful link text.
- Check color contrast, particularly muted blue-gray text on dark surfaces.
- Keep hero text legible regardless of mouse-glow position or background animation.
- Respect `prefers-reduced-motion`; avoid autoplay audio.
- All media should have appropriate alternative text, captions, or explanatory descriptions.
- Avoid layout shift from images/videos; reserve media dimensions/aspect ratio.
- Keep dependencies and client-side JavaScript minimal; no React or similar framework unless a specific interaction requires it.
- Check mobile performance, broken links, console errors, and fallback behavior with JavaScript disabled.
- Add appropriate page titles, descriptions, canonical URLs, favicon, and social-share preview metadata.
- Ensure the website remains understandable when media fails to load.

## 11. Hosting and deployment

**Target:** GitHub Pages user site at `https://<GITHUB_USERNAME>.github.io/`.

- Create a **public portfolio repository** called `<GITHUB_USERNAME>.github.io`. This is separate from the two private game repositories.
- Build an Astro **static site** using GitHub Actions on pushes to the chosen default branch.
- Use Astro's **official, current** GitHub Pages deployment instructions rather than copying potentially outdated workflow action versions.
- Configure the correct `site` URL. For a user-site repo named `<username>.github.io`, a repository path `base` is normally unnecessary.
- In repository Settings → Pages, set the publishing source to **GitHub Actions**.
- Commit the package manager lockfile and verify `npm run build` succeeds locally and on CI.
- The finished site must work from its actual GitHub Pages URL; check direct navigation and refreshing deep project routes.
- Custom domain can be added later; not required for version 1.

Official references:

- https://docs.astro.build/en/guides/deploy/github/
- https://docs.astro.build/en/guides/content-collections/
- https://docs.github.com/en/pages/quickstart

## 12. Implementation milestones and acceptance criteria

### Milestone A — Visual foundation (first agent assignment)

- [ ] Initialize Astro project with static output and minimal dependencies.
- [ ] Define global colors, typography, spacing, and responsive width rules.
- [ ] Build header, footer, hero, and **two featured-project cards** using supplied reference images.
- [ ] Implement a tasteful mouse glow/background movement, with reduced-motion and mobile fallbacks.
- [ ] Make the homepage usable on desktop and mobile.
- [ ] Use clearly labeled placeholder copy where exact wording is missing.
- [ ] Show me the result and identify what still needs design approval **before** building deeper content.

### Milestone B — Reusable project pages

- [ ] Create a typed content collection and generic project route.
- [ ] Build case-study layout, project metadata, technical section anchors, and flexible media components.
- [ ] Populate **both** project pages with confirmed information and labeled placeholders.
- [ ] Verify a third sample *draft* project can be added purely through content and hidden from production.
- [ ] Ensure optional external links render correctly or stay hidden.

### Milestone C — Actual content and media

- [ ] Replace placeholder descriptions with approved content written by me or reviewed by me.
- [ ] Add actual screenshots and short gameplay/feature videos.
- [ ] Make **my personal contributions** clear in each breakdown.
- [ ] Check asset publication permissions, media size, and captions/alt text.
- [ ] Add real résumé/contact/social destinations only when supplied.

### Milestone D — Deploy and polish

- [ ] Add GitHub Actions workflow from current Astro guidance.
- [ ] Publish to GitHub Pages successfully.
- [ ] Test actual URLs, including direct project links and anchor links.
- [ ] Test narrow/mobile layouts, keyboard navigation, reduced-motion setting, video fallback, and missing URL behavior.
- [ ] Verify no private code, secrets, or unapproved media were committed.
- [ ] Add README instructions for adding a project, adding feature sections, updating media, and deploying.

### Definition of done for an initial publishable site

A visitor can quickly identify me as a Gameplay & Systems Programmer, see both projects without excessive scrolling, open a complete page for each, understand what I personally contributed, view approved media, navigate on mobile and keyboard, and follow only valid links. I can add another project by supplying a new content entry and its media, without changing the site layout.

## 13. Decisions and content still needed from me

Keep these as explicit TODOs; they are not blockers for the first design milestone.

- [ ] Confirm preferred **project order** on the homepage.
- [ ] Approve final hero introduction and About copy.
- [ ] Confirm the exact role/credit wording, team details, dates, and project statuses.
- [ ] Supply gameplay screenshots, mechanic demo clips, and any diagrams.
- [ ] Select which technical features deserve dedicated sections, in priority order.
- [ ] Confirm publication permission for game art, footage, and excerpts.
- [ ] Provide résumé PDF and public contact/GitHub/LinkedIn destinations as desired.
- [ ] Add Steam links when the store pages actually exist.
- [ ] Review first homepage mockup and adjust type scale, spacing, motion intensity, and project color accents.

## 14. Agent collaboration rules

1. **Read this document and the supplied reference assets first.** Summarize the implementation plan before making major changes.
2. Build in small milestones; avoid making all design and architecture decisions in one unreviewed pass.
3. Favor simple, understandable code and reusable components over fancy libraries.
4. Never invent project facts, metrics, testimonials, URLs, screenshots, team credits, or résumé details.
5. Do not use AI-generated substitute artwork in place of my supplied game imagery unless I explicitly approve it.
6. Keep the site accessible and functional without nonessential animations.
7. Preserve project data separately from reusable layout and UI components.
8. After each milestone, run the build, describe the files changed, identify known issues, and explain how I can preview the result.
9. If a feature would require a paid service, backend, or public release of private code, propose a free/static alternative before proceeding.
10. Prefer updates to this specification when a new design decision is approved, so future agent sessions have a reliable source of truth.

---

## Appendix A — Supplied visual references

The original reference files accompanying this brief are:

- `references/color-palette.png` — four supplied colors, with exact hex values in §3.
- `references/lantern-of-souls-reference.jpeg` — dark fantasy illustrated environment, stone architecture, luminous purple portal, character with a glowing lantern/light source.
- `references/ultrawave-reference.png` — Ultrawave menu with dark green/black palette, neon typography, polygon/wireframe terrain.

These are **reference files**. They may be used in a first local mockup; final publishing should use approved, appropriately optimized files and clear distinctions between concept art, UI, and actual gameplay imagery.

## Follow-up design review

The owner reviewed the first homepage and approved the general palette/layout, gentle image expansion on hover, and caption treatment. The next authorized iteration includes:

- Dedicated pages for Ultrawave and Lantern of Souls, using a shared Markdown-driven case-study layout with generous space for videos and screenshots.
- Larger explanatory text: approximately 18px on desktop and 17px on phones, with readable line lengths.
- Move “Explore selected work” beneath the introduction, away from the right edge.
- Add subtle background depth through faint texture and slowly drifting geometric shapes; keep reduced-motion and touch fallbacks.
- Retain placeholders for all unconfirmed descriptions, personal contributions, credits, and media. This review does not authorize public deployment or establish media publication rights.

The Milestone A-only prompt below is historical; this review authorizes the reusable project-page work in Milestone B.

### Contact prominence follow-up

The owner requested more prominent email, LinkedIn, résumé, and related contact destinations. The implementation uses a dedicated homepage contact section, a prominent Contact button in the shared header, and a footer contact link. Public destinations are configured in `src/data/contact.ts`. Missing destinations remain labeled, non-interactive placeholders; no email address or profile URL is inferred.

Confirmed public contact destinations supplied by the owner:

- Email: `saul.n.hanson@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/saul-hanson-875188440`
- GitHub: `https://github.com/SaulToast`
- Résumé: the supplied `saul_hanson_resume.pdf`, served locally as `/resume.pdf`.

## Appendix B — Initial prompt to give a coding agent

> Read `PORTFOLIO_SPEC.md` and inspect the images in `references/`. Implement **Milestone A only**: a responsive Astro homepage with the specified color system, concise hero, navigation, two large featured project cards using the supplied reference artwork, and tasteful motion with accessibility fallbacks. Keep project content modular for later integration with an Astro content collection. Do not invent content or expose private game repositories. Run the build and explain how to preview the site. Stop after Milestone A and report which design choices need review.
