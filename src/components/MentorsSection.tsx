import { motion } from "framer-motion";

const mentors = [
  { name: "Alex Chen", role: "Senior Frontend Engineer", exp: "Google'da 8+ yil", avatar: "AC" },
  { name: "Sara Miller", role: "Backend Architect", exp: "AWS'da 10+ yil", avatar: "SM" },
  { name: "David Park", role: "Cybersecurity Lead", exp: "InfoSec'da 12+ yil", avatar: "DP" },
  { name: "Lina Rossi", role: "Fullstack Developer", exp: "Stripe'da 7+ yil", avatar: "LR" },
];

const MentorsSection = () => (
  // bg-white: Fonni oq qildik, border-slate-50 orqali juda yengil chegara qo'shdik
  <section id="mentors" className="py-24 bg-white border-t border-slate-50">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p style={{ color: '#F97316' }} className="font-mono text-sm mb-3 tracking-wider uppercase font-bold">
          Mentorlar
        </p>
        <h2 style={{ color: '#1B365D' }} className="font-display text-3xl md:text-[40px] font-bold">
          Eng yaxshilardan o'rganing
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mentors.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            // Kartochka: Oq fon, yengil soya va nozik ko'k ramka bilan
            className="bg-white border border-slate-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Avatar qismi: Fondagi rang ko'kning juda och holati (#1B365D/5) */}
            <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center mx-auto mb-6">
              <span style={{ color: '#1B365D' }} className="font-display text-2xl font-bold">
                {m.avatar}
              </span>
            </div>
            
            {/* Mentor ismi: To'q ko'k rangda */}
            <h3 style={{ color: '#1B365D' }} className="font-display text-lg font-bold mb-1">
              {m.name}
            </h3>
            
            {/* Lavozimi: To'q sariq (Orange) aksentda - bu uning statusini ko'rsatadi */}
            <p style={{ color: '#F97316' }} className="text-sm font-semibold mb-2">
              {m.role}
            </p>
            
            {/* Tajribasi: Ko'k rangda, biroz xiraroq (opacity-60) */}
            <p style={{ color: '#1B365D' }} className="text-xs font-mono opacity-60">
              {m.exp}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MentorsSection;