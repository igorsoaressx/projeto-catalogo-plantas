export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-center text-slate-400 dark:text-slate-500 text-xs border-t border-emerald-100/50 dark:border-slate-700/50 mt-10">
      <p className="font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-widest mb-1">
        Saberes da Terra © {currentYear}
      </p>
      <p className="font-light">Baseado na sabedoria da Medicina Tradicional.</p>
    </footer>
  );
}