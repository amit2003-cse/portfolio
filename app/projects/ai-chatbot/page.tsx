"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, AlertCircle } from "lucide-react";
import Link from "next/link";
import ChatMessage from "@/components/chat/ChatMessage";
import ChatInput from "@/components/chat/ChatInput";

interface Message {
  role: "user" | "bot";
  content: string;
  sources?: { category: string; topic: string }[];
}

const QUICK_QUESTIONS = [
  "What are Amit's skills?",
  "Tell me about his projects",
  "What's his experience?",
  "How to contact Amit?",
];

export default function FullScreenChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  async function sendMessage(query: string) {
    if (isLoading) return;
    setHasInteracted(true);

    const userMsg: Message = { role: "user", content: query };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) throw new Error("Server error");
      if (!res.body) throw new Error("No body");

      setIsLoading(false);
      setMessages((prev) => [...prev, { role: "bot", content: "" }]);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      let sources: any[] = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const textChunk = decoder.decode(value, { stream: true });
        answer += textChunk;

        if (answer.includes("__SOURCES__")) {
          const parts = answer.split("__SOURCES__");
          const finalAnswer = parts[0];
          try {
            sources = JSON.parse(parts[1]);
          } catch (e) {}

          setMessages((prev) => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = {
              role: "bot",
              content: finalAnswer,
              sources: sources.length > 0 ? sources : undefined,
            };
            return newMessages;
          });
        } else {
          setMessages((prev) => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = {
              role: "bot",
              content: answer,
            };
            return newMessages;
          });
        }
      }
    } catch {
      setIsLoading(false);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "Sorry, something went wrong. Please try again! 🔄",
        },
      ]);
    }
  }

  return (
    <div className="w-full h-screen flex flex-col pt-44 sm:pt-24 pb-6 px-4 sm:px-8 lg:px-16 overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-white/5 shrink-0">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/#projects"
            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] text-neutral-400 hover:text-white transition-all"
          >
            <ArrowLeft size={16} />
          </Link>
          <div>
            <h1 className="text-lg sm:text-2xl font-bold text-white flex items-center gap-2">
              Portfolio AI
              <span className="hidden sm:flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br from-violet-600 to-indigo-600">
                <Sparkles size={12} className="text-white" />
              </span>
            </h1>
            <p className="text-neutral-400 text-[10px] sm:text-sm mt-0.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
              Groq Llama 3.3
            </p>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto mb-6 pr-2 space-y-6 no-scrollbar">
        {!hasInteracted && messages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] py-4 sm:py-8 text-center max-w-2xl mx-auto"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/20 flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-3xl sm:text-4xl">🤖</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">
              How can I help you?
            </h2>
            <p className="text-neutral-400 mb-6 sm:mb-8 text-sm sm:text-lg px-4">
              I am an intelligent RAG assistant built to answer questions about Amit's professional background, skills, and portfolio projects.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full px-2">
              {QUICK_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(q)}
                  className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/[0.08] bg-white/[0.02] text-neutral-300 hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-white transition-all cursor-pointer text-left flex items-center gap-2 sm:gap-3"
                >
                  <Sparkles size={14} className="text-violet-400 shrink-0" />
                  <span className="text-xs sm:text-base">{q}</span>
                </button>
              ))}
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-sm text-neutral-500 bg-black/20 py-2 px-4 rounded-full border border-white/[0.02]">
              <AlertCircle size={14} />
              Responses are generated using Groq API and Gemini Embeddings.
            </div>
          </motion.div>
        )}

        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <ChatMessage
              role={msg.role}
              content={msg.content}
              sources={msg.sources}
            />
          </motion.div>
        ))}

        {isLoading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <ChatMessage role="bot" content="" isTyping />
          </motion.div>
        )}

        <div ref={messagesEndRef} className="h-4" />
      </div>

      {/* Input Area */}
      <div className="shrink-0 relative max-w-4xl mx-auto w-full">
        <ChatInput onSend={sendMessage} disabled={isLoading} />
        <p className="text-center text-xs text-neutral-500 mt-4">
          AI generated responses may be inaccurate. Please verify important information.
        </p>
      </div>
    </div>
  );
}
