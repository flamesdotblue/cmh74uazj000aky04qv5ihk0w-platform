import { motion } from 'framer-motion';
import { Briefcase, Award } from 'lucide-react';

const internships = [
  {
    role: 'Frontend Engineer Intern',
    company: 'Tech Corp',
    period: 'Jun 2024 — Sep 2024',
    points: [
      'Built responsive UI components and improved performance by 25%.',
      'Implemented CI/CD pipelines and visual regression tests.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Innovate Labs',
    period: 'Jan 2024 — Apr 2024',
    points: [
      'Developed REST APIs and added end-to-end monitoring.',
      'Collaborated cross‑functionally to ship features faster.',
    ],
  },
];

const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024' },
  { name: 'Google Professional Cloud Developer', issuer: 'Google Cloud', year: '2023' },
  { name: 'Meta Front-End Developer', issuer: 'Coursera', year: '2023' },
];

export default function Experience() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <Briefcase className="text-violet-400" size={20} />
              <h2 className="text-2xl sm:text-3xl font-semibold">Internships</h2>
            </motion.div>

            <div className="mt-8 space-y-6">
              {internships.map((job, i) => (
                <motion.div
                  key={job.company + i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-medium">{job.role}</h3>
                      <p className="text-sm text-white/70">{job.company}</p>
                    </div>
                    <span className="text-xs text-white/60">{job.period}</span>
                  </div>
                  <ul className="mt-3 list-disc list-inside text-sm text-white/80 space-y-1">
                    {job.points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <Award className="text-violet-400" size={20} />
              <h2 className="text-2xl sm:text-3xl font-semibold">Certifications</h2>
            </motion.div>

            <div className="mt-8 space-y-4">
              {certifications.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 flex items-center justify-between"
                >
                  <div>
                    <p className="font-medium">{c.name}</p>
                    <p className="text-sm text-white/70">{c.issuer}</p>
                  </div>
                  <span className="text-xs text-white/60">{c.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
