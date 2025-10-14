'use client'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface SecondaryButtonProps extends React.ComponentProps<typeof Button> {
  isLoading?: boolean
  loadingText?: string
}

export function SecondaryButton({ 
  children, 
  isLoading = false, 
  loadingText,
  className,
  disabled,
  ...props 
}: SecondaryButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Button
      disabled={isLoading || disabled}
      className={cn(
        "w-full p-6 rounded-2xl font-semibold text-base transition-all duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation",
        className
      )}
      style={{
        backgroundColor: isHovered && !isLoading && !disabled ? '#e2b8ab' : '#e9c5bb',
        color: 'var(--black-light)',
        minHeight: '48px',
        boxShadow: '0 2px 8px rgba(233, 197, 187, 0.3)'
      }}
      onMouseEnter={() => !isLoading && !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {isLoading ? (loadingText || 'Carregando...') : children}
    </Button>
  )
}

