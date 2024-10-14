import type { Configuration } from 'brisa';
import tailwindcss from 'brisa-tailwindcss';

/// file: brisa.config.ts
import vercel from 'brisa-adapter-vercel';

export default {
  output: 'static', // or 'static'
  integrations: [tailwindcss()],
} satisfies Configuration;
