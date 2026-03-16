import Image from "next/image";

export default function Tech() {
  const tech = [
    {
      name: "Next.js",
      desc: "React Framework",
      img: "/tech/next.webp",
    },
    {
      name: "React",
      desc: "Frontend Library",
      img: "/tech/react.webp",
    },
    {
      name: "Node.js",
      desc: "Backend Runtime",
      img: "/tech/node.webp",
    },
    {
      name: "MongoDB",
      desc: "NoSQL Database",
      img: "/tech/md.webp",
    },
    {
      name: "JavaScript",
      desc: "Web Language",
      img: "/tech/js.webp",
    },
    {
      name: "Tailwind CSS",
      desc: "Utility-first CSS",
      img: "/tech/css.webp",
    },
    {
      name: "Docker",
      desc: "Containerization",
      img: "/tech/docker.webp",
    },
    {
      name: "Qdrant",
      desc: "Vector Database",
      img: "/tech/qdrant.webp",
    },
  ];

  return (
    <section id="tech" className="min-h-screen bg-[#151515] px-6 md:px-16 py-20 md:py-24">

      {/* HEADING */}
      <h2 className="text-[50px] sm:text-[70px] md:text-[90px] font-black leading-[0.95] tracking-tighter uppercase mb-12 md:mb-20">
        <span className="text-white">TECH</span> <br />
        <span className="text-[#2a2a2a]">ARSENAL</span>
      </h2>

      {/* GRID */}
      {/* Yahan grid-cols-2 fix kar diya hai taaki mobile par bhi 2 column hi rahe */}
      <div className="grid grid-cols-2 gap-y-8 gap-x-4 sm:gap-x-8 md:gap-y-12 md:gap-x-16 max-w-4xl">

        {tech.map((t, i) => (
          <div 
            key={i} 
            // Mobile par gap-3, desktop par gap-6
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6 group hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300"
          >

            {/* ICON BOX */}
            {/* Mobile par 48px box, desktop par 72px box */}
            <div className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[72px] md:h-[72px] shrink-0 bg-white rounded-[14px] md:rounded-[20px] flex items-center justify-center p-2.5 md:p-3.5 shadow-lg">
              <div className="relative w-full h-full">
                <Image 
                  src={t.img} 
                  alt={t.name} 
                  fill
                  className="object-contain" 
                />
              </div>
            </div>

            {/* TEXT */}
            <div>
              {/* Mobile par font text-[16px], desktop par text-[24px] */}
              <h3 className="text-[16px] sm:text-[18px] md:text-[24px] font-bold text-white tracking-wide leading-tight">
                {t.name}
              </h3>
              {/* Mobile par font text-[12px], desktop par text-[15px] */}
              <p className="text-[#8a8a8a] text-[12px] sm:text-[13px] md:text-[15px] mt-0.5 md:mt-1 leading-snug md:leading-relaxed">
                {t.desc}
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}