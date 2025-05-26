import { cn } from "../../lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-gray-800/50",
        "before:absolute before:inset-0",
        "before:bg-gradient-to-r before:from-transparent before:via-gray-600/20 before:to-transparent",
        "before:animate-[shimmer_1.5s_infinite]",
        "skeleton-shimmer",
        className
      )}
      {...props}
    />
  );
}

// Enhanced shimmer animation keyframes (to be added to globals.css)
const shimmerKeyframes = `
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
`;

export { Skeleton };
