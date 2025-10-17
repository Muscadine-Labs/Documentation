import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CalloutProps {
  type?: "info" | "warning" | "success" | "error";
  children: ReactNode;
}

export function Callout({ type = "info", children }: CalloutProps) {
  const styles = {
    info: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100",
    warning: "border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-100",
    success: "border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100",
    error: "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100",
  };

  const icons = {
    info: "ℹ️",
    warning: "⚠️",
    success: "✅",
    error: "❌",
  };

  return (
    <div className={cn(
      "rounded-2xl border p-4 my-6",
      styles[type]
    )}>
      <div className="flex items-start gap-3">
        <span className="text-lg">{icons[type]}</span>
        <div className="prose prose-sm max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}
