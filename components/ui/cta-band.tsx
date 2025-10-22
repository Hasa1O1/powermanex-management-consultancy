import { ReactNode } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CTABandProps {
  title: string
  description: string
  primaryAction: {
    text: string
    href: string
  }
  secondaryAction?: {
    text: string
    href: string
  }
  variant?: 'default' | 'inverted'
  className?: string
}

export function CTABand({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = 'default',
  className
}: CTABandProps) {
  const isInverted = variant === 'inverted'
  
  return (
    <section className={cn(
      'py-16 lg:py-20',
      isInverted ? 'bg-brand-black text-brand-white' : 'bg-brand-white text-brand-black',
      className
    )}>
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6">
            {title}
          </h2>
          <p className="text-lg lg:text-xl mb-8 text-brand-gray">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={primaryAction.href}>
                {primaryAction.text}
              </Link>
            </Button>
            {secondaryAction && (
              <Button asChild variant={isInverted ? 'secondary' : 'outline'} size="lg">
                <Link href={secondaryAction.href}>
                  {secondaryAction.text}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
