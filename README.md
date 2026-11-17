# Saul Hanson — game development portfolio

An Astro static portfolio with responsive CSS and Markdown project data. The visual foundation and **Milestone B case-study structure** from [PORTFOLIO_SPEC.md](PORTFOLIO_SPEC.md) are implemented: a homepage plus separate Ultrawave and Lantern of Souls pages, using supplied reference artwork and clearly labeled content placeholders.

## Preview locally

Use Node **22.23.4 or newer** (an even-numbered supported release); `.nvmrc` pins the version used during development.

```sh
npm ci
npm run dev
```

Open the Local URL printed by Astro, normally `http://localhost:4321/`. Draft projects with `preview: true` appear in development.

This workspace originally had Node 18. A compatible runtime was installed in the ignored `.tools` directory for validation. In this checkout, PowerShell can use it for the current terminal:

```powershell
$env:PATH = "$((Resolve-Path '.tools/node_modules/node/bin').Path);$env:PATH"
npm run dev
```

For a built version of the mockup:

```sh
npm run check
npm run build:preview
npm run preview
```

`build:preview` intentionally includes preview drafts. Do not deploy that output. `npm run build` produces the production version, which excludes unpublished projects. The initial production page therefore shows a project-preparation message. Both commands write to `dist/`.

## Structure

```text
src/
  assets/                Supplied artwork, optimized by Astro at build time
  components/            Shared UI, AmbientBackground, ProjectMetadata, MediaBlock, VideoLoop
  content/projects/      One Markdown file per project
  content.config.ts      Validated metadata schema
  layouts/SiteLayout.astro
  layouts/ProjectLayout.astro
  lib/projects.ts        Shared visibility and sorting rules
  pages/index.astro      Homepage composed from reusable components
  pages/projects/[slug].astro  Shared static route for every visible project
  styles/global.css      Palette, typography, layout, and motion fallbacks
  styles/project.css     Spacious case-study text, navigation, and media layouts
scripts/build-preview.mjs
.github/workflows/deploy.yml
```

No UI framework, remote fonts, analytics, contact backend, or game source code is included. The small hero script is optional; all navigation and content work without JavaScript.

## Edit or add a project

1. Add approved media under `src/assets/`.
2. Create `src/content/projects/project-name.md`. Its filename becomes its content ID and `/projects/project-name/` route. Use lowercase hyphenated filenames.
3. Use the existing entries as the metadata template. Required fields are `title`, `summary`, `discipline`, `engine`, `languages`, `cover`, `coverAlt`, and `coverCaption`. `cover` is relative to the Markdown file. The schema checks image existence and nonempty text.
4. Set `featured: true` and adjust `order` to place it on the homepage. Lower numbers come first.
5. Keep `published: false` while the content or media is unapproved. Set `preview: true` to include it in the local mockup; leave that false for drafts that should stay hidden everywhere.
6. Only change `published` to true once content and image rights have been reviewed. No page or homepage markup needs to change to add a card or project page. `featured: false` omits the card but still generates a visible project's page.

Markdown bodies render through one reusable project layout. Use `##` headings for major sections; they automatically populate the page navigation. `###` headings work for individual technical breakdowns and receive deep-linkable IDs (for example, `### Particle system` becomes `#particle-system`, only after that contribution is confirmed). Keep headings stable once shared. Add any number of sections without changing the template. Markdown supports lists, images, code blocks, tables, and native `<details>` disclosures.

Optional `role`, `team`, `status`, and `period` fields appear in the metadata only when supplied. `summaryIsPlaceholder: true` labels unfinished summaries; remove it or set false once the wording is approved. Optional `links` accepts `{ label, url }` entries with actual HTTPS URLs. No Steam, source, or contact link is rendered unless provided.

## Add screenshots and videos

Contact destinations are configured separately in `src/data/contact.ts`; see the contact section below.

The project hero always displays the supplied cover at its original aspect ratio. The separate gallery supports full-width images and videos, with captions below. It shows an explicit placeholder until approved media is added. Text is 18px on desktop and 17px on phones, with a readable line length.

Add a `media` list to the Markdown frontmatter. This is a **format example**, not real footage or project information; substitute existing, approved files before using it:

