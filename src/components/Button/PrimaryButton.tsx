'use client'

import * as React from "react"
import { Button, type ButtonProps } from "./button"
import { cn } from "@/lib/utils"

interface PrimaryButtonProps extends Omit<ButtonProps, 'variant' | 'size'> {
  isLoading?: boolean
  loadingText?: string
}

export function PrimaryButton({ 
  children, 
  isLoading = false, 
  loadingText,
  className,
  ...props 
}: PrimaryButtonProps) {
  return (
    <Button
      variant="primary"
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

