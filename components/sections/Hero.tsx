"use client";

import { motion, Variants } from "framer-motion";
import Counter from "./Counter";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center bg-transparent px-8 md:px-16 py-20 md:py-0 overflow-hidden">
      
      {/* Subtle Glow Effect */}
      <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#ff6b00]/10 blur-[120px] pointer-events-none" />

      <motion.div 
        className="max-w-4xl relative z-10 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* HEADING */}
        <h1 className="text-[54px] sm:text-[70px] md:text-[90px] leading-[0.95] font-black uppercase tracking-tighter">
          <motion.div variants={itemVariants} className="overflow-hidden">
             FULL
          </motion.div>
          <motion.div variants={itemVariants} className="overflow-hidden relative">
            <span className="relative z-10">STACK</span>
          </motion.div>
          <motion.div variants={itemVariants} className="overflow-hidden">
            <span className="text-neutral-500">DEVELOPER</span>
          </motion.div>
        </h1>

        {/* TEXT */}
        <motion.p 
          variants={itemVariants}
          className="text-neutral-400 text-[16px] md:text-[18px] font-medium mt-6 md:mt-8 max-w-xl leading-relaxed"
        >
          Committed to the philosophy of life-long learning. Passionate about architecting ideas into products that are robust, intuitive, and scalable.
        </motion.p>

        {/* COUNTERS */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-10 md:gap-16 mt-12 md:mt-16"
        >
          <Counter number={1} label="YEARS OF EXPERIENCE" />
          <Counter number={5} label="PROJECTS COMPLETED" />
          <Counter number={2} label="AWARDS RECEIVED" />
        </motion.div>

      </motion.div>
    </section>
  );
}