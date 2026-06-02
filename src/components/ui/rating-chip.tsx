import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function RatingChip({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-2xl px-4 py-2.5 shadow-card",
        dark
          ? "glass text-white"
          : "border border-line bg-white text-navy-900",
        className,
      )}
    >
      <span className="font-display text-lg font-bold">4.9</span>
      <span className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-brand-500 text-brand-500" />
        ))}
      </span>
      <span className={cn("text-sm", dark ? "text-white/70" : "text-muted")}>
        Trusted by Thousands
      </span>
    </div>
  );
}
