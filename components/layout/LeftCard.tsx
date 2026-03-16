import Image from "next/image";
import { Linkedin, Github, FileText, Instagram } from "lucide-react";

export default function LeftCard() {
  return (
    <div className="bg-white rounded-[32px] shadow-2xl p-7 md:p-10 text-center w-full">

      {/* IMAGE */}
      {/* w-full aur aspect-square se ye image mobile par perfect size legi */}
      <div className="mx-auto w-full aspect-square max-w-[280px] rounded-[24px] overflow-hidden bg-[#c5711f] mb-6 md:mb-8 relative">
        <Image 
          src="/profile.jpeg" 
          alt="Amit Kumar" 
          fill
          className="object-cover" 
        />
      </div>

      {/* NAME */}
      <h2 className="text-[28px] md:text-[32px] font-bold text-black mb-3">
        Amit Kumar
      </h2>

      {/* BIO */}
      <p className="text-[#6b6b6b] text-[15px] md:text-[16px] leading-relaxed max-w-[280px] mx-auto font-medium">
        A Software Engineer who has developed countless innovative solutions.
      </p>

      {/* SOCIAL */}
      <div className="flex justify-center gap-6 mt-8 mb-2 text-[#ff6b00]">
        <a href="https://www.linkedin.com/in/amit-cse/" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
          <Linkedin size={22} fill="currentColor" strokeWidth={0} />
        </a>
        <a href="https://github.com/amit2003-cse" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
          <Github size={22} fill="currentColor" strokeWidth={0} />
        </a>
        <a href="https://drive.google.com/file/d/13Aq02VYwZ1U_qhPHv6ZONdcgcfzXkqv1/view" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
          <FileText size={22} fill="currentColor" strokeWidth={0} />
        </a>
        <a href="https://www.instagram.com/amit_inpublic" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
          <Instagram size={24} strokeWidth={2.5} />
        </a>
      </div>

    </div>
  );
}