
import React, { useState } from 'react';
import { Youtube, Instagram, Twitter, Tv, Quote, ChevronDown, ShieldCheck, Clock, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const testimonials = [
  { name: 'Marina S.', text: 'Comprei e recebi na hora. Suporte respondeu rápido quando tive uma dúvida.' },
  { name: 'Diego A.', text: 'Site rápido, fácil de navegar e o pagamento foi bem tranquilo.' },
  { name: 'Camila R.', text: 'Já é a segunda vez que compro aqui, sempre uma boa experiência.' },
];

const faqs = [
  { q: 'Como funciona a entrega?', a: 'Após a confirmação do pagamento, você recebe as instruções diretamente pelo WhatsApp.' },
  { q: 'Posso tirar dúvidas antes de comprar?', a: 'Sim! É só chamar no WhatsApp que alguém do time responde pessoalmente.' },
  { q: 'Quais formas de pagamento vocês aceitam?', a: 'Aceitamos as principais formas de pagamento digital — confirme com o suporte no seu pedido.' },
];

const TV: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[var(--bg)] min-h-screen text-[var(--ink)] pt-10 pb-24">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Social Hero Section */}
        <div className="mb-16 bg-[var(--surface-2)] border border-white/10 rounded-3xl p-8 md:p-14 shadow-[0_0_60px_rgba(255,106,26,0.12)] relative overflow-hidden">
          <div className="absolute inset-0 film-grain"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)] rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--accent-2)] rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>

          <div className="relative z-10 text-center flex flex-col items-center">
            <div className="bg-[var(--accent)]/10 p-4 rounded-full mb-6">
              <Tv size={44} className="text-[var(--accent)]" />
            </div>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent-2)] mb-3">Fique por dentro</span>
            <h1 className="font-display text-5xl md:text-6xl mb-4">CONECTE-SE COM A GENTE</h1>
            <p className="text-[var(--muted)] max-w-2xl mx-auto mb-10 text-lg">
              Siga nossas redes sociais para acompanhar novidades, promoções e bastidores da loja.
            </p>

            <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.35)]"
              >
                <Youtube size={22} />
                INSCREVA-SE NO YOUTUBE
              </a>

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:brightness-110 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(236,72,153,0.35)]"
              >
                <Instagram size={22} />
                SIGA NO INSTAGRAM
              </a>

              <a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-black border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
              >
                <Twitter size={22} />
                SIGA NO X (TWITTER)
              </a>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-3 h-8 bg-[var(--accent)] rounded-sm"></span>
            <h2 className="font-display text-3xl md:text-4xl">COMO FUNCIONA</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: 'Escolha com segurança', text: 'Veja os detalhes de cada produto e a opção que combina com você.' },
              { icon: Clock, title: 'Compra rápida', text: 'Finalize o pedido em poucos passos, sem formulários intermináveis.' },
              { icon: MessageCircle, title: 'Suporte direto', text: 'Fale com a gente pelo WhatsApp a qualquer momento do processo.' },
            ].map(({ icon: Icon, title, text }, i) => (
              <div key={i} className="relative p-6 rounded-2xl bg-[var(--surface-2)] border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-[var(--muted)]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-3 h-8 bg-[var(--accent-2)] rounded-sm"></span>
            <h2 className="font-display text-3xl md:text-4xl">O QUE DIZEM OS CLIENTES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="ticket-notch relative p-6 rounded-2xl bg-[var(--surface-2)] border border-white/10">
                <Quote className="text-[var(--accent)] mb-3" size={22} />
                <p className="text-[var(--ink)] mb-4 leading-relaxed">"{t.text}"</p>
                <span className="font-mono text-xs uppercase tracking-wide text-[var(--muted)]">{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-3 h-8 bg-[var(--accent)] rounded-sm"></span>
            <h2 className="font-display text-3xl md:text-4xl">PERGUNTAS FREQUENTES</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl bg-[var(--surface-2)] border border-white/10 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold"
                >
                  {f.q}
                  <ChevronDown size={20} className={`text-[var(--accent)] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-[var(--muted)] leading-relaxed">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TV;
