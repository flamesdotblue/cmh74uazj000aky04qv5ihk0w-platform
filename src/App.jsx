import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    handleHashScroll();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-white">MyPortfolio</a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >GitHub</a>
            <a
              href="https://www.linkedin.com/in/yourusername/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >LinkedIn</a>
          </nav>
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 bg-white/5"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10 bg-black/80">
            <div className="px-6 py-4 space-y-3 text-sm">
              <a onClick={() => setOpen(false)} href="#projects" className="block text-white/80">Projects</a>
              <a onClick={() => setOpen(false)} href="#experience" className="block text-white/80">Experience</a>
              <a onClick={() => setOpen(false)} href="#contact" className="block text-white/80">Contact</a>
              <a onClick={() => setOpen(false)} href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="block text-white/80">GitHub</a>
              <a onClick={() => setOpen(false)} href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noreferrer" className="block text-white/80">LinkedIn</a>
            </div>
          </div>
        )}
      </header>

      <main className="overflow-x-hidden">
        <section id="home">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="border-t border-white/10 text-sm text-white/50">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:your.email@example.com" className="hover:text-white">Email</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
