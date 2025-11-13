import serverless from 'tencent-serverless-http';
import app from './app.js';

// SCF entrypoint
export const main_handler = serverless(app);

