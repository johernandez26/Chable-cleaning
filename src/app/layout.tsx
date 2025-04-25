import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chable Cleaning Services | Professional Cleaning in Contra Costa Bay Area',
  description: 'Professional cleaning services with a personal touch. Serving the Contra Costa Bay Area with 9+ years of experience in cleaning and remodeling.',
  keywords: 'cleaning services, house cleaning, office cleaning, move in move out cleaning, deep cleaning, Contra Costa Bay Area',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 