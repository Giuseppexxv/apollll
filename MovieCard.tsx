import React from 'react';
import { Ticket, Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Movie } from '../types';

interface HeaderProps {
  isScrolled: boolean;
  isVisible: boolean;
  isMenuOpen: boolean;
  isMovieSelected: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  handleBackToHome: () => void;
  setSelectedMovie: (movie: Movie | null) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isScrolled,
  isVisible,
  isMenuOpen,
  isMovieSelected,
  setIsMenuOpen,
  handleBackToHome,
  setSelectedMovie,
}) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled || isMenuOpen || isMovieSelected ? 'glass-effect py-0' : 'bg-transparent py-3 md:py-6'} ${isVisible || isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className={`relative flex items-center transition-all duration-700 ease-in-out ${isScrolled || isMenuOpen || isMovieSelected ? 'h-16' : 'h-20 md:h-24 lg:h-28'}`}>
          
          {/* Left Navigation (Desktop/Tablet) */}
          <nav className="hidden md:flex flex-1 items-center gap-6 lg:gap-12">
            {[
              { label: 'Oggi in Sala', href: '#oggi' },
              { label: 'Prossimamente', href: '#prossimamente' }
            ].map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                onClick={() => setSelectedMovie(null)}
                className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-gray-300 hover:text-white transition-all relative group whitespace-nowrap text-shadow-cinema"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cinema-red transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Logo (Centered) */}
          <div 
            onClick={handleBackToHome}
            className={`flex items-center gap-2 md:gap-3 lg:gap-4 cursor-pointer group flex-shrink-0 transition-all duration-700 ${isScrolled || isMenuOpen ? 'scale-90' : 'scale-100 lg:scale-110'}`}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 bg-cinema-red rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-2xl shadow-cinema-red/40 group-hover:rotate-[15deg] transition-transform duration-500">
              <Ticket className="text-white w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg md:text-xl lg:text-2xl font-black tracking-[-0.05em] text-white">
                APOLLO
              </span>
              <span className="text-[7px] md:text-[8px] lg:text-[10px] font-bold tracking-[0.4em] lg:tracking-[0.5em] text-cinema-red mt-0.5 md:mt-1">
                CINEMA
              </span>
            </div>
          </div>

          {/* Right Navigation (Desktop/Tablet) */}
          <nav className="hidden md:flex flex-1 items-center justify-end gap-6 lg:gap-12">
            <a 
              href="#contatti" 
              onClick={() => setSelectedMovie(null)}
              className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-gray-300 hover:text-white transition-all relative group text-shadow-cinema"
            >
              Contatti
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cinema-red transition-all duration-500 group-hover:w-full" />
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white absolute right-0 transition-transform active:scale-90"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 right-0 glass-effect border-t-0 shadow-2xl overflow-hidden"
          >
            <nav className="flex flex-col py-8 px-6 gap-6">
              {[
                { label: 'Oggi in Sala', href: '#oggi' },
                { label: 'Prossimamente', href: '#prossimamente' },
                { label: 'Contatti', href: '#contatti' }
              ].map((item, index) => (
                <motion.a 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={item.href} 
                  onClick={() => { 
                    setIsMenuOpen(false); 
                    setSelectedMovie(null); 
                  }} 
                  className="text-2xl font-black tracking-tighter text-white hover:text-cinema-red transition-colors flex items-center justify-between group text-shadow-cinema"
                >
                  {item.label}
                  <div className="w-8 h-px bg-white/10 group-hover:bg-cinema-red transition-colors" />
                </motion.a>
              ))}
            </nav>
            <div className="bg-white/5 p-6 flex justify-between items-center border-t border-white/5">
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">Seguici</span>
              <div className="flex gap-6">
                <a href="#" className="text-white/60 hover:text-cinema-red transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="text-white/60 hover:text-cinema-red transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="text-white/60 hover:text-cinema-red transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
