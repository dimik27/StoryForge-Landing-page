import { cn } from '../../lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl border border-slate-200 shadow-card p-6',
        hover && 'transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5',
        className
      )}
    >
      {children}
    </div>
  )
}
