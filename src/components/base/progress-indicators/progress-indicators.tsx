import { cn } from "@/lib/utils";

export type ProgressBarProps = {
  min?: number;
  max?: number;
  value: number;
  labelPosition?: "bottom" | "top" | "right" | "none";
  className?: string;
};

/**
 * Brand-themed progress bar. The track and fill use the site's primary
 * (green) theme tokens so it matches the rest of the website.
 */
export const ProgressBar = ({
  min = 0,
  max = 100,
  value,
  labelPosition = "none",
  className,
}: ProgressBarProps) => {
  const range = max - min || 1;
  const percent = Math.min(100, Math.max(0, ((value - min) / range) * 100));

  const bar = (
    <div
      role="progressbar"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      className="relative h-2 w-full overflow-hidden rounded-full bg-primary/15"
    >
      <div
        className="h-full rounded-full bg-primary transition-[width] duration-300 ease-out"
        style={{ width: `${percent}%` }}
      />
    </div>
  );

  if (labelPosition === "none") {
    return <div className={cn("w-full", className)}>{bar}</div>;
  }

  const label = (
    <span className="text-sm font-medium text-foreground tabular-nums">
      {Math.round(percent)}%
    </span>
  );

  if (labelPosition === "right") {
    return (
      <div className={cn("flex w-full items-center gap-3", className)}>
        {bar}
        {label}
      </div>
    );
  }

  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      {labelPosition === "top" && label}
      {bar}
      {labelPosition === "bottom" && label}
    </div>
  );
};

export const ProgressBarTextBottom = () => (
  <ProgressBar labelPosition="bottom" min={0} max={100} value={40} />
);
