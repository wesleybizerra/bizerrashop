import { MercadoPagoConfig, Preference } from 'mercadopago';

export const handler = async (event, context) => {
  // Log de início para debug no painel do Netlify
  console.log('🚀 [V6-FINAL] Função de Checkout iniciada');

  // Habilitar CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Responder pré-vôo do CORS
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Método não permitido' }) };
  }

  try {
    const { items } = JSON.parse(event.body);
    
    if (!items || items.length === 0) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Carrinho vazio' }) };
    }

    // Pegar Token
    const MP_TOKEN = (process.env.MP_ACCESS_TOKEN || process.env.MP_ACESS_TOKEN || '').trim();
    if (!MP_TOKEN) {
      console.error('❌ Erro: MP_ACCESS_TOKEN ausente');
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'Token do Mercado Pago não configurado.' }) };
    }

    const client = new MercadoPagoConfig({ accessToken: MP_TOKEN });
    const preference = new Preference(client);

    const itemsFormatted = items.map(item => ({
      id: String(item.id),
      title: String(item.name),
      unit_price: Number(item.price),
      quantity: Number(item.quantity),
      currency_id: 'BRL'
    }));

    const baseUrl = (process.env.APP_URL || process.env.URL || 'https://sitedevendaswesley.netlify.app').replace(/\/$/, '');
    
    const result = await preference.create({
      body: {
        items: itemsFormatted,
        back_urls: {
          success: `${baseUrl}/#/success`,
          failure: `${baseUrl}/#/failure`,
          pending: `${baseUrl}/#/pending`,
        },
        auto_return: 'approved',
        statement_descriptor: 'BIZERRA SHOP'
      }
    });

    console.log('✅ Preferência criada:', result.id);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ id: result.id, init_point: result.init_point })
    };

  } catch (error) {
    console.error('❌ Erro fatal na função:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Erro interno no processamento do pagamento.',
        details: error.message 
      })
    };
  }
};
