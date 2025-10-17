import { ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface RiskAlertProps {
  children: ReactNode;
  type?: "warning" | "critical" | "info";
  title?: string;
}

export function RiskAlert({ children, type = "warning", title }: RiskAlertProps) {
  const styles = {
    warning: "border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-100",
    critical: "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100",
    info: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100",
  };

  return (
    <div className={cn(
      "rounded-2xl border p-4 my-6",
      styles[type]
    )}>
      <div className="flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />
        <div className="prose prose-sm max-w-none">
          {title && (
            <h4 className="font-semibold mb-2">{title}</h4>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
