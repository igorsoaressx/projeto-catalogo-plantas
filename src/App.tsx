import type { BiologicalItem } from './types';
import { BIOLOGICAL_DATA } from './data/biological-data';
import { useCurrentTime } from './hooks/useCurrentTime';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const now = useCurrentTime();
  const currentHour = now.getHours();

  const isActive = (start: number, end: number): boolean => {
    if (start === 23 && end === 1) return currentHour === 23 || currentHour === 0;
    return currentHour >= start && currentHour < end;
  };

  return (
    <div className="min-h-screen bg-[#f4f7f4] font-sans text-slate-800 flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center py-4 px-4 sm:px-6 md:px-8 relative overflow-hidden">
        
        {/* Título Responsivo */}
        <header className="text-center max-w-2xl mb-8 md:mb-12 z-10">
          <span className="text-emerald-600/80 font-semibold tracking-[0.2em] uppercase text-[10px] sm:text-xs">
            A Natureza a seu favor
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-emerald-950 mt-2 md:mt-4 leading-tight">
            O tempo perfeito para <br className="hidden sm:block"/> a <span className="text-emerald-600">planta perfeita.</span>
          </h1>
        </header>

        {/* O Relógio: Tamanho fluido baseado na largura da tela (vw) */}
        <div className="relative w-[95vw] h-[95vw] max-w-[340px] max-h-[340px] sm:max-w-[500px] sm:max-h-[500px] md:max-w-[620px] md:max-h-[620px] rounded-full border border-emerald-200 bg-[#e1eadb] shadow-2xl flex items-center justify-center overflow-hidden z-10">
          
          {/* Linhas Divisórias */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-px h-full bg-emerald-900/10" 
              style={{ transform: `rotate(${i * 30}deg)` }} 
            />
          ))}

          {/* Fatias do Relógio */}
          {BIOLOGICAL_DATA.map((item, index) => (
            <ClockSlice 
              key={item.organ} 
              item={item} 
              index={index} 
              active={isActive(item.start, item.end)} 
            />
          ))}

          {/* Centro do Relógio */}
          <CentralDisplay time={now} />
        </div>

        {/* Efeitos de Fundo Decorativos (Escondidos em telas muito pequenas para limpar o visual) */}
        <div className="hidden sm:block absolute top-10 left-10 w-64 h-64 bg-emerald-200/30 rounded-full blur-[100px] pointer-events-none z-0" />
      </main>

      <Footer />
    </div>
  );
}

// --- Componente ClockSlice Responsivo ---
function ClockSlice({ item, index, active }: { item: BiologicalItem, index: number, active: boolean }) {
  const sliceRotation = (index * 30) + 15;
  const needsFlip = sliceRotation > 90 && sliceRotation < 270;

  return (
    <div
      className={`absolute inset-0 flex flex-col items-center origin-center transition-all duration-500 ${active ? 'bg-emerald-400/15' : ''}`}
      style={{ transform: `rotate(${sliceRotation}deg)` }}
    >
      {/* Ajuste de Margem Fluida: 
          - mt-[4%] garante que o texto acompanhe o tamanho do círculo.
          - Fontes usam escalas para mobile (text-[7px]) até desktop (md:text-[11px]).
      */}
      <div className={`mt-[4%] md:mt-[6%] flex flex-col items-center text-center w-[28%] sm:w-36 transition-transform ${active ? 'scale-105 sm:scale-110' : ''} ${needsFlip ? 'rotate-180' : ''}`}>
        
        <span className={`text-[7px] sm:text-[9px] md:text-[11px] font-extrabold uppercase leading-none ${active ? 'text-emerald-900' : 'text-emerald-950'}`}>
          {item.organ}
        </span>
        
        <span className={`text-[6px] sm:text-[8px] md:text-[10px] font-bold mt-0.5 ${active ? 'text-emerald-700' : 'text-emerald-800'}`}>
          {item.start}h - {item.end}h
        </span>
        
        <div className="flex flex-col gap-0.5 mt-1 md:mt-1.5 px-1">
          {item.herbs.map((herb) => (
            <span 
              key={herb} 
              className={`text-[5px] sm:text-[7px] md:text-[9px] leading-tight font-medium ${active ? 'text-emerald-950' : 'text-slate-900'}`}
            >
              {herb}
            </span>
          ))}
        </div>

        {active && <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-600 rounded-full animate-pulse mt-1 sm:mt-2"></div>}
      </div>
    </div>
  );
}

// --- Componente CentralDisplay Responsivo ---
function CentralDisplay({ time }: { time: Date }) {
  return (
    <div className="absolute w-[35%] sm:w-[32%] aspect-square bg-white rounded-full border-2 sm:border-4 border-[#e1eadb] shadow-lg flex items-center justify-center text-center z-50">
      <div className="flex flex-col items-center p-1 sm:p-2">
        <span className="text-[7px] sm:text-[9px] md:text-[11px] font-black text-emerald-900 border-b border-emerald-100 pb-0.5 mb-1 uppercase tracking-tighter">
          PELE – 24h
        </span>
        
        {/* Escondemos as ervas da pele em telas muito pequenas para não poluir */}
        <span className="hidden xs:block text-[5px] sm:text-[7px] md:text-[9px] text-slate-500 leading-tight italic px-1">
          babosa, calêndula, camomila
        </span>
        
        <div className="mt-1 sm:mt-3 px-1.5 sm:px-3 py-0.5 sm:py-1 bg-emerald-50 rounded-full text-emerald-600 font-mono font-bold text-[8px] sm:text-xs border border-emerald-100">
          {time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
}