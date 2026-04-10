import Link from "next/link";
import Image from "next/image";
import { AICategoryMap, AICategory } from "@/lib/category-data";

interface AICardProps {
  id: string;
  symbol: string;
  name: string;
  category: AICategory;
  logo: string;
  style?: React.CSSProperties;
}

export default function AICard({
  id,
  symbol,
  name,
  category,
  logo,
  style,
}: AICardProps) {
  const { borderColor, glowColor } = AICategoryMap[category];

  return (
    <Link
      href={`/ai/${id}`}
      style={style}
      className="block w-full h-full relative" // 👈 Se adapta al tamaño exacto de la celda
      aria-label={`Ver detalles de ${name}`}
    >
      <div
        className={`
          group relative w-full h-full flex flex-col items-center justify-between p-2
          bg-card/80 backdrop-blur-md border ${borderColor} rounded-md
          transition-all duration-300 
          hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:z-10
          ${glowColor}
        `}
      >
        <span className="absolute top-1 right-1 text-[8px] font-bold opacity-70 uppercase truncate max-w-[90%]">
          {category}
        </span>
        
        <div className="relative w-6 h-6 mt-3">
          <Image
            src={logo}
            alt={name}
            fill
            sizes="24px"
            className="object-contain brightness-90 group-hover:brightness-110" // ✅ Ahora sí funciona
          />
        </div>
        
        <span className="text-xl font-black leading-none">{symbol}</span>
        <span className="text-[9px] font-medium truncate w-full text-center pb-1">
          {name}
        </span>
      </div>
    </Link>
  );
}
