'use client'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface PrimaryButtonProps extends React.ComponentProps<typeof Button> {
  isLoading?: boolean
  loadingText?: string
}

export function PrimaryButton({ 
  children, 
  isLoading = false, 
  loadingText,
  className,
  disabled,
  ...props 
}: PrimaryButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Button
      disabled={isLoading || disabled}
      className={cn(
        "w-full p-6 rounded-2xl font-semibold text-base transition-all duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      style={{
        backgroundColor: isHovered && !isLoading && !disabled ? '#b8d9e0' : '#cbe4ea',
        color: 'var(--black-light)',
        boxShadow: '0 2px 8px rgba(203, 228, 234, 0.3)'
      }}
      onMouseEnter={() => !isLoading && !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {isLoading ? (loadingText || 'Carregando...') : children}
    </Button>
  )
}

