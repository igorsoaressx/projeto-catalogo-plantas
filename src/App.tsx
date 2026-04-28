import { useRef, useState } from 'react';
import type { BiologicalItem } from './types';
import { BIOLOGICAL_DATA } from './data/biological-data';
import { useCurrentTime } from './hooks/useCurrentTime';
import Header from './components/Header';
import Footer from './components/Footer';
import SobreVerdeVida from './pages/SobreVerdeVida';

export default function App() {
  const homeRef = useRef<HTMLElement>(null);
  const sobreRef = useRef<HTMLDivElement>(null);
  const catalogRef = useRef<HTMLDivElement>(null);
  const contatoRef = useRef<HTMLDivElement>(null);
  const now = useCurrentTime();
  const currentHour = now.getHours();

  const isActive = (start: number, end: number): boolean => {
    if (start === 23 && end === 1) return currentHour === 23 || currentHour === 0;
    return currentHour >= start && currentHour < end;
  };

  const [selectedOrgan, setSelectedOrgan] = useState<string>(() => {
    const activeItem = BIOLOGICAL_DATA.find((item) => isActive(item.start, item.end));
    return activeItem?.organ ?? BIOLOGICAL_DATA[0].organ;
  });

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToSobre = () => {
    sobreRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToCatalogo = () => {
    catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToContato = () => {
    contatoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-[#f4f7f4] text-slate-800 dark:bg-slate-950 dark:text-slate-100 font-sans flex flex-col min-h-screen">
      <Header onScrollToHome={scrollToHome} onScrollToSobre={scrollToSobre} onScrollToCatalogo={scrollToCatalogo} onScrollToContato={scrollToContato} />

      {/* SEÇÃO 1: RELÓGIO BIOLÓGICO */}
      <main ref={homeRef} id="home" className="flex-1 flex flex-col items-center justify-center py-4 px-4 sm:px-6 md:px-8 relative overflow-hidden">
        
        {/* Título Responsivo */}
        <header className="text-center max-w-2xl mb-8 md:mb-12 z-10">
          <span className="text-emerald-600/80 font-semibold tracking-[0.2em] uppercase text-[10px] sm:text-xs">
            A Natureza a seu favor
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-emerald-950 dark:text-emerald-300 mt-2 md:mt-4 leading-tight">
            O tempo perfeito para <br className="hidden sm:block"/> a <span className="text-emerald-600">planta perfeita.</span>
          </h1>
        </header>

        {/* O Relógio: Tamanho fluido baseado na largura da tela (vw) */}
        <div className="relative w-[95vw] h-[95vw] max-w-[340px] max-h-[340px] sm:max-w-[500px] sm:max-h-[500px] md:max-w-[620px] md:max-h-[620px] rounded-full border border-emerald-200 bg-[#e1eadb] dark:border-emerald-700/50 dark:bg-slate-900 dark:shadow-[0_25px_60px_-30px_rgba(15,23,42,0.8)] shadow-2xl flex items-center justify-center overflow-hidden z-10">
          
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
        <div className="hidden sm:block absolute top-10 left-10 w-64 h-64 bg-emerald-200/30 dark:bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none z-0" />
      </main>

      {/* SEÇÃO 2: CATÁLOGO DE PLANTAS POR HORÁRIO */}
      <div ref={catalogRef} className="w-full bg-gradient-to-br from-emerald-50 via-white to-emerald-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <section className="px-[5%] py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm dark:bg-emerald-900/20 dark:text-emerald-200">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-700" /> Catálogo por horário
              </span>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-emerald-950 dark:text-emerald-100">
                Explore plantas por horário
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-slate-700 dark:text-slate-300">
                Clique em um horário para ver apenas as plantas recomendadas naquele período. Assim a experiência fica mais leve e organizada.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {BIOLOGICAL_DATA.map((item) => {
                const active = isActive(item.start, item.end);
                const selected = selectedOrgan === item.organ;
                return (
                  <button
                    key={item.organ}
                    type="button"
                    onClick={() => setSelectedOrgan(selected ? '' : item.organ)}
                    className={`group text-left rounded-3xl border p-6 shadow-sm transition-all duration-300 ${selected ? 'border-emerald-700 bg-emerald-50 dark:border-emerald-500/60 dark:bg-emerald-900/30 shadow-2xl' : 'border-emerald-100 bg-white dark:border-slate-700/70 dark:bg-slate-950 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50/70 dark:hover:border-emerald-500/40'}`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-200">
                          {item.start}h - {item.end}h
                        </p>
                        <h3 className="mt-3 text-xl font-bold text-emerald-950 dark:text-emerald-100">{item.organ}</h3>
                      </div>
                      {active ? (
                        <span className="rounded-full bg-emerald-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                          Agora
                        </span>
                      ) : null}
                    </div>

                    {selected ? (
                      <div className="mt-5 rounded-3xl bg-emerald-100/80 p-4 dark:bg-emerald-900/20">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-200">
                          Ervas desse horário
                        </p>
                        <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                          {item.herbs.map((herb) => (
                            <li key={herb} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-700" />
                              {herb}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <p className="mt-5 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        Clique para ver as plantas recomendadas nesse período.
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* SEÇÃO 3: SOBRE VERDE VIDA (Dinâmico com ref) */}
      <div ref={sobreRef} className="w-full">
        <SobreVerdeVida onScrollToHome={scrollToHome} onScrollToCatalogo={scrollToCatalogo} />
      </div>

      {/* SEÇÃO 3: CONTATO */}
      <div ref={contatoRef} id="contato" className="w-full bg-emerald-50 dark:bg-slate-900">
        <section className="px-[5%] py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <span className="text-emerald-700 uppercase tracking-[0.3em] text-[11px] font-semibold">
                Contato
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 text-emerald-950 dark:text-emerald-100">
                Fale com a gente
              </h2>
              <p className="mt-4 text-base md:text-lg text-slate-700 dark:text-slate-300">
                Tem alguma dúvida sobre plantas, chás ou o catálogo? Envie sua mensagem e responderemos o quanto antes.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
              <div className="space-y-6">
                <div className="rounded-3xl border border-emerald-100 dark:border-slate-700/80 bg-white dark:bg-slate-950 p-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-4 text-emerald-900 dark:text-emerald-200">Estamos aqui para ajudar</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Entre em contato para receber orientações sobre uso de ervas, melhores horários ou suporte para o catálogo de plantas.
                  </p>
                  <div className="space-y-4 text-slate-700 dark:text-slate-300">
                    <div>
                      <p className="font-semibold">Email</p>
                      <p>contato@saberesdaterra.com</p>
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p>+55 11 99999-9999</p>
                    </div>
                    <div>
                      <p className="font-semibold">Horário de atendimento</p>
                      <p>Segunda a sexta, 9h às 18h</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-5 rounded-3xl border border-emerald-100 dark:border-slate-700/80 bg-white dark:bg-slate-950 p-8 shadow-sm">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Nome</span>
                  <input type="text" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" placeholder="Seu nome" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</span>
                  <input type="email" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" placeholder="seu@email.com" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Mensagem</span>
                  <textarea rows={5} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" placeholder="Escreva sua mensagem aqui" />
                </label>
                <button type="button" className="w-full rounded-2xl bg-emerald-700 px-6 py-3 text-white font-semibold shadow-sm hover:bg-emerald-800 transition">
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

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
        
        <span className={`text-[7px] sm:text-[9px] md:text-[11px] font-extrabold uppercase leading-none ${active ? 'text-emerald-900 dark:text-emerald-100' : 'text-emerald-950 dark:text-emerald-200'}`}>
          {item.organ}
        </span>
        
        <span className={`text-[6px] sm:text-[8px] md:text-[10px] font-bold mt-0.5 ${active ? 'text-emerald-700 dark:text-emerald-200' : 'text-emerald-800 dark:text-emerald-300'}`}>
          {item.start}h - {item.end}h
        </span>
        
        <div className="flex flex-col gap-0.5 mt-1 md:mt-1.5 px-1">
          {item.herbs.map((herb) => (
            <span 
              key={herb} 
              className={`text-[5px] sm:text-[7px] md:text-[9px] leading-tight font-medium ${active ? 'text-emerald-950 dark:text-emerald-100' : 'text-slate-900 dark:text-slate-200'}`}
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