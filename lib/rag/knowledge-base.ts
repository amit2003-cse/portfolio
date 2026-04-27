/**
 * Knowledge Base — Portfolio data structured as chunks for RAG retrieval.
 * Equivalent to: process-docs.py output (chunks.json) in your Python backend.
 */

export interface KnowledgeChunk {
  id: string;
  text: string;
  metadata: {
    category: string;
    topic: string;
  };
}

export const knowledgeBase: KnowledgeChunk[] = [
  // ─── About / Introduction ────────────────────────────
  {
    id: "about_intro",
    text: "Amit Kumar is a Full Stack Developer with a strong focus on building scalable, intuitive, and robust applications. He is committed to the philosophy of life-long learning and passionate about transforming ideas into production-ready products. He is experienced in MERN Stack + AI (RAG systems) with a strong foundation in DSA and system design.",
    metadata: { category: "about", topic: "introduction" },
  },
  {
    id: "about_contact",
    text: "Amit Kumar's contact information: Phone: +91-9110904529, Email: amit4321sg@gmail.com, LinkedIn: linkedin.com/in/amit-cse, GitHub: github.com/amit2003-cse. He is based in India.",
    metadata: { category: "about", topic: "contact" },
  },
  {
    id: "about_highlights",
    text: "Amit Kumar's key highlights: 1+ Years of Professional Experience, 5+ Projects Completed successfully, 2+ Awards Received for his work. He has a proven track record of delivering production-ready applications.",
    metadata: { category: "about", topic: "highlights" },
  },

  // ─── Technical Skills ────────────────────────────────
  {
    id: "skills_frontend",
    text: "Amit's Frontend & Framework skills include: Next.js and React.js. He builds modern, responsive user interfaces with these technologies. He is proficient in component-based architecture, state management, and server-side rendering with Next.js.",
    metadata: { category: "skills", topic: "frontend" },
  },
  {
    id: "skills_backend",
    text: "Amit's Backend & Runtime skills include: Node.js and Express.js. He builds scalable server-side applications, RESTful APIs, authentication systems, and handles complex backend logic.",
    metadata: { category: "skills", topic: "backend" },
  },
  {
    id: "skills_database",
    text: "Amit's Database & Tools expertise includes: MongoDB (NoSQL database), Qdrant (Vector Database for AI applications), Docker (containerization), and Git/GitHub for version control and collaboration.",
    metadata: { category: "skills", topic: "database" },
  },
  {
    id: "skills_languages",
    text: "Amit is proficient in the following programming languages: JavaScript (primary language for full-stack development), C, C++ (systems programming and DSA), and SQL (database querying).",
    metadata: { category: "skills", topic: "languages" },
  },
  {
    id: "skills_styling",
    text: "Amit uses Tailwind CSS for styling his web applications. He creates modern, responsive, and visually appealing designs using utility-first CSS framework.",
    metadata: { category: "skills", topic: "styling" },
  },
  {
    id: "skills_ai",
    text: "Amit's AI/ML skills include: RAG (Retrieval-Augmented Generation), Vector Embeddings, Semantic Search, Local LLMs using Ollama, and Prompt Engineering. He has hands-on experience building AI-powered applications with document-grounded responses.",
    metadata: { category: "skills", topic: "ai" },
  },

  // ─── Experience ──────────────────────────────────────
  {
    id: "exp_ansh",
    text: "Amit is currently working as a Full Stack Developer Intern at ANSH InfoTech, Ludhiana, Punjab since January 2026. His responsibilities include: developing and optimizing full-stack web applications using MERN Stack, working on API integrations, authentication systems, and scalable backend logic, and managing version control and collaboration using Git.",
    metadata: { category: "experience", topic: "ansh-infotech" },
  },
  {
    id: "exp_freelance",
    text: "Amit has been working as a Freelance Developer since June 2025. He has delivered real-world client projects including: Mom's Handmade (MERN E-commerce with Razorpay integration) and a Security Agency Website with service inquiry workflow. He focuses on scalable architecture, performance optimization, and deployment. He works directly with clients which has improved his communication and product thinking skills.",
    metadata: { category: "experience", topic: "freelance" },
  },
  {
    id: "exp_iitk",
    text: "Amit completed a Summer Training at EICT Academy, IIT Kanpur from June 2024 to July 2024. During this 45-day intensive training, he focused on C++ and memory management. He solved 50+ DSA/OOP problems which improved his logic building. He also learned code optimization and performance techniques.",
    metadata: { category: "experience", topic: "iit-kanpur" },
  },

  // ─── Projects ────────────────────────────────────────
  {
    id: "project_sms",
    text: "Smart Manufacturing System: Amit built an enterprise dashboard for barcode tracking and automated QC workflows. He implemented a real-time shipping label consolidation system. The project focused on operational efficiency and automation in a manufacturing environment. It is a professional-grade system with real-world industry applications. Tech stack includes React, Node.js, and enterprise-level architecture.",
    metadata: { category: "projects", topic: "smart-manufacturing" },
  },
  {
    id: "project_panda",
    text: "Panda AI (RAG-based Teaching Assistant): Amit developed a privacy-first local RAG system that eliminates hallucinations using document-grounded responses. He integrated semantic search with vector database (Qdrant). The system is optimized for low-latency performance on local machines. It uses Ollama for local LLMs and implements a full RAG pipeline with embedding, retrieval, and generation.",
    metadata: { category: "projects", topic: "panda-ai" },
  },
  {
    id: "project_moms",
    text: "Mom's Handmade (E-Commerce): Amit built a full-stack MERN app for homemade products. He integrated Razorpay for secure payments. The app features a chatbot, real-time search, and a stable cart system. It was a freelance client project delivered with production-ready quality.",
    metadata: { category: "projects", topic: "moms-handmade" },
  },
  {
    id: "project_reviseflow",
    text: "ReviseFlow: Amit built this project on the Guilt-Free Spaced Repetition principle. It helps users revise effectively without burnout. The focus is on productivity and behavioral psychology. It implements spaced repetition algorithms for effective learning.",
    metadata: { category: "projects", topic: "reviseflow" },
  },
  {
    id: "project_powerprinter",
    text: "Power Printer: A MERN-based e-commerce platform for printer products. Amit designed a scalable product listing and checkout system. It demonstrates his ability to build complete e-commerce solutions.",
    metadata: { category: "projects", topic: "power-printer" },
  },
  {
    id: "project_finassess",
    text: "FinAssessPro: An automated borrower eligibility evaluation system. It generates risk reports and scoring. Useful for fintech and loan assessment workflows. Demonstrates Amit's ability to build domain-specific financial applications.",
    metadata: { category: "projects", topic: "finassess" },
  },

  // ─── Education ───────────────────────────────────────
  {
    id: "edu_btech",
    text: "Amit is pursuing B.Tech in Computer Science (Data Science specialization) from Gulzar Group of Institutions, Punjab. Duration: 2022 to 2026. His current CGPA is 8.27. He has a strong academic foundation combined with practical project experience.",
    metadata: { category: "education", topic: "btech" },
  },
  {
    id: "edu_certifications",
    text: "Amit holds a C++ Certification from EICT Academy, IIT Kanpur. This certification validates his proficiency in C++ programming, memory management, and object-oriented programming concepts.",
    metadata: { category: "education", topic: "certifications" },
  },

  // ─── Tech Stack Summary ──────────────────────────────
  {
    id: "tech_stack_full",
    text: "Amit's complete tech stack (Tech Arsenal): Frontend - Next.js, React.js | Backend - Node.js, Express.js | Database - MongoDB, Qdrant (Vector DB) | DevOps - Docker, Git/GitHub | Languages - JavaScript, C, C++, SQL | Styling - Tailwind CSS | AI/ML - RAG, Vector Embeddings, Semantic Search, Local LLMs (Ollama), Prompt Engineering. He is a full-stack developer capable of building end-to-end applications.",
    metadata: { category: "skills", topic: "full-stack" },
  },
];
