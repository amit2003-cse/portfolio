"use client";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-[#151515] px-8 md:px-16 py-24 flex flex-col justify-center">

      {/* HEADING */}
      <h2 className="text-[70px] md:text-[90px] font-black leading-[0.95] tracking-tighter uppercase mb-16">
        <span className="text-white">LET'S WORK</span> <br />
        <span className="text-[#2a2a2a]">TOGETHER</span>
      </h2>

      {/* FORM */}
      <form className="max-w-3xl space-y-7">

        {/* ROW: NAME & EMAIL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

          {/* NAME */}
          <div className="flex flex-col">
            <label className="text-[15px] font-medium text-white mb-2.5">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#242424] text-white placeholder-[#6b6b6b] px-5 py-4 rounded-[12px] border border-transparent focus:border-[#ff6b00] outline-none transition-all duration-300"
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col">
            <label className="text-[15px] font-medium text-white mb-2.5">Email</label>
            <input
              type="email"
              placeholder="Your@email.com"
              className="w-full bg-[#242424] text-white placeholder-[#6b6b6b] px-5 py-4 rounded-[12px] border border-transparent focus:border-[#ff6b00] outline-none transition-all duration-300"
            />
          </div>

        </div>

        {/* DROPDOWN */}
        <div className="flex flex-col">
          <label className="text-[15px] font-medium text-white mb-2.5">Regarding</label>
          <select className="w-full bg-[#242424] text-[#6b6b6b] px-5 py-4 rounded-[12px] border border-transparent focus:border-[#ff6b00] outline-none transition-all duration-300 appearance-none cursor-pointer">
            <option>Select...</option>
            <option>General Inquiry</option>
            <option>Project Collaboration</option>
            <option>Freelance Opportunity</option>
            <option>Job Offer</option>
          </select>
        </div>

        {/* MESSAGE */}
        <div className="flex flex-col">
          <label className="text-[15px] font-medium text-white mb-2.5">Message</label>
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full bg-[#242424] text-white placeholder-[#6b6b6b] px-5 py-4 rounded-[12px] border border-transparent focus:border-[#ff6b00] outline-none transition-all duration-300 resize-none"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-[#ff6b00] hover:bg-[#e66000] text-white font-bold text-[16px] py-4 rounded-[12px] transition-colors duration-300 mt-2"
        >
          Submit
        </button>

      </form>

    </section>
  );
}