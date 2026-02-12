import { motion } from 'framer-motion';
import { Heart, Stars } from 'lucide-react';

interface ValentineProps {
  onComplete: () => void;
}

export default function ValentineProtocol({ onComplete }: ValentineProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center p-6 text-center space-y-6"
    >
      {/* Icono Central Animado */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="relative"
      >
        <Heart size={80} className="text-rose-600 fill-rose-600 drop-shadow-[0_0_15px_rgba(225,29,72,0.5)]" />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute -inset-4 border-2 border-dashed border-rose-300 rounded-full"
        />
      </motion.div>

      <div className="space-y-2">
        <h2 className="text-sm font-mono text-rose-500 uppercase tracking-[0.3em]">Protocolo San Valentín</h2>
        <h1 className="text-3xl font-serif font-bold text-rose-700">¡Feliz 14 de Febrero!</h1>
      </div>

      <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-2 border-rose-100 relative overflow-hidden">
        {/* Decoración de estrellas */}
        <Stars className="absolute top-2 right-2 text-rose-200" size={20} />
        
        <p className="text-stone-700 italic font-serif leading-relaxed">
          Hola corazon, este texto lo estoy escribiendo yo mismo y creo que se va a notar jaja. <br/><br/>
          Como te dije antes, no sabes cuan agradecido estoy de que hayas llegado a mi vida. Mejoraste todo, y cuando digo todo es todo xd. Desde mis horarios hasta la forma en la que tengo de ver las cosas, antes casi siempre paraba molesto o triste, pero ahora que estamos juntos todo es felicidad, gracias por hacerme sentir amado. Hay una sensacion que no se como describirla pero viendo tik tok a veces me sale, le dicen el "sentirse como en casa", esa es la sensacion que yo tengo cuando estoy a tu lado amor, me siento tranquilo, en paz y no quisiera que ese momento se acabara. Quiero que sepas que estare junto a ti el tiempo que me permitas estar (si es para siempre mejor jaja).  <br/><br/>
          Gracias por ser mi código favorito y mi mejor actualización. Te amo hoy, mañana y siempre.<br/><br/>
          Se que hoy no podremos estar juntos por tema del trabajo pero ya llegaran mas momentos y mas años mejores (se que tambien lo repito mucho pero en serio lo creo). Ya llegara nuestro momento que tanto estamos esperando.
        </p>
        
        <p className="mt-4 text-xs font-bold text-rose-400 uppercase tracking-widest">— Percy</p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-md border border-white/60 text-sm leading-relaxed text-gray-600 text-center relative">
                             <div className="absolute -top-3 left-1/2 -ml-3 w-6 h-6 bg-rose-400 rounded-full border-4 border-white shadow-sm"></div>
                            <p className="font-bold text-teal-600">Jarvis al habla 🤖</p>
                            <p className="mt-2 leading-relaxed">
                                <strong>Vamos a pasar a una sorpresa.</strong>
                            </p>
                        </div>

      <button
        onClick={onComplete}
        className="group bg-rose-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-rose-700 transition-all flex items-center gap-3 active:scale-95"
      >
        <span>Ver regalo de Jarvis</span>
        <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity }}>🎁</motion.span>
      </button>
    </motion.div>
  );
}