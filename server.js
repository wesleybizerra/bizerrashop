import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import apiApp from './api-core.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Mount the API logic
app.use('/api', apiApp);
app.use('/', apiApp);

async function startServer() {
  const PORT = process.env.PORT || 3000;
  const isProduction = process.env.NODE_ENV === 'production' || !!process.env.RAILWAY_ENVIRONMENT;

  if (!isProduction) {
    console.log('🚀 Running in DEVELOPMENT mode with Vite');
    try {
      const { createServer: createViteServer } = await import('vite');
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
      });
      app.use(vite.middlewares);
    } catch (e) {
      console.warn('⚠️ Vite not found, falling back to static serving');
      serveStatic(app, __dirname);
    }
  } else {
    console.log('📦 Running in PRODUCTION mode');
    serveStatic(app, __dirname);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Servidor Bizerra Shop ativo na porta ${PORT}`);
  });
}

function serveStatic(app, __dirname) {
  const distPath = path.join(__dirname, 'dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    const indexPath = path.join(distPath, 'index.html');
    res.sendFile(indexPath, (err) => {
      if (err) {
        res.status(404).send('Site em construção. Por favor, execute "npm run build" ou aguarde o deploy finalizar.');
      }
    });
  });
}

// Only start the server if this file is run directly
const isServerless = !!process.env.NETLIFY || !!process.env.LAMBDA_TASK_ROOT;
if (!isServerless && (import.meta.url === `file://${process.argv[1]}` || process.env.NODE_ENV !== 'production')) {
  startServer();
}

export default app;
