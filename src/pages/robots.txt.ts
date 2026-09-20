import type { APIRoute } from 'astro';

/**
 * Generated so the Sitemap line always matches the deployed origin.
 * With no `site` configured the line is omitted rather than pointing nowhere.
 */
export const GET: APIRoute = ({ site }) => {
  const lines = ['User-agent: *', 'Allow: /', ''];

  if (site) {
    lines.push(`Sitemap: ${new URL('sitemap-index.xml', site).href}`, '');
  }

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
