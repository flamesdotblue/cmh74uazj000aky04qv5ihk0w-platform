import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0b0b0b] to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">Let’s build something great</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            I’m open to internships, freelance opportunities, and full‑time roles. Reach out and I’ll respond promptly.
          </p>
        </motion.div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ContactItem href="mailto:your.email@example.com" icon={<Mail size={18} />} label="Email" value="your.email@example.com" />
          <ContactItem href="tel:+1234567890" icon={<Phone size={18} />} label="Phone" value="+1 (234) 567-890" />
          <ContactItem href="https://github.com/yourusername" icon={<Github size={18} />} label="GitHub" value="yourusername" external />
          <ContactItem href="https://www.linkedin.com/in/yourusername/" icon={<Linkedin size={18} />} label="LinkedIn" value="/in/yourusername" external />
        </div>
      </div>
    </section>
  );
}

function ContactItem({ href, icon, label, value, external }) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-5 flex items-center gap-4"
    >
      <span className="shrink-0 text-violet-400">{icon}</span>
      <div>
        <p className="text-xs uppercase tracking-wide text-white/60">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </motion.a>
  );
}
