"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problemSolved: string;
  tags: string[];
  image: string;
  link: string;
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t, lang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col md:flex-row gap-8 items-center bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:bg-zinc-900/60 transition-colors"
    >
      <div className="w-full md:w-1/2 relative aspect-video rounded-xl overflow-hidden bg-zinc-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          unoptimized
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <div>
          <span className="text-xs font-mono text-muted mb-2 block">{project.subtitle}</span>
          <h3 className="text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors">
            {project.title}
          </h3>
        </div>
        
        <p className="text-sm text-muted leading-relaxed">
          {project.description}
        </p>
        
        <div className="bg-zinc-950/50 p-4 rounded-lg border border-zinc-800">
          <h4 className={`text-xs font-semibold text-white mb-2 uppercase ${lang !== 'ar' ? 'tracking-wider' : ''}`}>{t.projectCard.problemSolved}</h4>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {project.problemSolved}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-md" dir="ltr" translate="no">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
