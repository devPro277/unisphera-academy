import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "E-Commerce Platform", student: "Maria K.", techs: ["React", "Node.js", "PostgreSQL"] },
  { title: "AI Chat Dashboard", student: "James L.", techs: ["Next.js", "OpenAI", "Tailwind"] },
  { title: "Fintech Mobile App", student: "Aisha R.", techs: ["React Native", "Firebase", "Stripe"] },
  { title: "DevOps Monitor", student: "Chen W.", techs: ["Go", "Docker", "Grafana"] },
];

const ProjectsSection = () => (
  // bg-white: Fonni oq qildik
  <section id="student-results" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p style={{ color: '#F97316' }} className="font-mono text-sm mb-3 tracking-wider uppercase font-bold">
          O'quvchilar loyihalari
        </p>
        <h2 style={{ color: '#1B365D' }} className="font-display text-3xl md:text-[40px] font-bold">
          Talabalarimiz tomonidan yaratilgan
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            // Kartochka: Oq fon va nozik ramka
            className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            {/* SARIQ GRADIENT QISMI - Bren rangiga moslab tahrirlandi */}
            <div 
              className="h-40 flex items-center justify-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(249, 115, 22, 0.02) 100%)' }}
            >
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `radial-gradient(#F97316 1px, transparent 1px)`,
                backgroundSize: '10px 10px'
              }} />
              <span style={{ color: '#F97316' }} className="font-mono text-xs font-bold uppercase tracking-widest opacity-60">
                Project Preview
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                {/* Loyiha nomi: To'q ko'kda */}
                <h3 style={{ color: '#1B365D' }} className="font-display text-base font-bold">
                  {p.title}
                </h3>
                <ExternalLink size={14} style={{ color: '#1B365D' }} className="opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>
              
              {/* O'quvchi ismi */}
              <p style={{ color: '#1B365D' }} className="text-xs mb-4 opacity-60">
                by {p.student}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.techs.map((t) => (
                  <span 
                    key={t} 
                    style={{ backgroundColor: 'rgba(27, 54, 93, 0.05)', color: '#1B365D' }}
                    className="font-mono text-[10px] px-2 py-1 rounded font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;