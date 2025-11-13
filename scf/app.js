import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an Express app that serves the built Vite assets from `dist/`
const app = express();

const staticDir = path.resolve(__dirname, '../dist');

// Static assets with long cache; index.html should not be cached aggressively
app.use(express.static(staticDir, {
  index: 'index.html',
  extensions: ['html'],
  maxAge: '365d',
  setHeaders: (res, filepath) => {
    if (filepath.endsWith('index.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));

// SPA fallback: any unmatched route returns index.html
app.get('*', (_req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

export default app;

