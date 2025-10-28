import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { createWhatsAppLink, createMailtoLink } from '@/lib/utils'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-black text-brand-white">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/POWER'MANEX LOGO.jpeg" 
                alt="Power'manex Management Consultancy Logo"
                width={180}
                height={60}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-brand-gray-light mb-6 max-w-md">
              Where strength meets strategy. We provide comprehensive business & HR solutions 
              tailored for Zambian businesses with a client-centric approach and experienced team.
            </p>
            
            {/* Contact Methods */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="secondary" className="bg-brand-white text-brand-black hover:bg-brand-gray-light">
                <a href={createWhatsAppLink('+260973737563', "Hello! I'm interested in Power'manex services.")}>
                  WhatsApp Us
                </a>
              </Button>
              <Button asChild variant="outline" className="border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black">
                <a href={createMailtoLink('powermanex31@gmail.com', 'Inquiry about Power\'manex Services')}>
                  Email Us
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-brand-gray-light hover:text-brand-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-brand-gray-light hover:text-brand-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-gray-light hover:text-brand-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:+260973737563" 
                    className="text-brand-gray-light hover:text-brand-white transition-colors block"
                  >
                    +260 97 3737563
                  </a>
                  <a 
                    href="tel:+260770749195" 
                    className="text-brand-gray-light hover:text-brand-white transition-colors block"
                  >
                    +260 770 749195
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                <a 
                  href={createMailtoLink('powermanex31@gmail.com')}
                  className="text-brand-gray-light hover:text-brand-white transition-colors"
                >
                  powermanex31@gmail.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                <div className="text-brand-gray-light">
                  <div>Findeco House, 10th Floor</div>
                  <div>Lusaka, Zambia</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brand-gray-dark mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-brand-gray-light text-sm">
              <p>&copy; {currentYear} Power&apos;manex Management Consultancy. All rights reserved.</p>
              <p className="mt-1">Registered in Zambia • PACRA No. 320230094748</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="http://www.pacra.org.zm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-gray-light hover:text-brand-white transition-colors flex items-center space-x-1"
              >
                <span>Verify on PACRA</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://www.zra.org.zm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-gray-light hover:text-brand-white transition-colors flex items-center space-x-1"
              >
                <span>Verify on ZRA</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
