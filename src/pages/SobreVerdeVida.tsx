export default function SobreVerdeVida({ onScrollToHome, onScrollToCatalogo }: { onScrollToHome: () => void; onScrollToCatalogo: () => void }) {
  return (
    <div className="bg-white text-black dark:bg-slate-950 dark:text-slate-100">
      {/* SEÇÃO 1: FUNDAMENTOS */}
      <section className="px-[5%] py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 md:mb-16 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 md:mb-6">
              A Ciência da Cronobiologia
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-slate-300">
              O VerdeVida une a sabedoria ancestral das plantas ao ritmo natural do seu corpo. Descubra os fundamentos de usar a natureza no momento exato para maximizar o seu bem-estar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8 md:gap-y-16">
            {/* Card 1 */}
            <div className="flex flex-col items-start">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Ritmo Circadiano</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Seu corpo possui um relógio interno. Cada órgão tem picos de atividade em horários específicos do dia.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sinergia Perfeita</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Alinhamos as propriedades medicinais das plantas com as janelas de absorção ideais do seu organismo.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-start">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Bem-estar Natural</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Encontre o seu equilíbrio sem forçar o seu corpo, respeitando as pausas e os momentos naturais de energia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: PROCESSOS (COMO FUNCIONA) */}
      <section className="px-[5%] py-16 md:py-24 bg-gray-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 md:mb-6">
              Como Funciona o VerdeVida
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-slate-300">
              Um processo simples para conectar você à planta certa, no momento em que seu corpo mais precisa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-12">
            <div className="text-center md:text-left">
              <div className="text-6xl font-extrabold text-green-200 mb-4 md:mb-6">01</div>
              <h3 className="text-2xl font-bold mb-3">Identifique o Horário</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Use nosso Relógio Biológico para indicar se você está no período da manhã, tarde ou noite.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-6xl font-extrabold text-green-200 mb-4 md:mb-6">02</div>
              <h3 className="text-2xl font-bold mb-3">Escolha a Planta</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Descubra qual planta medicinal está em harmonia com os órgãos que estão ativos nesse momento.
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="text-6xl font-extrabold text-green-200 mb-4 md:mb-6">03</div>
              <h3 className="text-2xl font-bold mb-3">Prepare a Infusão</h3>
              <p className="text-gray-600 dark:text-slate-300">
                Siga nosso guia de preparo simples para extrair o máximo de benefícios e desfrute do seu ritual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: RITUAIS QUE TRANSFORMAM SEUS DIAS (CTA FINAL) */}
      <section className="px-[5%] py-16 md:py-32 bg-emerald-900 dark:bg-emerald-950 text-white text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Rituais que transformam seus dias
          </h2>
          <p className="text-lg md:text-xl text-emerald-100 mb-10">
            Mais do que tomar chás, é sobre criar pausas intencionais. Comece sua jornada de bem-estar cronometrado e sinta a diferença no seu corpo e na sua mente.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onScrollToCatalogo} className="w-full sm:w-auto px-8 py-4 bg-white text-emerald-900 font-semibold rounded-md hover:bg-gray-100 transition-colors">
              Explorar Plantas por Horário
            </button>
            <button onClick={onScrollToHome} className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-emerald-800 transition-colors">
              Conhecer o Relógio Biológico
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
