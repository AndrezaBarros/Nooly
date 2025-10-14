'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, type = "text", label, error, helperText, id, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const inputId = id || React.useId()

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium mb-2"
            style={{ color: '#000000' }}
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          type={type}
          ref={ref}
          className={cn(
            "w-full px-4 py-3.5 rounded-xl border transition-all duration-200 text-base focus:outline-none",
            "placeholder:text-gray/60",
            error && "border-red-500",
            className
          )}
          style={{
            borderColor: error ? '#ef4444' : (isFocused ? '#cbe4ea' : '#e0e0e0'),
            backgroundColor: isFocused ? '#ffffff' : '#f8f9fa',
            color: '#000000'
          }}
          onFocus={(e) => {
            setIsFocused(true)
            props.onFocus?.(e)
          }}
          onBlur={(e) => {
            setIsFocused(false)
            props.onBlur?.(e)
          }}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-red-500">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-2 text-sm" style={{ color: '#657275' }}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

TextInput.displayName = "TextInput"
