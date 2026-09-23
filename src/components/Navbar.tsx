"use client";

import { useState } from "react";
import { X, Menu as MenuIcon, Globe } from "lucide-react";
import { useLanguage, Language } from "@/context/LanguageContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const toggleLanguage = (newLang: Language) => {
    setLang(newLang);
    setLangMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/50">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-white">Zi</span>
          <span className="text-sm font-medium text-zinc-400" dir="ltr">{t.personal.name.split(" ")[0]}<br/>{t.personal.name.split(" ").slice(1).join(" ")}</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-zinc-400 uppercase">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button 
              type="button"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 text-xs text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase">{lang}</span>
            </button>
            
            {langMenuOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setLangMenuOpen(false)} />
                <div className="absolute top-full mt-2 right-0 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl overflow-hidden z-50 flex flex-col w-24 text-xs font-mono">
                  <button onClick={() => toggleLanguage('fr')} className={`px-4 py-2 text-left hover:bg-zinc-800 transition-colors ${lang === 'fr' ? 'text-blue-500 font-bold' : 'text-zinc-300'}`}>FR</button>
                  <button onClick={() => toggleLanguage('en')} className={`px-4 py-2 text-left hover:bg-zinc-800 transition-colors ${lang === 'en' ? 'text-blue-500 font-bold' : 'text-zinc-300'}`}>EN</button>
                  <button onClick={() => toggleLanguage('ar')} className={`px-4 py-2 text-left hover:bg-zinc-800 transition-colors ${lang === 'ar' ? 'text-blue-500 font-bold' : 'text-zinc-300'}`}>AR</button>
                </div>
              </>
            )}
          </div>

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
            {t.nav.menu} <MenuIcon className="w-4 h-4" />
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
                  className="flex items-center justify-between text-lg font-medium text-zinc-300 hover:text-white p-3 rounded-xl hover:bg-zinc-800/50 transition-all group"
                >
                  {link.label}
                  <span className={`text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity ${lang === 'ar' ? 'rotate-180' : ''}`}>→</span>
                </a>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-zinc-800/50 text-center text-xs font-mono text-zinc-500">
              {t.nav.portfolio}
            </div>
          </div>
        </>
      )}
    </>
  );
}
