    import React from 'react';

    interface AICardProps {
    symbol: string;
    name: string;
    category: string;
    logo: string;
    borderColor: string;
    glowColor: string;
    }

    export default function AICard({ symbol, name, category, logo, borderColor, glowColor }: AICardProps) {
    return (
        <div className={`
        relative group w-20 h-24 flex flex-col items-center justify-between p-2
        bg-slate-900/40 backdrop-blur-md border ${borderColor} rounded-md
        transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]
        ${glowColor} cursor-pointer
        `}>
        {/* "Número Atómico" (Categoría corta) */}
        <span className="absolute top-1 right-1 text-[8px] font-bold opacity-70 uppercase">
            {category}
        </span>

        {/* Logo */}
        <div className="w-6 h-6 mt-2">
            <img src={logo} alt={name} className="w-full h-full object-contain brightness-90 group-hover:brightness-110" />
        </div>

        {/* Símbolo Químico */}
        <span className="text-xl font-black leading-none">
            {symbol}
        </span>

        {/* Nombre */}
        <span className="text-[9px] font-medium truncate w-full text-center pb-1">
            {name}
        </span>
        </div>
    );
    }