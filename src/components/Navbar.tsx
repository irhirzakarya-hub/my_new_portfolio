"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu as MenuIcon } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "À Propos", href: "#about" },
    { label: "Projets", href: "#projects" },
    { label: "Compétences", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/50">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-white">Zi</span>
          <span className="text-sm font-medium text-zinc-400">Zakariya<br/>Irhir</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-zinc-400 uppercase">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400 font-mono">
            <span>⌘</span>
            <span>K</span>
          </div>
          <button 
            type="button"
            onClick={() => setIsOpen(true)}
            style={{ zIndex: 9999 }}
            className="md:hidden flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 text-sm text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            Menu <MenuIcon className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40 bg-zinc-950/40 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Floating Menu */}
          <div
            style={{ zIndex: 99999 }}
            className="fixed top-20 left-6 right-6 md:hidden bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between text-lg font-medium text-zinc-300 hover:text-white p-3 rounded-xl hover:bg-zinc-800/50 transition-all"
                >
                  {link.label}
                  <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-zinc-800/50 text-center text-xs font-mono text-zinc-500">
              Zakariya Irhir — Portfolio
            </div>
          </div>
        </>
      )}
    </>
  );
}
