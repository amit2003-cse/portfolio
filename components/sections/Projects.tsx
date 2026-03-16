import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
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
    },
    {
      title: "FinAssessPro",
      desc: "Evaluates borrower eligibility with automated scoring and risk reports.",
      img: "/p3.png",
      link: "https://finassess-pro.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-[#151515] px-6 md:px-16 py-20 md:py-24">

      {/* HEADING */}
      {/* Mobile pe text-[50px] aur desktop pe text-[90px] taaki overflow na ho */}
      <h2 className="text-[50px] sm:text-[70px] md:text-[90px] font-black leading-[0.95] tracking-tighter uppercase mb-12 md:mb-16">
        <span className="text-white">RECENT</span> <br />
        <span className="text-[#2a2a2a]">PROJECTS</span>
      </h2>

      {/* LIST */}
      <div className="space-y-5 md:space-y-6 max-w-4xl">
        
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            // Mobile par flex-col ya flex-row adjust karne ke liye items-start, sm pe items-center
            className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8 bg-[#1c1c1c] rounded-[24px] md:rounded-[28px] p-5 sm:p-6 md:p-8 hover:bg-[#242424] transition duration-300"
          >

            {/* TOP RIGHT ICON */}
            {/* Mobile pe top-5 right-5, aur md pe top-6 right-6 */}
            <ExternalLink 
              size={22} 
              className="absolute top-5 right-5 md:top-6 md:right-6 text-[#ff6b00] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-300" 
            />

            {/* IMAGE */}
            {/* Mobile pe choti image (80px), desktop pe badi (120px) */}
            <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] shrink-0 rounded-[16px] md:rounded-[20px] overflow-hidden bg-neutral-800">
              <Image
                src={p.img}
                alt={p.title}
                width={120}
                height={120}
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT */}
            {/* sm screens par pr-12 taaki icon ke niche text na aaye */}
            <div className="sm:pr-12 mt-1 sm:mt-0">
              <h3 className="text-[20px] md:text-[26px] font-bold text-white tracking-wide pr-8 sm:pr-0 leading-tight">
                {p.title}
              </h3>
              <p className="text-[#8a8a8a] text-[14px] md:text-[17px] mt-2 leading-relaxed">
                {p.desc}
              </p>
            </div>

          </a>
        ))}

      </div>

    </section>
  );
}