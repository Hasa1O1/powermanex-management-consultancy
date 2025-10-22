import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('section', className)}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  )
}

export function SectionLarge({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('section-lg', className)}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  )
}

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ title, subtitle, centered = false, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 lg:mb-16', centered && 'text-center', className)}>
      <h2 className="text-3xl lg:text-4xl font-bold font-heading text-brand-black mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-brand-gray max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('container-custom', className)}>
      {children}
    </div>
  )
}
