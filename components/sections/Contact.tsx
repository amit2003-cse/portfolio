"use client";

import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function Contact() {

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget);
  
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      regarding: formData.get("regarding"),
      message: formData.get("message"),
    };
  
    const toastId = toast.loading("Sending message...");
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await res.json();
  
      if (!res.ok || !result.success) {
        throw new Error("Failed request");
      }
  
      toast.success("Message sent successfully 🚀", { id: toastId });
  
      e.currentTarget.reset();
  
    } catch (error) {
      
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-transparent px-6 md:px-16 py-20 md:py-24 flex flex-col justify-center relative"
    >

      {/* HEADING */}
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[50px] sm:text-[70px] md:text-[90px] font-black leading-[0.95] tracking-tighter uppercase mb-12 md:mb-16"
      >
        <span className="text-white">LET'S WORK</span> <br />
        <span className="text-neutral-500">TOGETHER</span>
      </motion.h2>

      {/* FORM */}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="max-w-3xl space-y-6 w-full relative z-10"
      >

        {/* NAME + EMAIL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full bg-neutral-900/60 backdrop-blur-md text-white px-4 py-4 rounded-[12px] outline-none border border-white/5 focus:border-[#ff6b00] transition-colors"
          />

          <input
            name="email"
            type="email"
            placeholder="Your@email.com"
            required
            className="w-full bg-neutral-900/60 backdrop-blur-md text-white px-4 py-4 rounded-[12px] outline-none border border-white/5 focus:border-[#ff6b00] transition-colors"
          />

        </div>

        {/* DROPDOWN */}
        <select
          name="regarding"
          required
          className="w-full bg-neutral-900/60 backdrop-blur-md text-white px-4 py-4 rounded-[12px] outline-none border border-white/5 focus:border-[#ff6b00] transition-colors appearance-none"
        >
          <option value="" className="bg-neutral-900">Select...</option>
          <option className="bg-neutral-900">General Inquiry</option>
          <option className="bg-neutral-900">Project Collaboration</option>
          <option className="bg-neutral-900">Freelance Opportunity</option>
          <option className="bg-neutral-900">Job Offer</option>
        </select>

        {/* MESSAGE */}
        <textarea
          name="message"
          rows={5}
          placeholder="Message"
          required
          className="w-full bg-neutral-900/60 backdrop-blur-md text-white px-4 py-4 rounded-[12px] outline-none border border-white/5 focus:border-[#ff6b00] transition-colors resize-none"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-[#ff6b00] hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-300 transform text-white font-bold py-4 rounded-[12px]"
        >
          Submit
        </button>

      </motion.form>
    </section>
  );
}