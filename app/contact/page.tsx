import { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/ui/section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ContactForm from '@/components/forms/contact-form'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Download, 
  ExternalLink,
  FileText,
  Shield,
  Award
} from 'lucide-react'
import Link from 'next/link'
import { createWhatsAppLink, createMailtoLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Power\'manex Management Consultancy. Contact us for HR services, company registration, compliance, and business solutions. Located in Lusaka, Zambia.',
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
          title="Our Locations" 
          subtitle="Visit us at our offices in Lusaka"
          centered
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-red" />
                Mailing Address
              </CardTitle>
              <CardDescription>
                Primary correspondence address
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold">Findeco House, 10th Floor</div>
                  <div className="text-brand-gray">Lusaka, Zambia</div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-brand-gray">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Fri: 8AM-6PM, Sat: 9AM-2PM</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-red" />
                Office Address
              </CardTitle>
              <CardDescription>
                Physical office location
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
                  <span>By appointment only</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact Methods */}
      <Section>
        <SectionHeading 
          title="Contact Methods" 
          subtitle="Choose the way that works best for you"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-brand-red" />
              </div>
              <CardTitle>Phone & WhatsApp</CardTitle>
              <CardDescription>
                Call or message us directly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="font-semibold">+260 97 3737563</div>
                <div className="font-semibold">+260 770 749195</div>
                <Button asChild className="w-full">
                  <a href={createWhatsAppLink('+260973737563', "Hello! I'm interested in Power'manex services.")}>
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-brand-red" />
              </div>
              <CardTitle>Email</CardTitle>
              <CardDescription>
                Send us a detailed message
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="font-semibold">powermanex31@gmail.com</div>
                <div className="text-sm text-brand-gray">Response within 24 hours</div>
                <Button asChild variant="secondary" className="w-full">
                  <a href={createMailtoLink('powermanex31@gmail.com', 'Inquiry about Power\'manex Services')}>
                    Send Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-brand-red" />
              </div>
              <CardTitle>Visit Us</CardTitle>
              <CardDescription>
                Come to our office
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="font-semibold">Findeco House</div>
                <div className="text-sm text-brand-gray">10th Floor, Lusaka</div>
                <Button asChild variant="outline" className="w-full">
                  <Link href="#locations">
                    View Location
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Downloads & Certificates */}
      <Section className="bg-gray-50">
        <SectionHeading 
          title="Downloads & Certificates" 
          subtitle="Access our company documents and verification links"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-red" />
                Company Profile
              </CardTitle>
              <CardDescription>
                Download our company overview
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-brand-gray">
                  Comprehensive overview of our services, team, and capabilities.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/downloads/company-profile.pdf">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-red" />
                PACRA Certificate
              </CardTitle>
              <CardDescription>
                Business registration verification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-brand-gray">
                  Verify our business registration with PACRA.
                </p>
                <div className="space-y-2">
                  <Button asChild variant="outline" className="w-full">
                    <a href="/downloads/pacra-certificate.pdf">
                      <Download className="w-4 h-4 mr-2" />
                      Download Certificate
                    </a>
                  </Button>
                  <Button asChild variant="link" className="w-full">
                    <a href="http://www.pacra.org.zm" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify on PACRA
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-red" />
                ZRA Tax Clearance
              </CardTitle>
              <CardDescription>
                Tax compliance certificate
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-brand-gray">
                  Valid tax clearance certificate from ZRA.
                </p>
                <div className="space-y-2">
                  <Button asChild variant="outline" className="w-full">
                    <a href="/downloads/zra-clearance.pdf">
                      <Download className="w-4 h-4 mr-2" />
                      Download Certificate
                    </a>
                  </Button>
                  <Button asChild variant="link" className="w-full">
                    <a href="https://www.zra.org.zm" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify on ZRA
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Map Section */}
      <Section>
        <SectionHeading 
          title="Find Us" 
          subtitle="Our office location in Lusaka"
          centered
        />
        
        <Card>
          <CardContent className="p-0">
            <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-brand-gray mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map Coming Soon</h3>
                <p className="text-brand-gray">
                  Findeco House, 10th Floor<br />
                  Lusaka, Zambia
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* CTA Section */}
      <Section className="bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-brand-gray-light mb-8">
            Don&apos;t wait - let us help you with your business needs today. 
            Contact us now and take the first step towards business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-white text-brand-black hover:bg-brand-gray-light">
              <Link href="#contact-form">Send Message Now</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={createWhatsAppLink('+260973737563', "Hello! I'm interested in Power'manex services.")}>
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
