import Link from "next/link";
import Image from "next/image";

interface AICardProps {
  id: string;
  symbol: string;
  name: string;
  category: string;
  logo: string;
  borderColor: string;
  glowColor: string;
}

export default function AICard({ id, symbol, name, category, logo, borderColor, glowColor }: AICardProps) {
  return (
    <Link href={`/ai/${id}`}>
      <div
        className={`
        relative group w-20 h-24 flex flex-col items-center justify-between p-2
        bg-slate-900/40 backdrop-blur-md border ${borderColor} rounded-md
        transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]
        ${glowColor} cursor-pointer
      `}
      >
        <span className="absolute top-1 right-1 text-[8px] font-bold opacity-70 uppercase">
          {category}
        </span>
        <div className="relative w-6 h-6 mt-2">
          <Image
            src={logo}
            alt={name}
            fill
            sizes="24px"
            className="object-contain brightness-90 group-hover:brightness-110"
          />
        </div>
        <span className="text-xl font-black leading-none">{symbol}</span>
        <span className="text-[9px] font-medium truncate w-full text-center pb-1">{name}</span>
      </div>
    </Link>
  );
}