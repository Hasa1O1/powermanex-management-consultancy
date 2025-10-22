import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface LogoCloudProps {
  children: ReactNode
  className?: string
}

export function LogoCloud({ children, className }: LogoCloudProps) {
  return (
    <div className={cn(
      'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 opacity-60',
      className
    )}>
      {children}
    </div>
  )
}

interface LogoItemProps {
  children: ReactNode
  className?: string
}

export function LogoItem({ children, className }: LogoItemProps) {
  return (
    <div className={cn(
      'bg-gray-100 rounded-lg p-6 h-24 flex items-center justify-center',
      className
    )}>
      {children}
    </div>
  )
}
