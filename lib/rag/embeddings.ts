/**
 * Embeddings module — Gemini embedding helper.
 * Equivalent to: embed_query() in retrieval.py from your Python backend.
 */

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

/**
 * Generate embedding for a single text using Gemini API.
 * Same model as your Python backend: models/gemini-embedding-001
 */
export async function embedText(text: string): Promise<number[]> {
  const model = genAI.getGenerativeModel({ model: "gemini-embedding-001" });
  const result = await model.embedContent(text);
  return result.embedding.values;
}

/**
 * Generate embeddings for multiple texts (batch).
 * Used by the embedding generation script.
 */
export async function embedTexts(texts: string[]): Promise<number[][]> {
  const embeddings: number[][] = [];
  for (const text of texts) {
    const embedding = await embedText(text);
    embeddings.push(embedding);
    // Small delay to respect rate limits
    await new Promise((r) => setTimeout(r, 100));
  }
  return embeddings;
}
