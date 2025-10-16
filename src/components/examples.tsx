// Example usage of Button and Input components
// This file demonstrates all available variants and props

import { Button } from './Button/button'
import { PrimaryButton, SecondaryButton } from './Button'
import { Input, TextInput, PasswordInput } from './Input'

// ========== BUTTON EXAMPLES ==========

export function ButtonExamples() {
  return (
    <div className="space-y-4 p-8">
      <h2 className="text-2xl font-bold">Button Examples</h2>
      
      {/* Using the base Button component with variants */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Base Button - All Variants</h3>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button variant="link">Link Button</Button>
        <Button variant="destructive">Destructive Button</Button>
      </div>

      {/* Different sizes */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Button Sizes</h3>
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
        <Button size="icon">🚀</Button>
      </div>

      {/* Full width */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Full Width</h3>
        <Button fullWidth>Full Width Button</Button>
      </div>

      {/* Loading state */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Loading State</h3>
        <Button isLoading loadingText="Processing...">Submit</Button>
      </div>

      {/* Using wrapper components (backward compatible) */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Wrapper Components</h3>
        <PrimaryButton>Primary Button (Wrapper)</PrimaryButton>
        <SecondaryButton>Secondary Button (Wrapper)</SecondaryButton>
      </div>
    </div>
  )
}

// ========== INPUT EXAMPLES ==========

export function InputExamples() {
  return (
    <div className="space-y-4 p-8">
      <h2 className="text-2xl font-bold">Input Examples</h2>

      {/* Base Input with variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Base Input - All Variants</h3>
        
        <Input 
          variant="default" 
          label="Default Input"
          placeholder="Enter text..."
        />
        
        <Input 
          variant="outlined" 
          label="Outlined Input"
          placeholder="Enter text..."
        />
        
        <Input 
          variant="filled" 
          label="Filled Input"
          placeholder="Enter text..."
        />
      </div>

      {/* Different sizes */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Input Sizes</h3>
        <Input inputSize="sm" label="Small" placeholder="Small input..." />
        <Input inputSize="default" label="Default" placeholder="Default input..." />
        <Input inputSize="lg" label="Large" placeholder="Large input..." />
      </div>

      {/* With error */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Error</h3>
        <Input 
          label="Email"
          placeholder="your@email.com"
          error="Invalid email address"
        />
      </div>

      {/* With helper text */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Helper Text</h3>
        <Input 
          label="Username"
          placeholder="johndoe"
          helperText="Choose a unique username"
        />
      </div>

      {/* Password input with toggle */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Password Input</h3>
        <Input 
          type="password"
          label="Password"
          placeholder="••••••••"
          showPasswordToggle
        />
      </div>

      {/* Using wrapper components (backward compatible) */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Wrapper Components</h3>
        
        <TextInput 
          label="Text Input (Wrapper)"
          placeholder="Enter text..."
        />
        
        <PasswordInput 
          label="Password (Wrapper)"
          placeholder="••••••••"
        />
      </div>

      {/* Different input types */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Different Input Types</h3>
        <Input type="email" label="Email" placeholder="your@email.com" />
        <Input type="number" label="Age" placeholder="25" />
        <Input type="tel" label="Phone" placeholder="+1 (555) 000-0000" />
        <Input type="date" label="Birth Date" />
      </div>
    </div>
  )
}

// ========== USAGE IN FORMS ==========

export function FormExample() {
  return (
    <form className="space-y-4 p-8 max-w-md">
      <h2 className="text-2xl font-bold">Form Example</h2>
      
      <TextInput
        label="Full Name"
        placeholder="John Doe"
        required
      />
      
      <Input
        type="email"
        label="Email"
        placeholder="john@example.com"
        helperText="We'll never share your email"
        required
      />
      
      <PasswordInput
        label="Password"
        placeholder="••••••••"
        helperText="Must be at least 8 characters"
        required
      />
      
      <div className="flex gap-2">
        <Button variant="outline" fullWidth type="button">
          Cancel
        </Button>
        <PrimaryButton type="submit">
          Create Account
        </PrimaryButton>
      </div>
    </form>
  )
}

