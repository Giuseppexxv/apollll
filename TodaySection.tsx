import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  ArrowLeft, 
  User, 
  Ticket, 
  MessageCircle, 
  Facebook, 
  Instagram 
} from 'lucide-react';
import { Movie } from '../types';
import { TrailerPlayer } from './TrailerPlayer';

interface MovieDetailsProps {
  movie: Movie;
  onBack: () => void;
}

export const MovieDetails: React.FC<MovieDetailsProps> = ({ movie, onBack }) => {
  const [playTrailer, setPlayTrailer] = useState(false);

  useEffect(() => {
    setPlayTrailer(true);
  }, []);

  return (
    <motion.div
      initial={{ y: '-100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', damping: 25, stiffness: 120 }}
      className="pb-24 bg-cinema-dark min-h-screen"
    >
      {/* Movie Detail View - Trailer Section */}
      <div className="relative w-full aspect-video md:h-[75vh] overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            {!playTrailer ? (
              <motion.img 
                key="detail-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover opacity-40"
                referrerPolicy="no-referrer"
              />
            ) : (
              <motion.div
                key="detail-trailer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="w-full h-full"
              >
                <iframe 
                  className="w-full h-full object-cover scale-[1.2] md:scale-[1.3] opacity-100"
                  src={`${movie.trailer}?autoplay=1&mute=1&loop=1&playlist=${movie.trailer.split('/').pop()}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`}
                  title={movie.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-cinema-dark via-transparent to-transparent" />
        </div>
      </div>

      {/* Title & Info Section - Now below the trailer */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex-grow"
            >
              <div className="flex items-center gap-3 mb-3 md:mb-6">
                <span className="px-2 md:px-3 py-1 bg-cinema-red text-white text-[10px] md:text-xs font-black uppercase tracking-widest rounded">
                  {movie.pegi}
                </span>
                <span className="text-cinema-gold font-bold tracking-widest text-[10px] md:text-sm uppercase">
                  {movie.genre} • {movie.duration}
                </span>
              </div>
              <h1 className="text-4xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-[0.85] text-white text-shadow-cinema">
                {movie.title.split(':').map((part: string, i: number) => (
                  <span key={i} className={i > 0 ? "text-cinema-red block" : "block"}>
                    {i > 0 ? `:${part}` : part}
                  </span>
                ))}
              </h1>
              <div className="flex flex-wrap items-center gap-4 md:gap-8 text-gray-300 font-medium">
                <div className="flex items-center gap-2">
                  <Star size={18} className="text-cinema-gold fill-cinema-gold md:w-5 md:h-5" />
                  <span className="text-lg md:text-xl font-bold text-white">{movie.rating}</span>
                  <span className="text-xs md:text-sm text-gray-500">/ 10</span>
                </div>
                <div className="hidden md:block h-4 w-px bg-white/20" />
                <p className="text-base md:text-lg italic font-serif text-gray-400">Regia di {movie.director}</p>
              </div>
            </motion.div>

            {/* Prossimo Spettacolo */}
            {!movie.isUpcoming && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, type: 'spring' }}
                className="bg-white text-black p-6 md:p-10 lg:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden group min-w-[200px] md:min-w-[280px] lg:min-w-[320px] md:mb-4 self-start md:self-end"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
                  <Ticket size={120} />
                </div>
                <h3 className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-3 md:mb-6">Prossimo Spettacolo</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter">{movie.time}</span>
                  <span className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">Oggi</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Close Button */}
      <button 
        onClick={onBack}
        aria-label="Chiudi dettagli film"
        className="fixed bottom-8 left-8 z-[100] flex items-center gap-3 px-6 py-4 bg-orange-500 text-white rounded-full shadow-2xl shadow-orange-500/40 hover:bg-orange-600 transition-all group hover:scale-105 active:scale-95"
      >
        <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
        <span className="text-xs font-black uppercase tracking-[0.2em]">Chiudi</span>
      </button>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Synopsis Section */}
            <section>
              <h3 className="text-xs font-black text-cinema-red uppercase tracking-[0.4em] mb-6">Sinossi</h3>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                {movie.synopsis}
              </p>
            </section>

            {/* Cast Section */}
            <section>
              <h3 className="text-xs font-black text-cinema-red uppercase tracking-[0.4em] mb-8">Cast Principale</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {movie.cast.map((actor: string) => (
                  <div key={actor} className="group cursor-default">
                    <div className="w-full aspect-square bg-white/5 rounded-2xl mb-3 border border-white/5 flex items-center justify-center group-hover:border-cinema-red/50 transition-colors">
                      <User size={32} className="text-gray-600 group-hover:text-cinema-red transition-colors" />
                    </div>
                    <p className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{actor}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Attore</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Trailer Section */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xs font-black text-cinema-red uppercase tracking-[0.4em]">Trailer Ufficiale</h3>
                <div className="h-px flex-grow bg-white/10 ml-8" />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                <TrailerPlayer 
                  url={movie.trailer} 
                  title={`${movie.title} Trailer`} 
                />
              </div>
            </section>
          </div>

          {/* Sidebar Info & Actions */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10">
              <h3 className="text-xs font-black text-cinema-gold uppercase tracking-[0.3em] mb-8">Info Tecniche</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-xs text-gray-500 uppercase font-bold">Regia</span>
                  <span className="text-sm font-bold text-white">{movie.director}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-xs text-gray-500 uppercase font-bold">Paese</span>
                  <span className="text-sm font-bold text-white">{movie.country}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-xs text-gray-500 uppercase font-bold">Uscita</span>
                  <span className="text-sm font-bold text-white">{movie.releaseDate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 uppercase font-bold">Rating</span>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-cinema-gold fill-cinema-gold" />
                    <span className="text-sm font-bold text-white">{movie.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Share */}
            <div className="p-8">
              <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] mb-6 text-center">Condividi</h3>
              <div className="flex justify-center gap-6">
                <a 
                  href={`https://wa.me/?text=${encodeURIComponent(`Guarda ${movie.title} al Cinema Teatro Apollo! ${window.location.href}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25D366] transition-all hover:scale-110"
                >
                  <MessageCircle size={20} />
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877F2] transition-all hover:scale-110"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href={`https://www.instagram.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] transition-all hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
