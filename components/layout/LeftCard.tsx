"use client";

import Image from "next/image";
import { Linkedin, Github, FileText, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function LeftCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-neutral-900/40 backdrop-blur-md rounded-[32px] border border-white/10 shadow-2xl p-7 md:p-10 text-center w-full relative overflow-hidden"
    >
      {/* Subtle glow behind card */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      {/* IMAGE */}
      <div className="mx-auto w-full aspect-square max-w-[280px] rounded-[24px] overflow-hidden bg-neutral-800 mb-6 md:mb-8 relative group">
        <Image 
          src="/profile.jpeg" 
          alt="Amit Kumar" 
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
      </div>

      {/* NAME */}
      <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-3 tracking-tight relative z-10">
        Amit Kumar
      </h2>

      {/* BIO */}
      <p className="text-neutral-400 text-[15px] md:text-[16px] leading-relaxed max-w-[280px] mx-auto font-medium relative z-10">
        A Software Engineer who has developed countless innovative solutions.
      </p>

      {/* SOCIAL */}
      <div className="flex justify-center gap-6 mt-8 mb-6 text-[#ff6b00] relative z-10">
        <a href="https://www.linkedin.com/in/amit-cse/" target="_blank" rel="noreferrer" className="hover:scale-125 hover:text-white transition-all duration-300">
          <Linkedin size={22} fill="currentColor" strokeWidth={0} />
        </a>
        <a href="https://github.com/amit2003-cse" target="_blank" rel="noreferrer" className="hover:scale-125 hover:text-white transition-all duration-300">
          <Github size={22} fill="currentColor" strokeWidth={0} />
        </a>
        <a href="https://drive.google.com/file/d/1Fp9b3-MxidrrpjMgfneMNe8l6NgkcYei/view?usp=drivesdk" target="_blank" rel="noreferrer" className="hover:scale-125 hover:text-white transition-all duration-300">
          <FileText size={22} fill="currentColor" strokeWidth={0} />
        </a>
        <a href="https://www.instagram.com/amit_inpublic" target="_blank" rel="noreferrer" className="hover:scale-125 hover:text-white transition-all duration-300">
          <Instagram size={24} strokeWidth={2.5} />
        </a>
      </div>

      {/* BLOG LINK */}
      <div className="relative z-10 mt-4">
        <a 
          href="/blog" 
          className="inline-flex items-center justify-center w-full py-3 px-6 rounded-full bg-[#1c1c1c] text-white font-medium border border-white/10 hover:border-[#ff6b00] hover:text-[#ff6b00] transition-colors duration-300 shadow-lg"
        >
          Read my Blog
        </a>
      </div>

    </motion.div>
  );
}
