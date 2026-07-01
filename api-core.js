import express from 'express';
import cors from 'cors';
import { MercadoPagoConfig, Preference } from 'mercadopago';

const app = express();

// Configuração do Mercado Pago
const getMPClient = () => {
  const MP_TOKEN = (process.env.MP_ACCESS_TOKEN || process.env.MP_ACESS_TOKEN || '').trim();
  
  if (!MP_TOKEN) {
    console.error('❌ ERRO: MP_ACCESS_TOKEN não encontrado nas variáveis de ambiente!');
    throw new Error('Token do Mercado Pago não configurado no Netlify.');
  }

  // Log seguro do token para conferência
  const maskedToken = `${MP_TOKEN.substring(0, 12)}...${MP_TOKEN.substring(MP_TOKEN.length - 4)}`;
  console.log('🔑 Usando Token:', maskedToken);

  try {
    return new MercadoPagoConfig({ 
      accessToken: MP_TOKEN 
    });
  } catch (error) {
    console.error('❌ Erro ao inicializar SDK do Mercado Pago:', error);
    throw error;
  }
};

app.use(express.json());
app.use(cors());

// Rota de Checkout
app.post('/create_preference', async (req, res) => {
  console.log('🛒 [V5] Recebendo requisição de checkout');
  try {
    const { items } = req.body;
    
    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Carrinho vazio' });
    }

    const client = getMPClient();
    const itemsFormatted = items.map(item => ({
      id: String(item.id),
      title: String(item.name),
      unit_price: Number(item.price),
      quantity: Number(item.quantity),
      currency_id: 'BRL'
    }));

    // Tenta pegar a URL do Netlify automaticamente se APP_URL não existir
    const baseUrl = (process.env.APP_URL || process.env.URL || 'https://sitedevendaswesley.netlify.app').replace(/\/$/, '');
    console.log('🔗 [V5] Base URL:', baseUrl);
    
    const preference = new Preference(client);
    const result = await preference.create({
      body: {
        items: itemsFormatted,
        back_urls: {
          success: `${baseUrl}/#/success`,
          failure: `${baseUrl}/#/failure`,
          pending: `${baseUrl}/#/pending`,
        },
        auto_return: 'approved',
        statement_descriptor: 'BIZERRA SHOP',
        expires: false
      }
    });

    console.log('✅ [V5] Preferência criada:', result.id);
    res.json({ 
      id: result.id,
      init_point: result.init_point 
    });
  } catch (error: any) {
    console.error('❌ [V5] Erro Mercado Pago:', error);
    
    // Tenta extrair a mensagem de erro real da API do Mercado Pago
    const mpError = error.message || (error.cause && error.cause.message) || 'Erro desconhecido';
    
    res.status(500).json({ 
      error: 'Erro ao gerar link de pagamento.',
      details: mpError,
      v: 'V5'
    });
  }
});

app.get('/health', (req, res) => res.json({ status: 'online', environment: process.env.NODE_ENV }));

export default app;
