/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { Movie } from './types';
import { MOVIES_TODAY, UPCOMING_MOVIES } from './data/movies';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Newsletter } from './components/Newsletter';
import { MovieDetails } from './components/MovieDetails';
import { TodaySection } from './components/TodaySection';
import { UpcomingSection } from './components/UpcomingSection';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);
      setShowBackToTop(currentScrollY > 400);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (selectedMovie) {
      window.scrollTo(0, 0);
    }
  }, [selectedMovie]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleBackToHome = () => {
    setSelectedMovie(null);
    window.scrollTo(0, 0);
  };

  const weeklyChoice = MOVIES_TODAY.find(m => m.isWeeklyChoice) || MOVIES_TODAY[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        isScrolled={isScrolled}
        isVisible={isVisible}
        isMenuOpen={isMenuOpen}
        isMovieSelected={!!selectedMovie}
        setIsMenuOpen={setIsMenuOpen}
        handleBackToHome={handleBackToHome}
        setSelectedMovie={setSelectedMovie}
      />

      <main className={`flex-grow ${selectedMovie ? 'pt-16' : 'pt-24 md:pt-32'}`}>
        {selectedMovie ? (
          <MovieDetails 
            movie={selectedMovie} 
            onBack={handleBackToHome} 
          />
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Hero 
                featuredMovie={weeklyChoice} 
                onMovieClick={setSelectedMovie} 
              />
            </motion.div>

            <TodaySection 
              movies={MOVIES_TODAY} 
              onMovieClick={setSelectedMovie} 
            />

            <UpcomingSection 
              movies={UPCOMING_MOVIES} 
              onMovieClick={setSelectedMovie} 
            />

            <Newsletter />
          </>
        )}
      </main>

      <Footer />

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-cinema-red text-white rounded-full shadow-2xl shadow-cinema-red/40 hover:bg-red-700 transition-all hover:scale-110 active:scale-95"
            aria-label="Torna su"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