```yaml
media:
  - type: image
    image: ../../assets/project-name/approved-capture.webp
    alt: "Describe what is visible in this capture."
    caption: "Explain what the approved capture demonstrates."
  - type: video
    poster: ../../assets/project-name/approved-poster.webp
    sources:
      - src: /media/project-name/approved-demo.mp4
        type: video/mp4
    caption: "Explain what this demonstration shows."
    loop: true
    tracks:
      - src: /media/project-name/approved-demo.en.vtt
        language: en
        label: English
```

Images and posters resolve relative to the Markdown file and are optimized by Astro. Put local video and WebVTT files under `public/media/`; reference them as `/media/...`. HTTPS video sources also work. Supply accurate captions/transcripts for speech or important audio; omit `tracks` when not applicable. The player uses native controls, a poster, and `preload="none"`. It never autoplays, including when looping, and offers a direct video link. No dummy media files or sources are included.

Keep personally implemented features distinct from team accomplishments. Do not promote speculative topics from the spec into claims. Unknown credits, dates, project status, metrics, and contact details remain unset. The images are labeled accurately as a menu screenshot and an environment illustration, not gameplay demonstrations.

## Contact and résumé

The header has a prominent **Contact** button on every page. It links to the homepage's `#contact` section, which contains large Email, LinkedIn, and Résumé cards. The footer also links there, including from project pages.

Set approved public destinations in `src/data/contact.ts`:

- `email`: the public email address, without `mailto:`.
- `linkedin`: the complete HTTPS profile URL.
- `resume`: an HTTPS document URL or a root-relative PDF path such as `/resume.pdf` (place the real PDF in `public/resume.pdf`).
- `github`: an optional HTTPS public profile URL; its card appears only when supplied.

Leave missing values `null`. They appear as labeled, non-interactive placeholders; no empty or invented links are emitted. Adding a destination automatically turns its card into a link. Email opens the visitor's mail application; résumé and profile links use normal browser navigation. No contact form backend is needed.

## Visual direction

- Supplied palette: `#5C7E8F`, `#A2A2A2`, `#D4DDE2`, `#FFFFFF`, on the proposed `#111920` background.
- Large system-font headings, a short hero, and two equally prominent project cards.
- Ultrawave first; Lantern of Souls second. Reorder in Markdown.
- Restrained green/purple project accents; faint texture, gently drifting geometric outlines, and a subtle desktop pointer glow. Shape motion is disabled on touch devices and when reduced motion is preferred.
- Single-column phone layout, visible keyboard focus, a skip link, and reduced-motion/touch fallbacks.
- Hero introduction uses the spec's draft wording and is labeled as a draft. About, descriptions, and contact details remain explicit placeholders.

The first review approved the general colors/layout, image hover treatment, and captions. The follow-up implementation adds dedicated project pages, larger explanation text, the work link beneath the introduction, and subtle background depth. Final copy, feature contributions, and media still need to be supplied; nothing in the scaffold asserts unconfirmed accomplishments.

## GitHub Pages

The existing Git remote identifies `SaulToast/SaulToast.github.io`, so `astro.config.mjs` sets `site` to `https://saultoast.github.io`. This user-site repository needs no path base.

The workflow follows [Astro's official GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/), checked during implementation. It uses `actions/checkout@v7`, `withastro/action@v6`, and `actions/deploy-pages@v5`, with Node 24, npm, type checking, and a static build. It supports pushes to `main` and manual runs.

**Publication is not enabled yet.** Before the first deployment:

1. Approve the design, finish the applicable case studies, and confirm permission to publish the artwork and media. Do not publish this preview build.
2. Mark approved project entries `published: true`.
3. In GitHub, set **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Set the repository Actions variable **`PORTFOLIO_READY`** to **`true`**. The workflow skips deployment until this is set.
5. Commit the source and `package-lock.json`, then push to `main` or run the workflow manually. Nothing was committed, pushed, or deployed by this implementation.

After deployment, verify the actual Pages URL, direct project routes, and technical anchors. Never add private game repositories or restricted team files. Steam, résumé, email, and social links should be added only when real approved destinations are supplied.

Content collection implementation follows [Astro's content collections guide](https://docs.astro.build/en/guides/content-collections/).
