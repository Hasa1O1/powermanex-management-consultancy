import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string().min(1),
  message: z.string().min(10),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)
    
    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send to CRM system
    // 4. Send WhatsApp notification
    
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', validatedData)
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // In a real implementation, you might:
    // - Send email using Resend, SendGrid, or similar
    // - Save to database (Prisma, MongoDB, etc.)
    // - Send notification to team via Slack, Discord, etc.
    // - Send WhatsApp message to business owner
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We\'ll get back to you within 24 hours.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please check your form data and try again.',
          errors: error.errors 
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'There was an error processing your request. Please try again later.' 
      },
      { status: 500 }
    )
  }
}

// Handle GET requests (for testing)
export async function GET() {
  return NextResponse.json(
    { 
      message: 'Contact API endpoint is working',
      methods: ['POST'],
      requiredFields: ['name', 'company', 'email', 'phone', 'service', 'message']
    },
    { status: 200 }
  )
}
