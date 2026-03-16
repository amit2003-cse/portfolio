"use client";

import toast from "react-hot-toast";

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
      className="min-h-screen bg-[#151515] px-6 md:px-16 py-20 md:py-24 flex flex-col justify-center"
    >

      {/* HEADING */}
      <h2 className="text-[50px] sm:text-[70px] md:text-[90px] font-black leading-[0.95] tracking-tighter uppercase mb-12 md:mb-16">
        <span className="text-white">LET'S WORK</span> <br />
        <span className="text-[#2a2a2a]">TOGETHER</span>
      </h2>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl space-y-6 w-full"
      >

        {/* NAME + EMAIL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full bg-[#242424] text-white px-4 py-4 rounded-[12px] outline-none border border-transparent focus:border-[#ff6b00]"
          />

          <input
            name="email"
            type="email"
            placeholder="Your@email.com"
            required
            className="w-full bg-[#242424] text-white px-4 py-4 rounded-[12px] outline-none border border-transparent focus:border-[#ff6b00]"
          />

        </div>

        {/* DROPDOWN */}
        <select
          name="regarding"
          required
          className="w-full bg-[#242424] text-white px-4 py-4 rounded-[12px] outline-none border border-transparent focus:border-[#ff6b00]"
        >
          <option value="">Select...</option>
          <option>General Inquiry</option>
          <option>Project Collaboration</option>
          <option>Freelance Opportunity</option>
          <option>Job Offer</option>
        </select>

        {/* MESSAGE */}
        <textarea
          name="message"
          rows={5}
          placeholder="Message"
          required
          className="w-full bg-[#242424] text-white px-4 py-4 rounded-[12px] outline-none border border-transparent focus:border-[#ff6b00]"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-[#ff6b00] hover:bg-[#e66000] text-white font-bold py-4 rounded-[12px]"
        >
          Submit
        </button>

      </form>
    </section>
  );
}