import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import FadeImage from '@/components/FadeImage'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: encodeURIComponent(project.slug),
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // Decode the slug to handle spaces and special characters
  const decodedSlug = decodeURIComponent(params.slug)
  const project = projects.find((p) => p.slug === decodedSlug)

  if (!project) {
    notFound()
  }

  const projectTitle = project.title

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <div className="w-full px-2 sm:px-12 md:px-24 lg:px-32 xl:px-48 2xl:px-64">
        <div className="max-w-[1400px] mx-auto">
          {/* Project Title */}
          <h1 className="text-3xl font-light tracking-wide text-foreground text-center mb-12">
            {projectTitle}
          </h1>

          {/* Desktop: 3 columns */}
          <div className="hidden lg:flex gap-6">
            {[0, 1, 2].map((col) => (
              <div key={col} className="flex-1 flex flex-col gap-6">
                {project.images
                  .filter((_, i) => i % 3 === col)
                  .map((image, idx) => (
                    <div 
                      key={idx} 
                      className={`relative w-full ${
                        image.orientation === 'landscape' ? 'aspect-[4/3]' : 'aspect-[3/4]'
                      }`}
                    >
                      <FadeImage
                        src={image.url}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 33vw"
                        priority={idx === 0}
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Mobile: 2 columns */}
          <div className="lg:hidden flex gap-2">
            {[0, 1].map((col) => (
              <div key={col} className="flex-1 flex flex-col gap-2">
                {project.images
                  .filter((_, i) => i % 2 === col)
                  .map((image, idx) => (
                    <div 
                      key={idx} 
                      className={`relative w-full ${
                        image.orientation === 'landscape' ? 'aspect-[4/3]' : 'aspect-[3/4]'
                      }`}
                    >
                      <FadeImage
                        src={image.url}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="50vw"
                        priority={idx === 0}
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
