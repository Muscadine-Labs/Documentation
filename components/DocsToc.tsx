"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface DocsTocProps {
  className?: string;
}

export function DocsToc({ className }: DocsTocProps) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const tocItems: TocItem[] = [];

    headings.forEach((heading) => {
      const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
      if (id) {
        heading.id = id;
        tocItems.push({
          id,
          text: heading.textContent || "",
          level: parseInt(heading.tagName.charAt(1)),
        });
      }
    });

    setToc(tocItems);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -80% 0px",
      }
    );

    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  if (toc.length === 0) return null;

  return (
    <div className={cn("space-y-2", className)}>
      <h3 className="text-sm font-semibold text-foreground">On this page</h3>
      <nav className="space-y-1">
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "block text-sm transition-colors",
              item.level === 1 && "pl-0",
              item.level === 2 && "pl-2",
              item.level === 3 && "pl-4",
              item.level === 4 && "pl-6",
              activeId === item.id
                ? "text-primary font-medium"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
