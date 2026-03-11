import AICard from "@/components/ui/AICard";
import LegendItem from "@/components/features/mainpage/LegendItem";
import { AIS } from "@/lib/ai-data";
import { AICategoryMap } from "@/lib/category-data";

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
              style={{
                gridColumn: ai.col,
                gridRow: ai.row,
              }}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-3xl flex flex-col gap-6 mt-4 px-4 pb-12">
        <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2">
          Descripción tabla periódica
        </h3>
        {Object.values(AICategoryMap).map((item, i) => (
          <LegendItem key={i} colorClass={item.colorClass} label={item.label} />
        ))}
      </div>
    </main>
  );
}