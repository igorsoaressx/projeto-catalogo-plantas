// Ícone da Folha (Extraído para organização)
const IconLeaf = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-700 dark:text-emerald-300">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a13 13 0 0 1-10 10Z"/><path d="M9.5 15.3E-9C9.5 14 9.5 14 9.5 14"/><path d="M11 20 2 11"/>
  </svg>
);

const IconMenu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-900 dark:text-emerald-200 md:hidden">
    <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);

export default function Header({ onScrollToHome, onScrollToSobre, onScrollToCatalogo, onScrollToContato }: { onScrollToHome: () => void; onScrollToSobre: () => void; onScrollToCatalogo: () => void; onScrollToContato: () => void }) {
  return (
    <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full z-50 text-slate-900 dark:text-slate-100">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer group">
        <IconLeaf />
        <span className="text-lg font-bold tracking-tight text-emerald-900 dark:text-emerald-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
          Saberes da Terra
        </span>
      </div>
      
      {/* Menu Desktop */}
      <div className="hidden md:flex items-center gap-10 text-[13px] font-medium text-slate-500 dark:text-slate-400">
        <button onClick={onScrollToHome} className="text-emerald-800 dark:text-emerald-300 font-semibold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-emerald-600 after:rounded-full hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">Relógio Biológico</button>
        <button onClick={onScrollToSobre} className="hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">Sobre</button>
        <button onClick={onScrollToCatalogo} className="hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">Catálogo de Ervas</button>
        <button onClick={onScrollToContato} className="hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">Contato</button>
      </div>

      {/* Mobile */}
      <button className="md:hidden p-2 hover:bg-emerald-50 dark:hover:bg-emerald-700/20 rounded-lg transition-colors">
        <IconMenu />
      </button>
    </nav>
  );
}