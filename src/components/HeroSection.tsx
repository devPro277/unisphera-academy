import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

function useCountUp(target: number, duration = 1600, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(ease * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
}

function useTypingEffect(words: string[], typeSpeed = 90, deleteSpeed = 60) {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    let wi = 0, ci = 0, deleting = false;
    let timeout: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[wi];
      if (!deleting) {
        setDisplay(word.slice(0, ci + 1));
        ci++;
        if (ci === word.length) {
          timeout = setTimeout(() => { deleting = true; timeout = setTimeout(tick, deleteSpeed); }, 2800);
          return;
        }
      } else {
        setDisplay(word.slice(0, ci - 1));
        ci--;
        if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
      }
      timeout = setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
    };
    timeout = setTimeout(tick, 800);
    return () => clearTimeout(timeout);
  }, []);
  return display;
}

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${8 + (i * 6.8) % 84}%`,
  duration: 5 + (i * 0.7) % 5,
  delay: (i * 0.55) % 7,
  size: i % 3 === 0 ? 4 : 3,
}));

const ORBS = [
  { size: 380, top: "-120px", left: "-100px",   color: "#1B365D", opacity: 0.04, delay: 0,   dur: 9  },
  { size: 260, bottom: "-60px", right: "8%",    color: "#F97316", opacity: 0.05, delay: 1.5, dur: 11 },
  { size: 180, top: "30%",      right: "-60px", color: "#1B365D", opacity: 0.04, delay: 0.8, dur: 7  },
];

const STATS = [
  { target: 1240, suffix: "+", label: "Talaba",  duration: 1600 },
  { target: 48,   suffix: "",  label: "Kurs",    duration: 1200 },
  { target: 94,   suffix: "%", label: "Bandlik", duration: 1400 },
];

const HeroSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  const typed = useTypingEffect(["Ertangi Kelajak"]);
  const [cursorVisible, setCursorVisible] = useState(true);

  const students = useCountUp(1240, 1600, statsInView);
  const courses  = useCountUp(48,   1200, statsInView);
  const employed = useCountUp(94,   1400, statsInView);
  const statValues = [students, courses, employed];

  useEffect(() => {
    const id = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = document.getElementById("hero-grid");
    if (!el) return;
    let pos = 0, raf: number;
    const animate = () => {
      pos = (pos + 0.03) % 60;
      el.style.backgroundPosition = `${pos}px ${pos}px`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-white overflow-hidden">

      {/* Grid */}
      <div
        id="hero-grid"
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `linear-gradient(#1B365D 1px, transparent 1px), linear-gradient(90deg, #1B365D 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: 0.05,
        }}
      />

      {/* Orbs */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.color,
            opacity: orb.opacity,
            filter: "blur(70px)",
            top: (orb as any).top,
            left: (orb as any).left,
            bottom: (orb as any).bottom,
            right: (orb as any).right,
          }}
          animate={{ y: [0, -20, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: orb.dur, delay: orb.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#1B365D]"
            style={{ width: p.size, height: p.size, left: p.left, bottom: 0 }}
            animate={{ y: [0, -220], opacity: [0, 0.25, 0.25, 0] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.1, 0.85, 1],
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10 max-w-3xl">

        {/* Badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-orange-200 bg-orange-50/40">
            <span className="relative flex h-2.5 w-2.5">
              <motion.span
                className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"
                animate={{ scale: [1, 2.2], opacity: [0.75, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
              />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
            </span>
            <span style={{ color: "#1B365D" }} className="text-sm font-mono font-medium">
              Hoziroq - ro'yxatdan o'ting!
            </span>
          </div>
        </motion.div>
    <h1
      style={{ color: '#1B365D', whiteSpace: 'nowrap' }}
      className="font-display text-5xl font-bold text-center mb-6"
    >
      Bugungi Qaror - Ertangi Kelajak
    </h1>

        {/* Description */}
        <motion.p
          style={{ color: "#1B365D" }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          UniSphere akademiyasi talabalarga amaliy ta'lim va kuchli metodika orqali
          haqiqiy dasturchiga aylanishga imkon beradi.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button
              style={{ backgroundColor: "#F97316", color: "white" }}
              className="relative h-12 px-8 rounded-lg font-semibold overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-white/20 skew-x-[-20deg]"
                initial={{ x: "-120%" }}
                animate={{ x: "150%" }}
                transition={{ duration: 2.4, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
              />
              O'rganishni Boshlash
            </Button>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button
              variant="outline"
              style={{ borderColor: "#1B365D", color: "#1B365D" }}
              className="h-12 px-8 rounded-lg hover:bg-slate-50 transition-all font-semibold"
            >
              Kurslarni ko'rish
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          className="flex items-center justify-center gap-0 mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center px-10 py-5"
              style={{ borderLeft: i !== 0 ? "1px solid rgba(27,54,93,0.12)" : "none" }}
            >
              <span
                className="text-[40px] font-bold leading-none tracking-tight tabular-nums"
                style={{ color: "#1B365D" }}
              >
                {statValues[i].toLocaleString()}
                <span style={{ color: "#F97316" }}>{stat.suffix}</span>
              </span>
              <span
                className="text-[11px] font-mono uppercase tracking-[0.18em] mt-2"
                style={{ color: "#1B365D", opacity: 0.4 }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;