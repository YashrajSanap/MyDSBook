import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "cyber-button text-white font-semibold",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg shadow-destructive/25",
        outline:
          "border border-neon-blue/50 bg-transparent text-neon-blue hover:bg-neon-blue/10 hover:shadow-lg hover:shadow-neon-blue/25",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        neon: "bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold shadow-lg shadow-neon-blue/50 hover:shadow-xl hover:shadow-neon-blue/75 hover:scale-105",
        cyber: "bg-cyber-dark border border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue/60 shadow-lg shadow-neon-blue/20",
        glow: "bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold shadow-lg shadow-neon-purple/50 hover:shadow-xl hover:shadow-neon-purple/75 hover:scale-105 glow-text",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8",
        xl: "h-14 rounded-xl px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {variant === "default" && (
          <span className="relative z-10 flex items-center gap-2">
            {children}
          </span>
        )}
        {variant !== "default" && children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }