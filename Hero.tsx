import React from 'react';
import { Ticket, MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contatti" className="bg-black pt-16 md:pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-cinema-red rounded flex items-center justify-center">
                <Ticket className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                Cinema Teatro <span className="text-cinema-red">Apollo</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Portiamo la magia del grande schermo nella tua città dal 1995. Qualità audio e video all'avanguardia per un'esperienza indimenticabile.
            </p>
          </div>

          {/* Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h5 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Contatti</h5>
            <ul className="space-y-4">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 text-gray-500 text-sm">
                <MapPin size={18} className="text-cinema-red shrink-0" />
                <span>Via delle Stelle, 42<br />00100 Roma (RM)</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 text-gray-500 text-sm">
                <Phone size={18} className="text-cinema-red shrink-0" />
                <span>+39 06 123 4567</span>
              </li>
            </ul>
          </div>

          {/* Biglietteria */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h5 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Biglietteria</h5>
            <ul className="space-y-4">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 text-gray-500 text-sm">
                <Clock size={18} className="text-cinema-red shrink-0" />
                <div>
                  <p className="font-medium text-gray-300">Lun - Ven</p>
                  <p>16:00 - 22:30</p>
                </div>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 text-gray-500 text-sm">
                <Clock size={18} className="text-cinema-red shrink-0" />
                <div>
                  <p className="font-medium text-gray-300">Sab - Dom</p>
                  <p>14:30 - 23:30</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h5 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Seguici</h5>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cinema-red transition-colors group" aria-label="Instagram">
                <Instagram size={20} className="text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cinema-red transition-colors group" aria-label="Facebook">
                <Facebook size={20} className="text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cinema-red transition-colors group" aria-label="Twitter">
                <Twitter size={20} className="text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] md:text-xs text-center md:text-left">
            © 2026 Cinema Teatro Apollo. Tutti i diritti riservati.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-600 text-[10px] md:text-xs">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
            <a href="#" className="hover:text-white">Termini e Condizioni</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
