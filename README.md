# Power'manex Management Consultancy Website

A modern, responsive website for Power'manex Management Consultancy - a Zambian business providing comprehensive HR and compliance solutions.

## 🚀 Features

- **Modern Design**: Clean, professional design with brand-consistent colors and typography
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **SEO Optimized**: Complete SEO setup with metadata, structured data, and OpenGraph
- **Accessibility**: WCAG AA compliant with proper focus states and semantic HTML
- **Contact Integration**: WhatsApp integration, email forms, and phone links
- **Trust Badges**: PACRA and ZRA verification links and certificates

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Components**: shadcn/ui components
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **SEO**: next-seo

## 📁 Project Structure

```
├── app/                    # Next.js 14 app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── api/               # API routes
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── forms/             # Form components
│   ├── layout/            # Layout components (Header, Footer)
│   └── ui/                # UI components (shadcn/ui)
├── lib/                   # Utility functions
└── public/                # Static assets
```

## 🎨 Brand Colors

- **Brand Red**: #FF0000 (Primary CTA, accents)
- **Brand Black**: #000000 (Headings, text)
- **Brand White**: #FFFFFF (Background)
- **Brand Gray**: #808080 (Secondary text, borders)
- **Brand Blue**: #0000FF (Links, secondary CTAs)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd powermanex-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Content Management

### Updating Company Information

1. **Contact Details**: Update in `components/layout/footer.tsx` and `app/contact/page.tsx`
2. **Services**: Modify service descriptions in `app/services/page.tsx`
3. **About Content**: Update company information in `app/about/page.tsx`

### Brand Colors

Colors are defined in CSS variables in `app/globals.css`:

```css
:root {
  --brand-red: #FF0000;
  --brand-black: #000000;
  --brand-white: #FFFFFF;
  --brand-gray: #808080;
  --brand-blue: #0000FF;
}
```

### Adding New Pages

1. Create a new directory in `app/`
2. Add `page.tsx` with your content
3. Update navigation in `components/layout/header.tsx`
4. Add to footer links if needed

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
# For production, set these in your hosting platform
```

### SEO Configuration

SEO settings are configured in each page's metadata export. Update:

- Page titles and descriptions
- OpenGraph images
- Structured data (JSON-LD)
- Canonical URLs

### Form Handling

The contact form is set up with validation and basic submission handling. To implement actual email sending:

1. Choose an email service (Resend, SendGrid, etc.)
2. Update `app/api/contact/route.ts`
3. Add environment variables for API keys

## 📱 WhatsApp Integration

WhatsApp links are automatically generated using the utility function:

```typescript
import { createWhatsAppLink } from '@/lib/utils'

// Creates WhatsApp link with pre-filled message
const whatsappLink = createWhatsAppLink('+260973737563', 'Your message here')
```

## 🎯 Performance Optimization

- **Image Optimization**: Using Next.js Image component
- **Font Optimization**: Google Fonts with display swap
- **Code Splitting**: Automatic with Next.js
- **Caching**: Built-in Next.js caching
- **Lighthouse Score**: Optimized for 95+ scores

## ♿ Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Focus management
- Screen reader support
- Color contrast compliance
- Keyboard navigation

## 🔍 SEO Features

- Meta tags and OpenGraph
- Structured data (JSON-LD)
- Canonical URLs
- Sitemap generation
- Robot.txt configuration
- Social media optimization

## 📞 Contact Integration

Multiple contact methods are integrated:

- **Phone**: Direct call links
- **WhatsApp**: Click-to-chat with pre-filled messages
- **Email**: mailto links with subject/body
- **Contact Form**: Validated form with API endpoint

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Works with Next.js static export
- **AWS Amplify**: Full Next.js support
- **Railway**: Easy deployment with GitHub integration

## 📋 TODO / Future Enhancements

- [ ] Add blog/news section
- [ ] Implement CMS for content management
- [ ] Add multi-language support
- [ ] Integrate analytics (Google Analytics, etc.)
- [ ] Add newsletter signup
- [ ] Implement actual email sending
- [ ] Add client testimonials carousel
- [ ] Create admin dashboard
- [ ] Add booking/scheduling system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to Power'manex Management Consultancy.

## 📞 Support

For technical support or questions about the website:

- **Email**: powermanex31@gmail.com
- **Phone**: +260 97 3737563
- **WhatsApp**: +260 97 3737563

---

Built with ❤️ for Power'manex Management Consultancy
