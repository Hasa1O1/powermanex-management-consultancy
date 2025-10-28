import { Metadata } from 'next'
import { Section, SectionHeading, SectionLarge } from '@/components/ui/section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
  Users, 
  Award, 
  CheckCircle,
  ExternalLink,
  FileText,
  Building
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Power\'manex Management Consultancy - a dynamic firm established in 2023, providing comprehensive business solutions with a client-centric approach and experienced team.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brand-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 inline-flex items-center gap-2">
              <Building className="w-4 h-4" />
              Established 2023
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold font-heading text-brand-black mb-6">
              About Power&apos;manex
            </h1>
            
            <p className="text-xl text-brand-gray mb-8 leading-relaxed">
              Power&apos;manex Management Consultancy is a dynamic firm specialized in providing 
              comprehensive business solutions. Established in 2023, we offer tailored, 
              cost-effective solutions with a client-centric approach and experienced team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Work With Us</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading 
              title="Company Profile" 
              subtitle="Your trusted partner for business success"
            />
            
            <div className="space-y-6">
              <p className="text-lg text-brand-gray leading-relaxed">
                From our early days, we&apos;ve been providing reliable service to our clientele. 
                We&apos;ve had the honor of being the firm of choice for corporations across Zambia, 
                helping them navigate complex regulatory requirements and achieve sustainable growth.
              </p>
              
              <p className="text-lg text-brand-gray leading-relaxed">
                Our mission is to empower Zambian businesses through strategic management solutions, 
                ensuring compliance, efficiency, and growth. We combine local expertise with 
                international best practices to deliver exceptional results.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0" />
                  <span className="font-medium">Client-Centric Approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0" />
                  <span className="font-medium">Experienced Team</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0" />
                  <span className="font-medium">Tailored Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0" />
                  <span className="font-medium">Cost-Effective Services</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-brand-red/10 to-brand-blue/10 rounded-3xl p-8">
              <div className="bg-brand-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-center">Our Values</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-brand-red mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Integrity</div>
                      <div className="text-sm text-brand-gray">Transparent, honest, and ethical business practices</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-brand-red mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Excellence</div>
                      <div className="text-sm text-brand-gray">Commitment to delivering superior quality services</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-brand-red mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Innovation</div>
                      <div className="text-sm text-brand-gray">Continuous improvement and modern solutions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Compliance & Trust */}
      <Section className="bg-gray-50">
        <SectionHeading 
          title="Compliance & Trust" 
          subtitle="Fully registered and compliant with Zambian regulations"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-brand-red" />
              </div>
              <CardTitle>PACRA Registered</CardTitle>
              <CardDescription>
                Officially registered with the Patents and Companies Registration Agency
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div><strong>Registration No:</strong> 320230094748</div>
                <div><strong>Date:</strong> 3rd November 2023</div>
                <div><strong>Status:</strong> Active</div>
              </div>
              <Button asChild variant="link" className="mt-4 p-0">
                <a 
                  href="http://www.pacra.org.zm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  Verify on PACRA <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-brand-red" />
              </div>
              <CardTitle>ZRA Tax Clearance</CardTitle>
              <CardDescription>
                Valid tax clearance certificate from Zambia Revenue Authority
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div><strong>TPIN:</strong> 2770334291</div>
                <div><strong>Certificate No:</strong> 2585558257</div>
                <div><strong>Valid Until:</strong> 31/12/2025</div>
              </div>
              <Button asChild variant="link" className="mt-4 p-0">
                <a 
                  href="https://www.zra.org.zm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  Verify on ZRA <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-brand-red" />
              </div>
              <CardTitle>Employment Agency License</CardTitle>
              <CardDescription>
                Licensed employment agency by the Labour Commissioner
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div><strong>License No:</strong> 37</div>
                <div><strong>Issued:</strong> 5th May 2025</div>
                <div><strong>Expires:</strong> 4th May 2028</div>
              </div>
              <Button asChild variant="link" className="mt-4 p-0">
                <a 
                  href="/contact" 
                  className="flex items-center gap-1"
                >
                  View Certificate
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Leadership */}
      <Section>
        <SectionHeading 
          title="Leadership" 
          subtitle="Meet our CEO and leadership team"
          centered
        />
        
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-brand-gray" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Adson Sakala</h3>
                <p className="text-brand-red font-medium mb-4">Chief Executive Officer</p>
                <p className="text-brand-gray leading-relaxed mb-6">
                  Adson Sakala leads Power&apos;manex with a vision of empowering Zambian businesses 
                  through strategic management solutions. With extensive experience in business 
                  development and regulatory compliance, Adson ensures that every client receives 
                  exceptional service tailored to their specific needs.
                </p>
                <blockquote className="text-lg italic text-brand-gray border-l-4 border-brand-red pl-4">
                  "We are managers. Let us take care of the details so you can focus on your core priorities."
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Client Roster */}
      <Section className="bg-gray-50" id="clients">
        <SectionHeading 
          title="Our Client Roster" 
          subtitle="Trusted by businesses across Zambia since our establishment"
          centered
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 opacity-60">
          <div className="bg-gray-100 rounded-lg p-6 h-24 flex items-center justify-center">
            <span className="text-sm font-medium text-brand-gray">DALINEYA SOLUTIONS LTD</span>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 h-24 flex items-center justify-center">
            <span className="text-sm font-medium text-brand-gray">PLANTER'S SHELTER</span>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 h-24 flex items-center justify-center">
            <span className="text-sm font-medium text-brand-gray">G.C.S FINANCIAL</span>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 h-24 flex items-center justify-center">
            <span className="text-sm font-medium text-brand-gray">DOBLEXIL DEALERS</span>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 h-24 flex items-center justify-center">
            <span className="text-sm font-medium text-brand-gray">IGROW FARM</span>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-brand-gray-light mb-8">
            Let&apos;s discuss how Power&apos;manex can help your business achieve its goals 
            with our comprehensive management solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-white text-brand-black hover:bg-brand-gray-light">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
