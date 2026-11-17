import { motion } from "framer-motion";
import { Instagram, Send, Github, MapPin, Mail, Phone, Bell } from "lucide-react";

const footerLinks = {
  "Yo'nalishlar": ["Frontend", "Backend", "Cybersecurity", "Fullstack"],
  "Akademiya": ["Biz haqimizda", "Mentorlar", "Karyera", "Blog"],
  "Yordam": ["Ko'p so'raladigan savollar (FAQ)", "Bog'lanish", "Ommaviy offerta"],
};

const Footer = () => (
  <footer className="relative overflow-hidden pt-20 pb-10" style={{ backgroundColor: '#1B365D' }}>
    
    {/* Orqa fondagi nozik nuqtali naqsh */}
    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
      backgroundSize: '30px 30px'
    }} />

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-6 gap-12 text-left">
        
        {/* Logo va Markaz haqida */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6 group">
  <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
   
    
    {/* AGAR RASM TAYYOR BO'LMASA, ESKI VARIANTNI VAQTINCHA QOLDIRISHINGIZ MUMKIN: */}
    <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-900/20">
      <span className="text-white font-bold text-xl">U</span>
    </div>
  </div>
  
  {/* YAZUV TO'LIQ OQ RANGDA (O'ZGARTIRILGAN QISM) */}
  <span className="font-display text-2xl font-bold tracking-tight text-white">
    UniSphere Academy 
  </span>
</div>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8">
            Zamonaviy IT kasblarini noldan o'rganing. Bizning maqsadimiz — kichik shaharchadan turib global loyihalarda ishlashga tayyorlash.
          </p>
          
          {/* Ijtimoiy tarmoqlar: Instagram, Telegram, GitHub */}
          <div className="flex gap-4">
            {[
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Send, href: "#", label: "Telegram" },
              { Icon: Github, href: "https://github.com/devPro277", label: "GitHub" }
            ].map(({ Icon, href }, i) => (
              <a 
                key={i} 
                href={href} 
                className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 hover:scale-110 transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Linklar bo'limi */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="md:col-span-1">
            <h4 className="font-display text-xs font-bold text-white mb-6 uppercase tracking-widest opacity-90">{title}</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/50 text-sm hover:text-orange-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Bog'lanish va Yangiliklar */}
        <div className="md:col-span-1">
           <h4 className="font-display text-xs font-bold text-white mb-6 uppercase tracking-widest opacity-90">Yangiliklar</h4>
           <p className="text-white/40 text-xs mb-4">Chegirmalar va yangi kurslar haqida xabar beramiz:</p>
           <div className="relative mb-6">
             <input 
               type="email" 
               placeholder="Email manzilingiz..." 
               className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
             />
             <button className="absolute right-2 top-2 p-1.5 bg-orange-500 rounded-lg text-white hover:bg-orange-600">
               <Bell size={14} />
             </button>
           </div>
           
           {/* Kontakt ma'lumotlari (Email/Tel) */}
           <div className="space-y-3 pt-2">
             <div className="flex items-center gap-2 text-white/50 text-xs">
               <Mail size={14} className="text-orange-500" />
               <span>unisphere@mail.uz</span>
             </div>
             <div className="flex items-center gap-2 text-white/50 text-xs">
               <Phone size={14} className="text-orange-500" />
               <span>+998 90 123 45 67</span>
             </div>
           </div>
        </div>
      </div>

      {/* Pastki qism: Manzil va Huquqlar */}
      <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-white/40 text-xs">
          <MapPin size={14} className="text-orange-500" />
          <span>Shaharchangiz nomi, Markaziy ko'cha 27-uy</span>
        </div>
        
        <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest">
          © 2026 UniSphere Academy. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;