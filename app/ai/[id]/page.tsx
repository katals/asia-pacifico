import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AIS, getAIById } from "@/lib/ai-data";
import { AICategoryMap } from "@/lib/category-data";

interface AIPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return AIS.map((ai) => ({ id: ai.id }));
}

// Utilidad para extraer ID de YouTube
function getYouTubeVideoId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

export default async function DetailsAiPage({ params }: AIPageProps) {
  const { id } = await params;
  const ai = getAIById(id);

  if (!ai) {
    notFound();
  }

  const categoryConfig = AICategoryMap[ai.category];
  const videoId = ai.videoUrl ? getYouTubeVideoId(ai.videoUrl) : null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      {/* Header decorativo */}
      <div className={`h-2 w-full ${categoryConfig.bgColor}`} />

      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Botón de regreso */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <span>←</span> Volver a la tabla periódica
        </Link>

        {/* Card principal */}
        <article className={`rounded-2xl border ${categoryConfig.borderColor} bg-card shadow-xl overflow-hidden`}>
          
          {/* Hero Section */}
          <section className={`p-8 ${categoryConfig.bgColor}/10 border-b ${categoryConfig.borderColor}`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="relative h-20 w-20 shrink-0 rounded-xl bg-muted/50 p-2 ring-2 ring-border">
                  <Image 
                    src={ai.logo} 
                    alt={ai.name} 
                    fill 
                    sizes="80px"
                    className="object-contain"
                    priority
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-bold tracking-tight">{ai.name}</h1>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryConfig.bgColor} ${categoryConfig.textColor}`}>
                      {ai.symbol}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    {ai.category}
                  </p>
                </div>
              </div>
              
              {/* Badge de categoría */}
              <div className={`inline-flex items-center gap-2 rounded-lg border ${categoryConfig.borderColor} bg-muted/30 px-4 py-2`}>
                <span className={`h-2 w-2 rounded-full ${categoryConfig.bgColor}`} />
                <span className="text-sm font-medium">{categoryConfig.label}</span>
              </div>
            </div>
          </section>

          {/* Contenido principal */}
          <section className="p-8">
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <p className="text-base leading-relaxed text-muted-foreground">
                {ai.description}
              </p>
            </div>

            {/* Video de YouTube (si existe) */}
            {videoId && (
              <div className="mt-10">
                <h2 className="mb-4 text-lg font-semibold">🎬 Demostración</h2>
                <div className="relative w-full overflow-hidden rounded-xl border bg-muted/30 aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                    title={`Video de ${ai.name}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </section>

          {/* Footer de la card */}
          <section className="border-t bg-muted/20 px-8 py-4">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
              <span>ID: <code className="rounded bg-muted px-1.5 py-0.5 font-mono">{ai.id}</code></span>
              <span>Ubicación: Fila {ai.row}, Columna {ai.col}</span>
            </div>
          </section>
        </article>

        {/* Navegación entre IAs (opcional, para UX avanzada) */}
        <div className="mt-8 flex justify-center gap-4">
          {AIS.filter(a => a.category === ai.category && a.id !== ai.id).slice(0, 2).map((related) => (
            <Link
              key={related.id}
              href={`/ai/${related.id}`}
              className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition hover:bg-muted"
            >
              <Image src={related.logo} alt={related.name} width={20} height={20} className="rounded" />
              {related.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
