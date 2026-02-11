import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ShieldCheck, Gavel, ExternalLink } from 'lucide-react'; // Iconos para el toque legal/hacker

interface CouponProps {
  id: number;
  title: string;
  emoji: string;
  description: string;
  isRedeemed: boolean;
  onRedeem: (id: number, title: string) => void;
}

export default function CouponCard({ id, title, emoji, description, isRedeemed, onRedeem }: CouponProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (!isRedeemed) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleRedeemClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    onRedeem(id, title);
    
    // Confeti con los colores de tu tema (Rojo, Oro, Blanco)
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#e11d48', '#fbbf24', '#ffffff']
    });
  };

  return (
    <div className="h-48 w-full perspective-1000" onClick={handleClick}>
      <motion.div
        className="relative w-full h-full text-center transition-all duration-500 transform-style-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        
        {/* --- CARA FRONTAL (Archivo Confidencial) --- */}
        <div className={`absolute w-full h-full backface-hidden rounded-2xl shadow-xl border-2 flex flex-col items-center justify-center p-4 transition-colors ${
          isRedeemed 
          ? 'bg-gray-100 border-gray-300 grayscale' 
          : 'bg-white border-rose-200 hover:border-rose-400'
        }`}>
          {/* Badge de Jarvis en la esquina */}
          {!isRedeemed && (
            <div className="absolute top-2 right-2 text-teal-500/30">
              <ShieldCheck size={16} />
            </div>
          )}

          <div className="text-5xl mb-3 drop-shadow-sm">{emoji}</div>
          <h3 className={`font-serif font-bold text-xs uppercase tracking-tighter leading-tight ${
            isRedeemed ? 'text-gray-400' : 'text-rose-600'
          }`}>
            {title}
          </h3>

          {isRedeemed ? (
            <div className="absolute inset-0 flex items-center justify-center bg-white/40 rounded-2xl backdrop-blur-[1px]">
              <span className="border-4 border-red-600 text-red-600 font-black text-xl px-2 py-1 -rotate-12 shadow-sm bg-white/90">
                COBRADO
              </span>
            </div>
          ) : (
            <div className="mt-3 flex items-center gap-1 text-[9px] text-gray-400 font-mono uppercase tracking-widest animate-pulse">
              <span>Ver Beneficio</span>
            </div>
          )}
        </div>

        {/* --- CARA TRASERA (Orden Judicial de Cobro) --- */}
        <div 
            className="absolute w-full h-full backface-hidden rounded-2xl shadow-2xl bg-[#fffdf9] border-2 border-rose-300 p-4 flex flex-col items-center justify-between my-rotate-y-180"
            style={{ backgroundImage: 'radial-gradient(#fecdd3 0.5px, transparent 0.5px)', backgroundSize: '10px 10px' }}
        >
          <div className="w-full border-b border-rose-100 pb-1 mb-1 flex justify-between items-center">
            <span className="text-[8px] font-bold text-rose-300 uppercase">Ticket #00{id}</span>
            <Gavel size={12} className="text-rose-300" />
          </div>

          <p className="text-[11px] sm:text-xs text-stone-700 italic font-serif leading-snug px-1 flex-1 flex items-center justify-center">
            "{description}"
          </p>
          
          <button
            onClick={handleRedeemClick}
            className="group bg-rose-600 text-white text-[10px] font-bold py-2.5 px-4 rounded-xl shadow-lg hover:bg-rose-700 active:scale-95 transition-all w-full flex items-center justify-center gap-2 mt-2 uppercase tracking-tighter"
          >
            <span>¡Notificar al Jefe!</span>
            <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </motion.div>
    </div>
  );
}