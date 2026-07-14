import { cn } from "@/lib/cn";

type OrnamentProps = {
  className?: string;
  light?: boolean;
};

export function Ornament({ className, light }: OrnamentProps) {
  return (
    <div className={cn("ornament-line mx-auto", className)} aria-hidden>
      <span
        className={cn(
          "ornament-diamond",
          light ? "bg-brass-light" : "bg-brass"
        )}
      />
    </div>
  );
}
