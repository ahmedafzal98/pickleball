// postcss.config.js
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss, // Use the new PostCSS plugin
    autoprefixer,
  ],
};
