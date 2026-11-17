import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emily Zhang",
    review: "UniSphere mening karyeramni butunlay o'zgartirdi. Men noldan boshlab 4 oy ichida frontend dasturchi bo'lib ishga kirdim.",
    initials: "EZ",
  },
  {
    name: "Carlos Mendez",
    review: "Bu yerdagi mentorlik tizimi tengsiz. Mentorim meni haqiqiy loyihalar orqali IT sohasiga to'liq tayyorladi.",
    initials: "CM",
  },
  {
    name: "Priya Sharma",
    review: "Men qilgan eng yaxshi sarmoya. O'quv dasturi amaliy, hamjamiyat esa juda qo'llab-quvvatlovchi.",
    initials: "PS",
  },
];

const TestimonialsSection = () => (
  // bg-white: Fonni oq qildik
  <section className="py-24 bg-white border-t border-slate-50">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p style={{ color: '#F97316' }} className="font-mono text-sm mb-3 tracking-wider uppercase font-bold">
          Sharhlar
        </p>
        <h2 style={{ color: '#1B365D' }} className="font-display text-3xl md:text-[40px] font-bold">
          O'quvchilarimiz fikri
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            // Kartochka: Oq fon, mayin soya va yumaloq burchaklar
            className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Yulduzchalar: To'q sariq (Orange) rangda */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} fill="#F97316" color="#F97316" />
              ))}
            </div>

            {/* Fikr matni: To'q ko'kda (opacity bilan) */}
            <p style={{ color: '#1B365D' }} className="text-sm leading-relaxed mb-6 opacity-80 italic">
              "{t.review}"
            </p>

            <div className="flex items-center gap-3">
              {/* Avatar: To'q ko'k fonda oq harflar */}
              <div style={{ backgroundColor: '#1B365D' }} className="w-10 h-10 rounded-full flex items-center justify-center">
                <span className="font-display text-xs font-bold text-white">{t.initials}</span>
              </div>
              
              {/* Ism: To'q ko'kda */}
              <span style={{ color: '#1B365D' }} className="font-display text-sm font-bold">
                {t.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;