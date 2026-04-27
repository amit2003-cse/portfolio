"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Sparkles } from "lucide-react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

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

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages
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

      setIsLoading(false); // Hide typing dots once stream starts
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
    <>
      {/* ─── Floating Chat Bubble ─── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/25 flex items-center justify-center text-white hover:shadow-violet-500/40 transition-shadow cursor-pointer"
            aria-label="Open AI Chat"
          >
            <MessageCircle size={24} />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-violet-500/30 animate-ping" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ─── Chat Panel ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-3rem)] flex flex-col rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40"
            style={{
              background:
                "linear-gradient(145deg, rgba(15,15,20,0.97) 0%, rgba(10,10,14,0.98) 100%)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* ─── Header ─── */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Amit&apos;s AI Assistant
                  </h3>
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/[0.06] text-neutral-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* ─── Messages Area ─── */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
              {/* Welcome Screen */}
              {!hasInteracted && messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center text-center pt-6 pb-2"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/20 flex items-center justify-center mb-4">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <h4 className="text-base font-semibold text-white mb-1">
                    Hey! I&apos;m Amit&apos;s AI
                  </h4>
                  <p className="text-[12.5px] text-neutral-400 mb-5 max-w-[260px]">
                    Ask me anything about Amit&apos;s skills, projects,
                    experience, or background!
                  </p>

                  {/* Quick Questions */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {QUICK_QUESTIONS.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => sendMessage(q)}
                        className="text-[11.5px] px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-neutral-300 hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-violet-300 transition-all cursor-pointer"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Chat Messages */}
              {messages.map((msg, i) => (
                <ChatMessage
                  key={i}
                  role={msg.role}
                  content={msg.content}
                  sources={msg.sources}
                />
              ))}

              {/* Typing Indicator */}
              {isLoading && <ChatMessage role="bot" content="" isTyping />}

              <div ref={messagesEndRef} />
            </div>

            {/* ─── Input ─── */}
            <ChatInput onSend={sendMessage} disabled={isLoading} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
