# Premium Analog Photography Portfolio

A minimal, curated photography portfolio built with Next.js, designed to showcase analog photography with a focus on images over text.

## Features

- **Minimal Design**: Black background, soft white text, no visual clutter
- **Image-First**: Gallery-style layout where images are always the focus
- **Series Pages**: 12 curated photography projects
- **Parallels Section**: Conceptual side-by-side image comparisons
- **Responsive**: Optimized for all screen sizes
- **Next.js App Router**: Modern React architecture
- **Tailwind CSS**: Utility-first styling

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- next/image for optimized images

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
/app
  /series/[slug]    - Individual project pages
  /parallels        - Side-by-side image comparisons
  /about            - About page
  /contact          - Contact information
  page.tsx          - Landing page (Series grid)
  layout.tsx        - Root layout with navbar

/components
  Navbar.tsx        - Floating navigation bar
  ProjectCard.tsx   - Gallery thumbnail component

/data
  projects.ts       - Project data and images
  parallels.ts      - Parallels section data
```

## Design Principles

- Pure black (#000000) background on all pages
- Soft white (#EAEAEA) text
- No gradients, no accent colors
- Floating navbar (not sticky)
- 3-column grid on landing page
- All thumbnails have equal height
- Clean spacing and typography
- Calm, spacious, refined aesthetic

## Customization

To add your own images:
1. Update `/data/projects.ts` with your project data
2. Update `/data/parallels.ts` for the Parallels section
3. Replace placeholder images with your own

## License

MIT
