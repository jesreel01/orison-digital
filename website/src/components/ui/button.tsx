import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 ease-in-out disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-violet-600 text-white text-base shadow-lg hover:bg-violet-800 hover:shadow-xl focus:ring-violet-500/50",
        destructive:
          "bg-destructive text-white text-base shadow-lg hover:bg-destructive/90 focus:ring-destructive/50",
        outline:
          "border-2 border-violet-600 text-violet-600 bg-transparent text-base hover:bg-violet-600 hover:text-white focus:ring-violet-500/50",
        secondary:
          "bg-secondary text-secondary-foreground text-base shadow-lg hover:bg-secondary/80 focus:ring-secondary/50",
        ghost:
          "hover:bg-accent hover:text-accent-foreground text-base focus:ring-accent/50",
        link: "text-primary text-base underline-offset-4 hover:underline focus:ring-primary/50",
      },
      size: {
        default: "text-lg px-8   py-5 has-[>svg]:px-10",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
