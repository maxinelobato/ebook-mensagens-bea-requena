
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 p-6 md:p-8 flex justify-center">
      <div className="max-w-7xl w-full flex justify-between items-center">
        {/* Placeholder for the Bea Requena Logo */}
        <div className="flex flex-col items-center">
           <span className="text-xl md:text-2xl font-serif tracking-widest uppercase text-[#A1664F]">Bea Requena</span>
           <span className="text-[10px] uppercase tracking-[0.3em] -mt-1 opacity-70">Ateliê de Confeitaria</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider text-[#A1664F]">
          <a href="#beneficios" className="hover:opacity-70 transition-opacity">Conteúdo</a>
          <a href="#autora" className="hover:opacity-70 transition-opacity">Sobre</a>
          <a href="#comprar" className="hover:opacity-70 transition-opacity">Garantir Ebook</a>
        </div>
      </div>
    </nav>
  );
};
