// Explicit local mockup build, including opted-in draft projects.
// The GitHub workflow deliberately uses `build`, never this command.
process.env.PORTFOLIO_PREVIEW = 'true';
const { build } = await import('astro');
await build({});
