import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone: string): string {
  // Format phone number for display
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.startsWith('260')) {
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`
  }
  return phone
}

export function createWhatsAppLink(phone: string, message?: string): string {
  const cleanedPhone = phone.replace(/\D/g, '')
  const defaultMessage = "Hello! I'm interested in Power'manex Management Consultancy services."
  const encodedMessage = encodeURIComponent(message || defaultMessage)
  return `https://wa.me/${cleanedPhone}?text=${encodedMessage}`
}

export function createMailtoLink(email: string, subject?: string, body?: string): string {
  const params = new URLSearchParams()
  if (subject) params.append('subject', subject)
  if (body) params.append('body', body)
  
  const queryString = params.toString()
  return queryString ? `${email}?${queryString}` : email
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}
