
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight, Loader2, Ticket } from 'lucide-react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleCheckout = () => {
    if (cart.length === 0) return;

    setIsLoading(true);
    window.location.href = 'https://api.whatsapp.com/send/?phone=71981574664&text&type=phone_number&app_absent=0';
  };

  return (
    <div className="fixed inset-0 z-[120] overflow-hidden">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-[var(--surface-2)] shadow-2xl border-l border-white/10 overflow-hidden">
            <div className="px-6 py-6 bg-[var(--surface)] border-b border-white/10 flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--ink)]">
                <Ticket className="text-[var(--accent)]" />
                Seus Ingressos ({totalItems})
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-[var(--ink)]">
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto px-6 py-4 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-4 text-[var(--muted)]">
                    <ShoppingBag size={40} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--ink)]">Seu carrinho está vazio</h3>
                  <p className="text-sm text-[var(--muted)] mt-1">Escolha algo no catálogo para começar.</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="ticket-notch relative flex gap-4 p-4 rounded-2xl bg-[var(--surface)] border border-white/10">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl shadow-sm" />
                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div className="min-w-0">
                          <h4 className="font-bold text-sm truncate text-[var(--ink)]">{item.name}</h4>
                          <p className="text-[10px] text-[var(--accent-2)] font-mono font-bold uppercase leading-tight mt-1">{item.variationName}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="flex-shrink-0 text-red-400 hover:text-red-500 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center gap-3 bg-[var(--surface-2)] border border-white/10 rounded-lg px-2 py-1">
                          <button onClick={() => updateQuantity(item.id, -1)} className="text-[var(--ink)] hover:text-[var(--accent)]"><Minus size={14} /></button>
                          <span className="font-bold text-sm w-4 text-center text-[var(--ink)]">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="text-[var(--ink)] hover:text-[var(--accent)]"><Plus size={14} /></button>
                        </div>
                        <span className="font-mono font-bold text-[var(--ink)]">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 bg-[var(--surface)] border-t border-white/10">
                <div className="flex justify-between mb-4">
                  <span className="text-[var(--muted)] font-bold">Total do Pedido</span>
                  <span className="font-mono text-2xl font-bold text-[var(--ink)]">R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="w-full bg-[var(--accent)] text-black py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-95 disabled:opacity-50 shadow-[0_10px_30px_rgba(255,106,26,0.35)]"
                >
                  {isLoading ? <Loader2 className="animate-spin" /> : <><ArrowRight size={24} /> Finalizar Agora</>}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
