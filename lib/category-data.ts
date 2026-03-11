export const AICategoryMap = {
  RESEARCH: {
    colorClass: "bg-indigo-700",
    borderColor: "border-indigo-700",
    glowColor: "hover:shadow-indigo-700/40",
    label: "Apoyo a la investigación. Chatbots y asistentes."
  },
  PRODUCTIVITY: {
    colorClass: "bg-yellow-500",
    borderColor: "border-yellow-500",
    glowColor: "hover:shadow-yellow-500/40",
    label: "Capacitación educativa, trabajo y productividad."
  },
  AUDIOVISUAL: {
    colorClass: "bg-sky-500",
    borderColor: "border-sky-500",
    glowColor: "hover:shadow-sky-500/40",
    label: "Desarrollo y creación de contenido audiovisual."
  },
  LEARNING: {
    colorClass: "bg-red-500",
    borderColor: "border-red-500",
    glowColor: "hover:shadow-red-500/40",
    label: "Optimización del aprendizaje y pedagogía."
  },
  ADMIN: {
    colorClass: "bg-lime-500",
    borderColor: "border-lime-500",
    glowColor: "hover:shadow-lime-500/40",
    label: "Herramientas para actividades administrativas y apoyo de redacción."
  }
} as const;

export type AICategory = keyof typeof AICategoryMap;
