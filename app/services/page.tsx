import { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/ui/section'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  FileText, 
  Scale,
  Users, 
  GraduationCap,
  ShieldCheck,
  Briefcase,
  CheckCircle,
  Clock,
  DollarSign
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Professional HR and business solutions including legal HR documents, labour mediation, employee sourcing, workplace training, labour inspection support, and work permits.',
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
              Complete HR and legal solutions designed to keep your business compliant, 
              competitive, and legally protected in Zambia.
            </p>
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Button asChild variant="outline" size="sm">
              <a href="#legal-hr-documents">Legal Docs</a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="#labour-mediation">Mediation</a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="#employee-sourcing">Recruitment</a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="#workplace-training">Training</a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="#inspection-support">Inspections</a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="#work-permits">Work Permits</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Legal HR Documents */}
      <Section id="legal-hr-documents">
        <SectionHeading 
          title="Legal HR Documents" 
          subtitle="Professionally drafted contracts, warning letters, and HR policies"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Comprehensive HR Documentation</h3>
            <p className="text-lg text-brand-gray mb-8 leading-relaxed">
              Our expert team drafts legally compliant HR documents tailored to your business needs. 
              From employment contracts to disciplinary policies, we ensure every document meets 
              Zambian labour law requirements while protecting your business interests.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Employment Contracts</h4>
                  <p className="text-brand-gray">Legally compliant contracts for all employment types</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Warning Letters & Disciplinary Documents</h4>
                  <p className="text-brand-gray">Professional disciplinary correspondence</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">HR Policies & Procedures</h4>
                  <p className="text-brand-gray">Complete policy manuals and employee handbooks</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Code of Conduct</h4>
                  <p className="text-brand-gray">Professional standards and workplace ethics</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-brand-red/5 border-brand-red/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-red" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-red mt-0.5" />
                  <div>
                    <strong>Legally Compliant</strong>
                    <p className="text-sm text-brand-gray">All documents meet current Zambian labour laws</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-red mt-0.5" />
                  <div>
                    <strong>Customized for Your Business</strong>
                    <p className="text-sm text-brand-gray">Tailored to your specific industry and needs</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-red mt-0.5" />
                  <div>
                    <strong>Ministry of Labour Attested</strong>
                    <p className="text-sm text-brand-gray">Verified and certified documentation</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Labour Mediation */}
      <Section id="labour-mediation" className="bg-gray-50">
        <SectionHeading 
          title="Labour Mediation" 
          subtitle="Fair, compliant resolution of workplace disputes"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="bg-brand-red/5 border-brand-red/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-brand-red" />
                Mediation Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-red mt-0.5" />
                  <div>
                    <strong>Grievance Resolution</strong>
                    <p className="text-sm text-brand-gray">Professional handling of workplace complaints</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-red mt-0.5" />
                  <div>
                    <strong>Conflict Mediation</strong>
                    <p className="text-sm text-brand-gray">Fair resolution of employee-employer disputes</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-red mt-0.5" />
                  <div>
                    <strong>Legal Compliance</strong>
                    <p className="text-sm text-brand-gray">Adherence to Zambian labour laws throughout</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Expert Dispute Resolution</h3>
            <p className="text-lg text-brand-gray mb-8 leading-relaxed">
              We provide impartial mediation services that protect both employee rights and employer 
              interests. Our experienced mediators understand Zambian labour regulations and work to 
              resolve disputes efficiently, avoiding costly legal proceedings.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Initial Assessment</h4>
                  <p className="text-brand-gray">Review the dispute and identify key issues</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">Mediation Process</h4>
                  <p className="text-brand-gray">Facilitated discussions to reach mutual agreement</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">Documented Resolution</h4>
                  <p className="text-brand-gray">Legal documentation of agreed outcomes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Employee Sourcing */}
      <Section id="employee-sourcing">
        <SectionHeading 
          title="Employee Sourcing" 
          subtitle="Free to Employers - Background-checked staff delivered at no cost to you"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Badge className="mb-6 bg-brand-red/10 text-brand-red border-brand-red/20">
              FREE TO EMPLOYERS
            </Badge>
            <h3 className="text-2xl font-semibold mb-6">Quality Staff, Zero Recruitment Costs</h3>
            <p className="text-lg text-brand-gray mb-8 leading-relaxed">
              We provide pre-screened, background-checked employees delivered to your business 
              at absolutely no cost to you. Our field-based teams ensure you get quality candidates 
              who are ready to contribute from day one.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Thorough Background Checks</h4>
                  <p className="text-brand-gray">Every candidate is fully vetted and verified</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Skill Verification</h4>
                  <p className="text-brand-gray">Competence testing and reference checks</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">No Hidden Fees</h4>
                  <p className="text-brand-gray">Completely free to employers with transparent pricing</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-brand-red/10 to-brand-red/5 border-brand-red/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-brand-red" />
                  Recruitment Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <span>Job requirements analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <span>Candidate sourcing & screening</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <span>Background checks & verification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <span>Candidate presentation to employer</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-brand-red" />
                  Pricing Model
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-brand-gray mb-2">
                  Employers pay ZERO recruitment fees
                </p>
                <p className="text-sm text-brand-gray">
                  Our transparent pricing means no surprises - you only pay for successful placements with our one-time service fee.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Workplace Training */}
      <Section id="workplace-training" className="bg-gray-50">
        <SectionHeading 
          title="Workplace Training" 
          subtitle="Custom sessions on compliance, performance, and HR systems"
        />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-red" />
                Compliance Training
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-red" />
                  <span>Labour law compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-red" />
                  <span>Workplace safety protocols</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-red" />
                  <span>Regulatory updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-red" />
                  <span>Inspection readiness</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-brand-red" />
                Performance Training
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-red" />
                  <span>Management skills development</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-red" />
                  <span>Team building & communication</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-red" />
                  <span>Leadership training</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-red" />
                  <span>Employee engagement</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-red" />
                HR Systems Training
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-red" />
                  <span>HR software implementation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-red" />
                  <span>Payroll system training</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-red" />
                  <span>Documentation best practices</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-red" />
                  <span>Policy implementation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-brand-gray mb-6">
            All training sessions are customized to your industry and specific business needs
          </p>
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-brand-gray">
              <Clock className="w-5 h-5 text-brand-red" />
              <span>Flexible scheduling</span>
            </div>
            <div className="flex items-center gap-2 text-brand-gray">
              <Users className="w-5 h-5 text-brand-red" />
              <span>On-site or remote</span>
            </div>
            <div className="flex items-center gap-2 text-brand-gray">
              <CheckCircle className="w-5 h-5 text-brand-red" />
              <span>Certified trainers</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Labour Inspection Support */}
      <Section id="inspection-support">
        <SectionHeading 
          title="Labour Inspection Support" 
          subtitle="Get inspection-ready. Zero penalties. Total peace of mind."
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="bg-brand-red/5 border-brand-red/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-red" />
                Inspection Readiness
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-brand-red mb-4">
                Zero Penalties Guarantee
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Pre-Inspection Audit</h4>
                    <p className="text-sm text-brand-gray">Comprehensive review of all documentation and compliance</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Document Preparation</h4>
                    <p className="text-sm text-brand-gray">All required paperwork properly attested and organized</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">During Inspection Support</h4>
                    <p className="text-sm text-brand-gray">Expert representative present throughout inspection</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Post-Inspection Follow-up</h4>
                    <p className="text-sm text-brand-gray">Resolution of any issues and compliance maintenance</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Complete Peace of Mind</h3>
            <p className="text-lg text-brand-gray mb-8 leading-relaxed">
              Labour inspections can be stressful and costly. Our expert team ensures your business 
              is fully compliant with Zambian labour regulations. With our comprehensive inspection 
              support service, you can rest assured that your documentation, policies, and practices 
              meet all legal requirements.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-3">What We Check</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-red" />
                    <span>Employment contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-red" />
                    <span>HR policies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-red" />
                    <span>Payroll records</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-red" />
                    <span>Leave records</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-red" />
                    <span>Safety compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-red" />
                    <span>Statutory returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Expert Work Permits */}
      <Section id="work-permits" className="bg-gray-50">
        <SectionHeading 
          title="Expert Work Permits" 
          subtitle="Fast-tracked, error-free processing"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Streamlined Permit Processing</h3>
            <p className="text-lg text-brand-gray mb-8 leading-relaxed">
              We handle the entire work permit application process from start to finish. Our expert 
              knowledge of immigration requirements and procedures ensures fast, error-free processing 
              with minimal hassle for you and your employees.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Complete Application Handling</h4>
                  <p className="text-brand-gray">We handle all paperwork and submissions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Fast Processing Times</h4>
                  <p className="text-brand-gray">Optimized submissions for quick approvals</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Renewal Services</h4>
                  <p className="text-brand-gray">Ongoing support for permit renewals</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-brand-red" />
                  Permit Types We Handle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                    <div>
                      <div className="font-semibold">General Work Permits</div>
                      <div className="text-sm text-brand-gray">Standard employment permits</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Investor/Investor's Work Permits</div>
                      <div className="text-sm text-brand-gray">Business investor categories</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Temporary Employment Authorization</div>
                      <div className="text-sm text-brand-gray">Short-term work authorization</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-red/5 border-brand-red/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-red" />
                  Process Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Application Submission</span>
                    <span className="font-semibold text-brand-red">3-5 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Permit Processing</span>
                    <span className="font-semibold text-brand-red">2-4 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Permit Collection</span>
                    <span className="font-semibold text-brand-red">1-2 days</span>
                  </div>
                </div>
                <p className="text-xs text-brand-gray mt-4">
                  *Timelines may vary based on permit type and application volume
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}
