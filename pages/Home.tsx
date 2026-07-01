
import React from 'react';
// Changed import from 'react-router-dom' to 'react-router' to resolve missing export errors
import { Link } from 'react-router';
import { Zap, ShieldCheck, HeadphonesIcon, Star, ArrowRight, Ticket } from 'lucide-react';
import { SOCIAL_LINKS, INITIAL_PRODUCTS } from '../constants';

const Home: React.FC = () => {
  const featured = INITIAL_PRODUCTS.slice(0, 3);

  return (
    <div>
      {/* Hero Section — cinematic spotlight */}
      <section className="relative min-h-[86vh] flex items-center overflow-hidden bg-[var(--bg)]">
        <div className="absolute inset-0 spotlight"></div>
        <div className="absolute inset-0 film-grain"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[var(--accent)]/10 rounded-full blur-[140px]"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent-2)] border border-[var(--accent-2)]/30 rounded-full px-4 py-2 mb-8">
            <Ticket size={14} /> Acesso liberado agora
          </span>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-[0.95] mb-6 text-[var(--ink)]">
            SUA PRÓXIMA<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]">GRANDE COMPRA</span><br />
            COMEÇA AQUI
          </h1>
          <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto mb-10">
            Planos e produtos digitais selecionados, com compra rápida, entrega imediata e suporte de verdade — sem letras miúdas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/produtos"
              className="group px-8 py-4 bg-[var(--accent)] text-black rounded-full font-bold text-lg hover:brightness-110 hover:scale-[1.03] transition-all shadow-[0_10px_40px_rgba(255,106,26,0.4)] flex items-center justify-center gap-2"
            >
              Ver catálogo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-white/5 backdrop-blur-md text-[var(--ink)] border border-white/15 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              Falar com a loja
            </a>
          </div>
        </div>

        {/* Bottom marquee strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-black/40 backdrop-blur-sm py-3 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee font-mono text-xs tracking-[0.3em] text-[var(--muted)] uppercase">
            {Array(2).fill(0).map((_, i) => (
              <span key={i} className="flex items-center gap-8 pr-8">
                <span>ENTREGA RÁPIDA</span><span className="text-[var(--accent)]">•</span>
                <span>SUPORTE HUMANO</span><span className="text-[var(--accent)]">•</span>
                <span>PAGAMENTO SEGURO</span><span className="text-[var(--accent)]">•</span>
                <span>PREÇOS JUSTOS</span><span className="text-[var(--accent)]">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent)]">Por que a Bizerra Shop</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3 text-[var(--ink)]">FEITO PARA VOCÊ CONFIAR</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Star, title: 'Curadoria de verdade', text: 'Cada produto do catálogo passa por uma seleção cuidadosa antes de chegar até você.' },
              { icon: Zap, title: 'Compra instantânea', text: 'Escolheu, pagou, recebeu. Checkout direto e sem burocracia, do jeito que devia ser.' },
              { icon: HeadphonesIcon, title: 'Suporte humanizado', text: 'Atendimento direto via WhatsApp, com gente de verdade pronta para ajudar.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="relative p-8 rounded-2xl bg-[var(--surface-2)] border border-white/5 hover:border-[var(--accent)]/40 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center mb-6">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--ink)]">{title}</h3>
                <p className="text-[var(--muted)] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products — ticket stubs */}
      <section className="py-24 bg-[var(--bg)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent)]">Em destaque</span>
              <h2 className="font-display text-4xl md:text-5xl mt-3 text-[var(--ink)]">SEUS PRÓXIMOS INGRESSOS</h2>
            </div>
            <Link to="/produtos" className="text-[var(--accent-2)] font-semibold flex items-center gap-1 hover:gap-2 transition-all">
              Ver tudo <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map(p => (
              <Link
                to="/produtos"
                key={p.id}
                className="ticket-notch relative flex rounded-2xl overflow-hidden bg-[var(--surface-2)] border border-white/10 hover:border-[var(--accent)]/50 hover:-translate-y-1 transition-all shadow-xl"
              >
                <div className="w-2/5 relative">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--surface-2)]/60"></div>
                </div>
                <div className="w-px ticket-perf"></div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent-2)]">{p.category}</span>
                    <h3 className="text-lg font-bold text-[var(--ink)] mt-1 mb-2">{p.name}</h3>
                    <p className="text-sm text-[var(--muted)] line-clamp-2">{p.description}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-mono text-xl font-bold text-[var(--accent)]">
                      R$ {Math.min(...p.variations.map(v => v.price)).toFixed(2).replace('.', ',')}
                    </span>
                    <ArrowRight size={18} className="text-[var(--muted)]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-[var(--surface)] overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent)]">Comunidade</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3 mb-6 text-[var(--ink)]">JUNTE-SE A QUEM JÁ CONFIA</h2>
            <p className="text-lg text-[var(--muted)] mb-8 max-w-xl">
              Nossa missão é tornar a compra de produtos digitais simples, rápida e sem dor de cabeça — do pedido ao pós-venda.
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <img key={i} src={`https://picsum.photos/seed/${i + 10}/100/100`} className="w-12 h-12 rounded-full border-2 border-[var(--surface)] object-cover" alt="Cliente" />
                 ))}
               </div>
               <span className="font-semibold text-[var(--ink)]">+5.000 clientes atendidos</span>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 p-3 bg-[var(--surface-2)] rounded-3xl shadow-2xl overflow-hidden border border-white/10 rotate-1 hover:rotate-0 transition-transform duration-500">
              <img src="https://picsum.photos/seed/showcase/600/420" className="rounded-2xl w-full" alt="Vitrine de produtos" />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[var(--accent-2)] rounded-full -z-0 blur-[70px] opacity-40"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
