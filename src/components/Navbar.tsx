import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/50">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-tighter text-white">Zi</span>
        <span className="text-sm font-medium text-zinc-400">Zakariya<br/>Irhir</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-zinc-400 uppercase">
        <a href="#about" className="hover:text-white transition-colors">À Propos</a>
        <a href="#projects" className="hover:text-white transition-colors">Projets</a>
        <a href="#skills" className="hover:text-white transition-colors">Compétences</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400 font-mono">
          <span>⌘</span>
          <span>K</span>
        </div>
        <button className="px-4 py-1.5 rounded-full border border-zinc-800 text-sm text-white hover:bg-zinc-800 transition-colors">
          Menu =
        </button>
      </div>
    </nav>
  );
}
