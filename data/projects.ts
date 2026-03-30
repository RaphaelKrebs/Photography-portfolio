// Photography portfolio projects
export interface ProjectImage {
  url: string
  orientation: 'portrait' | 'landscape'
}

export interface Project {
  slug: string
  title: string
  coverImage: string
  orientation: 'portrait' | 'landscape'
  images: ProjectImage[]
}

export const projects: Project[] = [
  {
    slug: '01',
    title: 'Los Angeles — Lost Angles',
    coverImage: '/images/02/Cover/LA7.webp',
    orientation: 'portrait',
    images: [
      { url: '/images/02/Project/LA2.webp', orientation: 'portrait' },
      { url: '/images/02/Project/LA3.webp', orientation: 'portrait' },
      { url: '/images/02/Project/LA4.webp', orientation: 'portrait' },
      { url: '/images/02/Project/LA5.webp', orientation: 'portrait' },
      { url: '/images/02/Project/LA6.webp', orientation: 'portrait' },
      { url: '/images/02/Project/LA7.webp', orientation: 'portrait' },
    ]
  },
  {
    slug: '07',
    title: 'Madeira - Drip of Paradise',
    coverImage: '/images/07/Cover/MAD01.webp',
    orientation: 'portrait',
    images: [
      { url: '/images/07/Project/MAD01.webp', orientation: 'portrait' },
      { url: '/images/07/Project/MAD02.webp', orientation: 'portrait' },
      { url: '/images/07/Project/MAD03.webp', orientation: 'portrait' },
      { url: '/images/07/Project/MAD04.webp', orientation: 'portrait' },
      { url: '/images/07/Project/MAD05.webp', orientation: 'portrait' },
      { url: '/images/07/Project/MAD06.webp', orientation: 'portrait' },
      { url: '/images/07/Project/MAD07.webp', orientation: 'portrait' },
      { url: '/images/07/Project/MAD08.webp', orientation: 'portrait' },
    ]
  },
  {
    slug: '04',
    title: 'Munich - Shades of Bavaria',
    coverImage: '/images/04/Cover/BWMUE11.webp',
    orientation: 'portrait',
    images: [
      { url: '/images/04/Project/BWMUE1.webp', orientation: 'portrait' },
      { url: '/images/04/Project/BWMUE2.webp', orientation: 'landscape' },
      { url: '/images/04/Project/BWMUE3.webp', orientation: 'portrait' },
      { url: '/images/04/Project/BWMUE4.webp', orientation: 'portrait' },
      { url: '/images/04/Project/BWMUE5.webp', orientation: 'portrait' },
      { url: '/images/04/Project/BWMUE7.webp', orientation: 'portrait' },
      { url: '/images/04/Project/BWMUE8.webp', orientation: 'portrait' },
      { url: '/images/04/Project/BWMUE9.webp', orientation: 'portrait' },
      { url: '/images/04/Project/BWMUE10.webp', orientation: 'portrait' },
    ]
  },
  {
    slug: '05',
    title: 'Munich - Golden Summer',
    coverImage: '/images/05/Cover/MUESO10.webp',
    orientation: 'landscape',
    images: [
      { url: '/images/05/Project/MUESO1.webp', orientation: 'portrait' },
      { url: '/images/05/Project/MUESO2.webp', orientation: 'landscape' },
      { url: '/images/05/Project/MUESO3.webp', orientation: 'portrait' },
      { url: '/images/05/Project/MUESO4.webp', orientation: 'portrait' },
      { url: '/images/05/Project/MUESO5.webp', orientation: 'portrait' },
      { url: '/images/05/Project/MUESO6.webp', orientation: 'portrait' },
      { url: '/images/05/Project/MUESO7.webp', orientation: 'portrait' },
      { url: '/images/05/Project/MUESO8.webp', orientation: 'portrait' },
      { url: '/images/05/Project/MUESO10.webp', orientation: 'landscape' },
      { url: '/images/05/Project/MUESO11.webp', orientation: 'portrait' },
      { url: '/images/05/Project/MUESO12.webp', orientation: 'portrait' },
      { url: '/images/05/Project/MUESO13.webp', orientation: 'portrait' },
      { url: '/images/05/Project/MUESO14.webp', orientation: 'portrait' },
      { url: '/images/05/Project/MUESO15.webp', orientation: 'portrait' },
      { url: '/images/05/Project/MUESO16.webp', orientation: 'portrait' },
      { url: '/images/05/Project/MUESO18.webp', orientation: 'portrait' },
    ]
  },
  {
    slug: '06',
    title: 'Alps - Silence & Stone',
    coverImage: '/images/06/Cover/ALPSA01.webp',
    orientation: 'portrait',
    images: [
      { url: '/images/06/Project/ALPSA01.webp', orientation: 'portrait' },
      { url: '/images/06/Project/ALPSA02.webp', orientation: 'portrait' },
    ]
  },
  {
    slug: '02',
    title: 'California - Chasing Magic Lights',
    coverImage: '/images/01/Cover/CA1.webp',
    orientation: 'portrait',
    images: [
      { url: '/images/01/Project/CA2.webp', orientation: 'portrait' },
      { url: '/images/01/Project/CA3.webp', orientation: 'portrait' },
      { url: '/images/01/Project/CA4.webp', orientation: 'portrait' },
      { url: '/images/01/Project/CA5.webp', orientation: 'portrait' },
      { url: '/images/01/Project/CA6.webp', orientation: 'portrait' },
      { url: '/images/01/Project/CA7.webp', orientation: 'portrait' },
      { url: '/images/01/Project/CA8.webp', orientation: 'portrait' },
      { url: '/images/01/Project/CA9.webp', orientation: 'portrait' },
      { url: '/images/01/Project/CA10.webp', orientation: 'portrait' },
    ]
  },
  {
    slug: '09',
    title: 'China - Between Tradition & Tomorrow',
    coverImage: '/images/09/Cover/CHI01.webp',
    orientation: 'portrait',
    images: [
      { url: '/images/09/Project/CHI01.webp', orientation: 'portrait' },
      { url: '/images/09/Project/CHI02.webp', orientation: 'portrait' },
      { url: '/images/09/Project/CHI03.webp', orientation: 'portrait' },
      { url: '/images/09/Project/CHI04.webp', orientation: 'portrait' },
      { url: '/images/09/Project/CHI05.webp', orientation: 'portrait' },
      { url: '/images/09/Project/CHI06.webp', orientation: 'portrait' },
      { url: '/images/09/Project/CHI07.webp', orientation: 'portrait' },
      { url: '/images/09/Project/CHI08.webp', orientation: 'landscape' },
      { url: '/images/09/Project/CHI09.webp', orientation: 'portrait' },
      { url: '/images/09/Project/CHI010.webp', orientation: 'portrait' },
      { url: '/images/09/Project/CHI11.webp', orientation: 'portrait' },
    ]
  },
  {
    slug: '10',
    title: 'Vietnam - Midnight Streets',
    coverImage: '/images/10/Cover/VIETN1.webp',
    orientation: 'portrait',
    images: [
      { url: '/images/10/Project/VIETN0.webp', orientation: 'portrait' },
      { url: '/images/10/Project/VIETN2.webp', orientation: 'portrait' },
      { url: '/images/10/Project/VIETN3.webp', orientation: 'portrait' },
      { url: '/images/10/Project/VIETN10.webp', orientation: 'portrait' },
      { url: '/images/10/Project/VIETN4.webp', orientation: 'portrait' },
      { url: '/images/10/Project/VIETN5.webp', orientation: 'portrait' },
      { url: '/images/10/Project/VIETN6.webp', orientation: 'portrait' },
      { url: '/images/10/Project/VIETN7.webp', orientation: 'portrait' },
      { url: '/images/10/Project/VIETN8.webp', orientation: 'portrait' },
      { url: '/images/10/Project/VIETN9.webp', orientation: 'portrait' },

    ]
  },
  {
    slug: '11',
    title: 'Hong Kong - City of Layers',
    coverImage: '/images/11/Cover/HK1.webp',
    orientation: 'portrait',
    images: [
      { url: '/images/11/Project/HK0.webp', orientation: 'portrait' },
      { url: '/images/11/Project/HK2.webp', orientation: 'portrait' },
      { url: '/images/11/Project/HK3.webp', orientation: 'portrait' },
      { url: '/images/11/Project/HK4.webp', orientation: 'portrait' },
      { url: '/images/11/Project/HK5.webp', orientation: 'portrait' },
      { url: '/images/11/Project/HK6.webp', orientation: 'portrait' },
      { url: '/images/11/Project/HK7.webp', orientation: 'portrait' },
    ]
  },
  {
    slug: '12',
    title: 'North Carolina - Infinite Horizons',
    coverImage: '/images/12/Cover/NC1.webp',
    orientation: 'portrait',
    images: [
      { url: '/images/12/Project/NC2.webp', orientation: 'portrait' },
      { url: '/images/12/Project/NC3.webp', orientation: 'portrait' },
    ]
  },
  {
    slug: '13',
    title: 'Alps - Life',
    coverImage: '/images/13/Cover/AL1.webp',
    orientation: 'portrait',
    images: [
      { url: '/images/13/Project/AL2.webp', orientation: 'portrait' },
      { url: '/images/13/Project/AL3.webp', orientation: 'portrait' },
      { url: '/images/13/Project/AL4.webp', orientation: 'portrait' },
      { url: '/images/13/Project/AL5.webp', orientation: 'portrait' },
      { url: '/images/13/Project/AL6.webp', orientation: 'portrait' },
    ]
  },
  {
    slug: '14',
    title: 'Munich - Frozen in Time',
    coverImage: '/images/14/Cover/MUEWI1.webp',
    orientation: 'landscape',
    images: [
      { url: '/images/14/Project/MUEWI1.webp', orientation: 'landscape' },
      { url: '/images/14/Project/MUEWI2.webp', orientation: 'landscape' },
    ]
  },
  {
    slug: '15',
    title: 'Yosemite - Scale of Silence',
    coverImage: '/images/15/Cover/YON04.webp',
    orientation: 'landscape',
    images: [
      { url: '/images/15/Project/YON01.webp', orientation: 'portrait' },
      { url: '/images/15/Project/YON02.webp', orientation: 'portrait' },
      { url: '/images/15/Project/YON03.webp', orientation: 'portrait' },
      { url: '/images/15/Project/YON04.webp', orientation: 'landscape' },
      { url: '/images/15/Project/YON05.webp', orientation: 'portrait' },
      { url: '/images/15/Project/YON06.webp', orientation: 'portrait' },
    ]
  },
  {
    slug: '16',
    title: 'Art - Shapes',
    coverImage: '/images/16/Cover/ART01.webp',
    orientation: 'portrait',
    images: [
      { url: '/images/16/Project/ART01.webp', orientation: 'portrait' },
      { url: '/images/16/Project/ART02.webp', orientation: 'portrait' },
      { url: '/images/16/Project/ART03.webp', orientation: 'portrait' },
    ]
  },
  {
    slug: '17',
    title: 'Rome - Layers of History',
    coverImage: '/images/17/Cover/ROM09.webp',
    orientation: 'portrait',
    images: [
      { url: '/images/17/Project/ROM01.webp', orientation: 'landscape' },
      { url: '/images/17/Project/ROM02.webp', orientation: 'portrait' },
      { url: '/images/17/Project/ROM03.webp', orientation: 'portrait' },
      { url: '/images/17/Project/ROM04.webp', orientation: 'portrait' },
      { url: '/images/17/Project/ROM05.webp', orientation: 'portrait' },
      { url: '/images/17/Project/ROM06.webp', orientation: 'portrait' },
      { url: '/images/17/Project/ROM07.webp', orientation: 'portrait' },
      { url: '/images/17/Project/ROM08.webp', orientation: 'portrait' },
      { url: '/images/17/Project/ROM09.webp', orientation: 'portrait' },
      { url: '/images/17/Project/ROM10.webp', orientation: 'portrait' },
      { url: '/images/17/Project/ROM11.webp', orientation: 'portrait' },
      { url: '/images/17/Project/ROM12.webp', orientation: 'portrait' },
      { url: '/images/17/Project/ROM13.webp', orientation: 'portrait' },
      { url: '/images/17/Project/ROM14.webp', orientation: 'portrait' },
    ]
  },
  {
    slug: '18',
    title: 'Vietnam - Rythm of Life',
    coverImage: '/images/18/Cover/VIET2.webp',
    orientation: 'portrait',
    images: [
      { url: '/images/18/Project/VIET1.webp', orientation: 'portrait' },
      { url: '/images/18/Project/VIET2.webp', orientation: 'portrait' },
      { url: '/images/18/Project/VIET3.webp', orientation: 'portrait' },
      { url: '/images/18/Project/VIET4.webp', orientation: 'portrait' },
      { url: '/images/18/Project/VIET5.webp', orientation: 'portrait' },
      { url: '/images/18/Project/VIET7.webp', orientation: 'portrait' },
      { url: '/images/18/Project/VIET8.webp', orientation: 'portrait' },
      { url: '/images/18/Project/VIET9.webp', orientation: 'portrait' },
      { url: '/images/18/Project/VIET11.webp', orientation: 'portrait' },
      { url: '/images/18/Project/VIET12.webp', orientation: 'portrait' },
      { url: '/images/18/Project/VIET14.webp', orientation: 'portrait' },
    ]
  },
]
