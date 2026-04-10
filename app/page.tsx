import AICard from "@/components/ui/AICard";
import LegendItem from "@/components/features/mainpage/LegendItem";
import { AIS } from "@/lib/ai-data";
import { AICategoryMap } from "@/lib/category-data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-10 px-4 md:px-8 bg-background text-foreground">
      {/* Encabezado */}
      <div className="flex flex-col items-center text-center tracking-tight mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-foreground/90">
          Tabla periódica: Herramientas de
        </h2>
        <h1 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
          Inteligencia Artificial Generativa
        </h1>
      </div>

      {/* Contenedor de la tabla (scroll horizontal en móvil) */}
      <div className="w-full max-w-7xl overflow-x-auto pb-8 pt-4 flex justify-center scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent">
        <div
          className="grid relative z-0 w-fit"
          style={{
            gridTemplateColumns: "repeat(10, 88px)",
            gridTemplateRows: "repeat(5, 104px)",
            gap: "12px",
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

      {/* Leyenda */}
      <div className="w-full max-w-3xl flex flex-col gap-4 mt-6 px-4 pb-12">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-2">
          Descripción tabla periódica
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Object.values(AICategoryMap).map((item, i) => (
            <LegendItem key={i} colorClass={item.colorClass} label={item.label} />
          ))}
        </div>
      </div>
    </main>
  );
}
