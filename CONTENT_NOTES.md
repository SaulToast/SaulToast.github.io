# Case-study content notes

The current project summaries, roles, contributions, and About copy are based on the supplied `saul_hanson_resume.pdf` and confirmed facts in `PORTFOLIO_SPEC.md`. They are factual draft copy for local review. Both projects remain unpublished.

## Source boundaries

- Ultrawave: the résumé supports the co-developer/game programmer role, C#/MonoGame, weapon logic, enemy AI, asset management, client-server communication, the particle system with modular animations and 16 parameters, and the tiling tool with a custom wave function collapse algorithm and 50+ tiles.
- Lantern of Souls: the résumé supports the BYU capstone role, Unreal Engine 5 with C++/Blueprints, variable movement speeds and gameplay abilities, spatial audio/sound occlusion prototyping, and collaboration with 10+ people across programming, art, and animation.
- Start dates are taken from the résumé. Current completion/release status is not inferred from its “Present” dates.
- The résumé’s numerical descriptions are used as supplied, not as independent performance benchmarks. No frame rates, timings, improvement percentages, or measured outcomes have been added.
- Potential topics in the spec that the résumé does not confirm—such as soul mechanics, sprint/crouch, particular shader effects, and production audio propagation—are not asserted as implemented contributions.
- The supplied menu screenshot and environment illustration remain accurately labeled reference assets. Their availability in this local preview does not establish publication rights.

## Notes still needed

Rough notes are enough; these do not need to be polished prose.

### Ultrawave

1. What does the player do, and what is the main goal/gameplay loop?
2. For the particle system: how are particles updated/rendered, how do animation modules work, and which parameters best demonstrate the design? What was one difficult constraint or tradeoff?
3. For procedural tiling: how are compatibility rules defined, how does generation proceed, and what happens when constraints contradict each other?
4. Which other system should get a deeper case study? Describe your responsibility, the problem, the approach, and an outcome you can substantiate.
5. Which screenshots, clips, diagrams, and excerpts may be shown publicly? Provide existing file paths and a short description of each capture.

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
- No footage or explanatory diagrams have been invented. The gallery remains a placeholder until actual media is supplied.

See `README.md` for the frontmatter format. The remaining content can be added without duplicating page templates.
