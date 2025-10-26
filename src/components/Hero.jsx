import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[100svh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hItYec195M0PYk2X/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/90" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Portfolio</p>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Your Name
            </h1>
            <p className="mt-4 text-white/70 max-w-2xl">
              Full‑stack Developer crafting modern, performant, and accessible web experiences. Focused on React, TypeScript, and cloud-native architectures.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-violet-500/90 hover:bg-violet-500 text-white px-5 py-3 text-sm font-medium transition"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-3 text-sm font-medium transition"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5 text-white/80">
              <a aria-label="Email" href="mailto:your.email@example.com" className="hover:text-white transition">
                <Mail size={20} />
              </a>
              <a aria-label="GitHub" href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-white transition">
                <Github size={20} />
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noreferrer" className="hover:text-white transition">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
