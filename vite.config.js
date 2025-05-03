import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'
import tailwindcss from 'tailwindcss'
import viteCompression from 'vite-plugin-compression'

const buildTarget = ['es2019', 'edge80', 'firefox72', 'chrome78', 'safari13.1']

// https://vitejs.dev/config/
// noinspection SpellCheckingInspection
export default defineConfig({
  hmr: true,
  plugins: [
    visualizer({}),
    viteCompression({
      threshold: 20480,
      verbose: false,
    }),
    react({ devTarget: 'es2019' }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@@': path.resolve(__dirname, './src/components'),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    sourcemap: false,
    target: buildTarget,
    cssTarget: 'chrome78',
    modulePreload: { polyfill: true },
  },
})
