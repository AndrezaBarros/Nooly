'use client'

import * as React from "react"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  showToggle?: boolean
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, label, error, helperText, id, showToggle = true, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [showPassword, setShowPassword] = React.useState(false)
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
        <div className="relative">
          <input
            id={inputId}
            type={showPassword ? "text" : "password"}
            ref={ref}
            className={cn(
              "w-full px-4 py-3.5 rounded-xl border transition-all duration-200 text-base focus:outline-none",
              "placeholder:text-gray/60",
              showToggle && "pr-12",
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
          {showToggle && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors focus:outline-none"
              style={{ color: '#657275' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#000000'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#657275'
              }}
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          )}
        </div>
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

PasswordInput.displayName = "PasswordInput"
