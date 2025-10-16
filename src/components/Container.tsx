import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  as?: 'div' | 'main' | 'section' | 'article';
}

/**
 * Container component for consistent page layouts
 * 
 * @param children - Content to be wrapped in the container
 * @param className - Additional CSS classes to apply
 * @param maxWidth - Maximum width of container (default: 'xl')
 * @param padding - Padding size (default: 'md')
 * @param as - HTML element to render as (default: 'div')
 */
export default function Container({
  children,
  className = '',
  maxWidth = 'xl',
  padding = 'md',
  as: Component = 'div',
}: ContainerProps) {
  // Max width classes
  const maxWidthClasses = {
    sm: 'max-w-2xl',      // 672px
    md: 'max-w-4xl',      // 896px
    lg: 'max-w-6xl',      // 1152px
    xl: 'max-w-7xl',      // 1280px
    full: 'max-w-full',
  };

  // Responsive padding classes (mobile-first)
  const paddingClasses = {
    none: '',
    sm: 'px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8',
    md: 'px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12',
    lg: 'px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-16 lg:py-16',
  };

  return (
    <Component
      className={`
        w-full 
        mx-auto 
        ${maxWidthClasses[maxWidth]} 
        ${paddingClasses[padding]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </Component>
  );
}

