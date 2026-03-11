import React from "react";

interface LegendItemProps {
  colorClass: string;
  label: string;
}

export default function LegendItem({ colorClass, label }: LegendItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className={`w-3 h-3 rounded-full flex-shrink-0 shadow-sm ${colorClass}`}></div>
      <p className="text-base md:text-lg font-medium text-foreground tracking-tight">
        {label}
      </p>
    </div>
  );
}
