import { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import daisyThemes from 'daisyui/src/theming/themes';
import huitw from '@headlessui/tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        mono: 'Consolas, ui-monospace, SFMono-Regular, Menlo, Monaco, "Liberation Mono", "Courier New", monospace',
        primary: 'Sora',
        secondary: 'Manrope',
      },
    },
  },
  plugins: [daisyui, huitw({ prefix: 'ui' })],
  daisyui: {
    themes: [
      {
        dark: {
          ...daisyThemes.dark,
          primary: '#fff',
          '--bc': '100% 0 0',
        },
      },
    ],
  },
};

export default config;
