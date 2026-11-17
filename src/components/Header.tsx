import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// Menyu elementlari
const navItems = ["Kurslar", "Mentorlar", "O'quvchilar natijalari", "Biz haqimizda", "Bog'lanish"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    // bg-white va shadow-sm qo'shildi: oq fon va pastki qismda yengil soya
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm h-[72px] flex items-center">
      <div className="container mx-auto flex items-center justify-between px-6">
        
        {/* LOGOTIP VA MATN QISMI */}
       <a href="#" className="flex items-center gap-2 no-underline group">
  {/* Logotip: h-16 (64px) qilib kattalashtirildi */}
  <img 
    src="/logo.png" 
    alt="Logo" 
    className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
  />
  
  {/* Matn qismi: gap-2 orqali logotipga yaqinlashtirildi */}
  <div style={{ color: '#1B365D' }} className="flex items-center text-2xl tracking-tight">
    <span className="font-bold">UniSphere</span>
    <span className="font-light ml-1">Academy</span>
  </div>
</a>

        {/* Kompyuter uchun menyu - text-[#1B365D] qo'shildi */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              style={{ color: '#1B365D' }}
              className="hover:opacity-70 transition-colors duration-300 text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="default" size="default">Hoziroq bog'lanish</Button>
        </div>

        {/* Mobil menyu tugmasi */}
        <button
          className="md:hidden text-[#1B365D]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobil menyu ochilgandagi ko'rinish - bg-white qilindi */}
      {mobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg md:hidden">
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                style={{ color: '#1B365D' }}
                className="hover:opacity-70 transition-colors text-sm py-2 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button variant="default" size="default" className="mt-2">Hoziroq bog'lanish</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;