import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Starfield } from "@/components/Starfield";
import { ProjectCard } from "@/components/ProjectCard";
import { CodeCard } from "@/components/CodeCard";
import { VideoModal } from "@/components/VideoModal";
import { Footer } from "@/components/Footer";
import data from "@/data/portfolio.json";

export default function Home() {
  const { projects, codeNotes } = data;

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-zinc-800 selection:text-white">
      <Starfield />
      <Navbar />
      <Hero />

      {/* Video Showcase Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Démonstration Technique</h2>
          <p className="text-muted">Aperçu en direct des workflows et de l'interface utilisateur.</p>
        </div>
        <VideoModal />
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="relative z-10 max-w-5xl mx-auto px-4 py-20">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Projets Phares</h2>
          <p className="text-muted">Une plongée profonde dans l'architecture et les solutions apportées.</p>
        </div>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Technical Notes / Code Production Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 py-20 border-t border-zinc-900 mt-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Notes Techniques</h2>
          <p className="text-muted">Extraits de code de production et algorithmes critiques.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {codeNotes.map((note, index) => (
            <CodeCard key={note.id} note={note} index={index} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
