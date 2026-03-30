import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProtectImages from '@/components/ProtectImages'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raphael Krebs - Photography',
  description: 'Analog photography portfolio',
  icons: {
    icon: '/favicon.ico',
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
