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
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Raphael Krebs – Photography',
    description: 'Photography by Raphael Krebs – urban, analog-inspired imagery capturing light, structure and atmosphere.',
    images: ['/images/02/Cover/LA7.webp'],
    type: 'website',
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
