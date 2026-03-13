import Image from "next/image";
import { Linkedin, Github, FileText, Instagram } from "lucide-react";

export default function LeftCard() {
  return (
    <div className="w-[360px] h-[640px] flex flex-col bg-white rounded-[32px] shadow-xl p-8 text-center">
      
      {/* IMAGE CONTAINER */}
      {/* Agar aapki profile pic transparent hai, toh yeh orange background dikhega, 
          warna aap direct image use kar sakte hain */}
      <div className="w-full h-[320px] rounded-[24px] overflow-hidden bg-[#c5711f] mb-8 relative shrink-0">
        <Image
          src="/profile.jpeg"
          alt="Amit Kumar"
          fill
          className="object-cover"
        />
      </div>

      {/* NAME */}
      <h2 className="text-[32px] font-extrabold text-black tracking-tight mb-2">
        Amit Kumar
      </h2>

      {/* LOWER SECTION (Bio & Socials pushed to bottom) */}
      <div className="flex-grow flex flex-col justify-end">
        
        {/* BIO */}
        <p className="text-[#4a5568] text-[15px] font-medium leading-relaxed px-2">
        Passionate about designing scalable systems and solving real-world problems through code.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-7 mt-10 mb-2 text-[#ff6b00]">
          <a
            href="https://www.linkedin.com/in/amit-cse/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300"
          >
            <Linkedin size={24} fill="currentColor" strokeWidth={0} />
          </a>

          <a
            href="https://github.com/amit2003-cse"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300"
          >
            <Github size={24} fill="currentColor" strokeWidth={0} />
          </a>

          <a
            href="https://drive.google.com/file/d/13Aq02VYwZ1U_qhPHv6ZONdcgcfzXkqv1/view"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300"
          >
            <FileText size={24} fill="currentColor" strokeWidth={0} />
          </a>

          <a
            href="https://www.instagram.com/amit_inpublic"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300"
          >
            <Instagram size={24} strokeWidth={2.5} />
          </a>
        </div>
      </div>
      
    </div>
  );
}