"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "🏭 Smart Manufacturing System",
      desc: "Professional enterprise dashboard for barcode tracking, automated QC workflows, and real-time shipping label consolidation.",
      img: "/p6.png",
      link: "https://smart-manufacturing-system.vercel.app/",
    },
    {
      title: "🐼 Panda AI (RAG-based)",
      desc: "privacy-first local RAG teaching assistant.",
      img: "/p1.png",
      link: "https://github.com/amit2003-cse/ai-virtual-teaching-assistant",
    },
    {
      title: "Mom's Handmade",
      desc: "A full-stack MERN e-commerce app for homemade snacks.",
      img: "/p2.png",
      link: "https://moms-handmade.netlify.app/",
    }
    ,
    {
      title: "Revise Flow",
      desc: "ReviseFlow is built on the modern psychological principle of Guilt-Free Spaced Repetition",
      img: "/p5.png",
      link: "https://revise-flow.vercel.app/",
    },
    {
      title: "Power Printer",
      desc: "A full-stack MERN e-commerce app for Printer Products.",
      img: "/p4.png",
      link: "https://powerprint.netlify.app/",
    },
    {
      title: "FinAssessPro",
      desc: "Evaluates borrower eligibility with automated scoring and risk reports.",
      img: "/p3.png",
      link: "https://finassess-pro.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-transparent px-6 md:px-16 py-20 md:py-24">

      {/* HEADING */}
      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-[50px] sm:text-[70px] md:text-[90px] font-black leading-[0.95] tracking-tighter uppercase mb-12 md:mb-16"
      >
        <span className="text-white">RECENT</span> <br />
        <span className="text-[#2a2a2a]">PROJECTS</span>
      </motion.h2>

      {/* LIST */}
      <div className="space-y-5 md:space-y-6 max-w-4xl">
        
        {projects.map((p, i) => (
          <motion.a
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8 bg-neutral-900/40 backdrop-blur-md rounded-[24px] md:rounded-[28px] p-5 sm:p-6 md:p-8 hover:bg-neutral-800/60 border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden"
          >

            {/* TOP RIGHT ICON */}
            <ExternalLink 
              size={22} 
              className="absolute top-5 right-5 md:top-6 md:right-6 text-[#ff6b00] opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 ease-out" 
            />

            {/* IMAGE */}
            <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] shrink-0 rounded-[16px] md:rounded-[20px] overflow-hidden bg-neutral-800 relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
              <Image
                src={p.img}
                alt={p.title}
                width={120}
                height={120}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* TEXT */}
            <div className="sm:pr-12 mt-1 sm:mt-0 relative z-10">
              <h3 className="text-[20px] md:text-[26px] font-bold text-white tracking-wide pr-8 sm:pr-0 leading-tight">
                {p.title}
              </h3>
              <p className="text-[#8a8a8a] text-[14px] md:text-[17px] mt-2 leading-relaxed">
                {p.desc}
              </p>
            </div>

          </motion.a>
        ))}

      </div>

    </section>
  );
}
