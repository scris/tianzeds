import app from './app.js';

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`[SCF Custom Runtime] listening on :${port}`);
});

