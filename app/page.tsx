import Link from 'next/link'
import { projects } from '@/data/projects'
import FadeImage from '@/components/FadeImage'

export default function Home() {
  const validProjects = projects.filter(p => p?.slug)

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <h1 className="sr-only">Raphael Krebs</h1>
      <div className="w-full px-2 sm:px-12 md:px-24 lg:px-32 xl:px-48 2xl:px-64">
        <div className="max-w-[1400px] mx-auto">
          {/* Desktop: 3 columns */}
          <div className="hidden lg:flex gap-6">
            {[0, 1, 2].map((col) => (
              <div key={col} className="flex-1 flex flex-col gap-6">
                {validProjects
                  .filter((_, i) => i % 3 === col)
                  .map((project, idx) => (
                    <Link
                      key={project.slug}
                      href={`/series/${encodeURIComponent(project.slug)}`}
                      className="block relative overflow-hidden group"
                    >
                      <div className={`relative w-full ${
                        col === 1 && idx === 0 ? 'aspect-[3/5]' : 
                        project.orientation === 'landscape' ? 'aspect-[4/3]' : 'aspect-[3/4]'
                      }`}>
                        <FadeImage
                          src={project.coverImage}
                          alt={`${project.title} photography by Raphael Krebs`}
                          fill
                          className="object-cover transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-110"
                          sizes="(max-width: 1024px) 50vw, 33vw"
                          priority={idx === 0}
                        />
                      </div>
                    </Link>
                  ))}
              </div>
            ))}
          </div>

          {/* Mobile: 2 columns */}
          <div className="lg:hidden flex gap-2">
            {[0, 1].map((col) => (
              <div key={col} className="flex-1 flex flex-col gap-2">
                {validProjects
                  .filter((_, i) => i % 2 === col)
                  .map((project, idx) => (
                    <Link
                      key={project.slug}
                      href={`/series/${encodeURIComponent(project.slug)}`}
                      className="block relative overflow-hidden group"
                    >
                      <div className={`relative w-full ${
                        project.orientation === 'landscape' ? 'aspect-[4/3]' : 'aspect-[3/4]'
                      }`}>
                        <FadeImage
                          src={project.coverImage}
                          alt={`${project.title} photography by Raphael Krebs`}
                          fill
                          className="object-cover transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-110"
                          sizes="50vw"
                          priority={idx === 0}
                        />
                      </div>
                    </Link>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
