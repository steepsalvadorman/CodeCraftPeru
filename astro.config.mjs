// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The production origin, e.g. "https://codecraftperu.com".
// Canonical links, absolute Open Graph URLs and the sitemap all derive from it.
// Set SITE_URL in the deploy environment (or hardcode it below) to switch them
// on — until then they are omitted rather than emitted pointing at a guess.
const site = process.env.SITE_URL;

export default defineConfig({
  site,
  integrations: site ? [sitemap()] : [],
  devToolbar: {
    enabled: false,
  },
});
