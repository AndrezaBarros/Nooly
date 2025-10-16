'use client'

import * as React from "react"
import { Button, type ButtonProps } from "./button"
import { cn } from "@/lib/utils"

interface SecondaryButtonProps extends Omit<ButtonProps, 'variant' | 'size'> {
  isLoading?: boolean
  loadingText?: string
}

export function SecondaryButton({ 
  children, 
  isLoading = false, 
  loadingText,
  className,
  ...props 
}: SecondaryButtonProps) {
  return (
    <Button
      variant="secondary"
      size="xl"
      fullWidth
      isLoading={isLoading}
      loadingText={loadingText}
      className={cn(className)}
      {...props}
    >
      {children}
    </Button>
  )
}

