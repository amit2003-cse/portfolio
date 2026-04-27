/**
 * Retrieval module — Cosine similarity search against pre-computed embeddings.
 * Equivalent to: retrieval.py (FAISS search) from your Python backend.
 *
 * Instead of FAISS (binary index), we use cosine similarity on pre-computed
 * JSON embeddings. This works in Next.js serverless environment.
 */

import { embedText } from "./embeddings";
import { knowledgeBase, KnowledgeChunk } from "./knowledge-base";
import embeddingsData from "@/data/embeddings.json";

export interface SearchResult {
  id: string;
  text: string;
  metadata: { category: string; topic: string };
  score: number;
  rank: number;
}

/**
 * Cosine similarity between two vectors.
 * Equivalent to FAISS L2 distance but normalized.
 */
function cosineSimilarity(a: number[], b: number[]): number {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

/**
 * Search for the most relevant chunks given a user query.
 *
 * Flow (same as your Python retrieval.py):
 * 1. Embed the query using Gemini
 * 2. Compute cosine similarity against all pre-computed chunk embeddings
 * 3. Return top-k results sorted by similarity
 */
export async function searchKnowledge(
  query: string,
  topK: number = 5
): Promise<SearchResult[]> {
  // Step 1: Embed the query (same as retrieval_engine.embed_query in Python)
  const queryEmbedding = await embedText(query);

  // Step 2: Compute similarity against all stored embeddings
  const typedEmbeddings = embeddingsData as { id: string; embedding: number[] }[];

  const scored = typedEmbeddings.map((item) => {
    const chunk = knowledgeBase.find((c) => c.id === item.id);
    return {
      id: item.id,
      text: chunk?.text || "",
      metadata: chunk?.metadata || { category: "unknown", topic: "unknown" },
      score: cosineSimilarity(queryEmbedding, item.embedding),
    };
  });

  // Step 3: Sort by similarity (descending) and return top-k
  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, topK).map((item, index) => ({
    ...item,
    rank: index + 1,
  }));
}
