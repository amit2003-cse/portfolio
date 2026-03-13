import QuickNav from "@/components/layout/QuickNav";
import Counter from "./Counter";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center bg-[#151515] px-8 md:px-16 pt-20">
      
      {/* QuickNav ko top par absolutely position karna better rahega jaisa screenshot mein hai */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full flex justify-center">
        <QuickNav />
      </div>

      <div className="text-white max-w-3xl mt-12">
        {/* HEADING */}
        <h1 className="text-[70px] md:text-[90px] leading-[0.95] font-black tracking-tighter uppercase">
          FULL <br />
          STACK <br />
          <span className="text-[#2a2a2a]">DEVELOPER</span>
        </h1>

        {/* SUBTEXT */}
        <p className="text-[#8a8a8a] text-lg md:text-xl max-w-xl mt-8 leading-relaxed font-medium">
          Committed to the philosophy of life-long learning.
          Passionate about architecting ideas into products
          that are robust, intuitive, and scalable.
        </p>

        {/* STATS */}
        <div className="flex flex-wrap gap-12 md:gap-20 mt-14">
          <Counter number={1} label="YEARS OF EXPERIENCE" />
          <Counter number={4} label="PROJECTS COMPLETED" />
          <Counter number={2} label="AWARDS RECEIVED" />
        </div>
      </div>
      
    </section>
  );
}