import { Metadata } from 'next'
import { Section, SectionHeading } from '@/components/ui/section'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { createWhatsAppLink, createMailtoLink } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Get answers to common questions about Power\'manex Management Consultancy services, pricing, processes, and compliance requirements.',
}

const faqs = [
  {
    question: "What is your pricing approach?",
    answer: "We believe in transparent pricing with no hidden costs. Clients only pay a one-time service fee or a clearly stated documentation or drafting fee. There are no surprises - you'll know exactly what you're paying upfront before we begin any work."
  },
  {
    question: "What does 'attested documents' mean?",
    answer: "Attested documents are HR and legal documents that have been verified and certified by the relevant authorities, particularly the Ministry of Labour. This ensures that your documents are legally valid and compliant with Zambian regulations, providing you with peace of mind during inspections and audits."
  },
  {
    question: "How do you ensure inspection-readiness?",
    answer: "Our team specializes in preparing businesses for labour inspections. We ensure all your documentation is compliant with current Zambian labour laws, properly attested, and ready for any regulatory review. This includes employee contracts, HR policies, compliance certificates, and all required statutory documents."
  },
  {
    question: "What is your executive search process?",
    answer: "Our executive search process begins with understanding your specific requirements and company culture. We then conduct targeted searches using our extensive network, perform thorough background checks, and present qualified candidates. The process typically takes 2-4 weeks depending on the position level and requirements."
  },
  {
    question: "How does your client load management work?",
    answer: "To maintain quality service, we manage client flow proactively. When our consultants are at full capacity, new requests are queued and clients are notified in real time. This ensures timely and dedicated service for all clients while maintaining our high standards of quality and attention to detail."
  },
  {
    question: "What documents do I need for company registration?",
    answer: "For company registration, you'll typically need: Certificate of Incorporation (if applicable), Tax Registration Certificate, identification documents for directors/shareholders, proof of address, and a detailed business plan. We'll provide you with a complete checklist specific to your business type during the initial consultation."
  },
  {
    question: "How long does the registration process take?",
    answer: "The registration process typically takes 2-4 weeks for most business types, depending on the complexity and completeness of your documentation. We handle all the paperwork and follow-ups to ensure the fastest possible processing time while maintaining accuracy and compliance."
  },
  {
    question: "Do you provide ongoing compliance support?",
    answer: "Yes, we offer ongoing compliance support to ensure your business stays current with regulatory requirements. This includes regular updates on law changes, assistance with renewals, and proactive monitoring of your compliance status. We can also provide training for your team on compliance requirements."
  },
  {
    question: "What makes your HR services different?",
    answer: "Our HR services are Ministry of Labour attested, ensuring full legal compliance. We provide background-checked staff at no cost to employers, offer transparent pricing, and maintain field-based teams ready to support your business. Our client-centric approach means we tailor solutions specifically to your business needs."
  },
  {
    question: "Can you help with labour dispute resolution?",
    answer: "Absolutely. We provide fair, compliant resolution of workplace disputes through our labour mediation services. Our experienced team understands Zambian labour laws and can help resolve issues efficiently while protecting your business interests and maintaining positive employee relations."
  },
  {
    question: "What licenses can you help with?",
    answer: "We assist with various licenses including Money Lender Licenses (ensuring compliance with the Financial Services Act), Mining Licenses (Prospecting, Mining, Mineral Processing, and Mineral Trading Permits), and other business-specific licenses. We handle the entire application process and ensure compliance with all regulatory requirements."
  },
  {
    question: "How do I get started with your services?",
    answer: "Getting started is simple: 1) Fill in our onboarding registration form, 2) Attach required documents (Certificate of Incorporation, Tax Registration Certificate, etc.), 3) Submit the form and documents. That's it! We'll take it from there and handle all the necessary processes to get your business compliant and operational."
  }
]

export default function FAQsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brand-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 inline-flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold font-heading text-brand-black mb-6">
              Got Questions?
            </h1>
            
            <p className="text-xl text-brand-gray mb-8 leading-relaxed">
              Find answers to common questions about our services, processes, and compliance requirements. 
              Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <Section>
        <SectionHeading 
          title="Common Questions" 
          subtitle="Everything you need to know about our services and processes"
          centered
        />
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-brand-gray leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* Contact Support */}
      <Section className="bg-gray-50">
        <SectionHeading 
          title="Still Have Questions?" 
          subtitle="Our team is ready to help you with any specific questions or concerns"
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-brand-red" />
              </div>
              <CardTitle>Call Us</CardTitle>
              <CardDescription>
                Speak directly with our team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="font-semibold">+260 97 3737563</div>
                <div className="text-sm text-brand-gray">Mon-Fri, 8AM-6PM</div>
              </div>
              <Button asChild className="mt-4">
                <a href="tel:+260973737563">Call Now</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-brand-red" />
              </div>
              <CardTitle>WhatsApp</CardTitle>
              <CardDescription>
                Quick questions and support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="font-semibold">+260 97 3737563</div>
                <div className="text-sm text-brand-gray">Available 24/7</div>
              </div>
              <Button asChild className="mt-4">
                <a href={createWhatsAppLink('+260973737563', "Hello! I have a question about Power'manex services.")}>
                  WhatsApp Us
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-brand-red" />
              </div>
              <CardTitle>Email Us</CardTitle>
              <CardDescription>
                Detailed inquiries and support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="font-semibold">powermanex31@gmail.com</div>
                <div className="text-sm text-brand-gray">Response within 24hrs</div>
              </div>
              <Button asChild variant="secondary" className="mt-4">
                <a href={createMailtoLink('powermanex31@gmail.com', 'Question about Power\'manex Services')}>
                  Send Email
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Quick Links */}
      <Section>
        <SectionHeading 
          title="Quick Links" 
          subtitle="Find more information about our services"
          centered
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Button asChild variant="outline" className="h-auto p-6 flex flex-col items-center gap-3">
            <Link href="/services#hr-services">
              <Users className="w-8 h-8 text-brand-red" />
              <div className="text-center">
                <div className="font-semibold">HR Services</div>
                <div className="text-sm text-brand-gray">Recruitment & Compliance</div>
              </div>
            </Link>
          </Button>

          <Button asChild variant="outline" className="h-auto p-6 flex flex-col items-center gap-3">
            <Link href="/services#company-registration">
              <Building className="w-8 h-8 text-brand-red" />
              <div className="text-center">
                <div className="font-semibold">Company Registration</div>
                <div className="text-sm text-brand-gray">Business Setup</div>
              </div>
            </Link>
          </Button>

          <Button asChild variant="outline" className="h-auto p-6 flex flex-col items-center gap-3">
            <Link href="/services#statutory-compliance">
              <Shield className="w-8 h-8 text-brand-red" />
              <div className="text-center">
                <div className="font-semibold">Compliance</div>
                <div className="text-sm text-brand-gray">PACRA, ZRA, NHIMA</div>
              </div>
            </Link>
          </Button>

          <Button asChild variant="outline" className="h-auto p-6 flex flex-col items-center gap-3">
            <Link href="/contact">
              <Mail className="w-8 h-8 text-brand-red" />
              <div className="text-center">
                <div className="font-semibold">Contact Us</div>
                <div className="text-sm text-brand-gray">Get Started Today</div>
              </div>
            </Link>
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-brand-gray-light mb-8">
            Don&apos;t wait - let us help you with your business needs today. 
            Our team is ready to provide you with expert guidance and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-white text-brand-black hover:bg-brand-gray-light">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
