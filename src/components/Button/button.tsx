'use client'

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 touch-manipulation [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-soft-teal text-[var(--black-light)] hover:bg-[#b8d9e0] shadow-[0_2px_8px_rgba(203,228,234,0.3)] cursor-pointer",
        secondary: "bg-[#e9c5bb] text-[var(--black-light)] hover:bg-[#e2b8ab] shadow-[0_2px_8px_rgba(233,197,187,0.3)] cursor-pointer",
        outline: "border-2 border-soft-teal bg-transparent text-[var(--black-light)] hover:bg-soft-teal/10 cursor-pointer",
        ghost: "text-[var(--black-light)] hover:bg-soft-teal/10 cursor-pointer",
        link: "text-[var(--black-light)] underline-offset-4 hover:underline cursor-pointer",
        destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm cursor-pointer",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-lg rounded-2xl",
        xl: "h-16 px-8 py-6 text-base rounded-2xl",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  loadingText?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    fullWidth, 
    asChild = false, 
    isLoading = false,
    loadingText,
    disabled,
    children,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? (
          <>
            <svg 
              className="h-5 w-5 animate-spin" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            {loadingText || 'Carregando...'}
          </>
        ) : children}
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }

