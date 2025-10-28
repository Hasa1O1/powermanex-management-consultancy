import { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/ui/section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ContactForm from '@/components/forms/contact-form'
import { 
  MapPin, 
  Clock
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Power\'manex Management Consultancy. Contact us for professional HR documents, labour mediation, employee sourcing, training, inspection support, and work permits. Located in Lusaka, Zambia.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brand-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Get in Touch
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold font-heading text-brand-black mb-6">
              Let&apos;s Work Together
            </h1>
            
            <p className="text-xl text-brand-gray mb-8 leading-relaxed">
              Ready to power your business with our comprehensive management solutions? 
              Contact us today and let&apos;s discuss how we can help your business succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Section>
        <SectionHeading 
          title="Send us a Message" 
          subtitle="Fill out the form below and we'll get back to you within 24 hours"
          centered
        />
        
        <ContactForm />
      </Section>

      {/* Location & Contact Info */}
      <Section className="bg-gray-50">
        <SectionHeading 
          title="Our Location" 
          subtitle="Visit us at our office in Lusaka"
          centered
        />
        
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-red" />
                Our Address
              </CardTitle>
              <CardDescription>
                Visit us at our office
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold">Plot No. 156A Washama Road</div>
                  <div className="font-semibold">Villa Elisabeth</div>
                  <div className="text-brand-gray">Lusaka, Zambia</div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-brand-gray">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Fri: 8AM-6PM, Sat: 9AM-2PM</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  )
}
