'use client'

import { useEffect } from 'react'

export default function ProtectImages() {
  useEffect(() => {
    const preventContextMenu = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault()
      }
    }

    document.addEventListener('contextmenu', preventContextMenu)
    
    return () => {
      document.removeEventListener('contextmenu', preventContextMenu)
    }
  }, [])

  return null
}
