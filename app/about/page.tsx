import FadeImage from '@/components/FadeImage'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-24">
      <div className="w-full px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 2xl:px-64">
        <div className="max-w-[1600px] mx-auto">
          {/* Two column layout - equal weight */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
            {/* Left: Large portrait image */}
            <div className="relative w-full aspect-[3/4] lg:aspect-[3/4]">
              <FadeImage
                src="/images/About/ABOUT01.webp"
                alt="Portrait of Raphael Krebs, analog photographer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Right: Minimal text - statement style */}
            <div className="flex flex-col gap-6 justify-center">
              {/* Hero name - uppercase, spaced */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wide text-foreground uppercase">
                Raphael Krebs
              </h1>
              
              {/* Two-line description - lowercase, minimal */}
              <div className="flex flex-col gap-2 text-base md:text-lg font-light text-foreground/80 leading-relaxed">
                <p>Analog photographer.</p>
                <p>No moment ever repeats - shot on 35mm.</p>
              </div>
              
              {/* Location note */}
              <p className="text-sm font-light text-foreground/50 mt-4">
                based between cities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
