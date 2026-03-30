'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Series' },
    { href: '/parallels', label: 'Parallels' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8">
      <div className="max-w-[1920px] mx-auto bg-white/10 backdrop-blur-lg rounded-full px-8 py-4 flex items-center justify-between shadow-lg">
        <Link 
          href="/" 
          className="text-base font-bold tracking-wide text-foreground hover:opacity-70 transition-opacity uppercase"
        >
          Raphael Krebs
        </Link>
        
        <div className="flex items-center gap-8">
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
      </div>
    </nav>
  )
}
