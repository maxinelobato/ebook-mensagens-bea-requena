
import React, { useState, useEffect } from 'react';

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 left-0 w-full px-6 transition-all duration-500 z-50 md:hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <a 
        href="#comprar"
        className="block w-full bg-[#A1664F] text-white text-center py-4 rounded-xl font-bold shadow-2xl"
      >
        EU QUERO O GUIA (R$ 47,00)
      </a>
    </div>
  );
};
