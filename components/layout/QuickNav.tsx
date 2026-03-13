"use client";

// Maine thode icons update kiye hain taaki screenshot se 100% match karein. 
// Aap chahein toh wapas Briefcase aur Mail use kar sakte hain.
import { Home, Folder, Contact, Wrench, SquarePen } from "lucide-react";

export default function QuickNav() {
  const links = [
    { icon: <Home size={20} strokeWidth={2.5} />, id: "hero" },
    { icon: <Folder size={20} strokeWidth={2.5} />, id: "projects" },
    { icon: <Contact size={20} strokeWidth={2.5} />, id: "experience" },
    { icon: <Wrench size={20} strokeWidth={2.5} />, id: "tech" },
    { icon: <SquarePen size={20} strokeWidth={2.5} />, id: "contact" },
  ];

  return (
    // 'fixed' use kiya hai taaki scroll karne par bhi ye hamesha top par dikhe
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      
      {/* Dark pill-shaped container matching the screenshot */}
      <div className="flex items-center gap-7 px-8 py-3.5 rounded-full bg-[#1c1c1c] shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/5">
        
        {links.map((link, i) => (
          <a
            key={i}
            href={`#${link.id}`}
            // Default state thodi light, aur hover par pure white + orange + slight pop animation
            className="text-white opacity-80 hover:opacity-100 hover:text-[#ff6b00] transition-all duration-300 hover:-translate-y-1"
          >
            {link.icon}
          </a>
        ))}
        
      </div>
    </div>
  );
}