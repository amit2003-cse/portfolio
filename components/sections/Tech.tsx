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
    <section id="tech" className="min-h-screen bg-[#151515] px-8 md:px-16 py-24">

      {/* HEADING */}
      <h2 className="text-[70px] md:text-[90px] font-black leading-[0.95] tracking-tighter uppercase mb-20">
        <span className="text-white">TECH</span> <br />
        <span className="text-[#2a2a2a]">ARSENAL</span>
      </h2>

      {/* GRID */}
      {/* Max-width set ki hai taaki design bahut zyada wide na ho jaye */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 max-w-4xl">

        {tech.map((t, i) => (
          <div 
            key={i} 
            className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300"
          >

            {/* ICON BOX */}
            <div className="w-[72px] h-[72px] shrink-0 bg-white rounded-[20px] flex items-center justify-center p-3.5 shadow-lg">
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
              <h3 className="text-[22px] md:text-[24px] font-bold text-white tracking-wide">
                {t.name}
              </h3>
              <p className="text-[#8a8a8a] text-[15px] mt-1 leading-relaxed">
                {t.desc}
              </p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}