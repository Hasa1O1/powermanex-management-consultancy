import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Section, SectionHeading } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  FileText, 
  Shield, 
  CheckCircle,
  Award,
  Phone,
  Mail,
  MapPin,
  Gavel,
  GraduationCap,
  Briefcase,
  FileCheck,
  Building
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
          subtitle="Professional HR and legal solutions tailored for Zambian businesses"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                <FileText className="w-6 h-6 text-brand-red" />
              </div>
              <CardTitle>Legal HR Documents</CardTitle>
              <CardDescription>
                Professionally drafted contracts, warning letters, and HR policies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="link" className="mt-4 p-0">
                <Link href="/services#legal-hr-documents">Learn More →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                <Gavel className="w-6 h-6 text-brand-red" />
              </div>
              <CardTitle>Labour Mediation</CardTitle>
              <CardDescription>
                Fair, compliant resolution of workplace disputes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="link" className="mt-4 p-0">
                <Link href="/services#labour-mediation">Learn More →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                <Users className="w-6 h-6 text-brand-red" />
              </div>
              <CardTitle>Employee Sourcing</CardTitle>
              <CardDescription>
                Free to Employers - Background-checked staff at no cost
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="link" className="mt-4 p-0">
                <Link href="/services#employee-sourcing">Learn More →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                <GraduationCap className="w-6 h-6 text-brand-red" />
              </div>
              <CardTitle>Workplace Training</CardTitle>
              <CardDescription>
                Custom sessions on compliance, performance, and HR systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="link" className="mt-4 p-0">
                <Link href="/services#workplace-training">Learn More →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                <Shield className="w-6 h-6 text-brand-red" />
              </div>
              <CardTitle>Labour Inspection Support</CardTitle>
              <CardDescription>
                Get inspection-ready. Zero penalties. Total peace of mind.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="link" className="mt-4 p-0">
                <Link href="/services#inspection-support">Learn More →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors">
                <Briefcase className="w-6 h-6 text-brand-red" />
              </div>
              <CardTitle>Expert Work Permits</CardTitle>
              <CardDescription>
                Fast-tracked, error-free processing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="link" className="mt-4 p-0">
                <Link href="/services#work-permits">Learn More →</Link>
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

    </>
  )
}
