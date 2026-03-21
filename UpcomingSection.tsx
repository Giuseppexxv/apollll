/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Calendar } from 'lucide-react';
import { Movie } from '../types';
import { getTrailerPreviewUrl } from '../utils';
import { useAutoTrailer } from '../hooks/useAutoTrailer';

interface UpcomingFeaturedCardProps {
  movie: Movie;
  onClick: () => void;
}

export const UpcomingFeaturedCard: React.FC<UpcomingFeaturedCardProps> = React.memo(({ movie, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [showHoverTrailer, setShowHoverTrailer] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldAutoPlay = useAutoTrailer(cardRef);

  const handleMouseEnter = () => {
    setIsHovered(true);
    const timer = setTimeout(() => {
      setShowHoverTrailer(true);
    }, 5000);
    setHoverTimeout(timer);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowHoverTrailer(false);
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const showTrailer = showHoverTrailer || shouldAutoPlay;

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="relative w-full md:aspect-[21/9] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden mb-12 md:mb-20 group cursor-pointer border border-white/5 shadow-2xl bg-cinema-card flex flex-col"
    >
      {/* Media Container */}
      <div className="relative aspect-video md:absolute md:inset-0 overflow-hidden">
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
              <div className="absolute inset-0 bg-black/20 md:bg-black/40" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Gradients */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-20" />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20" />
      
      {/* Content */}
      <div className="relative p-6 md:absolute md:inset-0 md:p-12 flex flex-col justify-end max-w-2xl z-30 bg-cinema-card md:bg-transparent">
        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
          <span className="px-2 md:px-3 py-0.5 md:py-1 bg-cinema-red text-white text-[8px] md:text-[10px] font-black uppercase tracking-widest rounded-full">In Primo Piano</span>
          <span className="text-cinema-gold text-[8px] md:text-[10px] font-black uppercase tracking-widest">{movie.genre}</span>
        </div>
        <h4 className="text-3xl md:text-5xl lg:text-7xl font-black mb-3 md:mb-6 tracking-tighter group-hover:text-cinema-red transition-colors leading-none">{movie.title}</h4>
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-cinema-red md:w-5 md:h-5" />
            <span className="text-sm md:text-lg font-bold">{movie.releaseDate}</span>
          </div>
          <div className="hidden md:block h-4 w-px bg-white/20" />
          <p className="text-gray-400 text-xs md:text-base font-medium line-clamp-2 md:line-clamp-1 mb-0">{movie.synopsis}</p>
        </div>
      </div>
      
      <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-10 group-hover:translate-x-0 z-30">
        <div className="flex items-center gap-4 px-10 py-5 rounded-full bg-cinema-red text-white shadow-2xl shadow-cinema-red/40 hover:bg-red-700 transition-all duration-300">
          <Play size={24} className="ml-1" />
          <span className="text-sm font-black uppercase tracking-widest">Dettagli Film</span>
        </div>
      </div>
    </motion.div>
  );
});
