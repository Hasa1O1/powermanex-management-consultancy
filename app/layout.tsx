import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Power'manex Management Consultancy - Where Strength Meets Strategy",
    template: "%s | Power'manex Management Consultancy"
  },
  description: "Comprehensive business & HR solutions tailored for Zambian businesses. Labour compliance, company registration, HR services, and statutory compliance. PACRA & ZRA registered.",
  keywords: [
    'management consultancy Zambia',
    'HR services Zambia',
    'company registration Zambia',
    'labour compliance Zambia',
    'PACRA registration',
    'ZRA compliance',
    'business registration Zambia',
    'HR consulting Lusaka',
    'statutory compliance Zambia'
  ],
  authors: [{ name: "Power'manex Management Consultancy" }],
  creator: "Power'manex Management Consultancy",
  publisher: "Power'manex Management Consultancy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://powermanex.co.zm'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://powermanex.co.zm',
    siteName: "Power'manex Management Consultancy",
    title: "Power'manex Management Consultancy - Where Strength Meets Strategy",
    description: "Comprehensive business & HR solutions tailored for Zambian businesses. Labour compliance, company registration, HR services, and statutory compliance.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Power'manex Management Consultancy",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Power'manex Management Consultancy - Where Strength Meets Strategy",
    description: "Comprehensive business & HR solutions tailored for Zambian businesses.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#FF0000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Power'manex Management Consultancy",
              "alternateName": "Powermanex",
              "url": "https://powermanex.co.zm",
              "logo": "https://powermanex.co.zm/logo.png",
              "description": "Comprehensive business & HR solutions tailored for Zambian businesses",
              "foundingDate": "2023",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Findeco House, 10th Floor",
                "addressLocality": "Lusaka",
                "addressCountry": "ZM"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+260-97-3737563",
                "contactType": "customer service",
                "email": "powermanex31@gmail.com"
              },
              "sameAs": [
                "http://www.pacra.org.zm"
              ],
              "serviceArea": {
                "@type": "Country",
                "name": "Zambia"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Management Consultancy Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Human Resource Services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Company Registration"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Statutory Compliance"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-brand-white text-brand-black antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
