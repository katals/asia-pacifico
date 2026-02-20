// app/page.tsx
import AICard from '../components/aiCard'; // Importación desde la raíz

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-[#020617] text-white">
      <h1 className="text-4xl font-bold mb-12">AI Periodic Table</h1>
      
      <div className="flex gap-4">
        <AICard 
          symbol="GPT" 
          name="ChatGPT" 
          category="LLM" 
          logo="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
          borderColor="border-emerald-500"
          glowColor="hover:shadow-emerald-500/40"
        />
        
        <AICard 
          symbol="Cl" 
          name="Claude" 
          category="NLP" 
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Anthropic_logo.svg/200px-Anthropic_logo.svg.png"
          borderColor="border-orange-400"
          glowColor="hover:shadow-orange-400/40"
        />
      </div>
    </main>
  );
}