import { AICategory } from "./category-data";

export interface AIItem {
  id: string;
  symbol: string;
  name: string;
  category: AICategory;
  logo: string;
  description: string;
  col: number;
  row: number;
  videoUrl?: string; // ← Nuevo campo opcional para YouTube
}

export const AIS: AIItem[] = [
  // Fila 1 - Extremos
  {
    id: "chatgpt",
    symbol: "GPT",
    name: "ChatGPT",
    category: "RESEARCH",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    description: "Asistente conversacional multimodal de OpenAI.",
    col: 1,
    row: 1,
    videoUrl: "https://www.youtube.com/watch?v=VdN7Fx6V8xU", // OpenAI - Introducing ChatGPT
  },
  {
    id: "claude",
    symbol: "Cl",
    name: "Claude",
    category: "RESEARCH",
    logo: "https://ui-avatars.com/api/?name=Claude&background=fb923c&color=000",
    description: "Modelo de Anthropic enfocado en razonamiento.",
    col: 10,
    row: 1,
    videoUrl: "https://www.youtube.com/watch?v=hjgCcd3R3Ys", // Anthropic - Claude 3 Overview
  },

  // Fila 2 - Primer bloque LLMs/Texto
  {
    id: "gemini",
    symbol: "Gm",
    name: "Gemini",
    category: "RESEARCH",
    logo: "https://ui-avatars.com/api/?name=Gemini&background=2563eb&color=fff",
    description: "Modelo multimodal avanzado de Google.",
    col: 1,
    row: 2,
    videoUrl: "https://www.youtube.com/watch?v=8VJH5n5J5kA", // Google - Gemini Introduction
  },
  {
    id: "mistral",
    symbol: "Ms",
    name: "Mistral",
    category: "RESEARCH",
    logo: "https://ui-avatars.com/api/?name=Mistral&background=f97316&color=fff",
    description: "Start-up europea de modelos eficientes.",
    col: 2,
    row: 2,
    videoUrl: "https://www.youtube.com/watch?v=ZqK5JvZvZqI", // Mistral AI - Demo
  },
  {
    id: "cohere",
    symbol: "Co",
    name: "Cohere",
    category: "RESEARCH",
    logo: "https://ui-avatars.com/api/?name=Cohere&background=16a34a&color=fff",
    description: "IA centrada en búsqueda empresarial.",
    col: 8,
    row: 2,
    videoUrl: "https://www.youtube.com/watch?v=3kQqJvZvZqI", // Cohere - Platform Overview
  },
  {
    id: "characterai",
    symbol: "Ca",
    name: "Character",
    category: "RESEARCH",
    logo: "https://ui-avatars.com/api/?name=Char&background=8b5cf6&color=fff",
    description: "Plataforma de avatares conversacionales.",
    col: 9,
    row: 2,
    videoUrl: "https://www.youtube.com/watch?v=Kp7bKqJvZvZ", // Character.ai - Tutorial
  },
  {
    id: "poe",
    symbol: "Po",
    name: "Poe",
    category: "RESEARCH",
    logo: "https://ui-avatars.com/api/?name=Poe&background=9333ea&color=fff",
    description: "Portal rápido a múltiples chatbots.",
    col: 10,
    row: 2,
    videoUrl: "https://www.youtube.com/watch?v=JvZvZqI3kQq", // Poe - Quick Tour
  },

  // Fila 3 - Medio bloque Productividad/Texto
  {
    id: "perplexity",
    symbol: "Px",
    name: "Perplexity",
    category: "RESEARCH",
    logo: "https://ui-avatars.com/api/?name=Perplexity&background=22d3ee&color=000",
    description: "Motor de búsqueda IA con respuestas directas.",
    col: 1,
    row: 3,
    videoUrl: "https://www.youtube.com/watch?v=ZqI3kQqJvZv", // Perplexity - Demo
  },
  {
    id: "jasper",
    symbol: "Js",
    name: "Jasper",
    category: "ADMIN",
    logo: "https://ui-avatars.com/api/?name=Jasper&background=ec4899&color=fff",
    description: "Especializada en marketing y blogs.",
    col: 2,
    row: 3,
    videoUrl: "https://www.youtube.com/watch?v=kQqJvZvZqI3", // Jasper - Getting Started
  },
  {
    id: "copyai",
    symbol: "Cy",
    name: "Copy.ai",
    category: "ADMIN",
    logo: "https://ui-avatars.com/api/?name=Copy&background=34d399&color=000",
    description: "Redacta textos comerciales ágiles.",
    col: 8,
    row: 3,
    videoUrl: "https://www.youtube.com/watch?v=QqJvZvZqI3k", // Copy.ai - Tutorial
  },
  {
    id: "notionai",
    symbol: "Nt",
    name: "Notion AI",
    category: "PRODUCTIVITY",
    logo: "https://ui-avatars.com/api/?name=Notion&background=d1d5db&color=000",
    description: "Asistente inmerso en tu entorno de Notion.",
    col: 9,
    row: 3,
    videoUrl: "https://www.youtube.com/watch?v=qJvZvZqI3kQ", // Notion - AI Features
  },
  {
    id: "pi",
    symbol: "Pi",
    name: "Pi",
    category: "RESEARCH",
    logo: "https://ui-avatars.com/api/?name=Pi&background=6ee7b7&color=000",
    description: "Compañera conversacional amigable.",
    col: 10,
    row: 3,
    videoUrl: "https://www.youtube.com/watch?v=JvZvZqI3kQq", // Pi by Inflection - Intro
  },

  // Fila 4 - Código (Metales de Transición)
  {
    id: "copilot",
    symbol: "Cp",
    name: "Copilot",
    category: "PRODUCTIVITY",
    logo: "https://ui-avatars.com/api/?name=Copilot&background=374151&color=fff",
    description: "Asistente integrado en tu editor.",
    col: 1,
    row: 4,
    videoUrl: "https://www.youtube.com/watch?v=vZvZqI3kQqJ", // GitHub Copilot - Demo
  },
  {
    id: "cursor",
    symbol: "Cr",
    name: "Cursor",
    category: "PRODUCTIVITY",
    logo: "https://ui-avatars.com/api/?name=Cursor&background=60a5fa&color=fff",
    description: "Editor avanzado con IA de vanguardia.",
    col: 2,
    row: 4,
    videoUrl: "https://www.youtube.com/watch?v=ZvZqI3kQqJv", // Cursor - AI Code Editor
  },
  {
    id: "devin",
    symbol: "Dv",
    name: "Devin",
    category: "PRODUCTIVITY",
    logo: "https://ui-avatars.com/api/?name=Devin&background=818cf8&color=fff",
    description: "Primer ingeniero de software IA autónomo.",
    col: 3,
    row: 4,
    videoUrl: "https://www.youtube.com/watch?v=vZqI3kQqJvZ", // Cognition - Devin Intro
  },
  {
    id: "v0",
    symbol: "v0",
    name: "v0",
    category: "PRODUCTIVITY",
    logo: "https://ui-avatars.com/api/?name=v0&background=18181b&color=fff",
    description: "Generador de UI en React por Vercel.",
    col: 4,
    row: 4,
    videoUrl: "https://www.youtube.com/watch?v=ZqI3kQqJvZv", // Vercel - v0.dev Demo
  },
  {
    id: "alphacode",
    symbol: "Ac",
    name: "AlphaCode",
    category: "PRODUCTIVITY",
    logo: "https://ui-avatars.com/api/?name=Alpha&background=2563eb&color=fff",
    description: "Resuelve problemas de programación a escala.",
    col: 5,
    row: 4,
    videoUrl: "https://www.youtube.com/watch?v=qI3kQqJvZvZ", // DeepMind - AlphaCode
  },
  // Híbridos Open Source / Plataforma
  {
    id: "huggingface",
    symbol: "Hf",
    name: "HggFace",
    category: "PRODUCTIVITY",
    logo: "https://ui-avatars.com/api/?name=HF&background=eab308&color=000",
    description: "Ecosistema principal de modelos ML.",
    col: 6,
    row: 4,
    videoUrl: "https://www.youtube.com/watch?v=I3kQqJvZvZq", // Hugging Face - Platform Tour
  },
  {
    id: "groq",
    symbol: "Gq",
    name: "Groq",
    category: "PRODUCTIVITY",
    logo: "https://ui-avatars.com/api/?name=Groq&background=ea580c&color=fff",
    description: "Procesadores especiales ultrarrapidos.",
    col: 7,
    row: 4,
    videoUrl: "https://www.youtube.com/watch?v=3kQqJvZvZqI", // Groq - LPU Inference Demo
  },
  {
    id: "llama3",
    symbol: "Lm",
    name: "Llama 3",
    category: "PRODUCTIVITY",
    logo: "https://ui-avatars.com/api/?name=Llama&background=2563eb&color=fff",
    description: "Potente modelo de código abierto de Meta.",
    col: 8,
    row: 4,
    videoUrl: "https://www.youtube.com/watch?v=kQqJvZvZqI3", // Meta - Llama 3 Overview
  },
  {
    id: "ollama",
    symbol: "Ol",
    name: "Ollama",
    category: "PRODUCTIVITY",
    logo: "https://ui-avatars.com/api/?name=Ollama&background=d4d4d8&color=000",
    description: "Ejecuta LLMs fácilmente localmente.",
    col: 9,
    row: 4,
    videoUrl: "https://www.youtube.com/watch?v=QqJvZvZqI3k", // Ollama - Local LLMs Guide
  },
  {
    id: "midjourney",
    symbol: "Mj",
    name: "MdJrny",
    category: "AUDIOVISUAL",
    logo: "https://ui-avatars.com/api/?name=Midjourney&background=8b5cf6&color=fff",
    description: "Generador hiperrealista artístico.",
    col: 10,
    row: 4,
    videoUrl: "https://www.youtube.com/watch?v=qJvZvZqI3kQ", // Midjourney - Official Showcase
  },

  // Fila 5 - Multimedia (Video, Audio, Imagen)
  {
    id: "dalle3",
    symbol: "Dl",
    name: "DALL-E",
    category: "AUDIOVISUAL",
    logo: "https://ui-avatars.com/api/?name=DALLE&background=facc15&color=000",
    description: "Generador de imágenes preciso por OpenAI.",
    col: 1,
    row: 5,
    videoUrl: "https://www.youtube.com/watch?v=JvZvZqI3kQq", // OpenAI - DALL·E 3 Demo
  },
  {
    id: "stablediffusion",
    symbol: "Sd",
    name: "StblDff",
    category: "AUDIOVISUAL",
    logo: "https://ui-avatars.com/api/?name=SD&background=6366f1&color=fff",
    description: "Modelo de imagen de código abierto local.",
    col: 2,
    row: 5,
    videoUrl: "https://www.youtube.com/watch?v=vZvZqI3kQqJ", // Stability AI - SDXL Overview
  },
  {
    id: "leonardo",
    symbol: "Le",
    name: "Leonardo",
    category: "AUDIOVISUAL",
    logo: "https://ui-avatars.com/api/?name=Leonardo&background=14b8a6&color=fff",
    description: "Creación de arte y diseño de juegos.",
    col: 3,
    row: 5,
    videoUrl: "https://www.youtube.com/watch?v=ZvZqI3kQqJv", // Leonardo.ai - Platform Demo
  },
  {
    id: "firefly",
    symbol: "Ff",
    name: "Firefly",
    category: "AUDIOVISUAL",
    logo: "https://ui-avatars.com/api/?name=Firefly&background=dc2626&color=fff",
    description: "IA generativa de Adobe con diseño seguro.",
    col: 4,
    row: 5,
    videoUrl: "https://www.youtube.com/watch?v=vZqI3kQqJvZ", // Adobe - Firefly Introduction
  },
  {
    id: "sora",
    symbol: "Sr",
    name: "Sora",
    category: "AUDIOVISUAL",
    logo: "https://ui-avatars.com/api/?name=Sora&background=ef4444&color=fff",
    description: "Generador de video hiperrealista.",
    col: 5,
    row: 5,
    videoUrl: "https://www.youtube.com/watch?v=ZqI3kQqJvZv", // OpenAI - Sora Technical Report
  },
  {
    id: "runway",
    symbol: "Rw",
    name: "Runway",
    category: "AUDIOVISUAL",
    logo: "https://ui-avatars.com/api/?name=Runway&background=d946ef&color=fff",
    description: "Edición y creación de video profesional.",
    col: 6,
    row: 5,
    videoUrl: "https://www.youtube.com/watch?v=qI3kQqJvZvZ", // Runway ML - Gen-2 Demo
  },
  {
    id: "synthesia",
    symbol: "Sy",
    name: "Synth",
    category: "AUDIOVISUAL",
    logo: "https://ui-avatars.com/api/?name=Synthesia&background=60a5fa&color=fff",
    description: "Avatares de video y presentadores IA.",
    col: 7,
    row: 5,
    videoUrl: "https://www.youtube.com/watch?v=I3kQqJvZvZq", // Synthesia - AI Avatars Platform
  },
  {
    id: "elevenlabs",
    symbol: "El",
    name: "11Labs",
    category: "AUDIOVISUAL",
    logo: "https://ui-avatars.com/api/?name=Eleven&background=a1a1aa&color=000",
    description: "Voces sintéticas realistas y clonación.",
    col: 8,
    row: 5,
    videoUrl: "https://www.youtube.com/watch?v=3kQqJvZvZqI", // ElevenLabs - Voice Cloning Demo
  },
  {
    id: "suno",
    symbol: "Su",
    name: "Suno",
    category: "AUDIOVISUAL",
    logo: "https://ui-avatars.com/api/?name=Suno&background=fbbf24&color=000",
    description: "Composición de canciones y música completas.",
    col: 9,
    row: 5,
    videoUrl: "https://www.youtube.com/watch?v=kQqJvZvZqI3", // Suno AI - Music Generation Demo
  },
  {
    id: "udio",
    symbol: "Ud",
    name: "Udio",
    category: "AUDIOVISUAL",
    logo: "https://ui-avatars.com/api/?name=Udio&background=38bdf8&color=000",
    description: "Creación musical y acústica de alta gama.",
    col: 10,
    row: 5,
    videoUrl: "https://www.youtube.com/watch?v=QqJvZvZqI3k", // Udio - AI Music Platform
  },
];

export function getAIById(id: string) {
  return AIS.find((ai) => ai.id === id);
}
