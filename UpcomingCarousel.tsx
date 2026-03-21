/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Movie } from '../types';
import { MovieCard } from './MovieCard';

interface TodaySectionProps {
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

export const TodaySection: React.FC<TodaySectionProps> = ({ movies, onMovieClick }) => {
  return (
    <section id="oggi" className="py-20 md:py-32 bg-cinema-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="relative">
            <h2 className="text-cinema-gold text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-4 relative">Programmazione</h2>
            <h3 className="text-5xl md:text-8xl font-black tracking-tighter relative">Oggi in Sala</h3>
          </div>
        </div>

        <div className="flex flex-col gap-16 max-w-6xl mx-auto">
          {movies.map((movie) => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onClick={() => onMovieClick(movie)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
