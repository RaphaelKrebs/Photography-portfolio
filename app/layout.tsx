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
      <head>
        {/* Easter Egg - Hidden message in source code */}
        <script dangerouslySetInnerHTML={{
          __html: `
            console.log('%c                                                                ', 'font-size: 1px;');
            console.log('%c╔═══════════════════════════════════════════════════════════════╗', 'color: #fff; font-family: monospace; font-size: 12px;');
            console.log('%c║                                                               ║', 'color: #fff; font-family: monospace; font-size: 12px;');
            console.log('%c║   "The people who are crazy enough to think they can         ║', 'color: #fff; font-family: monospace; font-size: 12px;');
            console.log('%c║    change the world are the ones who do."                    ║', 'color: #fff; font-family: monospace; font-size: 12px;');
            console.log('%c║                                                               ║', 'color: #fff; font-family: monospace; font-size: 12px;');
            console.log('%c║                                        - Steve Jobs           ║', 'color: #fff; font-family: monospace; font-size: 12px;');
            console.log('%c║                                                               ║', 'color: #fff; font-family: monospace; font-size: 12px;');
            console.log('%c║   Every frame captured on 35mm film tells a story.           ║', 'color: #fff; font-family: monospace; font-size: 12px;');
            console.log('%c║   No moment ever repeats.                                    ║', 'color: #fff; font-family: monospace; font-size: 12px;');
            console.log('%c║                                                               ║', 'color: #fff; font-family: monospace; font-size: 12px;');
            console.log('%c║   - Raphael Krebs                                            ║', 'color: #fff; font-family: monospace; font-size: 12px;');
            console.log('%c║   Analog Photographer                                        ║', 'color: #fff; font-family: monospace; font-size: 12px;');
            console.log('%c║   hello@raphaelkrebs.com                                     ║', 'color: #fff; font-family: monospace; font-size: 12px;');
            console.log('%c║                                                               ║', 'color: #fff; font-family: monospace; font-size: 12px;');
            console.log('%c╚═══════════════════════════════════════════════════════════════╝', 'color: #fff; font-family: monospace; font-size: 12px;');
            console.log('%c                                                                ', 'font-size: 1px;');
          `
        }} />
      </head>
      <body className={inter.className}>
        <ProtectImages />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
