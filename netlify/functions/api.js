import serverless from 'serverless-http';
import app from '../../api-core.js';

export const handler = serverless(app);
