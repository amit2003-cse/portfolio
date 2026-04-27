/**
 * LLM module — Gemini API integration for generating answers.
 * Equivalent to: llm.py from your Python backend (Gemini-only path).
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_PROMPT, buildChatPrompt } from "./prompts";
import { SearchResult } from "./retrieval";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export interface LLMResponse {
  answer: string;
  sources: { category: string; topic: string }[];
  model: string;
  chunksUsed: number;
}

/**
 * Generate a grounded answer using retrieved context.
 * Same flow as llm_engine.generate_answer() in your Python llm.py
 */
export async function generateAnswer(
  contextChunks: SearchResult[],
  userQuery: string
): Promise<LLMResponse> {
  // Build the grounded prompt (same as Python version)
  const prompt = buildChatPrompt(contextChunks, userQuery);

  try {
    // Initialize model with system prompt (same as Python Gemini setup)
    const model = genAI.getGenerativeModel({
      model: "gemini-flash-latest",
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 1024,
      },
      systemInstruction: SYSTEM_PROMPT,
    });

    const result = await model.generateContent(prompt);
    const answer = result.response.text();

    // Extract unique sources (same dedup logic as Python llm.py)
    const sources: { category: string; topic: string }[] = [];
    const seenSources = new Set<string>();
    for (const chunk of contextChunks) {
      const sourceKey = `${chunk.metadata.category}|${chunk.metadata.topic}`;
      if (!seenSources.has(sourceKey)) {
        seenSources.add(sourceKey);
        sources.push({
          category: chunk.metadata.category,
          topic: chunk.metadata.topic,
        });
      }
    }

    return {
      answer,
      sources,
      model: "gemini-flash-latest",
      chunksUsed: contextChunks.length,
    };
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error("LLM Error:", errorMsg);

    // Rate limit handling (same as Python llm.py)
    if (
      errorMsg.toLowerCase().includes("quota") ||
      errorMsg.toLowerCase().includes("rate")
    ) {
      return {
        answer:
          "API rate limit reached. Please try again in a moment. ⏳",
        sources: [],
        model: "gemini-flash-latest",
        chunksUsed: 0,
      };
    }

    return {
      answer:
        "Sorry, I encountered an error while generating the response. Please try again! 🔄",
      sources: [],
      model: "gemini-flash-latest",
      chunksUsed: 0,
    };
  }
}
