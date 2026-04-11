import FadeImage from '@/components/FadeImage'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-24">
      {/* SEO Keywords - Hidden but crawlable */}
      <div className="sr-only">
        <p>Raphael Krebs is an analog photographer based in Rheda-Wiedenbrück, München, Munich, Düsseldorf, and Bochum. 
        He studied at Hochschule Bochum BWL and Universität Düsseldorf. Currently working as SAP Solution Advisor, 
        Raphael combines his professional expertise with his passion for analog photography. 
        Connect with Raphael on LinkedIn: https://www.linkedin.com/in/raphael-krebs-4383a6201/</p>
      </div>
      
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
              
              {/* LinkedIn link */}
              <a
                href="https://www.linkedin.com/in/raphael-krebs-4383a6201/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors mt-2 inline-flex items-center gap-2"
              >
                <span>LinkedIn</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
