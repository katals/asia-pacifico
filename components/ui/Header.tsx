"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          AI Table
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link 
            href="/" 
            className={`text-sm font-medium transition-colors hover:text-foreground ${pathname === "/" ? "text-foreground" : "text-muted-foreground"}`}
          >
            Inicio
          </Link>
          <div className="text-xs px-3 py-1.5 rounded-full bg-secondary border border-border text-secondary-foreground flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
            <span>Ruta actual: <code className="text-foreground">{pathname}</code></span>
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
