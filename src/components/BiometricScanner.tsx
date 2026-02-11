import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Fingerprint } from 'lucide-react'; // Usamos el ícono de Lucide que ya tienes

interface BiometricScannerProps {
  onScanComplete: () => void;
}

export default function BiometricScanner({ onScanComplete }: BiometricScannerProps) {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleStartScan = () => {
    setScanning(true);
  };

  useEffect(() => {
    let interval: any;
    if (scanning) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(onScanComplete, 500); // Espera un poco al llegar a 100
            return 100;
          }
          return prev + 2; // Velocidad de carga
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [scanning, onScanComplete]);

  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-10">
      
      {/* TEXTO DE ESTADO */}
      <div className="text-center space-y-2 h-16">
        {!scanning && (
          <p className="text-rose-600 font-mono animate-pulse">
            ESPERANDO HUELLA DACTILAR
            
          </p>
        )}
        {scanning && progress < 100 && (
          <p className="text-rose-600 font-mono">
            {progress}%
          </p>
        )}
        {progress === 100 && (
          <p className="text-green-600 font-mono font-bold">
            AUTORIZADO
          </p>
        )}
      </div>

      {/* ÁREA DEL ESCÁNER */}
      <div className="relative cursor-pointer group" onMouseDown={handleStartScan} onTouchStart={handleStartScan}>
        
        {/* Círculo pulsante de fondo */}
        <div className={`absolute inset-0 bg-rose-200 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity ${scanning ? 'animate-pulse' : ''}`} />
        
        {/* Ícono de Huella */}
        <Fingerprint 
          size={120} 
          className={`relative z-10 transition-colors duration-500 ${
            progress === 100 ? 'text-green-500' : scanning ? 'text-rose-500' : 'text-rose-300'
          }`} 
        />

        {/* LÁSER DE ESCANEO (Solo aparece al escanear) */}
        {scanning && progress < 100 && (
          <motion.div 
            className="absolute top-0 left-0 w-full h-1 bg-red-500 shadow-[0_0_15px_rgba(255,0,0,0.8)] z-20"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        )}
      </div>

      {/* INSTRUCCIÓN */}
      {!scanning && (
        <p className="text-gray-400 uppercase tracking-widest mt-8 text-center text-xs">
        Presiona solo una vez, el sistema procedera con la sentencia
        </p>
      )}

    </div>
  );
}