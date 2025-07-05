import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        neon: "border-neon-blue/50 bg-neon-blue/10 text-neon-blue shadow-lg shadow-neon-blue/25",
        success: "border-neon-green/50 bg-neon-green/10 text-neon-green shadow-lg shadow-neon-green/25",
        warning: "border-yellow-500/50 bg-yellow-500/10 text-yellow-500 shadow-lg shadow-yellow-500/25",
        cyber: "border-neon-purple/50 bg-neon-purple/10 text-neon-purple shadow-lg shadow-neon-purple/25",
        glow: "border-neon-pink/50 bg-neon-pink/10 text-neon-pink shadow-lg shadow-neon-pink/25 glow-text",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }