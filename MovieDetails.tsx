import React, { useState, useEffect } from 'react';
import { Play, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Movie } from '../types';

interface HeroProps {
  featuredMovie: Movie;
  onMovieClick: (movie: Movie) => void;
}

export const Hero: React.FC<HeroProps> = ({ featuredMovie, onMovieClick }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    setShowTrailer(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background - Trailer del film di punta */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black" />
        
        <AnimatePresence mode="wait">
          {!showTrailer ? (
            <motion.img 
              key="hero-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              src={featuredMovie.image}
              alt={featuredMovie.title}
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
          ) : (
            <motion.div
              key="hero-trailer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full"
            >
              <iframe 
                className="w-full h-full object-cover scale-[1.2] md:scale-[1.1] opacity-100 transition-opacity duration-1000 md:object-right"
                src={`${featuredMovie.trailer}?autoplay=1&mute=1&loop=1&playlist=${featuredMovie.trailer.split('/').pop()}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`} 
                title={`${featuredMovie.title} Trailer`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stronger gradient on the left for desktop, bottom for mobile to protect text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-cinema-dark via-cinema-dark/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-cinema-dark via-transparent to-transparent z-10" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-12 md:py-20 lg:py-24 z-20">
        {/* Top Content: Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl drop-shadow-2xl"
        >
          <h2 className="text-cinema-gold text-[10px] md:text-xs lg:text-sm font-black uppercase tracking-[0.5em] mb-2 md:mb-4 lg:mb-6 drop-shadow-md">Film della settimana</h2>
          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter text-white drop-shadow-2xl">
            {featuredMovie.title.toUpperCase()}
          </h1>
        </motion.div>

        {/* Bottom Content: Time and Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 lg:gap-12"
        >
          <div className="inline-flex items-center gap-4 md:gap-6 lg:gap-8 p-3 md:p-6 lg:p-8 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl md:rounded-[2.5rem] group/showtime shadow-2xl">
            <div className="w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-xl md:rounded-2xl lg:rounded-3xl bg-cinema-red/20 flex items-center justify-center border border-cinema-red/30 group-hover/showtime:scale-110 transition-transform duration-500">
              <Clock size={18} className="text-cinema-red md:w-7 md:h-7 lg:w-10 lg:h-10" />
            </div>
            <div className="pr-4 md:pr-0">
              <p className="text-[7px] md:text-[10px] lg:text-xs font-black text-cinema-gold uppercase tracking-[0.3em] mb-0.5 md:mb-1 lg:mb-2">Prossimo Spettacolo</p>
              <div className="flex items-baseline gap-2 lg:gap-4">
                 <span className="text-xl md:text-4xl lg:text-6xl font-black text-white tracking-tighter">{featuredMovie.time}</span>
                 <span className="text-[7px] md:text-[10px] lg:text-xs font-bold text-gray-400 uppercase tracking-widest">Oggi</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 lg:gap-6">
            <button 
              onClick={() => onMovieClick(featuredMovie)}
              className="w-full sm:w-auto flex items-center justify-center gap-3 lg:gap-5 px-8 md:px-12 lg:px-16 py-4 md:py-6 lg:py-8 bg-cinema-red text-white rounded-full font-black text-[10px] md:text-sm lg:text-base uppercase tracking-widest transition-all hover:scale-105 hover:bg-red-700 active:scale-95 shadow-2xl shadow-cinema-red/40"
            >
              <Play size={16} className="md:w-[18px] lg:w-6 lg:h-6" />
              Dettagli Film
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
