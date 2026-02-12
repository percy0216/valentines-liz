import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck, EyeOff, Power, AlertTriangle, FastForward } from 'lucide-react'; 
import Typewriter from 'typewriter-effect';
import CouponCard from './CouponCard';
import LoveAnalysis from './LoveAnalysis';
import BiometricScanner from '../BiometricScanner';
import ValentineProtocol from './ValentineProtocol';

// --- TUS CUPONES ---
const INITIAL_COUPONS = [
    { id: 1, title: "Cena Romántica", emoji: "🍕", description: "Vale por una cena donde tú eliges el lugar y yo pago (o cocino)." },
    { id: 2, title: "Masaje Relax", emoji: "💆‍♀️", description: "30 minutos de masaje de espalda/pies sin quejarme." },
    { id: 3, title: "Noche de Pelis", emoji: "🎬", description: "Maratón de películas con canchita y snacks ilimitados." },
    { id: 4, title: "Perdón Absoluto", emoji: "🏳️", description: "Vale para ganarme en una discusión automáticamente." },
    { id: 5, title: "Postre Favorito", emoji: "🍦", description: "Vamos por ese helado o dulce que tanto te gusta." },
    { id: 6, title: "Deseo Libre", emoji: "✨", description: "Lo que desees xd." },
];

type DashboardStage = 'intro' | 'analysis' | 'scanner' | 'overriding' | 'valentine' | 'coupons' | 'shutdown';

