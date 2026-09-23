"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Clock } from "./Clock";

export function Hero() {
  const { t } = useLanguage();
  const { personal, techStack, hero } = t;

  return (
    <>
      <section id="about" className="relative min-h-[90vh] flex items-center pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto w-full z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-left max-w-2xl"
          >
            <p className="text-blue-500 font-mono text-xs md:text-sm mb-6 tracking-wide uppercase">
              {hero.role}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.1]">
              {personal.name.split(" ")[0]}<br />{personal.name.split(" ").slice(1).join(" ")}
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-xl font-light">
              {personal.bio}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2"
              >
                {hero.viewWork}
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-transparent border border-zinc-700 text-white font-medium hover:bg-zinc-900 transition-colors"
              >
                {hero.contactMe}
              </a>
            </div>
          </motion.div>

          {/* Right Side: Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex-1 flex justify-center md:justify-end w-full relative"
          >
            <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
              {/* Optional glowing effect behind avatar */}
              <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
              <Image
                src={personal.avatar}
                alt="Portrait"
                fill
                className="object-contain object-bottom relative z-10 mix-blend-screen drop-shadow-2xl opacity-90"
                priority
                unoptimized
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Info Bar (Absolute at bottom of Hero) */}
        <div className="absolute bottom-0 left-6 right-6 md:left-12 md:right-12 border-t border-zinc-800/50 py-4 flex items-center justify-between text-xs font-mono text-zinc-500">
          <div dir="ltr">34.02°N 6.84°W</div>
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
            <Clock />
          </div>
          <div className="flex items-center gap-2">
            {hero.viewWork.replace(" ↗", "")} ↓
          </div>
        </div>
      </section>

      {/* Huge Skills Marquee */}
      <section id="skills" className="w-full border-y border-zinc-900 bg-zinc-950/50 py-6 md:py-10 overflow-hidden relative z-20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="flex whitespace-nowrap items-center w-max"
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="flex items-center">
              <span className="text-[3rem] md:text-[6rem] lg:text-[7rem] font-bold text-zinc-300/80 tracking-tighter px-6 md:px-10 hover:text-white transition-colors cursor-default">
                {tech.name}
              </span>
              <span className="text-blue-600 text-3xl md:text-5xl font-bold">·</span>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
