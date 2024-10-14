import type { Configuration } from 'brisa';
import tailwindcss from 'brisa-tailwindcss';

/// file: brisa.config.ts
import vercel from 'brisa-adapter-vercel';

export default {
  output: 'node', // or 'static'
  integrations: [tailwindcss()],
  outputAdapter: vercel({
    // see below for options that can be set here
  }),
  external: ['lightningcss'],
} satisfies Configuration;
