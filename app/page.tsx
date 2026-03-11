import AICard from "@/components/ui/AICard";
import { AIS } from "@/lib/ai-data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-8 bg-background text-foreground">
      <div className="flex flex-col items-center mb-8 text-center tracking-tight">
        <div className="flex items-center gap-2 mb-1">
          <h2 className="text-2xl md:text-2xl font-bold text-foreground">
            Tabla periódica: Herramientas de
          </h2>
        </div>
        <h1 className="text-4xl md:text-4xl font-black mb-4 text-foreground tracking-tight">
          Inteligencia Artificial Generativa
        </h1>
      </div>

      <div className="w-full max-w-7xl overflow-x-auto pb-10 flex justify-center">
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(10, minmax(80px, 1fr))",
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