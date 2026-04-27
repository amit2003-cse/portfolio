"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatMessageProps {
  role: "user" | "bot";
  content: string;
  sources?: { category: string; topic: string }[];
  isTyping?: boolean;
}

export default function ChatMessage({
  role,
  content,
  sources,
  isTyping,
}: ChatMessageProps) {
  const isUser = role === "user";

  // Format bot text: bold, bullets, line breaks
  function formatText(text: string) {
    let formatted = text;
    // Bold
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Bullet points
    formatted = formatted.replace(
      /^[-•]\s+(.+)$/gm,
      '<li class="ml-4">$1</li>'
    );
    if (formatted.includes("<li")) {
      formatted = formatted.replace(
        /(<li.*?<\/li>)/gs,
        '<ul class="list-disc space-y-1 my-2">$1</ul>'
      );
    }
    // Line breaks
    formatted = formatted.replace(/\n/g, "<br/>");
    return formatted;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm shrink-0 ${
          isUser
            ? "bg-gradient-to-br from-orange-500 to-orange-600"
            : "bg-gradient-to-br from-violet-600 to-indigo-600"
        }`}
      >
        {isUser ? "👤" : "🤖"}
      </div>

      {/* Message Bubble */}
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-[13.5px] leading-relaxed ${
          isUser
            ? "bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 text-white"
            : "bg-white/[0.04] border border-white/[0.06] text-neutral-200"
        }`}
      >
        {isTyping ? (
          <div className="flex items-center gap-1.5 py-1 px-1">
            <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce [animation-delay:0ms]" />
            <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce [animation-delay:150ms]" />
            <span className="w-2 h-2 bg-violet-400 rounded-full animate-bounce [animation-delay:300ms]" />
          </div>
        ) : (
          <>
            <div dangerouslySetInnerHTML={{ __html: formatText(content) }} />

            {/* Sources (same as Python chat-ui sources display) */}
            {sources && sources.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-white/[0.06]">
                {sources.map((s, i) => (
                  <span
                    key={i}
                    className="text-[10.5px] px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/20"
                  >
                    {s.category} · {s.topic}
                  </span>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
}
