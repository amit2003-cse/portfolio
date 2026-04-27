import Link from "next/link";
import { ArrowLeft, BookOpen, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Blog | Amit Kumar",
  description: "Deep dives into JavaScript, React, and Software Engineering principles.",
};

const posts = [
  {
    title: "Building a Serverless RAG AI Chatbot with Gemini & Groq",
    description: "How I built an ultra-fast, intelligent portfolio assistant with Next.js, Gemini Embeddings, and Groq's Llama 3.",
    date: "April 27, 2026",
    slug: "ai-chatbot",
    readTime: "8 min read",
  },
  {
    title: "Understanding Hoisting in JavaScript",
    description: "A deep dive into how JavaScript moves declarations to the top of their scope.",
    date: "March 25, 2026",
    slug: "hoisting",
    readTime: "5 min read",
  },
  {
    title: "Asynchronous JS: Microtasks vs Macrotasks",
    description: "Deep dive into the Event Loop and why some async tasks run before others.",
    date: "March 25, 2026",
    slug: "async-tasks",
    readTime: "7 min read",
  },
];

export default function BlogListing() {
  return (
    <div className="w-full h-full min-h-screen pt-28 pb-20 px-4 sm:px-8 lg:px-16">
      
      <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#ff6b00] transition-colors mb-12 group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>

      <div className="max-w-4xl">
        <h1 className="text-[50px] sm:text-[70px] md:text-[90px] font-black leading-[0.95] tracking-tighter uppercase mb-6">
          <span className="text-white">TECH</span> <br />
          <span className="text-neutral-500">INSIGHTS</span>
        </h1>
        
        <p className="text-neutral-400 text-lg mb-16 max-w-2xl leading-relaxed">
          Sharing my journey and deep dives into the world of software engineering, 
          performance optimization, and modern web architecture.
        </p>

        <div className="grid gap-6">
          {posts.map((post, idx) => (
            <Link 
              key={idx}
              href={`/blog/${post.slug}`}
              className="group relative flex flex-col p-8 rounded-[32px] bg-neutral-900/40 border border-white/5 hover:border-[#ff6b00]/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b00]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm font-mono uppercase tracking-widest text-[#ff6b00]">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-neutral-700" />
                <span className="flex items-center gap-1.5 text-neutral-500">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#ff6b00] transition-colors">
                {post.title}
              </h2>
              
              <p className="text-neutral-400 leading-relaxed text-base md:text-lg mb-6 max-w-2xl">
                {post.description}
              </p>

              <div className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                Read Article <BookOpen size={18} className="text-[#ff6b00]" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