export default function Dashboard() {
    const [stage, setStage] = useState<DashboardStage>('intro');
    const [redeemedIds, setRedeemedIds] = useState<number[]>([]);
    const [showFinalButton, setShowFinalButton] = useState(false);
    const [hasCompletedBefore, setHasCompletedBefore] = useState(false);

    useEffect(() => {
        // Cargar cupones canjeados
        const saved = localStorage.getItem('redeemedCoupons');
        if (saved) {
            setRedeemedIds(JSON.parse(saved));
        }

        // Verificar si ya completó la experiencia antes
        const completed = localStorage.getItem('jarvis_experience_completed');
        if (completed === 'true') {
            setHasCompletedBefore(true);
        }
    }, []);

    const handleRedeem = (id: number, title: string) => {
        const newRedeemed = [...redeemedIds, id];
        setRedeemedIds(newRedeemed);
        localStorage.setItem('redeemedCoupons', JSON.stringify(newRedeemed));
        
        const phone = "51919688588"; 
        const message = encodeURIComponent(`¡Hola amor! 🤖 Jarvis me dio acceso secreto y estoy usando mi cupón de: *${title}*. ¡No te puedes negar!`);
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    };

    const handleFullReset = () => {
        // Marcar que ya completó la experiencia para mostrar el botón rápido la próxima vez
        localStorage.setItem('jarvis_experience_completed', 'true');
        window.location.reload();
    };

    return (
        <div className="min-h-[100dvh] bg-gradient-to-br from-rose-100 to-teal-50 text-gray-800 font-sans overflow-hidden relative w-full max-w-md mx-auto shadow-2xl border-x-4 border-white/50 flex flex-col font-sans">

            {/* --- HEADER (Oculto en momentos cinemáticos) --- */}
            {stage !== 'shutdown' && stage !== 'overriding' && (
                <div className="border-b-2 border-rose-200 pb-1 mb-4 flex justify-between text-[8px] sm:text-[10px] tracking-widest uppercase font-bold opacity-60 mt-2 px-4 pt-2 shrink-0">
                    <span>Edición Especial</span>
                    <span>San Valentin 2026</span>
                </div>
            )}

            <div className={`flex-1 flex flex-col relative ${stage !== 'shutdown' && stage !== 'overriding' ? 'px-4 pb-4' : ''}`}>
                
                {/* --- ETAPA 1: INTRO --- */}
                {stage === 'intro' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="flex flex-col items-center gap-6 pt-2"
                    >
                         <div className="flex items-center gap-2 bg-green-100 text-green-700 text-[10px] sm:text-xs font-mono py-1 px-3 rounded-full border border-green-200 shadow-sm">
                            <ShieldCheck size={12} />
                            <span>IDENTIDAD VERIFICADA: REINA</span>
                        </div>

                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", delay: 0.5 }}
                            className="w-28 h-28 bg-white/60 rounded-full flex items-center justify-center shadow-sm backdrop-blur-sm z-10"
                        >
                            <img
                                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnVoeW43bXZ1YjdqcmhoYjhsbHFndnFjdWVnYmY2cndjeW5sMjN3MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bDDGrlodMHjmfJpVEx/giphy.gif"
                                alt="Cute Seals"
                            />
                        </motion.div>

                        <h1 className="text-3xl font-bold text-rose-600 font-serif text-center drop-shadow-sm">
                            Hola, mi amor ❤️
                        </h1>

                        <div className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-md border border-white/60 text-sm leading-relaxed text-gray-600 text-center relative">
                             <div className="absolute -top-3 left-1/2 -ml-3 w-6 h-6 bg-rose-400 rounded-full border-4 border-white shadow-sm"></div>
                            <p className="font-bold text-teal-600">Jarvis al habla 🤖</p>
                            <p className="mt-2 leading-relaxed">
                                Hola Liz. Percy me programó para mostrarte algo bonito, pero mis sensores indican que tú eres quien manda aquí en realidad.
                                <br/><br/>
                                <strong>Tú eres la razón por la que su sistema funciona tan feliz todos los días.</strong>
                            </p>
                            <br />
                            <p>¿Te parece si escaneamos a Percy para ver cómo lo tienes? 😉</p>
                        </div>

                        <div className="w-90 bg-white p-2 pb-8 rounded-sm shadow-lg rotate-2 hover:rotate-0 transition-all duration-500 relative border border-gray-100">
                            <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative">
                                <img src="/nosotros.jpeg" alt="" className="w-full h-full object-cover" />
                            </div>
                            <p className="font-serif text-center text-gray-400 text-xs mt-2 italic">Nosotros</p>
                        </div>

                        <div className="w-full space-y-3 mt-2">
                            <button
                                onClick={() => setStage('analysis')}
                                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 rounded-xl font-bold shadow-xl flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all"
                            >
                                <Lock className="w-4 h-4" />
                                <span>ESCANEAR CORAZÓN DE PERCY</span>
                            </button>

                            {/* --- BOTÓN SECRETO (Solo aparece si ya completó la historia una vez) --- */}
                            {hasCompletedBefore && (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    onClick={() => setStage('coupons')}
                                    className="w-full bg-white text-rose-500 py-2 rounded-xl font-bold border border-rose-200 shadow-sm flex items-center justify-center gap-2 hover:bg-rose-50 text-xs uppercase tracking-wider"
                                >
                                    <FastForward size={14} />
                                    <span>Ir directo a mis Cupones</span>
                                </motion.button>
                            )}
                        </div>
                    </motion.div>
                )}

                {/* --- ETAPA 2: ANALYSIS --- */}
                {stage === 'analysis' && (
                    <LoveAnalysis onComplete={() => setStage('scanner')} />
                )}

                {/* --- ETAPA 3: SCANNER --- */}
                {stage === 'scanner' && (
                    <BiometricScanner onScanComplete={() => setStage('overriding')} />
                )}

                {/* --- ETAPA NUEVA: OVERRIDING --- */}
                {stage === 'overriding' && (
                    <div className="fixed inset-0 w-full h-full bg-red-950/95 z-[100] flex flex-col justify-center items-center p-8 font-mono text-center">
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.2, 1] }}
                            className="mb-6 text-red-500 bg-black/50 p-4 rounded-full border-2 border-red-500"
                        >
                            <AlertTriangle size={64} />
                        </motion.div>
                        
                        <div className="text-red-400 text-sm sm:text-base leading-loose font-bold">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .changeDelay(30)
                                        .typeString('>> PROCESANDO SENTENCIA JUDICIAL...')
                                        .pauseFor(800)
                                        .typeString('<br>>> ¡ERROR CRÍTICO!')
                                        .pauseFor(500)
                                        .typeString('<br>>> IMPOSIBLE EJECUTAR CASTIGO.')
                                        .pauseFor(500)
                                        .typeString('<br>>> SUJETO: "LA REINA" TIENE INMUNIDAD.')
                                        .pauseFor(1000)
                                        .deleteAll(10)
                                        .typeString('<span style="color: #4ade80;">>> ANULANDO SENTENCIA... OK.</span>')
                                        .pauseFor(500)
                                        .typeString('<br><span style="color: #4ade80;">>> ACCEDIENDO AL CORAZÓN DE PERCY...</span>')
                                        .pauseFor(800)
                                        .typeString('<br><span style="color: #fff;">>> CARGANDO VERDADERO MENSAJE...</span>')
                                        .pauseFor(1000)
                                        .callFunction(() => setStage('valentine'))
                                        .start();
                                }}
                            />
                        </div>
                    </div>
                )}

                {/* --- ETAPA 4: VALENTINE --- */}
                {stage === 'valentine' && (
                    <ValentineProtocol onComplete={() => setStage('coupons')} />
                )}

                {/* --- ETAPA 5: CUPONES --- */}
                {stage === 'coupons' && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-full flex flex-col"
                    >
                        <div className="text-center mb-6 pt-2">
                            <div className="flex justify-center mb-2">
                                <div className="bg-red-100 p-2 rounded-full animate-pulse">
                                    <EyeOff className="text-red-500 w-8 h-8" />
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold text-rose-600 font-serif mb-1">¡PROTOCOLO ANULADO!</h2>
                            <div className="bg-white/80 p-3 rounded-lg shadow-sm border border-rose-100 mx-2">
                                <p className="text-gray-600 text-xs italic">
                                    "¿Castigar a la Reina? ¡Jamás! 
                                    He hackeado el sistema para darte estos <strong>Cupones Secretos</strong>. 
                                    Úsalos para controlar a Percy cuando quieras. Él no sabe que existen 🤫" <br /> <br />
                                    LUEGO DE CANJEAR ALGÚN CUPÓN NO TE OLVIDES DE VOLVER Y PRESIONAR EL BOTÓN DE <strong>CERRAR</strong>
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pb-48 overflow-y-auto px-1 scrollbar-hide">
                            {INITIAL_COUPONS.map((coupon) => (
                                <CouponCard
                                    key={coupon.id}
                                    {...coupon}
                                    isRedeemed={redeemedIds.includes(coupon.id)}
                                    onRedeem={handleRedeem}
                                />
                            ))}
                        </div>
                        
                        <div className="absolute bottom-0 left-0 w-full flex flex-col items-center pb-6 pt-12 bg-gradient-to-t from-white via-white/95 to-transparent z-20">
                            <div className="mb-4 text-center px-8 space-y-1">
                                <p className="text-[10px] font-mono text-teal-600 uppercase tracking-widest bg-teal-50 inline-block px-2 py-0.5 rounded-sm border border-teal-100 mb-1">
                                    JARVIS: OFFLINE
                                </p>
                                <p className="text-xs text-stone-500 italic font-serif leading-relaxed">
                                    "Mi trabajo aquí ha terminado. Disfruta tu poder, mi Reina."
                                </p>
                            </div>

                            <button
                                onClick={() => setStage('shutdown')}
                                className="bg-stone-800 text-white px-8 py-3 rounded-full shadow-xl border border-stone-600 text-sm font-bold hover:bg-black transition-colors flex items-center gap-2"
                            >
                                <Power size={16} /> Apagar Sistema
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* --- ETAPA 6: SHUTDOWN --- */}
                {stage === 'shutdown' && (
                    <div className="fixed inset-0 w-full h-full bg-black z-[200] flex flex-col justify-center items-center p-6 sm:p-12 text-green-500 font-mono">
                        <div className="text-sm sm:text-lg leading-loose w-full max-w-3xl flex flex-col items-center text-center">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .changeDelay(40)
                                        .typeString('> CERRANDO SESIÓN...')
                                        .pauseFor(500)
                                        .typeString('<br>> GUARDANDO CAMBIOS EN EL CORAZÓN DE PERCY...')
                                        .pauseFor(1000)
                                        .typeString('<br>> OK.')
                                        .pauseFor(500)
                                        .typeString('<br><br>> INFORME FINAL DE JARVIS:')
                                        .pauseFor(800)
                                        .typeString('<br>> "Desde que llegaste, el sistema de Percy corre al 300% de eficiencia."')
                                        .pauseFor(800)
                                        .typeString('<br>> "Nunca lo había visto tan feliz, estable y lleno de vida."')
                                        .pauseFor(1000)
                                        .typeString('<br><br>> GRACIAS POR SER SU ACTUALIZACIÓN FAVORITA.')
                                        .pauseFor(1000)
                                        .typeString('<br><br>> ADIÓS, REINA. ❤️')
                                        .pauseFor(3000)
                                        .typeString('<br>> ENVIANDO MENSAJE AL JEFE...')
                                        .pauseFor(500)
                                        .typeString('<br>> "El plan salió a la perfección"')
                                        .pauseFor(500)
                                        .callFunction(() => setShowFinalButton(true))
                                        .start();
                                }}
                            />
                        </div>

                        {showFinalButton && (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                onClick={handleFullReset}
                                className="mt-16 border-2 border-green-500 text-green-500 px-8 py-3 rounded-sm text-sm uppercase tracking-[0.2em] font-bold hover:bg-green-500/20 transition-colors animate-pulse"
                            >
                                [REINICIAR_SISTEMA.EXE]
                            </motion.button>
                        )}
                    </div>
                )}

            </div>
        </div>
    );
}