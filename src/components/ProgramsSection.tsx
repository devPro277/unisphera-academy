import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Server, Shield, Layers } from "lucide-react";

const programs = [
  {
    icon: Code,
    title: "Frontend Development",
    desc: "React, TypeScript va zamonaviy UI freymvorklar yordamida mukammal interfeyslar yaratishni o'rganing.",
    duration: "12 Hafta",
    price: "$1,200",
    accent: "#F97316",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Node.js, ma'lumotlar bazasi, API va bulutli infratuzilmani noldan o'rganing.",
    duration: "14 Hafta",
    price: "$1,400",
    accent: "#1B365D",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Kiber-tahdidlar, tarmoq xavfsizligi, etik xakerlik va xavfsizlik choralarini tushunib oling.",
    duration: "16 Hafta",
    price: "$1,600",
    accent: "#F97316",
  },
  {
    icon: Layers,
    title: "Fullstack Development",
    desc: "Frontend, backend va DevOps ko'nikmalarini birlashtirgan holda to'liq loyihalar yarating.",
    duration: "20 Hafta",
    price: "$2,200",
    accent: "#1B365D",
  },
];

const ProgramCard = ({ p, i }: { p: typeof programs[0]; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="relative bg-white border border-slate-100 rounded-2xl p-8 shadow-sm flex flex-col overflow-hidden group cursor-pointer"
    >
      {/* Hover accent line top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ background: p.accent, transformOrigin: "left" }}
      />

      {/* Icon */}
      <motion.div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
        style={{ background: `${p.accent}12` }}
        whileHover={{ scale: 1.1, rotate: 6 }}
        transition={{ duration: 0.25 }}
      >
        <p.icon size={22} style={{ color: p.accent }} />
      </motion.div>

      {/* Title */}
      <h3 style={{ color: "#1B365D" }} className="font-display text-lg font-bold mb-3">
        {p.title}
      </h3>

      {/* Desc */}
      <p style={{ color: "#1B365D" }} className="text-sm leading-relaxed mb-6 flex-1 opacity-70">
        {p.desc}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <span style={{ color: "#1B365D" }} className="text-xs font-mono opacity-50">
          {p.duration}
        </span>
        <motion.span
          style={{ color: p.accent }}
          className="text-sm font-bold"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.2 }}
        >
          {p.price}
        </motion.span>
      </div>
    </motion.div>
  );
};

const ProgramsSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.p
            style={{ color: "#F97316" }}
            className="font-mono text-sm mb-3 tracking-wider uppercase font-bold"
            initial={{ opacity: 0, y: 12 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Yo'nalishlar
          </motion.p>
          <motion.h2
            style={{ color: "#1B365D" }}
            className="font-display text-3xl md:text-[40px] font-bold"
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          >
            O'z yo'lingni tanla!
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <ProgramCard key={p.title} p={p} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;