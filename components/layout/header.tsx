'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn, createWhatsAppLink, createMailtoLink } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-brand-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/POWER'MANEX LOGO.jpeg" 
              alt="Power'manex Management Consultancy Logo"
              width={180}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand-red',
                  pathname === item.href
                    ? 'text-brand-red'
                    : 'text-brand-black'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-brand-gray">
              <Phone className="w-4 h-4" />
              <span>+260 97 3737563</span>
            </div>
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-black hover:text-brand-red hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-red"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-brand-white border-t border-gray-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                    pathname === item.href
                      ? 'text-brand-red bg-red-50'
                      : 'text-brand-black hover:text-brand-red hover:bg-gray-50'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="px-3 py-2 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-brand-gray">
                  <Phone className="w-4 h-4" />
                  <a 
                    href="tel:+260973737563"
                    className="hover:text-brand-red transition-colors"
                  >
                    +260 97 3737563
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm text-brand-gray">
                  <Mail className="w-4 h-4" />
                  <a 
                    href={createMailtoLink('powermanex31@gmail.com')}
                    className="hover:text-brand-red transition-colors"
                  >
                    powermanex31@gmail.com
                  </a>
                </div>
                <Button asChild className="w-full mt-3">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
