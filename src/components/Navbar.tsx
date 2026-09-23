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
        <div
          style={{ zIndex: 99999 }}
          className="fixed inset-0 bg-zinc-950/95 backdrop-blur-xl flex flex-col items-center justify-center transition-opacity duration-300"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col items-center gap-8 text-2xl md:text-4xl font-bold tracking-tight">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          
          <div className="absolute bottom-10 text-zinc-600 font-mono text-sm">
            Zakariya Irhir — Portfolio
          </div>
        </div>
      )}
    </>
  );
}
