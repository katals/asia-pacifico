import AICard from "@/components/ui/AICard";
import { AIS } from "@/lib/ai-data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-8 bg-[#020617] text-white">
      <h1 className="text-5xl font-bold mb-16 tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        AI Periodic Table
      </h1>
      
      <div className="w-full max-w-7xl overflow-x-auto pb-10 flex justify-center">
        <div 
          className="grid gap-3" 
          style={{ 
            gridTemplateColumns: "repeat(10, minmax(0, 1fr))",
            gridTemplateRows: "repeat(5, minmax(0, 1fr))"
          }}
        >
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
              style={{
                gridColumn: ai.col,
                gridRow: ai.row,
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}