export interface AIItem {
  id: string;
  symbol: string;
  name: string;
  category: string;
  logo: string;
  borderColor: string;
  glowColor: string;
  description: string;
}

export const AIS: AIItem[] = [
  {
    id: "chatgpt",
    symbol: "GPT",
    name: "ChatGPT",
    category: "LLM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    borderColor: "border-emerald-500",
    glowColor: "hover:shadow-emerald-500/40",
    description:
      "Asistente conversacional multimodal de OpenAI para redacción, código, análisis y automatización.",
  },
  {
    id: "claude",
    symbol: "Cl",
    name: "Claude",
    category: "NLP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Anthropic_logo.svg/200px-Anthropic_logo.svg.png",
    borderColor: "border-orange-400",
    glowColor: "hover:shadow-orange-400/40",
    description:
      "Modelo de Anthropic enfocado en razonamiento, escritura y tareas de programación con contexto amplio.",
  },
];

export function getAIById(id: string) {
  return AIS.find((ai) => ai.id === id);
}