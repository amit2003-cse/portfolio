"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Tech() {
  const tech = [
    { name: "Next.js", desc: "React Framework", img: "/tech/next.webp" },
    { name: "React", desc: "Frontend Library", img: "/tech/react.webp" },
    { name: "Node.js", desc: "Backend Runtime", img: "/tech/node.webp" },
    { name: "MongoDB", desc: "NoSQL Database", img: "/tech/md.webp" },
    { name: "JavaScript", desc: "Web Language", img: "/tech/js.webp" },
    { name: "Tailwind CSS", desc: "Utility-first CSS", img: "/tech/css.webp" },
    { name: "Docker", desc: "Containerization", img: "/tech/docker.webp" },
    { name: "Qdrant", desc: "Vector Database", img: "/tech/qdrant.webp" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="tech" className="min-h-screen bg-transparent px-6 md:px-16 py-20 md:py-24">

      {/* HEADING */}
      <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-[50px] sm:text-[70px] md:text-[90px] font-black leading-[0.95] tracking-tighter uppercase mb-12 md:mb-20"
      >
        <span className="text-white">TECH</span> <br />
        <span className="text-neutral-500">ARSENAL</span>
      </motion.h2>

      {/* GRID */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 gap-y-8 gap-x-4 sm:gap-x-8 md:gap-y-12 md:gap-x-16 max-w-4xl"
      >
        {tech.map((t, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6 group transition-transform duration-300 cursor-pointer"
          >
            {/* ICON BOX */}
            <div className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[72px] md:h-[72px] shrink-0 bg-neutral-900/60 backdrop-blur-md border border-white/5 group-hover:bg-[#ff6b00]/10 rounded-[14px] md:rounded-[20px] flex items-center justify-center p-2.5 md:p-3.5 shadow-lg relative overflow-hidden transition-colors duration-300 group-hover:border-[#ff6b00]/30">
              <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-500">
                <Image src={t.img} alt={t.name} fill className="object-contain" />
              </div>
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-[16px] sm:text-[18px] md:text-[24px] font-bold text-white tracking-wide leading-tight group-hover:text-[#ff6b00] transition-colors duration-300">
                {t.name}
              </h3>
              <p className="text-[#8a8a8a] text-[12px] sm:text-[13px] md:text-[15px] mt-0.5 md:mt-1 leading-snug md:leading-relaxed group-hover:text-neutral-400 transition-colors duration-300">
                {t.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}