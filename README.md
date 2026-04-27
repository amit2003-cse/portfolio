<div align="center">

# 🚀 Next-Gen AI Portfolio

**A premium, high-performance developer portfolio built with Next.js, featuring a built-in Serverless RAG AI Assistant.**

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Groq](https://img.shields.io/badge/Groq_Llama_3-F55036?style=for-the-badge&logo=groq&logoColor=white)](https://groq.com/)

[View Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>

---

## ✨ Features

- **🤖 Serverless RAG AI Chatbot:** An integrated AI assistant powered by **Groq (Llama 3.3)** and **Gemini Embeddings**. It acts as a 24/7 technical recruiter, instantly answering questions about my experience, skills, and projects using real-time Web Streams.
- **⚡ Blazing Fast Performance:** Built on Next.js App Router for optimal Server-Side Rendering (SSR) and Static Site Generation (SSG).
- **🎨 Premium Dark UI:** A stunning, modern glassmorphism design with a dark theme, neon accents, and smooth scrolling.
- **🎬 Cinematic Animations:** Fluid, physics-based micro-interactions and page transitions powered by **Framer Motion**.
- **📝 Technical Blog:** A built-in Markdown/React-based blog section ("Tech Insights") to share deep technical dives.
- **📧 Contact Integration:** Fully functional serverless contact form.

---

## 🛠️ Tech Stack & Architecture

### **Frontend**
*   **Framework:** [Next.js](https://nextjs.org/) (React)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Smooth Scrolling:** [Lenis](https://lenis.studiofreight.com/)

### **AI & Backend (API Routes)**
*   **LLM Provider:** [Groq](https://groq.com/) (Llama-3.3-70b-versatile for ultra-low latency token generation)
*   **Embeddings:** Google Gemini (`text-embedding-004`)
*   **Vector Search:** In-memory highly optimized Cosine Similarity Search.

---

## 🚀 Getting Started

To run this portfolio locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/amit2003-cse/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Setup Environment Variables
Create a `.env.local` file in the root of your project and add your API keys for the AI Chatbot functionality:

```env
# AI RAG Chatbot Keys
GEMINI_API_KEY=your_google_gemini_api_key_here
GROQ_API_KEY=your_groq_api_key_here
```

### 4. Start the Development Server
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🧠 How the AI RAG System Works

This portfolio doesn't just list projects; it talks about them. 

1. **Knowledge Base:** My resume and project data are pre-processed and converted into high-dimensional vector embeddings using the Google Gemini API.
2. **User Query:** When a user asks a question in the `/projects/ai-chatbot` interface, their query is also embedded.
3. **Semantic Search:** A custom Serverless API route calculates the Cosine Similarity between the user's query vector and the knowledge base to retrieve the most relevant context.
4. **Streaming Generation:** The context is fed into Groq's insanely fast LPU hardware running Llama 3. The response is piped back to the frontend in real-time using `ReadableStream` and Server-Sent Events (SSE).

---

## 🤝 Let's Connect

- **LinkedIn:** [linkedin.com/in/amit-cse](https://www.linkedin.com/in/amit-cse/)
- **GitHub:** [@amit2003-cse](https://github.com/amit2003-cse)

---
<div align="center">
  <p>Built with ❤️ by Amit Kumar. Committed to life-long learning.</p>
</div>
