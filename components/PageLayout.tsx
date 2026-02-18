import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export function PageLayout({ children, title, description, className = "" }: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <section className="py-4">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </section>
      {children}
    </div>
  );
}
