import type { Config } from 'tailwindcss';
import tailwindTypographyPlugin from '@tailwindcss/typography';
import daisyui from 'daisyui';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [tailwindTypographyPlugin, daisyui],
};
export default config;
