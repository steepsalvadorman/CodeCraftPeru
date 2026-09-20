import type { APIRoute } from 'astro';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { modulos } from '../data/modulos';

/**
 * Builds the 1200x630 social preview card at build time.
 *
 * Generated rather than designed by hand so it always carries the real palette
 * and the real module list — scrapers (WhatsApp, LinkedIn, Slack) need a raster
 * image at an absolute URL, and they will not render SVG.
 */

const WIDTH = 1200;
const HEIGHT = 630;

const COLORS = {
  bg: '#050b16',
  accent: '#5b8fc7',
  accentLight: '#8fb8e0',
  text: '#eaf1fa',
  muted: '#7d90a8',
};

// Resolved from the project root, not import.meta.url: this module is bundled
// into dist/.prerender/ before it runs, so a module-relative path breaks.
const font = (file: string) =>
  readFileSync(join(process.cwd(), 'src/assets/fonts', file));

/** Satori needs an explicit `display: flex` on anything with several children. */
const row = (style: Record<string, unknown>, children: unknown[]) => ({
  type: 'div',
  props: { style: { display: 'flex', ...style }, children },
});

const text = (content: string, style: Record<string, unknown>) => ({
  type: 'div',
  props: { style: { display: 'flex', ...style }, children: content },
});

export const GET: APIRoute = async () => {
  const card = row(
    {
      width: WIDTH,
      height: HEIGHT,
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '64px 72px',
      backgroundColor: COLORS.bg,
      backgroundImage: `radial-gradient(1000px 500px at 20% -10%, rgba(91,143,199,0.22), transparent)`,
      borderTop: `10px solid ${COLORS.accent}`,
      fontFamily: 'Source Sans 3',
    },
    [
      row({ alignItems: 'center' }, [
        text('◆', { color: COLORS.accent, fontSize: 22, marginRight: 14 }),
        text('CODECRAFT PERÚ', {
          color: COLORS.accentLight,
          fontSize: 26,
          fontWeight: 600,
          letterSpacing: 6,
        }),
      ]),

      row({ flexDirection: 'column' }, [
        text('ERP para empresas', {
          color: COLORS.text,
          fontSize: 82,
          fontWeight: 600,
          lineHeight: 1.05,
        }),
        text('de servicios', {
          color: COLORS.accentLight,
          fontSize: 82,
          fontWeight: 600,
          lineHeight: 1.05,
        }),
      ]),

      row({ flexDirection: 'column' }, [
        text(modulos.map((m) => m.title).join('  ·  '), {
          color: COLORS.muted,
          fontSize: 27,
          marginBottom: 22,
        }),
        row({ alignItems: 'center' }, [
          row({ width: 64, height: 3, backgroundColor: COLORS.accent, marginRight: 20 }, []),
          text('Una sola plataforma, no seis programas sueltos', {
            color: COLORS.text,
            fontSize: 29,
            fontWeight: 600,
          }),
        ]),
      ]),
    ]
  );

  const svg = await satori(card as never, {
    width: WIDTH,
    height: HEIGHT,
    fonts: [
      { name: 'Source Sans 3', data: font('SourceSans3-Regular.ttf'), weight: 400, style: 'normal' },
      { name: 'Source Sans 3', data: font('SourceSans3-SemiBold.ttf'), weight: 600, style: 'normal' },
    ],
  });

  const png = new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } }).render().asPng();

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
