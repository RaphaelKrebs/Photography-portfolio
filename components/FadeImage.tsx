'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'

export default function FadeImage(props: ImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <Image
      {...props}
      className={`${props.className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      onLoad={() => setLoaded(true)}
      loading={props.priority ? 'eager' : 'lazy'}
      quality={85}
      placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzFhMWExYSIvPjwvc3ZnPg=="
    />
  )
}
