/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Movie } from '../types';
import { UpcomingGridCard } from './UpcomingGridCard';

interface UpcomingCarouselProps {
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

export const UpcomingCarousel: React.FC<UpcomingCarouselProps> = ({ movies, onMovieClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  // Triple the movies to simulate infinity
  const infiniteMovies = [...movies, ...movies, ...movies];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth } = scrollRef.current;
      const singleSetWidth = scrollWidth / 3;

      // If we scroll too far left (into the first set), jump to the middle set
      if (scrollLeft < singleSetWidth * 0.5) {
        scrollRef.current.scrollLeft = scrollLeft + singleSetWidth;
      }
      // If we scroll too far right (into the third set), jump to the middle set
      else if (scrollLeft > singleSetWidth * 1.5) {
        scrollRef.current.scrollLeft = scrollLeft - singleSetWidth;
      }
    }
  };

  useEffect(() => {
    if (scrollRef.current && !isReady) {
      const { scrollWidth } = scrollRef.current;
      // Start in the middle set
      scrollRef.current.scrollLeft = scrollWidth / 3;
      setIsReady(true);
    }
  }, [isReady]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector('.snap-center');
      if (firstCard) {
        const cardWidth = (firstCard as HTMLElement).offsetWidth;
        const gap = window.innerWidth < 768 ? 16 : 32;
        const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`relative group/carousel transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -left-4 md:left-0 lg:-left-8 -translate-y-1/2 z-40 hidden md:flex items-center justify-between w-[calc(100%+2rem)] md:w-full lg:w-[calc(100%+4rem)] pointer-events-none px-4 md:px-2 lg:px-0">
        <button 
          onClick={() => scroll('left')}
          className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-xl text-white flex items-center justify-center shadow-2xl transition-all pointer-events-auto border border-white/10 hover:bg-white/20"
          aria-label="Scorri a sinistra"
        >
          <ArrowLeft size={20} className="md:w-6 md:h-6" />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-xl text-white flex items-center justify-center shadow-2xl transition-all pointer-events-auto border border-white/10 hover:bg-white/20"
          aria-label="Scorri a destra"
        >
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </button>
      </div>

      {/* Carousel Container with Faded Edges */}
      <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
        {/* Gradient Overlays for "Sfumato" effect */}
        <div className="absolute inset-y-0 left-0 w-6 md:w-32 lg:w-64 bg-gradient-to-r from-cinema-dark via-cinema-dark/80 to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-6 md:w-32 lg:w-64 bg-gradient-to-l from-cinema-dark via-cinema-dark/80 to-transparent z-30 pointer-events-none" />

        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-12 px-10 md:px-[5%] lg:px-[10%]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {infiniteMovies.map((movie, index) => (
            <div key={`${movie.id}-${index}`} className="flex-shrink-0 w-[80vw] md:w-[70vw] lg:w-[1000px] snap-center">
              <UpcomingGridCard movie={movie} index={index % movies.length} onClick={() => onMovieClick(movie)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
