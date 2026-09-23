"use client";

import { motion } from "framer-motion";

interface CodeNote {
  id: string;
  title: string;
  description: string;
  code: string;
}

export function CodeCard({ note, index }: { note: CodeNote; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col h-full bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-lg group"
    >
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-2 text-xs font-mono text-zinc-400">{note.title}</span>
        </div>
      </div>
      <div className="flex-1 p-4 md:p-6 text-sm font-mono text-zinc-300 overflow-x-auto relative min-h-[220px]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-950/20 pointer-events-none group-hover:opacity-0 transition-opacity" />
        <pre>
          <code>{note.code}</code>
        </pre>
      </div>
      <div className="px-4 py-3 bg-zinc-900/50 border-t border-zinc-800/50">
        <p className="text-xs text-muted">{note.description}</p>
      </div>
    </motion.div>
  );
}
