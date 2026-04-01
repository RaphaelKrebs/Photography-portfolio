import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProtectImages from '@/components/ProtectImages'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raphael Krebs – Photography',
  description: 'Photography by Raphael Krebs – urban, analog-inspired imagery capturing light, structure and atmosphere.',
  keywords: ['Raphael Krebs', 'photography', 'analog photography', '35mm photography', 'urban photography', 'street photography', 'photographer'],
  authors: [{ name: 'Raphael Krebs' }],
  creator: 'Raphael Krebs',
  publisher: 'Raphael Krebs',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Raphael Krebs – Photography',
    description: 'Photography by Raphael Krebs – urban, analog-inspired imagery capturing light, structure and atmosphere.',
    url: 'https://raphaelkrebs.com',
    siteName: 'Raphael Krebs Photography',
    images: ['/images/Footer/RK_Footer.png'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raphael Krebs – Photography',
    description: 'Photography by Raphael Krebs – urban, analog-inspired imagery capturing light, structure and atmosphere.',
    images: ['/images/Footer/RK_Footer.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProtectImages />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
