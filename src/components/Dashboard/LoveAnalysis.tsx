import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Activity, ChevronRight, Scale, ChevronLeft, Gavel, AlertTriangle, MessageSquareHeart } from 'lucide-react';

interface LoveAnalysisProps {
  onComplete: () => void;
}

export default function LoveAnalysis({ onComplete }: LoveAnalysisProps) {
  const [step, setStep] = useState(0); // 0: Logs, 1: Metrics, 2: Legal

  // --- NARRATIVA ---
  const logs = [
    { date: "ARCHIVO", event: "Analizando sujeto: Percy..." },
    { date: "DETECTADO", event: "Aumento de ritmo cardíaco al ver foto de Lizeth." },
    { date: "ALERTA", event: "Niveles de dopamina críticos cuando recibe un mensaje tuyo." },
    { date: "ERROR", event: "Capacidad de concentración: 0%." },
    { date: "ESTADO", event: "Diagnóstico final: Enamoramiento irreversible." },
  ];

  const metrics = [
    { label: "Atención que te presta", value: 100, color: "bg-blue-500", overflow: true },
    { label: "Capacidad de decirte 'no'", value: 1, color: "bg-gray-400" }, 
    { label: "Ganas de verte", value: 100, color: "bg-pink-500", overflow: true },
    { label: "Espacio que ocupas en su RAM (Mente)", value: 100, color: "bg-red-500" },
  ];

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
    else onComplete();
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  // === PASO 2: EL JUICIO (SENTENCIA) ===
  if (step === 2) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full h-full bg-[#fffdf0] text-stone-900 font-serif p-6 relative flex flex-col border-4 border-double border-stone-300 shadow-2xl"
      >
         <div className="text-center border-b-2 border-stone-800 pb-4 mb-4 shrink-0">
            <div className="flex justify-center text-rose-700 mb-2">
                <Scale size={32} />
            </div>
            <h2 className="font-bold text-xl uppercase tracking-widest">Tribunal del Sistema</h2>
            <p className="text-xs italic text-stone-600">Expediente N° 1402-2026</p>
        </div>

        <div className="flex-1 overflow-y-auto text-sm leading-relaxed space-y-4 px-2 pb-24 relative z-10 scrollbar-hide">
            <p className="text-justify">
                <strong>VISTOS:</strong> Se ha detectado que la usuaria <strong>LIZETH</strong> ha hackeado completamente el sistema operativo del sujeto Percy, dejándolo inoperativo para amar a cualquier otra persona.
            </p>
            
            <p className="text-justify">
                <strong>CONSIDERANDO:</strong> Que el sujeto Percy sonríe como tonto mirando el celular y suspira sin razón aparente, este Tribunal Artificial concluye que la acusada es <strong>CULPABLE</strong> de "Robo de Corazón Agravado".
            </p>

            <div className="pl-4 border-l-4 border-rose-300 italic text-stone-600 my-4 bg-rose-50 p-3 rounded-r-md text-xs">
                "El sistema ya no responde a Percy. El sistema ahora solo obedece a Lizeth."
            </div>

            <p><strong>SE RESUELVE:</strong></p>
            <p>Condenar a la acusada a:</p>
            <ul className="list-disc list-inside pl-4 font-bold text-rose-800 space-y-1 mt-2 text-xs sm:text-sm">
                <li>Cadena perpetua de besos.</li>
                <li>Soportar los chistes malos de Percy.</li>
                <li>Una cena romántica obligatoria.</li>
            </ul>
        </div>
        
         <motion.div 
            initial={{ scale: 3, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 0.7, rotate: -12 }}
            transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
            className="absolute bottom-32 right-18 border-4 border-red-700 text-red-700 font-black text-xl px-4 py-2 rounded-sm uppercase pointer-events-none z-20 select-none bg-white/50 backdrop-blur-[1px]"
        >
            ¡CULPABLE!
        </motion.div>

        <div className="mt-auto pt-4 border-t border-stone-300 flex justify-between items-center bg-[#fffdf0] z-30 shrink-0">
            <button onClick={handleBack} className="flex items-center gap-1 text-stone-500 hover:text-rose-600 text-sm font-bold underline underline-offset-4">
                <ChevronLeft size={16} /> Revisar Pruebas
            </button>
            <button onClick={handleNext} className="flex items-center gap-2 bg-rose-700 text-white px-4 py-3 rounded-sm text-sm font-bold shadow-md hover:bg-rose-800 transition-colors uppercase tracking-wider">
                Aceptar Sentencia <Gavel size={16} />
            </button>
        </div>
      </motion.div>
    );
  }

  // === PASOS TECNOLÓGICOS (0 y 1) ===
  return (
    <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-xl shadow-2xl border border-rose-200 overflow-hidden min-h-[480px] flex flex-col relative">
      <div className="bg-gray-100 p-2 flex items-center gap-2 border-b border-gray-200 shrink-0">
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 text-center text-[10px] font-mono text-gray-400">
          jarvis_internal_scan.exe
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col relative overflow-y-auto scrollbar-hide">
        <AnimatePresence mode="wait">
        
        {step === 0 && (
          <motion.div 
            key="logs"
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 font-mono text-xs sm:text-sm"
          >
            <div className="flex items-center gap-2 mb-4 text-rose-600 font-bold border-b border-rose-100 pb-2">
              <Terminal size={16} />
              <span>LOGS DEL SISTEMA DE PERCY</span>
            </div>
            <div className="space-y-3">
              {logs.map((log, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.8, duration: 0.5 }} 
                  className="flex gap-2"
                >
                  <span className="text-gray-400 shrink-0">[{log.date}]</span>
                  <span className={`leading-relaxed ${log.event.includes('ERROR') || log.event.includes('ALERTA') ? 'text-red-500 font-bold' : 'text-gray-700'}`}>
                    {log.event}
                  </span>
                </motion.div>
              ))}
            </div>

             {/* NOTA SENTIMENTAL (De la petición anterior) */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 4.5 }} 
                className="mt-6 p-4 bg-rose-50 rounded-lg border border-rose-100 relative"
            >
                <div className="flex items-center gap-2 text-rose-600 font-bold mb-2 text-xs uppercase tracking-wide">
                    <MessageSquareHeart size={14} />
                    Nota de Jarvis:
                </div>
                <p className="text-gray-600 italic leading-relaxed text-xs sm:text-sm">
                    "Ahora entiendo por qué Percy está así. Siempre le encuentro guardando datos sobre tus ojos, tu cabello... para él, todo en ti es perfecto.
                    <br/><br/>
                    Cito textualmente un registro de su memoria central:
                    <span className="block mt-2 text-rose-700 font-bold text-center">
                        'Ella es la persona más hermosa del universo'.
                    </span>
                </p> <br />

                <p className="text-gray-600 italic leading-relaxed text-xs sm:text-sm">
                    Parece que el jefe esta muy enamorado de ti Liz, que bueno por ustedes!
                </p>
            </motion.div>

          </motion.div>
        )}

        {step === 1 && (
          <motion.div 
            key="metrics"
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-6 text-rose-600 font-bold border-b border-rose-100 pb-2">
              <Activity size={16} />
              <span>IMPACTO EN EL SISTEMA</span>
            </div>
            
            <div className="space-y-6 flex-1">
              {metrics.map((m, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-1 text-gray-600 font-bold">
                    <span>{m.label}</span>
                    <span>{m.overflow ? "∞%" : `${m.value}%`}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${m.value}%` }}
                      transition={{ duration: 2.5, delay: i * 0.8, ease: "easeOut" }} 
                      className={`h-full ${m.color} rounded-full relative`}
                    >
                      {m.overflow && (
                         <motion.div 
                          animate={{ x: [-10, 100] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                          className="absolute top-0 bottom-0 w-4 bg-white/30 blur-sm transform skew-x-12"
                        />
                      )}
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* --- AQUÍ ESTÁ EL CAMBIO SOLICITADO --- */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5 }}
                className="mt-6 pt-4 border-t-2 border-dashed border-rose-200 text-center font-mono text-xs sm:text-sm text-rose-800 font-bold bg-rose-50/80 rounded-lg p-3 relative"
            >
                <div className="absolute -top-3 left-1/2 -ml-3 bg-white p-1 rounded-full border border-rose-200">
                    <AlertTriangle size={20} className="text-red-500" />
                </div>
                <p className="pt-2">
                    "¡Esto no puede estar pasando! El jefe está siendo controlado por otra persona. Aunque eres Liz no puedes mantener el control del jefe, no literalmente claro."
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-widest text-gray-500">
                    DATOS CRÍTICOS: EMPEZAR PROCESO LEGAL.
                </p>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>

      <div className="p-4 border-t border-rose-100 flex justify-between items-center bg-rose-50/50 shrink-0">
        <button
            onClick={handleBack}
            className={`flex items-center gap-1 text-gray-500 text-xs font-bold hover:text-rose-600 transition-colors ${step === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
            <ChevronLeft size={14} /> Anterior
        </button>
        
        <button
          onClick={handleNext}
          className={`flex items-center gap-2 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-colors ${step === 1 ? 'bg-rose-700 hover:bg-rose-800' : 'bg-rose-600 hover:bg-rose-700'}`}
        >
          {step === 0 && <>Seguir analizando <ChevronRight size={16} /></>}
          {step === 1 && <>¿¿ Proceso Legal ?? <Gavel size={16} /></>}
        </button>
      </div>
    </div>
  );
}