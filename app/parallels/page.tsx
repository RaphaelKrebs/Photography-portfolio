import { parallels } from '@/data/parallels'
import FadeImage from '@/components/FadeImage'

export default function ParallelsPage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="w-full px-2 sm:px-12 md:px-24 lg:px-32 xl:px-48 2xl:px-64">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col gap-24">
            {parallels.map((entry, idx) => (
              <div key={entry.id} className="flex flex-col gap-8">
                <div className="flex gap-2 sm:gap-8">
                  <div className="flex-1 relative aspect-[3/4]">
                    <FadeImage
                      src={entry.image1}
                      alt={`${entry.title} photography by Raphael Krebs`}
                      fill
                      className="object-cover"
                      sizes="50vw"
                      priority={idx < 2}
                    />
                  </div>
                  <div className="flex-1 relative aspect-[3/4]">
                    <FadeImage
                      src={entry.image2}
                      alt={`${entry.title} photography by Raphael Krebs`}
                      fill
                      className="object-cover"
                      sizes="50vw"
                      priority={idx < 2}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 px-4">
                  <h3 className="text-sm font-light tracking-wide text-foreground">
                    {entry.title}
                  </h3>
                  <p className="text-sm font-light text-foreground/70 leading-relaxed">
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
