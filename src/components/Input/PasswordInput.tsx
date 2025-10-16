'use client'

import * as React from "react"
import { Input, type InputProps } from "./input"
import { cn } from "@/lib/utils"

export interface PasswordInputProps extends Omit<InputProps, 'variant' | 'inputSize' | 'type'> {
  label?: string
  error?: string
  helperText?: string
  showToggle?: boolean
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, label, error, helperText, showToggle = true, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        type="password"
        label={label}
        error={error}
        helperText={helperText}
        showPasswordToggle={showToggle}
        variant="default"
        inputSize="default"
        className={cn(className)}
        {...props}
      />
    )
  }
)

PasswordInput.displayName = "PasswordInput"
