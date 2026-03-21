import React from 'react';
import { Mail } from 'lucide-react';

export const Newsletter: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-cinema-dark relative overflow-hidden">
      {/* Decorative background elements to match other sections */}
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[30vw] h-[30vw] bg-cinema-gold/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-cinema-gold text-[10px] md:text-xs font-black uppercase tracking-[0.5em] mb-4">Newsletter</h2>
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 md:mb-8 leading-none">
              RESTIAMO IN <span className="text-cinema-red">CONTATTO</span>
            </h3>
            <p className="text-gray-400 text-base md:text-xl font-medium leading-relaxed max-w-xl italic">
              "Iscriviti per ricevere in anteprima la programmazione settimanale, inviti ad eventi esclusivi e promozioni riservate alla nostra community."
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-cinema-red/10 blur-3xl rounded-full opacity-50" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-cinema-red rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-xl shadow-cinema-red/20">
                <Mail className="text-white w-5 h-5 md:w-6 md:h-6" />
              </div>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="esempio@email.it"
                    aria-label="Indirizzo Email"
                    className="w-full px-6 md:px-8 py-4 md:py-5 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:outline-none focus:border-cinema-red transition-all text-white placeholder:text-gray-600 font-bold"
                    required
                  />
                </div>
                <button className="w-full py-4 md:py-5 bg-cinema-red hover:bg-red-700 text-white font-black text-xs md:text-sm uppercase tracking-[0.2em] rounded-xl md:rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-cinema-red/40">
                  Iscriviti Ora
                </button>
                <p className="text-[10px] text-gray-500 text-center mt-4 uppercase tracking-widest font-bold">
                  Nessuno spam, solo grande cinema.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
