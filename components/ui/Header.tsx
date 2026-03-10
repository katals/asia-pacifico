"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          AI Table
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link 
            href="/" 
            className={`text-sm font-medium transition-colors hover:text-white ${pathname === "/" ? "text-white" : "text-white/60"}`}
          >
            Inicio
          </Link>
          <div className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
            <span>Ruta actual: <code className="text-white/80">{pathname}</code></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
