import Image from "next/image";
import { ExternalLink } from "lucide-react"; // Screenshot se match karne ke liye ExternalLink use kiya hai

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
    <section id="projects" className="min-h-screen bg-[#151515] px-8 md:px-16 py-24">

      {/* HEADING */}
      <h2 className="text-[70px] md:text-[90px] font-black leading-[0.95] tracking-tighter uppercase mb-16">
        <span className="text-white">RECENT</span> <br />
        <span className="text-[#2a2a2a]">PROJECTS</span>
      </h2>

      {/* LIST */}
      {/* Max-width set ki hai taaki cards bahut zyada stretch na hon badi screens par */}
      <div className="space-y-6 max-w-4xl">
        
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-6 md:gap-8 bg-[#1c1c1c] rounded-[28px] p-6 md:p-8 hover:bg-[#242424] transition duration-300"
          >

            {/* TOP RIGHT ICON */}
            {/* Absolute positioning se icon hamesha top-right corner mein rahega */}
            <ExternalLink 
              size={22} 
              className="absolute top-6 right-6 text-[#ff6b00] opacity-80 group-hover:opacity-100 transition duration-300" 
            />

            {/* IMAGE */}
            <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] shrink-0 rounded-[20px] overflow-hidden bg-neutral-800">
              <Image
                src={p.img}
                alt={p.title}
                width={120}
                height={120}
                className="w-full h-full object-cover"
              />
            </div>

            {/* TEXT */}
            {/* pr-12 diya hai taaki lamba text top-right icon ke upar overlap na kare */}
            <div className="pr-12">
              <h3 className="text-[22px] md:text-[26px] font-bold text-white tracking-wide">
                {p.title}
              </h3>
              <p className="text-[#8a8a8a] text-[15px] md:text-[17px] mt-2 leading-relaxed">
                {p.desc}
              </p>
            </div>

          </a>
        ))}

      </div>

    </section>
  );
}