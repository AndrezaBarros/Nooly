'use client'

import * as React from "react"
import { Input, type InputProps } from "./input"
import { cn } from "@/lib/utils"

export interface TextInputProps extends Omit<InputProps, 'variant' | 'inputSize' | 'showPasswordToggle'> {
  label?: string
  error?: string
  helperText?: string
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, type = "text", label, error, helperText, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        type={type}
        label={label}
        error={error}
        helperText={helperText}
        variant="default"
        inputSize="default"
        className={cn(className)}
        {...props}
      />
    )
  }
)

TextInput.displayName = "TextInput"
