"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import fr from "../data/locales/fr.json";
import en from "../data/locales/en.json";
import ar from "../data/locales/ar.json";

export type Language = "fr" | "en" | "ar";

// Use typeof fr to extract the exact shape of our dictionary
export type Dictionary = typeof fr;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Dictionary;
}

const dictionaries: Record<Language, Dictionary> = {
  fr,
  en,
  ar,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("fr");

  useEffect(() => {
    // Update HTML dir attribute for RTL support when Arabic is selected
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"} className={lang === "ar" ? "font-arabic" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
