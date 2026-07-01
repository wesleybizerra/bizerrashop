
import { Product } from './types';

// Catálogo de exemplo — troque livremente por seus produtos reais.
// A estrutura (id, name, description, image, category, variations) é o que a UI espera.
export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'plano-essencial',
    name: 'Plano Essencial',
    description: 'A porta de entrada perfeita: tudo que você precisa, sem complicação.',
    image: 'https://picsum.photos/seed/essencial/600/450',
    category: 'Assinaturas',
    variations: [
      { name: 'Essencial — Mensal', price: 25.00 },
      { name: 'Essencial — Trimestral', price: 65.00 }
    ]
  },
  {
    id: 'plano-pro',
    name: 'Plano Pro',
    description: 'Mais recursos, mais liberdade. Para quem quer ir além do básico.',
    image: 'https://picsum.photos/seed/pro/600/450',
    category: 'Assinaturas',
    variations: [
      { name: 'Pro — Mensal', price: 40.00 },
      { name: 'Pro — Trimestral', price: 105.00 },
      { name: 'Pro — Anual', price: 380.00 }
    ]
  },
  {
    id: 'plano-ultra',
    name: 'Plano Ultra',
    description: 'A experiência completa, sem limites, com prioridade no suporte.',
    image: 'https://picsum.photos/seed/ultra/600/450',
    category: 'Assinaturas',
    variations: [
      { name: 'Ultra — Mensal', price: 60.00 },
      { name: 'Ultra — Anual', price: 580.00 }
    ]
  },
  {
    id: 'kit-ferramentas',
    name: 'Kit Ferramentas Criativas',
    description: 'Um combo de ferramentas para produzir conteúdo com mais agilidade.',
    image: 'https://picsum.photos/seed/ferramentas/600/450',
    category: 'Ferramentas',
    variations: [
      { name: 'Kit Ferramentas — Mensal', price: 30.00 },
      { name: 'Kit Ferramentas — Anual', price: 280.00 }
    ]
  },
  {
    id: 'pacote-produtividade',
    name: 'Pacote Produtividade',
    description: 'Organize sua rotina com um conjunto de apps selecionados.',
    image: 'https://picsum.photos/seed/produtividade/600/450',
    category: 'Ferramentas',
    variations: [
      { name: 'Produtividade — Mensal', price: 22.00 }
    ]
  },
  {
    id: 'recarga-claro',
    name: 'Recarga Claro',
    description: 'Recarregue seu celular com os melhores valores do mercado.',
    image: 'https://picsum.photos/seed/claro/600/450',
    category: 'Recarga',
    variations: [
      { name: 'R$ 100,00 de crédito', price: 70.00 },
      { name: 'R$ 50,00 de crédito', price: 40.00 },
      { name: 'R$ 30,00 de crédito', price: 27.00 }
    ]
  },
  {
    id: 'recarga-tim',
    name: 'Recarga TIM',
    description: 'Recarregue seu celular com os melhores valores do mercado.',
    image: 'https://picsum.photos/seed/tim/600/450',
    category: 'Recarga',
    variations: [
      { name: 'R$ 100,00 de crédito', price: 70.00 },
      { name: 'R$ 50,00 de crédito', price: 40.00 },
      { name: 'R$ 30,00 de crédito', price: 27.00 }
    ]
  },
  {
    id: 'cartao-presente',
    name: 'Cartão-Presente Digital',
    description: 'Um presente rápido de enviar e fácil de resgatar, na hora que quiser.',
    image: 'https://picsum.photos/seed/presente/600/450',
    category: 'Bônus',
    variations: [
      { name: 'R$ 50,00', price: 50.00 },
      { name: 'R$ 100,00', price: 100.00 }
    ]
  }
];

export const SOCIAL_LINKS = {
  x: 'https://x.com/WesleyBizerraYT',
  youtube: 'https://www.youtube.com/@WesleyBizerra2026',
  instagram: 'https://www.instagram.com/wesleybizerraofc/',
  facebook: 'https://www.facebook.com/WesleyBizerra2022/',
  whatsapp: 'https://api.whatsapp.com/send/?phone=5571981574664&text=Olá! Vim pelo site Bizerra Shop e gostaria de mais informações.',
  whatsapp_icon: 'https://i.imgur.com/KwTiZyP.png'
};
