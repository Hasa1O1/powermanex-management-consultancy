import { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/ui/section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Building, 
  FileText, 
  Shield, 
  FileCheck,
  CheckCircle,
  Clock,
  DollarSign,
  Phone
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive business solutions including HR services, company registration, document preparation, statutory compliance, and license registration. Tailored for Zambian businesses.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brand-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Comprehensive Business Solutions
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold font-heading text-brand-black mb-6">
              Our Services
            </h1>
            
            <p className="text-xl text-brand-gray mb-8 leading-relaxed">
              From HR compliance to business registration, we provide end-to-end solutions 
              that ensure your business operates smoothly and stays compliant with Zambian regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Button asChild variant="outline" size="sm">
              <a href="#hr-services">HR Services</a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="#company-registration">Registration</a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="#document-preparation">Documents</a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="#statutory-compliance">Compliance</a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="#license-registration">Licenses</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Human Resource Services */}
      <Section id="hr-services">
        <SectionHeading 
          title="Human Resource Services" 
          subtitle="Complete HR solutions from recruitment to compliance"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Our HR Expertise</h3>
            <p className="text-lg text-brand-gray mb-8 leading-relaxed">
              We provide comprehensive human resource services designed to help your business 
              attract, retain, and manage talent effectively while ensuring full compliance 
              with Zambian labour laws.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Talent Sourcing & Recruitment</h4>
                  <p className="text-brand-gray">Find the right candidates for your business needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Executive Search & Headhunting</h4>
                  <p className="text-brand-gray">Specialized recruitment for senior positions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Temporary & Contract Staffing</h4>
                  <p className="text-brand-gray">Flexible staffing solutions for your business</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Employee Relations Service</h4>
                  <p className="text-brand-gray">Maintain positive workplace relationships</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">HR Consulting</h4>
                  <p className="text-brand-gray">Strategic HR advice and implementation</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-brand-red" />
                  Additional HR Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-red" />
                    <span>Labour Consultancy Services</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-red" />
                    <span>Grievance Resolution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-red" />
                    <span>Background Checks & Verification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-red" />
                    <span>Employer Branding & Recruitment Marketing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-red" />
                    <span>Onboarding Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-red" />
                    <span>Market Research & Salary Benchmarking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <div className="flex items-center gap-4 p-4 bg-brand-red/10 rounded-lg">
              <Clock className="w-6 h-6 text-brand-red" />
              <div>
                <div className="font-semibold">Typical Timeline</div>
                <div className="text-sm text-brand-gray">2-4 weeks for most HR services</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Company Registration */}
      <Section id="company-registration" className="bg-gray-50">
        <SectionHeading 
          title="Company & Business Registration" 
          subtitle="Seamless business setup and registration services"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-brand-red" />
                  Business Types We Register
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border">
                    <h4 className="font-semibold mb-2">Sole Proprietorship</h4>
                    <p className="text-sm text-brand-gray">Individual business ownership with full control</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border">
                    <h4 className="font-semibold mb-2">Partnership</h4>
                    <p className="text-sm text-brand-gray">Business owned by two or more partners</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border">
                    <h4 className="font-semibold mb-2">Limited Liability Company</h4>
                    <p className="text-sm text-brand-gray">Popular choice with limited liability protection</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border">
                    <h4 className="font-semibold mb-2">Corporation</h4>
                    <p className="text-sm text-brand-gray">Separate legal entity with shareholders</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Registration Process</h3>
            <p className="text-lg text-brand-gray mb-8 leading-relaxed">
              We assist entrepreneurs in the process of registering their businesses. Whether 
              it&apos;s a sole proprietorship, partnership, limited liability company, or corporation, 
              our experts will guide you through the legal and administrative requirements, 
              ensuring a smooth and compliant registration process.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Business Name Search & Reservation</h4>
                  <p className="text-brand-gray">Ensure your chosen name is available and compliant</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">Document Preparation</h4>
                  <p className="text-brand-gray">Prepare all required legal documents and forms</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">PACRA Registration</h4>
                  <p className="text-brand-gray">Submit and process with Patents and Companies Registration Agency</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold">Post-Registration Setup</h4>
                  <p className="text-brand-gray">Tax registration, bank account setup, and compliance guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Document Preparation */}
      <Section id="document-preparation">
        <SectionHeading 
          title="Company Documents Preparation" 
          subtitle="Professional business documents and strategic planning"
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-red" />
                Strategic Planning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Company Profile Development</li>
                <li>• Business Strategic Planning</li>
                <li>• Business Planning Documents</li>
                <li>• Business Proposal Drafting</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-red" />
                Legal Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Contract Drafting</li>
                <li>• Company Policy Drafting</li>
                <li>• HR Policy Development</li>
                <li>• Terms & Conditions</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5 text-brand-red" />
                Organizational
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Organizational Structure Creation</li>
                <li>• Job Descriptions</li>
                <li>• Standard Operating Procedures</li>
                <li>• Employee Handbooks</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Statutory Compliance */}
      <Section id="statutory-compliance" className="bg-gray-50">
        <SectionHeading 
          title="Statutory Compliance" 
          subtitle="Stay compliant with all regulatory requirements"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="w-5 h-5 text-brand-red" />
                PACRA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-brand-gray mb-3">
                Patents and Companies Registration Agency compliance
              </p>
              <Badge variant="outline" className="text-xs">Company Registration</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileCheck className="w-5 h-5 text-brand-red" />
                ZRA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-brand-gray mb-3">
                Zambia Revenue Authority tax compliance
              </p>
              <Badge variant="outline" className="text-xs">Tax Registration</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="w-5 h-5 text-brand-red" />
                NHIMA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-brand-gray mb-3">
                National Health Insurance Management Authority
              </p>
              <Badge variant="outline" className="text-xs">Health Insurance</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Building className="w-5 h-5 text-brand-red" />
                NAPSA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-brand-gray mb-3">
                National Pension Scheme Authority compliance
              </p>
              <Badge variant="outline" className="text-xs">Pension Scheme</Badge>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* License Registration */}
      <Section id="license-registration">
        <SectionHeading 
          title="License Registration & Renewal Services" 
          subtitle="Professional license acquisition and renewal services"
        />
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Money Lender Licenses</h3>
            <p className="text-lg text-brand-gray mb-6">
              Ensuring compliance with the Financial Services Act for secure and legal lending operations.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Requirements</h4>
                <ul className="text-sm text-brand-gray space-y-1">
                  <li>• Minimum capital requirements</li>
                  <li>• Business plan and projections</li>
                  <li>• Compliance with Financial Services Act</li>
                  <li>• Regulatory approval process</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Mining Licenses</h3>
            <p className="text-lg text-brand-gray mb-6">
              Comprehensive mining license services for all types of mining operations.
            </p>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-3">License Types</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-red" />
                    <span>Prospecting License</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-red" />
                    <span>Mining License</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-red" />
                    <span>Mineral Processing License</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-red" />
                    <span>Mineral Trading Permit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-brand-gray-light mb-8">
            Contact us today to discuss your specific business needs and get a tailored solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-white text-brand-black hover:bg-brand-gray-light">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="tel:+260973737563" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call +260 97 3737563
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
