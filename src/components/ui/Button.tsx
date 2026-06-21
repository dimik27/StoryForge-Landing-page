import React from 'react'
import { cn } from '../../lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap',
        variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm active:scale-[0.98]',
        variant === 'secondary' && 'bg-white text-slate-800 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm',
        variant === 'ghost' && 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
        variant === 'outline' && 'border border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300',
        size === 'sm' && 'h-8 px-3 text-sm',
        size === 'md' && 'h-10 px-5 text-sm',
        size === 'lg' && 'h-12 px-7 text-base',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
