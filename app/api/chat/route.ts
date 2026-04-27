/**
 * Chat API Route — Main chat endpoint.
 * Now using Streaming for instant responses!
 */

import { NextRequest } from "next/server";
import { searchKnowledge } from "@/lib/rag/retrieval";
import { buildChatPrompt, SYSTEM_PROMPT } from "@/lib/rag/prompts";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query } = body;

    if (!query || !query.trim()) {
      return new Response("Query cannot be empty", { status: 400 });
    }

    // Step 1 & 2: Embed query + cosine similarity search
    const results = await searchKnowledge(query, 5);

    if (results.length === 0) {
      return new Response(
        "I don't have specific information about that. You can reach out to Amit directly at amit4321sg@gmail.com! 📧\n\n__SOURCES__[]",
        { headers: { "Content-Type": "text/plain; charset=utf-8" } }
      );
    }

    // Step 3: Build context
    const prompt = buildChatPrompt(results, query);

    // Step 4: Call Groq API with streaming
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: prompt },
        ],
        temperature: 0.3,
        max_tokens: 1024,
        stream: true,
      }),
    });

    if (!groqRes.ok) {
      throw new Error(`Groq API error: ${groqRes.statusText}`);
    }

    // Extract unique sources for the citation tags
    const sources: { category: string; topic: string }[] = [];
    const seenSources = new Set<string>();
    for (const chunk of results) {
      const sourceKey = `${chunk.metadata.category}|${chunk.metadata.topic}`;
      if (!seenSources.has(sourceKey)) {
        seenSources.add(sourceKey);
        sources.push({
          category: chunk.metadata.category,
          topic: chunk.metadata.topic,
        });
      }
    }

    // Step 5: Pipe the Groq SSE stream to the client
    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          const reader = groqRes.body?.getReader();
          const decoder = new TextDecoder();
          if (!reader) return;

          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split("\n");

            for (const line of lines) {
              if (line.startsWith("data: ") && line !== "data: [DONE]") {
                try {
                  const data = JSON.parse(line.slice(6));
                  const text = data.choices[0]?.delta?.content || "";
                  controller.enqueue(encoder.encode(text));
                } catch (e) {
                  // Ignore JSON parse errors for incomplete chunks
                }
              }
            }
          }
          // Send sources at the very end
          controller.enqueue(
            encoder.encode("\n\n__SOURCES__" + JSON.stringify(sources))
          );
        } catch (error) {
          controller.error(error);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readableStream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(
      "Sorry, I encountered an error. Please try again! 🔄\n\n__SOURCES__[]",
      { headers: { "Content-Type": "text/plain; charset=utf-8" } }
    );
  }
}
