'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { href: '/', label: 'Series' },
    { href: '/parallels', label: 'Parallels' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-2 md:top-4 left-0 right-0 z-50 px-4 md:px-8">
      <div className="max-w-[1920px] mx-auto bg-white/10 backdrop-blur-lg rounded-full px-4 md:px-8 py-3 md:py-4 flex items-center justify-between shadow-lg">
        {/* Logo - Shows RK icon on both mobile and desktop */}
        <Link 
          href="/" 
          className="hover:opacity-70 transition-opacity"
        >
          <Image 
            src="/images/Footer/RK_Footer.png" 
            alt="RK" 
            width={32} 
            height={32} 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href === '/' && pathname.startsWith('/series/'))
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-light tracking-wide transition-all relative ${
                  isActive ? 'text-foreground' : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-foreground" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Mobile Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 relative z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-[4.5rem] left-4 right-4 bg-black/80 backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col py-4">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href === '/' && pathname.startsWith('/series/'))
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`px-8 py-4 text-base font-light tracking-wide transition-all text-right ${
                  isActive ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
