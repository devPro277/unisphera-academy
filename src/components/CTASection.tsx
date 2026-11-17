import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => (
  <section className="py-24 bg-white overflow-hidden relative">
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        // Noodatiy gradient fon: Ko'kdan biroz ochroq ko'kka
        style={{ background: 'linear-gradient(135deg, #1B365D 0%, #254a7c 100%)' }}
        className="relative rounded-[40px] p-12 md:p-24 text-center overflow-hidden shadow-2xl"
      >
        {/* NOODATIY ELEMENT 1: Suzuvchi yorug'lik pufakchalari (Blobs) */}
        <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-blue-400/10 rounded-full blur-[100px]" />

        {/* NOODATIY ELEMENT 2: Dekorativ ramka (Glassmorphism card) */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            <Sparkles size={16} className="text-orange-400" />
            <span className="text-white text-xs font-mono tracking-widest uppercase">Imkoniyatni qo'ldan boy bermang</span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Texnologik Kelajagingizni <br /> <span style={{ color: '#F97316' }}>Bugun Boshlang</span>
          </h2>

          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-white/80 leading-relaxed">
            UniSphere Academy bilan birga yuzlab muvaffaqiyatli talabalar safiga qo'shiling va zamonaviy kasb egasiga aylaning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Asosiy Tugma: Sariq */}
            <Button 
              size="lg"
              style={{ backgroundColor: '#F97316', color: 'white' }}
              className="h-14 px-10 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-orange-900/20 group"
            >
              Hozir ro'yxatdan o'tish
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {/* Ikkinchi Tugma: Shaffof oq */}
            <button className="text-white font-semibold hover:underline decoration-orange-500 underline-offset-8 transition-all">
              Bepul maslahat olish
            </button>
          </div>
        </div>

        {/* NOODATIY ELEMENT 3: Nozik geometrik chiziqlar */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </motion.div>
    </div>
  </section>
);

export default CTASection;