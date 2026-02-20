import AICard from "@/components/ui/AICard";
import { AIS } from "@/lib/ai-data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-[#020617] text-white">
      <h1 className="text-4xl font-bold mb-12">AI Periodic Table</h1>
      
      <div className="flex gap-4">
        {AIS.map((ai) => (
          <AICard
            key={ai.id}
            id={ai.id}
            symbol={ai.symbol}
            name={ai.name}
            category={ai.category}
            logo={ai.logo}
            borderColor={ai.borderColor}
            glowColor={ai.glowColor}
          />
        ))}
      </div>
    </main>
  );
}