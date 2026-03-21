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

interface UpcomingGridCardProps {
  movie: Movie;
  index: number;
  onClick: () => void;
}

export const UpcomingGridCard: React.FC<UpcomingGridCardProps> = React.memo(({ movie, index, onClick }) => {
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
      viewport={{ once: true }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="relative w-full md:aspect-[21/9] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group cursor-pointer border border-white/5 shadow-xl transition-all duration-500 hover:shadow-cinema-red/10 bg-cinema-card flex flex-col"
    >
      {/* Media Container */}
      <div className="relative aspect-video md:absolute md:inset-0 overflow-hidden">
        <img 
          src={movie.image} 
          alt={movie.title}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${showTrailer ? 'scale-110 opacity-0' : 'scale-100 grayscale group-hover:grayscale-0'}`}
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
              <div className="absolute inset-0 bg-black/10 md:bg-black/20" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Gradients */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/40 to-transparent z-20" />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20" />
      
      {/* Content Overlay */}
      <div className="relative p-5 md:absolute md:inset-0 md:p-10 flex flex-col justify-end z-30 bg-cinema-card md:bg-transparent">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-3 md:w-4 h-px bg-cinema-red" />
          <p className="text-cinema-gold text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">{movie.genre}</p>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-4">
          <div className="max-w-2xl">
            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black tracking-tighter group-hover:text-cinema-red transition-colors line-clamp-1 leading-tight mb-2 md:mb-4">{movie.title}</h4>
            <div className="flex items-center gap-4 md:gap-6">
              <div>
                <p className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5 md:mb-1">Uscita</p>
                <p className="text-xs md:text-xl font-black text-white">{movie.releaseDate}</p>
              </div>
            </div>
          </div>
          
          <div className="w-10 h-10 md:w-20 md:h-20 rounded-full bg-cinema-red text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform self-end md:self-auto">
            <Play size={16} className="md:w-8 md:h-8 ml-0.5 md:ml-1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
});
