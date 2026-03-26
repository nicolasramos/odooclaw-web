import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    starlight({
      title: 'OdooClaw Docs',
      social: [
        { label: 'GitHub', href: 'https://github.com/nicolasramos/odooclaw', icon: 'github' },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/docs/intro/' },
            { label: 'Quick Start', link: '/docs/quickstart/' },
            { label: 'Installation', link: '/docs/installation/' },
          ],
        },
        {
          label: 'Core Features',
          items: [
            { label: 'Odoo Discuss', link: '/docs/features/discuss/' },
            { label: 'Odoo Manager', link: '/docs/features/odoo-manager/' },
            { label: 'Voice STT/TTS', link: '/docs/features/voice/' },
            { label: 'OCR Workflow', link: '/docs/features/ocr/' },
          ],
        },
        {
          label: 'Advanced',
          items: [
            { label: 'Architecture', link: '/docs/architecture/' },
            { label: 'Security Model', link: '/docs/security/' },
            { label: 'MCP Deep Dive', link: '/docs/mcp/' },
          ],
        },
      ],
      customCss: ['./src/styles/starlight-custom.css'],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
});
