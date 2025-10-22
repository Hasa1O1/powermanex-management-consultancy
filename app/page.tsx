import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Section, SectionHeading, SectionLarge } from '@/components/ui/section'
import { CTABand } from '@/components/ui/cta-band'
import { Stat } from '@/components/ui/stat'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  FileText, 
  Building, 
  Shield, 
  FileCheck, 
  CheckCircle,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'
import Link from 'next/link'
import { createWhatsAppLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Power your business with comprehensive HR and compliance solutions. Where strength meets strategy - trusted by Zambian businesses for reliable, compliant business services.',
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-white to-gray-50 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="outline" className="mb-6 inline-flex items-center gap-2">
                <Award className="w-4 h-4" />
                PACRA & ZRA Registered
              </Badge>
              
              <h1 className="text-hero font-bold font-heading text-brand-black mb-6 leading-tight">
                Where strength meets strategy.
              </h1>
              
              <p className="text-hero-sub text-brand-gray mb-8 max-w-2xl">
                Power your business with comprehensive HR and compliance solutions. 
                We provide tailored, cost-effective services that ensure your business 
                operates smoothly and stays compliant with Zambian regulations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="text-lg px-8 py-4">
                  <Link href="#contact">Get Started</Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-4">
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-brand-gray">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Ministry of Labour Attested</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Transparent Pricing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Zambia Focused</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-red/10 to-brand-blue/10 rounded-3xl p-8">
                <div className="relative">
                  {/* 3D Character Image */}
                  <div className="relative w-full h-96 flex items-center justify-center">
                    <Image
                      src="/MANEX ANIMATION.png"
                      alt="Power'manex Management Consultancy - Professional Business Solutions"
                      width={400}
                      height={400}
                      className="object-contain max-w-full max-h-full"
                      priority
                    />
                  </div>
                  
                  {/* Floating contact info overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-brand-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Phone className="w-4 h-4 text-brand-red" />
                        <span className="font-semibold text-sm">+260 97 3737563</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4 text-brand-red" />
                        <span className="text-xs text-brand-gray">powermanex31@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <Section id="services" className="bg-gray-50">
        <SectionHeading 
          title="Our Services" 
          subtitle="Comprehensive business solutions tailored for Zambian companies"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                <Users className="w-6 h-6 text-brand-red" />
              </div>
              <CardTitle>Human Resource Services</CardTitle>
              <CardDescription>
                Complete HR solutions from recruitment to compliance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-brand-gray">
                <li>• Talent Sourcing & Recruitment</li>
                <li>• Executive Search & Headhunting</li>
                <li>• Employee Relations & HR Consulting</li>
                <li>• Background Checks & Verification</li>
                <li>• Labour Mediation & Grievance Resolution</li>
              </ul>
              <Button asChild variant="link" className="mt-4 p-0">
                <Link href="/services#hr-services">Learn More →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                <Building className="w-6 h-6 text-brand-red" />
              </div>
              <CardTitle>Company Registration</CardTitle>
              <CardDescription>
                Seamless business registration and setup
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-brand-gray">
                <li>• Sole Proprietorship</li>
                <li>• Partnership Registration</li>
                <li>• Limited Liability Company</li>
                <li>• Corporation Setup</li>
                <li>• Guided Compliance Process</li>
              </ul>
              <Button asChild variant="link" className="mt-4 p-0">
                <Link href="/services#company-registration">Learn More →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                <FileText className="w-6 h-6 text-brand-red" />
              </div>
              <CardTitle>Document Preparation</CardTitle>
              <CardDescription>
                Professional business documents and policies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-brand-gray">
                <li>• Company Profile Development</li>
                <li>• Business Strategic Planning</li>
                <li>• Contract Drafting</li>
                <li>• Company Policy Creation</li>
                <li>• Organizational Structure Design</li>
              </ul>
              <Button asChild variant="link" className="mt-4 p-0">
                <Link href="/services#document-preparation">Learn More →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                <Shield className="w-6 h-6 text-brand-red" />
              </div>
              <CardTitle>Statutory Compliance</CardTitle>
              <CardDescription>
                Stay compliant with all regulatory requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-brand-gray">
                <li>• PACRA Compliance</li>
                <li>• ZRA Tax Registration</li>
                <li>• NHIMA Registration</li>
                <li>• NAPSA Compliance</li>
                <li>• Labour Code Compliance</li>
              </ul>
              <Button asChild variant="link" className="mt-4 p-0">
                <Link href="/services#statutory-compliance">Learn More →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                <FileCheck className="w-6 h-6 text-brand-red" />
              </div>
              <CardTitle>License Registration</CardTitle>
              <CardDescription>
                Professional license acquisition and renewal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-brand-gray">
                <li>• Money Lender Licenses</li>
                <li>• Mining Licenses (All Types)</li>
                <li>• Prospecting Permits</li>
                <li>• Mineral Trading Permits</li>
                <li>• License Renewal Services</li>
              </ul>
              <Button asChild variant="link" className="mt-4 p-0">
                <Link href="/services#license-registration">Learn More →</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Why Choose Power'manex */}
      <Section id="why-choose-us">
        <SectionHeading 
          title="Why Choose Power'manex" 
          subtitle="Trusted by businesses across Zambia for reliable, compliant solutions"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Ministry of Labour Attested</h3>
            <p className="text-brand-gray">
              All our HR documents are attested by the Ministry of Labour, ensuring full compliance and legal validity.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
            <p className="text-brand-gray">
              No hidden costs. One-time service fees or clearly stated documentation fees with complete transparency.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Field-Based Teams</h3>
            <p className="text-brand-gray">
              Dedicated teams ready to support your business with inspection-ready documentation and compliance support.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Efficient Client Management</h3>
            <p className="text-brand-gray">
              Proactive client load management with real-time updates to ensure quality service for all clients.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileCheck className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Free Sign-Up</h3>
            <p className="text-brand-gray">
              Absolutely free sign-up for employers with background-checked staff delivered at no cost to you.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Zambia Focused</h3>
            <p className="text-brand-gray">
              Specialized knowledge of Zambian business regulations, labour laws, and compliance requirements.
            </p>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-gray-50" id="process">
        <SectionHeading 
          title="Get Started in 3 Steps" 
          subtitle="Simple, straightforward process to get your business compliant"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-red text-brand-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-xl font-semibold mb-4">Fill Onboarding Form</h3>
            <p className="text-brand-gray">
              Complete our simple registration form with your business details and service requirements.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-red text-brand-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-xl font-semibold mb-4">Attach Required Documents</h3>
            <p className="text-brand-gray">
              Upload your Certificate of Incorporation, Tax Registration Certificate, and other required documents.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-red text-brand-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-xl font-semibold mb-4">Submit & We Handle Everything</h3>
            <p className="text-brand-gray">
              Submit your application and we take care of all the paperwork, compliance, and follow-ups.
            </p>
          </div>
        </div>
      </Section>

      {/* Client Roster */}
      <Section id="clients">
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

      {/* Testimonial */}
      <Section className="bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl lg:text-3xl font-medium italic mb-8">
            "We are managers. Let us take care of the details so you can focus on your core priorities."
          </blockquote>
          <div className="text-brand-gray-light">
            <div className="font-semibold text-brand-white">Adson Sakala</div>
            <div>CEO, Power'manex Management Consultancy</div>
          </div>
        </div>
      </Section>

      {/* CTA Band */}
      <CTABand
        title="Power Your Business with Peace of Mind"
        description="Power'manex ensures compliance, smooth operations, and stress-free inspections so you can focus on growing your business."
        primaryAction={{
          text: "Get Started Today",
          href: "/contact"
        }}
        secondaryAction={{
          text: "View Our Services",
          href: "/services"
        }}
      />
    </>
  )
}
