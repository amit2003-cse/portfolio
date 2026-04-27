"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const exp = [
    {
      company: "ANSH InfoTech",
      desc: "Developing and optimizing full-stack web applications using the MERN Stack. Collaborating on API integrations, secure user authentication, and managing version control via Git.",
      date: "Jan 2026 – Present",
      link: "https://anshinfotech.org/",
    },
    {
      company: "Freelance Developer",
      desc: "Built and delivered client projects including Mom’s Handmade (MERN e-commerce with Razorpay integration) and a Security Agency website with service inquiry workflow. Focused on scalable architecture, performance optimization, and production deployment.",
      date: "Jun 2025 – Present",
      link: "https://amit-next-portfolio.vercel.app/",
    },
    {
      company: "EICT Academy, IIT Kanpur",
      desc: "Completed a rigorous 45-day training on C++ fundamentals, memory management, and code optimization. Solved 50+ DSA and OOPs problems to strengthen core problem-solving logic and algorithm efficiency.",
      date: "Jun 2024 – Jul 2024",
      link: "https://eict.iitg.ac.in/",
    },
  ];

  return (
    <section id="experience" className="min-h-screen bg-transparent px-6 md:px-16 py-20 md:py-24">

      {/* HEADING */}
      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-[50px] sm:text-[70px] md:text-[90px] font-black leading-[0.95] tracking-tighter uppercase mb-12 md:mb-20"
      >
        <span className="text-white">1+ YEARS OF</span> <br />
        <span className="text-neutral-500">EXPERIENCE</span>
      </motion.h2>

      {/* LIST */}
      <div className="space-y-12 md:space-y-16 max-w-4xl relative">
        {/* Decorative connecting line */}
        <div className="absolute left-[-20px] top-4 bottom-4 w-[1px] bg-neutral-800/50 hidden md:block" />

        {exp.map((e, i) => (
          <motion.a
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            href={e.link !== "#" ? e.link : undefined}
            target={e.link !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group block transition-all duration-300 cursor-pointer relative"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-24px] top-3 w-[9px] h-[9px] rounded-full bg-neutral-700 group-hover:bg-[#ff6b00] transition-colors duration-300 hidden md:block" />
            
            {/* COMPANY & ICON */}
            <div className="flex items-start justify-between mb-2 md:mb-3">
              <h3 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold text-white tracking-wide group-hover:text-[#ff6b00] transition-colors duration-300 pr-4">
                {e.company}
              </h3>
              
              {e.link !== "#" && (
                <ExternalLink 
                  size={22} 
                  className="text-[#ff6b00] opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 ml-2 shrink-0 mt-1" 
                />
              )}
            </div>

            {/* DESC */}
            <p className="text-[#8a8a8a] text-[15px] md:text-[18px] leading-relaxed max-w-3xl mt-2 group-hover:text-neutral-400 transition-colors duration-300">
              {e.desc}
            </p>

            {/* DATE */}
            <p className="text-[#555555] text-[12px] md:text-[13px] font-bold tracking-widest uppercase mt-4 md:mt-6">
              {e.date}
            </p>

          </motion.a>
        ))}

      </div>

    </section>
  );
}
