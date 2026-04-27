/**
 * Embedding Generation Script — One-time script to pre-compute embeddings.
 * Equivalent to: create_embeddings.py from your Python backend.
 *
 * Run with: npx ts-node scripts/generate-embeddings.ts
 * Or: npx tsx scripts/generate-embeddings.ts
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import { knowledgeBase } from "../lib/rag/knowledge-base";
import * as fs from "fs";
import * as path from "path";

const GEMINI_API_KEY = "AIzaSyAPjGtq-wlmjRNlVguYYGGRIklbfVGrXY0";
const OUTPUT_FILE = path.join(process.cwd(), "data", "embeddings.json");

async function generateEmbeddings() {
  console.log("🚀 Generating embeddings via Gemini API...");
  console.log(`📦 Total chunks: ${knowledgeBase.length}`);

  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-embedding-001" });

  const embeddings: { id: string; embedding: number[] }[] = [];

  for (let i = 0; i < knowledgeBase.length; i++) {
    const chunk = knowledgeBase[i];
    console.log(`  [${i + 1}/${knowledgeBase.length}] Embedding: ${chunk.id}`);

    const result = await model.embedContent(chunk.text);
    embeddings.push({
      id: chunk.id,
      embedding: result.embedding.values,
    });

    // Rate limit protection (same approach as Python batch processing)
    await new Promise((r) => setTimeout(r, 150));
  }

  // Save embeddings to JSON (same as Python: faiss_index.bin + metadata.json combined)
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(embeddings, null, 2));
  console.log(`\n✅ Embeddings saved to: ${OUTPUT_FILE}`);
  console.log(`📊 Total vectors: ${embeddings.length}`);
  console.log(`📐 Dimension: ${embeddings[0]?.embedding.length || 0}`);
}

generateEmbeddings().catch(console.error);
