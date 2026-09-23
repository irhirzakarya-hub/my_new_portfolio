"use client";

import { Mail } from "lucide-react";
import data from "../data/portfolio.json";
import Image from "next/image";

export function Footer() {
  const { footer, personal } = data;

  return (
    <footer id="contact" className="border-t border-zinc-800 bg-zinc-950 mt-32 py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">{footer.headline}</h2>
          <p className="text-muted text-sm max-w-md">{footer.subtitle}</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`https://wa.me/${personal.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all hover:scale-105 opacity-80 hover:opacity-100"
            title="WhatsApp"
          >
            <Image src="/photodata/wtsp.jpg" alt="WhatsApp" width={48} height={48} className="object-cover w-full h-full" unoptimized />
          </a>
          <a
            href={personal.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all hover:scale-105 opacity-80 hover:opacity-100"
            title="GitHub"
          >
            <Image src="/photodata/github.jpg" alt="GitHub" width={48} height={48} className="object-cover w-full h-full" unoptimized />
          </a>
          <a
            href={personal.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all hover:scale-105 opacity-80 hover:opacity-100"
            title="LinkedIn"
          >
            <Image src="/photodata/linkedin.jpg" alt="LinkedIn" width={48} height={48} className="object-cover w-full h-full" unoptimized />
          </a>
          <a
            href={`mailto:${personal.contact.email}`}
            className="w-12 h-12 rounded-full overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all hover:scale-105 opacity-80 hover:opacity-100"
            title="Email"
          >
            <Image src="/photodata/email.jpg" alt="Email" width={48} height={48} className="object-cover w-full h-full" unoptimized />
          </a>
        </div>

      </div>
      
      <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-mono">
        <p>&copy; {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <p>Built with Next.js & Framer Motion</p>
      </div>
    </footer>
  );
}
