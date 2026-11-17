import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Foundation", desc: "Asosiy dasturlash tushunchalarini va eng muhim vositalarni o'rganish." },
  { num: "02", title: "Real loyihalar", desc: "Jamoangiz bilan ishlab chiqarish darajasidagi real ilovalarni yarating." },
  { num: "03", title: "Portfolio yaratish", desc: "Sizni boshqalardan ajratib turadigan professional Portfolio ustida ishlash." },
  { num: "04", title: "Ishga tayyorgarlik", desc: "Suhbatga tayyorgarlik, rezyumeni ko'rib chiqish va karyera bo'yicha maslahatlar." },
];

const JourneySection = () => (
  // bg-white: Fonni oq qildik
  <section className="py-24 bg-white overflow-hidden">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p style={{ color: '#F97316' }} className="font-mono text-sm mb-3 tracking-wider uppercase font-bold">
          Talabalik bosqichlari
        </p>
        <h2 style={{ color: '#1B365D' }} className="font-display text-3xl md:text-[40px] font-bold">
          Siz o'tadigan yo'l
        </h2>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Accent line - Markaziy chiziq endi to'q ko'k rangda (gradient bilan) */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#1B365D] via-[#1B365D]/20 to-transparent -translate-x-1/2" />

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className={`relative flex items-start mb-20 last:mb-0 ${
              i % 2 === 0 ? "md:flex-row text-left md:text-right" : "md:flex-row-reverse text-left"
            }`}
          >
            {/* Nuqta (Dot) - To'q sariq (Orange) rangda, bu diqqatni bosqichga qaratadi */}
            <div 
              style={{ backgroundColor: '#F97316' }} 
              className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-sm z-10" 
            />

            <div className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)]`}>
              {/* Bosqich raqami - Ko'k rangda */}
              <span style={{ color: '#1B365D' }} className="font-mono text-xs font-bold opacity-50 uppercase tracking-widest">
                Bosqich {step.num}
              </span>
              
              {/* Sarlavha - To'q ko'kda */}
              <h3 style={{ color: '#1B365D' }} className="font-display text-xl md:text-2xl font-bold mt-1 mb-3">
                {step.title}
              </h3>
              
              {/* Tavsif - Ko'k rangda biroz shaffoflik bilan */}
              <p style={{ color: '#1B365D' }} className="text-sm md:text-base leading-relaxed opacity-70">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default JourneySection;