import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building a Serverless RAG AI Chatbot | Amit Kumar",
  description: "How I built an ultra-fast, intelligent portfolio assistant with Next.js, Gemini Embeddings, and Groq's Llama 3.",
  openGraph: {
    title: "Building a Serverless RAG AI Chatbot",
    description: "How I built an ultra-fast, intelligent portfolio assistant with Next.js, Gemini Embeddings, and Groq's Llama 3.",
  }
};

export default function BlogPost() {
  return (
    <article className="w-full h-full min-h-screen pt-28 pb-20 px-4 sm:px-8 lg:px-16" itemScope itemType="https://schema.org/BlogPosting">
      
      <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#ff6b00] transition-colors mb-12 group">
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      <div className="max-w-3xl">
        <div className="mb-4 text-[#ff6b00] font-mono text-sm tracking-widest uppercase">
          <time dateTime="2026-04-27" itemProp="datePublished">April 27, 2026</time>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight" itemProp="headline">
          Building a Serverless RAG AI Chatbot with Gemini & Groq
        </h1>
        
        <div className="prose prose-invert prose-orange max-w-none prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-neutral-300 prose-p:leading-relaxed prose-pre:bg-[#1a1a1a] prose-pre:border prose-pre:border-white/10" itemProp="articleBody">
          <p>
            Recruiters and clients often have specific questions while browsing a portfolio. Instead of forcing them to read through pages of text, I built a personalized AI assistant that instantly retrieves exact answers based on my actual resume and experience data.
          </p>

          <h2>The Concept</h2>
          <p>
            The goal was to create an intelligent, retrieval-augmented generation (RAG) system that could act as a 24/7 technical recruiter, answering questions about my skills, projects, and professional background with zero latency.
          </p>

          <h2>Technical Architecture</h2>
          <p>
            To keep the portfolio fast and cost-effective, I opted for a <strong>Serverless Architecture</strong> using Next.js API Routes. Here is how the pipeline works:
          </p>
          
          <ul>
            <li><strong>Vector Embeddings:</strong> Using Google's <code>text-embedding-004</code> to transform portfolio data into high-dimensional vectors.</li>
            <li><strong>In-Memory Search:</strong> Implemented pure Cosine Similarity matching directly in TypeScript, avoiding the overhead of an external vector database.</li>
            <li><strong>Groq Llama 3:</strong> Powered by Groq's LPU hardware, responses are generated using the <code>llama-3.3-70b</code> model.</li>
            <li><strong>Real-time Streaming:</strong> Custom implementation of Web Streams to pipe AI tokens directly to the frontend.</li>
          </ul>

          <h2>Why Groq?</h2>
          <p>
            Latency is the enemy of a good user experience. While standard LLM APIs can take 5-10 seconds to generate a full response, Groq's LPU architecture allows for nearly instantaneous token generation, making the chat feel like a natural conversation.
          </p>

          <pre className="p-4 rounded-xl overflow-x-auto text-sm bg-neutral-900 border border-white/10 my-6">
            <code className="text-neutral-200">
{`// Measuring Groq's speed
const start = Date.now();
const result = await groq.chat.completions.create({
  model: "llama-3.3-70b-versatile",
  messages: [...],
  stream: true,
});
// Time to first token: < 200ms`}
            </code>
          </pre>

          <h2>Key Features</h2>
          <ul>
            <li><strong>Anti-Hallucination:</strong> System prompts are strictly grounded to the retrieved knowledge base.</li>
            <li><strong>Source Citations:</strong> The AI clearly indicates which project or experience it is referencing.</li>
            <li><strong>Glassmorphism UI:</strong> A sleek, modern interface that fits the portfolio's aesthetic.</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Integrating AI into a portfolio is more than just a gimmick—it's a demonstration of modern engineering capabilities, from prompt engineering and vector math to serverless architecture and real-time streaming.
          </p>
        </div>
      </div>
    </article>
  );
}
