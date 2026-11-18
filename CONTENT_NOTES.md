# Case-study content notes

The current project summaries, roles, and contributions are based on the supplied `saul_hanson_resume.pdf`, confirmed facts in `PORTFOLIO_SPEC.md`, and the owner's new `src/content/projects/portfolio-technical-breakdown.md`. The detailed breakdown takes precedence for Ultrawave's attribution and development history. Both projects remain unpublished.

## Milestone C — About copy review

The owner is happy with the current visual design and has requested the next phase of detailed content work. The About section now uses a lightly shortened version of the owner's own draft, preserving a personal first-person voice. This editorial version is ready for review; it is not blanket approval of the remaining site copy.

User-supplied facts and interests:

- Computer science at Brigham Young University, with an emphasis in **Animation and Games**; graduating in **April 2027**.
- Particular interest in gameplay and systems programming, with enjoyment of game design.
- Interest in the way disciplines combine, intentional design, simple mechanics with deep gameplay, and technical systems that make complex experiences intuitive.
- Storytelling through play; Hollow Knight, Metroid Prime, and Breath of the Wild as exploration/world examples, and Xenoblade Chronicles and The Last of Us as character/story examples.

Use this voice as guidance for future copy: direct, personal, specific, and grounded in the owner's interests. Keep project details tied to the owner's notes and confirmed contributions. Remaining Milestone C work includes reviewing other copy, detailed technical notes, actual media, contribution clarity, and publication permissions.

## Source boundaries

- Ultrawave: the technical breakdown supports enemy behaviors and conditions, weapon implementation and shared design, reusable gameplay components, drops/pickups, upgrade-system contributions, asset integration, and Creatable spawning. Three programmers shared game design. Physics-engine authorship belongs to a teammate; Saul integrated with and debugged it. Art, UI, and music were created by other contributors.
- The original Pixi-based particle integration and wave function collapse background generation are historical contributions. A co-developer rewrote the particle system using the original as its base, and backgrounds were later reworked. The current rewrite's pooling/configuration features and older résumé parameter/tile counts are not attributed to Saul's original implementation on the page.
- The breakdown's source anchors point into another project. They remain in the untouched source notes, which are excluded from Astro's project collection; the website contains curated prose rather than broken source links.
- Lantern of Souls: the résumé supports the BYU capstone role, Unreal Engine 5 with C++/Blueprints, variable movement speeds and gameplay abilities, spatial audio/sound occlusion prototyping, and collaboration with 10+ people across programming, art, and animation.
- Start dates are taken from the résumé. Current completion/release status is not inferred from its “Present” dates.
- The résumé’s numerical descriptions are used as supplied, not as independent performance benchmarks. No frame rates, timings, improvement percentages, or measured outcomes have been added.
- Potential topics in the spec that the résumé does not confirm—such as soul mechanics, sprint/crouch, particular shader effects, and production audio propagation—are not asserted as implemented contributions.
- Ultrawave's title screen is the card and project cover. Supplied early captures are explicitly labeled development footage; the Lantern of Souls environment illustration remains reference artwork.

## Notes still needed

Rough notes are enough; these do not need to be polished prose.

### Ultrawave

1. A current gameplay overview reel and an enemy attack cycle, ideally the Elephant with edited state labels.
2. Contrasting weapons and a before/choice/after upgrade demonstration, including an active LightBlade upgrade if available.
3. A drop/pickup or projectile-to-field sequence, plus an atlas-to-runtime animation example.
4. Historical particle footage from Saul's original integration and a step-by-step original background-generation capture. The tiling debug clip alone does not establish compatibility rules or contradiction handling.
5. One concrete iteration story: the problem, the behavior or component changed, and the observed result. No performance claims or invented outcomes have been added.

These needs are represented by eight inline media placeholders in `src/content/projects/ultrawave.mdx`.

### Lantern of Souls

1. What is the player’s objective and core gameplay loop?
2. Which movement features and abilities did you personally implement? How is work divided between C++ and Blueprints, and what was one design constraint?
3. For spatial audio/occlusion: which approaches were prototyped, what was learned, and what remained experimental versus being used in the game?
4. What is one concrete technical or collaboration takeaway?
5. Which screenshots and clips may be shown publicly? For audio demonstrations, include a short text explanation of what the listener should notice.

## Media handoff

- Approved screenshots and video posters: `src/assets/<project-name>/`.
- Short MP4/WebM clips and optional WebVTT captions: `public/media/<project-name>/`.
- For every item: identify the project/feature, describe what it demonstrates, and confirm permission to publish it.
- Ultrawave media is placed inline: Grabbler footage in Enemy AI, building upgrades in Upgrades & progression, collider testing in Physics integration & debugging, and the early screenshot/stars/tiling clips in Development history. The gameplay, attack, and spawning diagrams summarize supplied technical notes.
- Original videos remain under `src/assets/Ultrawave/`. Website copies under `public/media/ultrawave/` total approximately 14.4 MB, compared with 180 MB of originals. They preserve full duration and available audio; generated posters are under `src/assets/Ultrawave/posters/`.
- Both supplied concept paintings appear at full width in Development history, credited to other contributors. Artist names have not been supplied. The alternate main-menu image is not displayed. Lantern of Souls still has its gallery placeholder.
- Original MP4 recordings in `src/assets/Ultrawave/` are local-only and ignored by Git. Keep a separate backup of these originals. The optimized `public/media/ultrawave/` videos and source images/posters remain tracked. Removing originals from the current tree does not remove copies in earlier commits.

See `README.md` for the frontmatter format. The remaining content can be added without duplicating page templates.
