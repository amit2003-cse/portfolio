import { ExternalLink } from "lucide-react";

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
    <section id="experience" className="min-h-screen bg-[#151515] px-6 md:px-16 py-20 md:py-24">

      {/* HEADING */}
      <h2 className="text-[50px] sm:text-[70px] md:text-[90px] font-black leading-[0.95] tracking-tighter uppercase mb-12 md:mb-20">
        <span className="text-white">1+ YEARS OF</span> <br />
        <span className="text-[#2a2a2a]">EXPERIENCE</span>
      </h2>

      {/* LIST */}
      <div className="space-y-12 md:space-y-16 max-w-4xl">

        {exp.map((e, i) => (
          <a
            key={i}
            href={e.link !== "#" ? e.link : undefined}
            target={e.link !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group block transition-all duration-300 cursor-pointer"
          >
            
            {/* COMPANY & ICON */}
            <div className="flex items-start justify-between mb-2 md:mb-3">
              {/* pr-4 taaki text icon se na takraye */}
              <h3 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold text-white tracking-wide group-hover:text-gray-200 transition-colors pr-4">
                {e.company}
              </h3>
              
              {/* Sirf tabhi icon dikhega jab link '#' na ho */}
              {e.link !== "#" && (
                <ExternalLink 
                  size={22} 
                  className="text-[#ff6b00] opacity-80 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 ml-2 shrink-0 mt-1 md:w-[24px] md:h-[24px]" 
                />
              )}
            </div>

            {/* DESC */}
            <p className="text-[#8a8a8a] text-[15px] md:text-[18px] leading-relaxed max-w-3xl mt-2">
              {e.desc}
            </p>

            {/* DATE */}
            <p className="text-[#555555] text-[12px] md:text-[13px] font-bold tracking-widest uppercase mt-4 md:mt-6">
              {e.date}
            </p>

          </a>
        ))}

      </div>

    </section>
  );
}
