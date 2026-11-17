import { motion } from "framer-motion";

const stats = [
  { value: "200+", label: "O'quvchilar" },
  { value: "7+", label: "Mentorlar" },
  { value: "85%", label: "Muvaffaqiyatli loyihalar" }, // Yazuvdagi xato tuzatildi
  { value: "10+", label: "Haqiqiy loyihalar" },
];

const StatsSection = () => (
  // bg-white: Fon oq qilindi. Border ranglari juda och ko'k/kulrangga o'zgartirildi
  <section className="py-20 bg-white border-y border-slate-50">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            // Kartochka foni oq, ramka juda nozik va yengil soya bilan
            className="bg-white border border-slate-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Raqamlar (Value) - UniSphere to'q ko'k rangida */}
            <p style={{ color: '#1B365D' }} className="font-display text-3xl md:text-4xl font-bold mb-2">
              {stat.value}
            </p>
            
            {/* Izoh (Label) - Ko'k rangning 60% opacity holatida yoki to'q sariq aksentda */}
            <p style={{ color: '#1B365D' }} className="text-sm font-medium opacity-60">
              {stat.label}
            </p>

            {/* Dizaynni boyitish uchun pastda kichkina sariq chiziqcha (ixtiyoriy) */}
            <div className="w-8 h-1 bg-orange-500 mx-auto mt-4 rounded-full opacity-80" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;