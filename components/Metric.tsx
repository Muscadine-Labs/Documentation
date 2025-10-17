interface MetricProps {
  label: string;
  value: string;
  hint?: string;
}

export function Metric({ label, value, hint }: MetricProps) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
        {hint && (
          <p className="text-xs text-muted-foreground">{hint}</p>
        )}
      </div>
    </div>
  );
}
