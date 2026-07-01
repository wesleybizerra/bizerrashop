
import React, { useState, useEffect } from 'react';
// Changed import from 'react-router-dom' to 'react-router' to fix missing exports in the environment
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router';
import { ShoppingCart, Menu, X, Home as HomeIcon, Package, Tv, Ticket } from 'lucide-react';
import { CartProvider, useCart } from './context/CartContext';
import Home from './pages/Home';
import Products from './pages/Products';
import TV from './pages/tv';
import CartModal from './components/CartModal';
import { SOCIAL_LINKS } from './constants';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0B0B10]/90 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.4)]' : 'bg-[#0B0B10]'
        } border-b border-white/5`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="w-9 h-9 rounded-lg bg-[var(--accent)] text-black flex items-center justify-center font-display text-xl group-hover:rotate-3 transition-transform">B</span>
            <span className="font-display text-2xl md:text-3xl tracking-widest text-[var(--ink)]">BIZERRA <span className="text-[var(--accent)]">SHOP</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center font-semibold text-sm uppercase tracking-wide text-[var(--muted)]">
            <Link to="/" className="hover:text-[var(--accent)] transition-colors">Início</Link>
            <Link to="/produtos" className="hover:text-[var(--accent)] transition-colors">Produtos</Link>
            <Link to="/tv" className="hover:text-[var(--accent)] transition-colors flex items-center gap-1"><Tv size={16}/> Destaques</Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-white/5 rounded-full transition-all text-[var(--ink)]"
              aria-label="Abrir carrinho"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[var(--accent)] text-black text-[11px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-3 text-[var(--ink)]">
            <button onClick={() => setIsCartOpen(true)} className="relative p-2" aria-label="Abrir carrinho">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[var(--accent)] text-black text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[var(--surface)] border-t border-white/5">
            <div className="flex flex-col p-4 gap-1">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-3 px-2 rounded-lg hover:bg-white/5 font-semibold text-[var(--ink)]"><HomeIcon size={18}/> Início</Link>
              <Link to="/produtos" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-3 px-2 rounded-lg hover:bg-white/5 font-semibold text-[var(--ink)]"><Package size={18}/> Produtos</Link>
              <Link to="/tv" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-3 px-2 rounded-lg hover:bg-white/5 font-semibold text-[var(--ink)]"><Tv size={18}/> Destaques</Link>
            </div>
          </div>
        )}
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08080C] text-[var(--ink)] pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--accent)]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          <div>
            <h3 className="font-display text-2xl tracking-widest mb-4 text-[var(--accent)]">BIZERRA SHOP</h3>
            <p className="text-[var(--muted)] leading-relaxed">
              Uma loja digital pensada para ser rápida, direta e confiável — do primeiro clique até a entrega.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl tracking-widest mb-4">LINKS RÁPIDOS</h3>
            <ul className="space-y-3 text-[var(--muted)]">
              <li><Link to="/" className="hover:text-[var(--accent)] transition-colors">Início</Link></li>
              <li><Link to="/produtos" className="hover:text-[var(--accent)] transition-colors">Catálogo de Produtos</Link></li>
              <li><Link to="/tv" className="hover:text-[var(--accent)] transition-colors">Destaques</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl tracking-widest mb-4 text-[var(--accent)]">CONECTE-SE</h3>
            <div className="flex flex-col items-center md:items-start gap-4">
              <a href="https://biowesleybizerra.netlify.app/" target="_blank" rel="noreferrer" className="bg-[var(--accent)] text-black px-5 py-3 rounded-full font-bold text-sm hover:brightness-110 transition-all text-center shadow-[0_8px_24px_rgba(255,106,26,0.35)]">
                FALE COM O RESPONSÁVEL
              </a>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="bg-white p-1 rounded-full hover:scale-110 transition-transform w-9 h-9 flex items-center justify-center">
                <img src={SOCIAL_LINKS.whatsapp_icon} alt="WhatsApp" className="w-full h-full object-contain" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-[var(--muted)] text-sm flex items-center justify-center gap-2">
          <Ticket size={14} className="text-[var(--accent)]" />
          <p>© 2026 BIZERRA SHOP — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/tv" element={<TV />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
