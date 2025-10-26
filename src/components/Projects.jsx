import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderOpen } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Dashboard',
    description: 'Analytics dashboard with live updates, role-based auth, and custom charting.',
    stack: ['React', 'TypeScript', 'WebSockets', 'Tailwind'],
    github: 'https://github.com/yourusername/realtime-dashboard',
    demo: 'https://your-demo-link.com',
  },
  {
    title: 'E-commerce Storefront',
    description: 'Headless storefront with payments, search, and optimized SEO.',
    stack: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/yourusername/commerce',
    demo: 'https://your-demo-link.com',
  },
  {
    title: '3D Portfolio',
    description: 'Interactive 3D portfolio integrating Spline scenes and smooth animations.',
    stack: ['React', 'Spline', 'Framer Motion'],
    github: 'https://github.com/yourusername/3d-portfolio',
    demo: 'https://your-demo-link.com',
  },
  {
    title: 'AI Notes Assistant',
    description: 'Semantic search, summarization, and tagging for personal knowledge bases.',
    stack: ['Next.js', 'OpenAI', 'Pinecone'],
    github: 'https://github.com/yourusername/ai-notes',
    demo: 'https://your-demo-link.com',
  },
];

export default function Projects() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <FolderOpen className="text-violet-400" size={20} />
          <h2 className="text-2xl sm:text-3xl font-semibold">Featured Projects</h2>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition overflow-hidden"
            >
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <div className="flex items-center gap-3 shrink-0">
                    <a href={p.github} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                      <Github size={18} />
                    </a>
                    <a href={p.demo} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs bg-white/10 text-white/80 rounded px-2 py-1">{s}</span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-violet-500/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
