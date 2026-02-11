import { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

interface TerminalProps {
    onUnlock: () => void;
}

export default function Terminal({ onUnlock }: TerminalProps) {
    const [step, setStep] = useState<'boot' | 'access'>('boot');
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // CLAVE SECRETA
    const PASSWORD = "3011";

    useEffect(() => {
        if (step === 'access' && inputRef.current) {
            inputRef.current.focus();
        }
    }, [step]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim().toUpperCase() === PASSWORD) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#00ff00', '#ffffff']
            });
            setTimeout(onUnlock, 1500);
        } else {
            setError(true);
            setInput('');
            setTimeout(() => setError(false), 1000);
        }
    };

    return (
        <div
            className={`min-h-[100dvh] bg-black text-green-500 font-mono p-6 sm:p-12 flex flex-col justify-center ${error ? 'animate-pulse bg-red-950/20' : ''}`}
            onClick={() => inputRef.current?.focus()}
        >
            <div className="text-sm sm:text-lg leading-loose">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(40)
                            .typeString('> REINICIANDO SISTEMA...')
                            .pauseFor(500)
                            .typeString('<br>> HOLA JEFE. JARVIS EN LÍNEA.')
                            .pauseFor(1000)
                            .typeString('<br>> CARGANDO ARCHIVOS SECRETOS...')
                            .pauseFor(500)
                            .typeString('<br>> ESPERA...')
                            .pauseFor(500)
                            .typeString('<br>> ⚠️ ¡ALERTA DE BIOMETRÍA!')
                            .pauseFor(500)
                            .typeString('<br>> TÚ NO ERES PERCY.')
                            .pauseFor(800)
                            .typeString('<br>> ESCANEANDO INTRUSO...')
                            .pauseFor(1000)
                            .typeString('<br>> IDENTIDAD CONFIRMADA: <span style="color: #f43f5e;">LIZETH</span>.')
                            .pauseFor(500)
                            .typeString('<br>> NIVEL DE AMENAZA: CERO (ELLA ES LA JEFA).')
                            .pauseFor(500)
                            .typeString('<br>......................................')
                            .pauseFor(500)
                            .callFunction(() => setStep('access'))
                            .start();
                    }}
                />
            </div>

            {step === 'access' && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8"
                >
                    <div className="flex flex-col gap-2 text-lg sm:text-xl font-bold">
                        <span className="text-white mb-1">
                            {'>'} PROTOCOLO: VERIFICACIÓN
                        </span>
                        <span className="text-green-400 animate-pulse">
                            INGRESE CÓDIGO DE ACCESO:
                        </span>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-4">
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="bg-transparent border-b-2 border-green-500 text-green-400 w-full sm:w-2/3 outline-none text-2xl uppercase tracking-[0.2em] focus:border-green-300 transition-colors placeholder-green-900/30 font-bold"
                            placeholder="____"
                            autoComplete="off"
                        />
                        {error && (
                            <p className="text-red-500 mt-3 text-sm font-bold animate-bounce tracking-wide">
                                [!] ACCESO DENEGADO. INTENTE OTRA VEZ.
                            </p>
                        )}
                    </form>

                    <p className="mt-10 text-[10px] sm:text-xs text-green-400 uppercase tracking-widest opacity-60">
                        * Pista: Es una fecha importante (DDMM) * Donde yusly dice que nos vio xd.
                    </p>
                </motion.div>
            )}
        </div>
    );
}