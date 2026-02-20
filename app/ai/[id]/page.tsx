import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AIS, getAIById } from "@/lib/ai-data";

interface AIPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return AIS.map((ai) => ({ id: ai.id }));
}

export default async function DetailsAiPage({ params }: AIPageProps) {
  const { id } = await params;
  const ai = getAIById(id);

  if (!ai) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#020617] px-6 py-16 text-white">
      <div className={`w-full max-w-2xl rounded-xl border ${ai.borderColor} bg-slate-900/50 p-8`}>
        <p className="text-sm uppercase tracking-widest opacity-70">{ai.category}</p>
        <div className="mt-4 flex items-center gap-4">
          <div className="relative h-12 w-12">
            <Image src={ai.logo} alt={ai.name} fill sizes="48px" className="object-contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{ai.name}</h1>
            <p className="text-sm opacity-75">Símbolo: {ai.symbol}</p>
          </div>
        </div>

        <p className="mt-6 text-base leading-7 opacity-90">{ai.description}</p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-md border border-slate-700 px-4 py-2 text-sm transition hover:bg-slate-800"
        >
          ← Volver a la tabla
        </Link>
      </div>
    </main>
  );
}