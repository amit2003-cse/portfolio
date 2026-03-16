import Counter from "./Counter";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center bg-[#151515] px-8 md:px-16 py-20 md:py-0">

      <div className="text-white max-w-4xl">

        {/* HEADING */}
        <h1 className="text-[54px] sm:text-[70px] md:text-[90px] leading-[0.95] font-black uppercase tracking-tighter">
          FULL <br />
          STACK <br />
          <span className="text-[#2a2a2a]">DEVELOPER</span>
        </h1>

        {/* TEXT */}
        <p className="text-[#8a8a8a] text-[16px] md:text-[18px] font-medium mt-6 md:mt-8 max-w-xl leading-relaxed">
          Committed to the philosophy of life-long learning. Passionate about architecting ideas into products that are robust, intuitive, and scalable.
        </p>

        {/* COUNTERS */}
        <div className="flex flex-wrap gap-10 md:gap-16 mt-12 md:mt-16">
          <Counter number={1} label="YEARS OF EXPERIENCE" />
          <Counter number={4} label="PROJECTS COMPLETED" />
          <Counter number={2} label="AWARDS RECEIVED" />
        </div>

      </div>
    </section>
  );
}