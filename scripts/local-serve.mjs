#!/usr/bin/env node
import app from '../scf/app.js';

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`SCF preview server listening on http://localhost:${port}`);
});
