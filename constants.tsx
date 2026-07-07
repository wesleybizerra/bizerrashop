
import { Product } from './types';

// Catálogo de exemplo — troque livremente por seus produtos reais.
// A estrutura (id, name, description, image, category, variations) é o que a UI espera.
export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'Netflix',
    name: 'Netflix',
    description: 'Assista qualquer serie, qualquer filme e tudo que quiser, sem problema, sem anuncios',
    image: 'https://i.imgur.com/J6jxdbx.png',
    category: 'Assinaturas',
    variations: [
      { name: 'Netflix Premium ( Tela ) Mensal', price: 25.00 },
      { name: 'Netflix Padrão com Anúncios ( Tela ) Mensal', price: 15.00 }
    ]
  },
  {
    id: 'Disney',
    name: 'Disney',
    description: 'Tudo da disney por um preço acessivel para você',
    image: 'https://i.imgur.com/4NBpnks.png',
    category: 'Assinaturas',
    variations: [
      { name: 'Disney Premium ( Tela ) Mensal', price: 25.00 },
    ]
  },
  {
    id: 'HBO MAX',
    name: 'HBO MAX',
    description: 'Tudo da HBO por um preço acessivel para você',
    image: 'https://i.imgur.com/bp2UYci.png',
    category: 'Assinaturas',
    variations: [
      { name: 'HBO MAX ( Tela ) Mensal', price: 20.00 },
      { name: 'HBO MAX ( Conta ) Mensal', price: 25.00 }
    ]
  },
  {
    id: 'Youtube Premium',
    name: 'Youtube Premium',
    description: 'Todo o youtube completo, sem anúncios e download liberado',
    image: 'https://i.imgur.com/HPssZRr.png',
    category: 'Assinaturas',
    variations: [
      { name: 'Youtube Premium ( Mensal ) Convite para sua conta do GMAIL', price: 20.00 },
      { name: 'Youtube Premium APK somente para Celular ( Eterno / Para Sempre ) sem anúncios', price: 20.00 }
    ]
  },
  {
    id: 'Spotify Premium',
    name: 'Spotify Premium',
    description: 'Ouça as melhores músicas e suas músicas preferidas, sem anúncios, por um preço acessível',
    image: 'https://i.imgur.com/zU5kOCO.png',
    category: 'Assinaturas',
    variations: [
      { name: 'Spotify Premium ( Mensal ) você recebe uma conta para você acessar o spotify premium por 1 mês', price: 20.00 }
    ]
  },
  {
    id: 'PRIME VIDEEO',
    name: 'PRIME VIDEO',
    description: 'Tudo da Prime no melhor preço do mercado e o mais acessível para você',
    image: 'https://i.imgur.com/PugXPW9.png',
    category: 'Assinaturas',
    variations: [
      { name: 'Prime + HBO MAX + Apple TV + Paramount + Telecine + Crunchyroll ( Tela ) Mensal', price: 30.00 },
      { name: 'Prime + HBO MAX + Paramount ( Tela ) Mensal', price: 20.00 },
      { name: 'Prime + Premier + Canais Globo ( Tela ) Mensal', price: 20.00 }
    ]
  },
  {
    id: 'Canva Pro',
    name: 'Canva Pro',
    description: 'Tudo do Canva Pro Liberado por 1 ano para você, por um preço acessivel',
    image: 'https://i.imgur.com/qFGGaPX.png',
    category: 'Assinatura',
    variations: [
      { name: 'Canva Pro ( 2 meses ) no seu email - 2 meses usando tudo do Canva Pro - 2 meses sem pagar nada com o Canva Pro', price: 30.00 },
    ]
  },
  {
    id: 'Combate',
    name: 'Combate',
    description: 'Canal do Combate com o melhor preço do mercado só para você, só aqui',
    image: 'https://i.imgur.com/0eGubFb.png',
    category: 'Assinatura',
    variations: [
      { name: 'Canal Combate ( Tela ) Mensal', price: 15.00 },
    ]
  },
  {
    id: 'Crunchyroll',
    name: 'Crunchyroll',
    description: 'Canal do Combate com o melhor preço do mercado só para você, só aqui',
    image: 'https://i.imgur.com/LBxgZlc.png',
    category: 'Assinatura',
    variations: [
      { name: 'Crunchyroll ( Tela ) Mensal', price: 20.00 },
   ]
  },
  {
    id: 'Globoplay',
    name: 'Globoplay',
    description: 'Tudo da Globoplay com o melhor preço do mercado só para você, só aqui',
    image: 'https://i.imgur.com/u3phSjw.png',
    category: 'Assinatura',
    variations: [
      { name: 'Globoplay sem canais ( Conta ) Mensal', price: 20.00 },
      { name: 'Globoplay sem canais ( Tela ) Mensal', price: 10.00 },
      { name: 'Globoplay + BBB + canais ( Conta ) Mensal', price: 25.00 },
      { name: 'Globoplay + BBB + canais ( Tela ) Mensal', price: 20.00 },
      { name: 'Globoplay + BBB + canais + Telecine ( Tela ) Mensal', price: 20.00 },
  ]
  },
  {
    id: 'IPTV e P2P',
    name: 'IPTV e P2P',
    description: 'Tudo de IPTV e P2P com o melhor preço do mercado só para você, só aqui',
    image: 'https://i.imgur.com/pdcNc7M.png',
    category: 'Assinatura',
    variations: [
      { name: 'IPTV e P2P de Alta Qualidade ( 1 Mês )', price: 50.00 },
      { name: 'IPTV e P2P de Alta Qualidade ( 2 Meses )', price: 80.00 },
      { name: 'IPTV e P2P de Alta Qualidade ( 3 Meses )', price: 110.00 },
      { name: 'IPTV e P2P de Alta Qualidade ( 6 Meses )', price: 200.00 },
      { name: 'IPTV e P2P de Alta Qualidade ( 1 Ano / 12 Meses / 365 Dias )', price: 360.00 },
  ]
  },
  {
    id: 'Paramount Plus',
    name: 'Paramount Plus',
    description: 'Tudo da Paramount Plus com o melhor preço do mercado só para você, só aqui',
    image: 'https://i.imgur.com/z0hTTiR.png',
    category: 'Assinatura',
    variations: [
      { name: 'Paramount + ( Conta ) Mensal', price: 20.00 },
      { name: 'Paramount + ( Tela ) Mensal', price: 15.00 },
      { name: 'Paramount + UFC ( Conta ) Mensal', price: 20.00 },
      { name: 'Paramount + UFC ( Tela ) Mensal', price: 20.00 },
 ]
  },
  {
    id: 'Recarga Claro',
    name: 'Recarga Claro',
    description: 'Recarregue seu CHIP, seu NÚMERO, seu CELULAR, sua INTERNET, sua REDE MOVEL, com os melhores preços, só aqui, só pra você',
    image: 'https://i.imgur.com/w5d89VB.png',
    category: 'Assinatura',
    variations: [
      { name: 'R$100.00 de crédito você paga pra mim R$70.00', price: 70.00 },
      { name: 'R$50.00 de crédito você paga pra mim R$40.00', price: 40.00 },
      { name: 'R$40.00 de crédito você paga pra mim R$35.00', price: 35.00 },
      { name: 'R$30.00 de crédito você paga pra mim R$27.00', price: 27.00 },
 ]
  },
  {
    id: 'Recarga TIM',
    name: 'Recarga TIM',
    description: 'Recarregue seu CHIP, seu NÚMERO, seu CELULAR, sua INTERNET, sua REDE MOVEL, com os melhores preços, só aqui, só pra você',
    image: 'https://i.imgur.com/RpCM2Q0.png',
    category: 'Assinatura',
    variations: [
      { name: 'R$100.00 de crédito você paga pra mim R$70.00', price: 70.00 },
      { name: 'R$50.00 de crédito você paga pra mim R$40.00', price: 40.00 },
      { name: 'R$40.00 de crédito você paga pra mim R$35.00', price: 35.00 },
      { name: 'R$30.00 de crédito você paga pra mim R$27.00', price: 27.00 },
 ]
  },
  {
    id: 'Recarga VIVO',
    name: 'Recarga VIVO',
    description: 'Recarregue seu CHIP, seu NÚMERO, seu CELULAR, sua INTERNET, sua REDE MOVEL, com os melhores preços, só aqui, só pra você',
    image: 'https://i.imgur.com/1h8eGxK.png',
    category: 'Assinatura',
    variations: [
      { name: 'R$100.00 de crédito você paga pra mim R$70.00', price: 70.00 },
      { name: 'R$50.00 de crédito você paga pra mim R$40.00', price: 40.00 },
      { name: 'R$40.00 de crédito você paga pra mim R$35.00', price: 35.00 },
      { name: 'R$30.00 de crédito você paga pra mim R$27.00', price: 27.00 },
 ]
  },
  {
    id: 'Claro TV',
    name: 'Claro TV',
    description: 'Tudo da Claro TV completo, com o melhor preço para você, só aqui',
    image: 'https://i.imgur.com/ru8o5n8.png',
    category: 'Assinatura',
    variations: [
      { name: 'Claro TV completo ( Tela ) Anual', price: 85.00 },
      { name: 'Claro TV + Premiere ( Tela ) 2 meses', price: 30.00 },
      { name: 'Claro TV + Premiere ( Tela ) 3 meses', price: 35.00 },
  ]
  },
  {
    id: 'UniTV',
    name: 'UniTV',
    description: 'Assista qualquer série, qualquer filme, qualquer desenho, qualquer anime, mais de 400 canais, qualquer partida de futebol, com o melhor preço do mercado só para você, só aqui',
    image: 'https://i.imgur.com/xeoE9dQ.png',
    category: 'Assinatura',
    variations: [
      { name: 'UniTV Código Mensal', price: 30.00 },
      { name: 'UniTV ( Anual )', price: 130.00 },
]
  },
  {
    id: 'Figurinhas da Copa do Mundo',
    name: 'Figurinhas da Copa do Mundo',
    description: 'Todas as figurinhas do álbum da copa do mundo 2026, todas as lendárias, todas que existem, no melhor preço que existe, pra você, só aqui',
    image: 'https://i.imgur.com/ycgXcGZ.png',
    category: 'Assinatura',
    variations: [
      { name: 'Album Completo da Copa do Mundo 2026 ( Todas as Figurinhas Existentes ) Incluindo todas as lendárias', price: 40.00 },
]
  },
  {
    id: 'Figurinhas da Copa do Mundo',
    name: 'Figurinhas da Copa do Mundo',
    description: 'Todas as figurinhas do álbum da copa do mundo 2026, todas as lendárias, todas que existem, no melhor preço que existe, pra você, só aqui',
    image: 'https://i.imgur.com/3kl56pf.png',
    category: 'Assinatura',
    variations: [
      { name: 'CapCut Pro ( 3 meses ) Paga agora e terá tudo do capcut pro liberado por 3 meses - Não precisa entrar em conta nenhuma', price: 30.00 },
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
