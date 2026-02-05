
import React from 'react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <div className="flex-1">
          <Reveal delay={100}>
            <span className="inline-block px-4 py-1 rounded-full bg-[#E5D5C8] text-[#A1664F] text-xs font-bold uppercase tracking-widest mb-6">
              Guia Prático de Atendimento
            </span>
          </Reveal>
          
          <Reveal delay={300}>
            <h1 className="text-4xl md:text-6xl font-serif text-[#A1664F] leading-tight mb-6">
              Nunca mais trave na hora de responder um cliente no <span className="italic">WhatsApp</span>
            </h1>
          </Reveal>
          
          <Reveal delay={500}>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
              Mensagens prontas, claras e profissionais para você atender com segurança, se posicionar melhor e parar de perder vendas por insegurança ou medo de cobrar.
            </p>
          </Reveal>
          
          <Reveal delay={700}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#comprar" 
                className="bg-[#A1664F] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#8e5a45] transition-all transform hover:scale-105 shadow-xl shadow-[#A1664F]/20 text-center"
              >
                Quero meu Guia de Mensagens Prontas
              </a>
            </div>
          </Reveal>
        </div>
        
        <div className="flex-1 relative">
          <Reveal delay={400} direction="right">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2 max-w-[400px] mx-auto hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" 
                alt="Confeitaria Profissional" 
                className="w-full h-auto"
              />
            </div>
          </Reveal>
          
          <div className="absolute -bottom-10 -left-10 w-48 h-auto shadow-2xl rounded-3xl overflow-hidden hidden lg:block border-8 border-white bg-white p-4 animate-bounce-slow">
             <div className="space-y-2">
                <div className="h-2 w-24 bg-gray-100 rounded"></div>
                <div className="h-2 w-32 bg-[#E5D5C8] rounded"></div>
                <div className="h-2 w-20 bg-gray-100 rounded"></div>
             </div>
             <p className="text-[10px] text-[#A1664F] font-bold mt-3 italic">"Olá! Aqui está o orçamento..."</p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
