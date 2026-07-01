
import React, { useState } from 'react';
import { INITIAL_PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { Plus, Check, Package, X, ArrowRight, Ticket } from 'lucide-react';
import { Product, Variation } from '../types';

const Products: React.FC = () => {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [addedId, setAddedId] = useState<string | null>(null);

  const categories = ['Todos', ...Array.from(new Set(INITIAL_PRODUCTS.map(p => p.category)))];

  const filteredProducts = filter === 'Todos'
    ? INITIAL_PRODUCTS
    : INITIAL_PRODUCTS.filter(p => p.category === filter);

  const handleAddToCart = (product: Product, variation: Variation) => {
    addToCart(product, variation);
    setAddedId(`${product.id}_${variation.name}`);
    setTimeout(() => setAddedId(null), 2000);
    setSelectedProduct(null);
  };

  return (
    <div className="py-16 bg-[var(--bg)] min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent)]">Catálogo completo</span>
            <h1 className="font-display text-5xl md:text-6xl mt-2 text-[var(--ink)]">NOSSOS PRODUTOS</h1>
            <p className="text-[var(--muted)] mt-2">Escolha sua opção favorita e finalize em segundos.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                  filter === cat
                    ? 'bg-[var(--accent)] text-black border-[var(--accent)] shadow-[0_6px_20px_rgba(255,106,26,0.35)]'
                    : 'bg-[var(--surface-2)] text-[var(--muted)] border-white/10 hover:border-[var(--accent)]/40 hover:text-[var(--ink)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="ticket-notch group relative flex flex-col bg-[var(--surface-2)] rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--accent)]/50 hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-2)] via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/60 backdrop-blur-md text-[var(--accent-2)] px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="w-full ticket-perf h-px"></div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">{product.name}</h3>
                <p className="text-[var(--muted)] text-sm mb-4 line-clamp-2">{product.description}</p>

                <div className="mt-auto pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[var(--muted)] font-mono uppercase tracking-tighter">A partir de</span>
                    <div className="text-xl font-bold font-mono text-[var(--accent)]">
                      R$ {Math.min(...product.variations.map(v => v.price)).toFixed(2).replace('.', ',')}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="bg-[var(--accent)] text-black px-4 py-2 rounded-xl font-bold text-sm hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_6px_18px_rgba(255,106,26,0.3)]"
                  >
                    Ver Opções <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <Package size={64} className="mx-auto text-white/10 mb-4" />
            <h3 className="text-xl font-semibold text-[var(--muted)]">Nenhum produto encontrado nesta categoria.</h3>
          </div>
        )}
      </div>

      {/* Variation Selection Modal — ticket style */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}></div>
          <div className="relative bg-[var(--surface-2)] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[var(--surface)]">
              <div className="flex items-center gap-2">
                <Ticket className="text-[var(--accent)]" size={22} />
                <h2 className="text-xl font-bold text-[var(--ink)]">{selectedProduct.name}</h2>
              </div>
              <button onClick={() => setSelectedProduct(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-[var(--ink)]">
                <X size={22} />
              </button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
              {selectedProduct.variations.map((v, idx) => (
                <div
                  key={idx}
                  className="ticket-notch relative flex items-center justify-between p-5 rounded-2xl bg-[var(--surface)] border border-white/10 hover:border-[var(--accent)] transition-all cursor-pointer group"
                  onClick={() => handleAddToCart(selectedProduct, v)}
                >
                  <div className="flex-grow pr-4">
                    <h4 className="font-bold text-[var(--ink)] leading-tight mb-1">{v.name}</h4>
                    <span className="font-mono text-2xl font-bold text-[var(--accent)]">R$ {v.price.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <div className="bg-[var(--accent)] text-black p-3 rounded-xl group-hover:scale-110 transition-transform">
                    {addedId === `${selectedProduct.id}_${v.name}` ? <Check size={20} /> : <Plus size={20} />}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-[var(--surface)] text-center text-sm text-[var(--muted)] font-medium">
              Selecione uma opção para adicionar ao carrinho.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
