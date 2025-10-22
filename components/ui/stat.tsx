import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface StatProps {
  value: string
  label: string
  description?: string
  icon?: ReactNode
  className?: string
}

export function Stat({ value, label, description, icon, className }: StatProps) {
  return (
    <div className={cn('text-center', className)}>
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center">
            {icon}
          </div>
        </div>
      )}
      <div className="text-3xl lg:text-4xl font-bold font-heading text-brand-black mb-2">
        {value}
      </div>
      <div className="text-lg font-semibold text-brand-red mb-2">
        {label}
      </div>
      {description && (
        <p className="text-brand-gray text-sm">
          {description}
        </p>
      )}
    </div>
  )
}
