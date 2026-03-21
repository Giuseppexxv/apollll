/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play } from 'lucide-react';
import { Movie } from '../types';
import { getTrailerPreviewUrl } from '../utils';
import { useAutoTrailer } from '../hooks/useAutoTrailer';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export const MovieCard: React.FC<MovieCardProps> = React.memo(({ movie, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldAutoPlay = useAutoTrailer(cardRef);

  const showTrailer = (isHovered && window.innerWidth >= 768) || shouldAutoPlay;

  return (
    <motion.div 
      ref={cardRef}
      whileHover={{ scale: 1.01 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className="relative w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-[21/9] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group cursor-pointer border border-white/5 shadow-2xl"
    >
      {/* Media Container - On mobile it's the top part, on desktop it's the background */}
      <div className="absolute top-0 left-0 w-full h-[55%] md:h-full z-10 overflow-hidden">
        <img 
          src={movie.image} 
          alt={movie.title}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${showTrailer ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}
          referrerPolicy="no-referrer"
        />
        
        <AnimatePresence>
          {showTrailer && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 z-10 pointer-events-none"
            >
              <iframe
                src={getTrailerPreviewUrl(movie.trailer)}
                className="w-full h-full object-cover"
                frameBorder="0"
                allow="autoplay; encrypted-media"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Gradient for desktop to blend into text */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-20" />
      </div>

      {/* Gradients for mobile/desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20" />
      
      {/* Content */}
      <div className="absolute inset-0 p-5 md:p-10 flex flex-col justify-end z-30">
        {/* Mobile specific gradient for text readability */}
        <div className="md:hidden absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-cinema-dark via-cinema-dark/90 to-transparent -z-10" />
        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
          <div className="bg-black/40 backdrop-blur-md px-2 py-0.5 md:py-1 rounded text-cinema-gold text-[9px] md:text-xs font-bold border border-cinema-gold/30">
            ★ {movie.rating}
          </div>
          <span className="px-2 md:px-3 py-0.5 md:py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[8px] md:text-[10px] font-black text-gray-300 uppercase tracking-widest">
            {movie.pegi}
          </span>
          <span className="text-cinema-gold text-[8px] md:text-[10px] font-black uppercase tracking-widest">{movie.genre} • {movie.duration}</span>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-6">
          <div className="max-w-xl">
            <h4 className="text-2xl sm:text-3xl md:text-5xl font-black mb-1 md:mb-4 tracking-tighter group-hover:text-cinema-red transition-colors leading-none">{movie.title}</h4>
            <p className="text-gray-400 text-xs md:text-base font-medium line-clamp-2 mb-0">{movie.synopsis}</p>
          </div>
          
          <div className="flex items-center justify-between md:justify-end gap-4 md:gap-6 flex-shrink-0 mt-1 md:mt-0">
            <div className="text-left md:text-right">
              <p className="text-[7px] md:text-[10px] font-black text-gray-500 uppercase tracking-widest mb-0.5 md:mb-1">Prossimo Spettacolo</p>
              <p className="text-xl md:text-3xl font-black text-white">{movie.time}</p>
            </div>
            <div className="flex items-center gap-2 md:gap-3 px-5 md:px-8 py-2.5 md:py-4 bg-cinema-red text-white rounded-full shadow-2xl shadow-cinema-red/40 group-hover:scale-110 transition-transform">
              <Play size={14} className="md:w-5 md:h-5 ml-0.5 md:ml-1" />
              <span className="text-[9px] md:text-xs font-black uppercase tracking-widest">Dettagli</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});
