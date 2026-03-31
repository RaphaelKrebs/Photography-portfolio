export interface Parallel {
  id: string
  title: string
  description: string
  image1: string
  image1Alt?: string
  image2: string
  image2Alt?: string
}

export const parallels: Parallel[] = [
  {
    id: '01',
    title: 'Essentials',
    description: '',
    image1: '/images/Parallels/01/ESSENTIALS01.webp',
    image2: '/images/Parallels/01/ESSENTIALS02.webp',
  },
  {
    id: '02',
    title: 'Carrying',
    description: '',
    image1: '/images/Parallels/02/CARRYING1.webp',
    image2: '/images/Parallels/02/CARRYING2.webp',
  },
  {
    id: '03',
    title: 'Capitalism',
    description: '',
    image1: '/images/Parallels/03/DOWNSIDE01.webp',
    image2: '/images/Parallels/03/DOWNSIDE02.webp',
  },
]
