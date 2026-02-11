import { useState } from 'react';
import Terminal from './components/Terminal/Terminal';
import Dashboard from './components/Dashboard/Dashboard'; // El nuevo Dashboard con todas las etapas

export type AppStage = 'terminal' | 'dashboard';

function App() {
  const [stage, setStage] = useState<AppStage>('terminal');

  return (
    <main className="w-full min-h-screen">
      
      {/* 1. PRIMERO: TERMINAL (Pide clave) */}
      {stage === 'terminal' && (
        <Terminal onUnlock={() => setStage('dashboard')} />
      )}

      {/* 2. LUEGO: DASHBOARD (Intro -> Analysis -> Scanner -> Cupones) */}
      {stage === 'dashboard' && (
        <Dashboard />
      )}
      
    </main>
  );
}

export default App;