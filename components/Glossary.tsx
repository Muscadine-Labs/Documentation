import { ReactNode } from "react";

interface GlossaryProps {
  term: string;
  children: ReactNode;
}

export function Glossary({ term, children }: GlossaryProps) {
  return (
    <div className="group relative">
      <span className="cursor-help border-b border-dashed border-primary font-medium text-primary">
        {term}
      </span>
      <div className="absolute bottom-full left-0 mb-2 hidden w-64 rounded-lg border bg-popover p-3 text-sm shadow-lg group-hover:block">
        <div className="prose prose-sm max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}
