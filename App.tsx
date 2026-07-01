import React, { useState, useMemo, useEffect } from 'react';
// Changed import from 'react-router-dom' to 'react-router' to fix missing exports in the environment
import { HashRouter as Router, Routes, Route, Link } from 'react-router';
import { ShoppingCart, Menu, X, Send, Info, Home as HomeIcon, Package, Phone, Tv } from 'lucide-react';
import { CartProvider, useCart } from './context/CartContext';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import TV from './pages/tv';
import CartModal from './components/CartModal';
import { SOCIAL_LINKS } from './constants';

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-black text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2 hover:text-orange-400 transition-colors">
            <span className="text-3xl">🛍️</span>
            <span className="tracking-tighter">BIZERRA SHOP</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center font-medium">
            <Link to="/" className="hover:text-orange-400 transition-colors">Início</Link>
            <Link to="/produtos" className="hover:text-orange-400 transition-colors">Produtos</Link>
            <Link to="/tv" className="hover:text-orange-400 transition-colors flex items-center gap-1"><Tv size={18}/> TV</Link>
            <Link to="/contato" className="hover:text-orange-400 transition-colors">Contato</Link>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-gray-800 rounded-full transition-all"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-4">
            <button onClick={() => setIsCartOpen(true)} className="relative p-2">
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-4 gap-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 py-2 text-lg font-bold"><HomeIcon size={20}/> Início</Link>
              <Link to="/produtos" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 py-2 text-lg font-bold"><Package size={20}/> Produtos</Link>
              <Link to="/tv" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 py-2 text-lg font-bold"><Tv size={20}/> TV</Link>
              <Link to="/contato" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 py-2 text-lg font-bold"><Phone size={20}/> Contato</Link>
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
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Bizerra Shop</h3>
            <p className="text-gray-400">
              Transforme sua forma de assistir. Sinta a emoção, viva o melhor do streaming com planos que cabem no seu bolso.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/produtos" className="hover:text-white transition-colors">Catálogo de Produtos</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Conecte-se</h3>
            <div className="flex flex-col items-center md:items-start gap-4">
              <a href="https://biowesleybizerra.netlify.app/" target="_blank" rel="noreferrer" className="bg-orange-500 text-white px-5 py-3 rounded-full font-bold text-sm hover:bg-orange-600 transition-colors text-center">
                CLIQUE AQUI E ENTRE EM CONTATO COM O DONO
              </a>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="bg-white p-1 rounded-full hover:scale-110 transition-transform w-9 h-9 flex items-center justify-center">
                <img src={SOCIAL_LINKS.whatsapp_icon} alt="WA" className="w-full h-full object-contain" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 BIZERRA SHOP — Conectando você ao melhor do entretenimento digital!</p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/tv" element={<TV />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
