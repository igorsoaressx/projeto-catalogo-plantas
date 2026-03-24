// Ícone da Folha (Extraído para organização)
const IconLeaf = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-700">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a13 13 0 0 1-10 10Z"/><path d="M9.5 15.3E-9C9.5 14 9.5 14 9.5 14"/><path d="M11 20 2 11"/>
  </svg>
);

const IconMenu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-900 md:hidden">
    <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer group">
        <IconLeaf />
        <span className="text-lg font-bold tracking-tight text-emerald-900 group-hover:text-emerald-700 transition-colors">
          Saberes da Terra
        </span>
      </div>
      
      {/* Menu Desktop */}
      <div className="hidden md:flex items-center gap-10 text-[13px] font-medium text-slate-500">
        <a href="#" className="text-emerald-800 font-semibold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-emerald-600 after:rounded-full">Relógio Biológico</a>
        <a href="#" className="hover:text-emerald-700 transition-colors">Catálogo de Ervas</a>
        <a href="#" className="hover:text-emerald-700 transition-colors">Sobre</a>
        <a href="#" className="hover:text-emerald-700 transition-colors">Contato</a>
      </div>

      {/* Mobile */}
      <button className="md:hidden p-2 hover:bg-emerald-50 rounded-lg transition-colors">
        <IconMenu />
      </button>
    </nav>
  );
}