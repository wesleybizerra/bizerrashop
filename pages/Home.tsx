import React from 'react';
// Changed import from 'react-router-dom' to 'react-router' to resolve missing export errors
import { Link } from 'react-router';
import { Rocket, Heart, ShieldCheck, Star } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-400 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="container mx-auto px-4 text-center z-10 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-xl animate-in slide-in-from-bottom duration-1000">
            Bem-vindo à Bizerra Shop
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto drop-shadow-md">
            Transforme sua forma de assistir. Sinta a emoção, viva o melhor do streaming agora mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/produtos" 
              className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-900 hover:scale-105 transition-all shadow-xl"
            >
              Explorar Produtos
            </Link>
            <a 
              href={SOCIAL_LINKS.whatsapp} 
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-white/20 backdrop-blur-md text-white border-2 border-white/50 rounded-full font-bold text-lg hover:bg-white/30 transition-all"
            >
              Fale Conosco
            </a>
          </div>
        </div>

        {/* Floating elements simulation */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </section>

      {/* (restante da página permanece igual — seções de recursos/benefícios abaixo do hero) */}
    </div>
  );
};

export default Home;
