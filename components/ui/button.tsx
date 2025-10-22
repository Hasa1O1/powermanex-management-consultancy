import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-brand-red text-brand-white hover:bg-brand-red-hover active:bg-brand-red-active focus-visible:ring-brand-red",
        secondary: "border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-white focus-visible:ring-brand-black",
        subtle: "text-brand-blue hover:underline underline-offset-4 focus-visible:ring-brand-blue",
        outline: "border border-brand-gray text-brand-gray hover:bg-brand-gray hover:text-brand-white focus-visible:ring-brand-gray",
        ghost: "hover:bg-brand-gray-light hover:text-brand-black focus-visible:ring-brand-gray",
        link: "text-brand-red underline-offset-4 hover:underline focus-visible:ring-brand-red",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 rounded-lg px-10 text-base",
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
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
