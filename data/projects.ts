// Photography portfolio projects
export interface ProjectImage {
  url: string
  orientation: 'portrait' | 'landscape'
  alt?: string
}

export interface Project {
  slug: string
  title: string
  linkTitle: string
  coverImage: string
  coverImageAlt?: string
  orientation: 'portrait' | 'landscape'
  images: ProjectImage[]
}

export const projects: Project[] = [
  {
    slug: '02',
    title: 'Los Angeles — Lost Angles',
    linkTitle: 'los-angeles',
    coverImage: '/images/02/Cover/LA7.webp',
    coverImageAlt: 'Skateboarder hovering at Venice Beach skatepark',
    orientation: 'portrait',
    images: [
      { url: '/images/02/Project/LA2.webp', orientation: 'portrait', alt: 'Griffith Observatory Sunset Man Portrait' },
      { url: '/images/02/Project/LA3.webp', orientation: 'portrait', alt: 'Santa Moniva Villa Yellow Stairs GTA5 houses' },
      { url: '/images/02/Project/LA4.webp', orientation: 'portrait', alt: 'Hollywood Sign 135mm hills' },
      { url: '/images/02/Project/LA5.webp', orientation: 'portrait', alt: 'Griffith Observatory Sunset view Los Angeles Skyline' },
      { url: '/images/02/Project/LA6.webp', orientation: 'portrait', alt: 'Griffith Observatory Red Sunset LA Skyline Pair watching' },
      { url: '/images/02/Project/LA7.webp', orientation: 'portrait', alt: 'Skateboarder hovering at Venice Beach skatepark crowd watching' },
    ]
  },
  {
    slug: '07',
    title: 'Madeira - Drip of Paradise',
    linkTitle: 'madeira',
    coverImage: '/images/07/Cover/MAD01.webp',
    coverImageAlt: 'Red Sunrise two people watching Quinta do Furão',
    orientation: 'portrait',
    images: [
      { url: '/images/07/Project/MAD01.webp', orientation: 'portrait', alt: 'Madeira Villa Black Stone Beach green hills' },
      { url: '/images/07/Project/MAD02.webp', orientation: 'portrait', alt: 'Red Sunrise two people watching Quinta do Furão' },
      { url: '/images/07/Project/MAD03.webp', orientation: 'portrait', alt: 'Nature green Plants endless Streets into hills' },
      { url: '/images/07/Project/MAD04.webp', orientation: 'portrait', alt: 'White Defender parking on street 135mm photography' },
      { url: '/images/07/Project/MAD05.webp', orientation: 'portrait', alt: 'Morning Red burning sky and ocean Hotel Quinta do Furão' },
      { url: '/images/07/Project/MAD06.webp', orientation: 'portrait', alt: 'Surfing dry lesson black sand beach circle seixal' },
      { url: '/images/07/Project/MAD07.webp', orientation: 'portrait', alt: 'Golden hour sunrise helo shine over ocean' },
      { url: '/images/07/Project/MAD08.webp', orientation: 'portrait', alt: 'People laying at black beach contrast in seixal' },
    ]
  },
  {
    slug: '04',
    title: 'Munich - Shades of Bavaria',
    linkTitle: 'munich-black-white',
    coverImage: '/images/04/Cover/BWMUE11.webp',
    coverImageAlt: 'Two people standing on balcony munich Altbau',
    orientation: 'portrait',
    images: [
      { url: '/images/04/Project/BWMUE1.webp', orientation: 'portrait', alt: 'St. Lukas Kirche Black and White' },
      { url: '/images/04/Project/BWMUE2.webp', orientation: 'landscape', alt: 'Love is the answer photograph of Albert Einstein from dad who looks like Einstein' },
      { url: '/images/04/Project/BWMUE3.webp', orientation: 'portrait', alt: 'Pinakothek der Moderne Building abstract' },
      { url: '/images/04/Project/BWMUE4.webp', orientation: 'portrait', alt: 'Lost place Regatterstrecke Munich old stands seats' },
      { url: '/images/04/Project/BWMUE5.webp', orientation: 'portrait', alt: 'Restaurant Train Minna Thiel' },
      { url: '/images/04/Project/BWMUE7.webp', orientation: 'portrait', alt: 'Full Moon 1000mm Night Olympiamountain' },
      { url: '/images/04/Project/BWMUE8.webp', orientation: 'portrait', alt: 'Monopteros in english garden munich' },
      { url: '/images/04/Project/BWMUE9.webp', orientation: 'portrait', alt: 'Dianatempel Hofgarten Statue' },
      { url: '/images/04/Project/BWMUE10.webp', orientation: 'portrait', alt: 'People vibing in garden of Train Minna Thiel' },
    ]
  },
  {
    slug: '05',
    title: 'Munich - Golden Summer',
    linkTitle: 'munich-color',
    coverImage: '/images/05/Cover/MUESO10.webp',
    coverImageAlt: 'Red Sunset Olympiastadion mirror lake',
    orientation: 'landscape',
    images: [
      { url: '/images/05/Project/MUESO1.webp', orientation: 'portrait', alt: 'Frauenkirche chirch 200mm from Marienplatz' },
      { url: '/images/05/Project/MUESO2.webp', orientation: 'landscape', alt: 'Sunset Golden Olympiastadion Olympic Games 1972 Stadion' },
      { url: '/images/05/Project/MUESO3.webp', orientation: 'portrait', alt: 'Red Sunset Olympiastadion mirror lake' },
      { url: '/images/05/Project/MUESO4.webp', orientation: 'portrait', alt: 'Oldtown munich Altbau Street Art' },
      { url: '/images/05/Project/MUESO5.webp', orientation: 'portrait', alt: 'Schloss Nymphenburg golden Sunset lake mirror' },
      { url: '/images/05/Project/MUESO6.webp', orientation: 'portrait', alt: 'Biergarten blurry picture lights people sitting outside' },
      { url: '/images/05/Project/MUESO7.webp', orientation: 'portrait', alt: 'Olympiaturm golden hour two people in front' },
      { url: '/images/05/Project/MUESO8.webp', orientation: 'portrait', alt: 'Alter Rathhausturm Spielzeugmuseum 200mm' },
      { url: '/images/05/Project/MUESO10.webp', orientation: 'landscape', alt: 'Schloss Nymphenburg golden Sunset lake mirror landscape' },
      { url: '/images/05/Project/MUESO11.webp', orientation: 'portrait', alt: 'Sunset Golden Olympiastadion Olympic Games 1972 Stadion with trees infront' },
      { url: '/images/05/Project/MUESO12.webp', orientation: 'portrait', alt: 'englisch garden eisbach trees people enjoying' },
      { url: '/images/05/Project/MUESO13.webp', orientation: 'portrait', alt: 'Schloss Nymphenburg Pagodenburg forrest' },
      { url: '/images/05/Project/MUESO14.webp', orientation: 'portrait', alt: 'Red sky over munich shadows' },
      { url: '/images/05/Project/MUESO15.webp', orientation: 'portrait', alt: 'Flaucher picnic place friends summer' },
      { url: '/images/05/Project/MUESO16.webp', orientation: 'portrait', alt: 'Sunset Golden Olympiastadion architectur' },
      { url: '/images/05/Project/MUESO18.webp', orientation: 'portrait', alt: 'Frauenkirche chirch tower green roof' },
    ]
  },
  {
    slug: '06',
    title: 'Alps - Silence & Stone',
    linkTitle: 'santnerpass',
    coverImage: '/images/06/Cover/ALPSA01.webp',
    coverImageAlt: 'Santnerpass Huette stairways to heaven over clouds',
    orientation: 'portrait',
    images: [
      { url: '/images/06/Project/ALPSA01.webp', orientation: 'portrait', alt: 'Rifugio Passo Santner stairways terrasse view' },
      { url: '/images/06/Project/ALPSA02.webp', orientation: 'portrait', alt: 'Rosengarten Alpine Italy Mountains over clouds' },
    ]
  },
  {
    slug: '03',
    title: 'San Francisco - Golden Gate, Grey Sky',
    coverImage: '/images/03/Cover/SF8.webp',
    coverImageAlt: 'San francisco historic cable cars on road',
    linkTitle: 'San-Francisco',
    orientation: 'portrait',
    images: [
      { url: '/images/03/Project/SF1.webp', orientation: 'portrait', alt: 'Golden Gate bridge from water red bridge golden hour' },
      { url: '/images/03/Project/SF6.webp', orientation: 'portrait', alt: 'Sunset guy walking over street shadows in front of street' },
      { url: '/images/03/Project/SF3.webp', orientation: 'portrait', alt: 'Golden Gate bridge water red bridge evening glow' },
      { url: '/images/03/Project/SF4.webp', orientation: 'portrait', alt: 'Streets of san fransisco walking with dog yellow hat US flag' },
      { url: '/images/03/Project/SF5.webp', orientation: 'portrait', alt: 'Streets of san fransisco cable car driving' },
      { url: '/images/03/Project/SF7.webp', orientation: 'landscape', alt: 'Golden Gate Bridge container ship driving under San Franscisco Sky Line' },
      { url: '/images/03/Project/SF8.webp', orientation: 'portrait', alt: 'San francisco historic cable cars on road' },
    ]
  },
  {
    slug: '01',
    title: 'California - Chasing Magic Lights',
    coverImage: '/images/01/Cover/CA1.webp',
    coverImageAlt: 'Shadows of person on beach during magic sunset',
    linkTitle: 'california',
    orientation: 'portrait',
    images: [
      { url: '/images/01/Project/CA2.webp', orientation: 'portrait', alt: 'Morro Rock Morro Bay mirroring at wet beach' },
      { url: '/images/01/Project/CA3.webp', orientation: 'portrait', alt: 'US Pickup truck barbar shop show truck' },
      { url: '/images/01/Project/CA4.webp', orientation: 'portrait', alt: 'Abandoned planes in Nevada Desert' },
      { url: '/images/01/Project/CA5.webp', orientation: 'portrait', alt: 'Old US car parking at side walk' },
      { url: '/images/01/Project/CA6.webp', orientation: 'portrait', alt: 'Roller Coasters in Los Angeles Santa Monica Pier' },
      { url: '/images/01/Project/CA7.webp', orientation: 'portrait', alt: 'Grafiti painted at Santa Monica Beach at Palms woman posing' },
      { url: '/images/01/Project/CA8.webp', orientation: 'portrait', alt: 'Firetruck at Santa Monica Beach LAFD' },
      { url: '/images/01/Project/CA9.webp', orientation: 'portrait', alt: 'Playing piano at Santa Barbara Pier' },
      { url: '/images/01/Project/CA10.webp', orientation: 'portrait', alt: 'Shadows of person on beach during magic sunset' },
    ]
  },
  {
    slug: '09',
    title: 'China - Between Tradition & Tomorrow',
    linkTitle: 'china',
    coverImage: '/images/09/Cover/CHI01.webp',
    coverImageAlt: 'Night market china selling stuff',
    orientation: 'portrait',
    images: [
      { url: '/images/09/Project/CHI01.webp', orientation: 'portrait', alt: 'Laterns of night market china people blurry of focus' },
      { url: '/images/09/Project/CHI02.webp', orientation: 'portrait', alt: 'Hong Kong backstreet graphity old people hanging around' },
      { url: '/images/09/Project/CHI03.webp', orientation: 'portrait', alt: 'Hong Kong backstreet father helping son fixing bike' },
      { url: '/images/09/Project/CHI04.webp', orientation: 'portrait', alt: 'Shenzen people fishing in river between sky scrapers' },
      { url: '/images/09/Project/CHI05.webp', orientation: 'portrait', alt: 'Shenzen architecture on river side' },
      { url: '/images/09/Project/CHI06.webp', orientation: 'portrait', alt: 'Shanghai skyline girl is posing peace symbol' },
      { url: '/images/09/Project/CHI07.webp', orientation: 'portrait', alt: 'Shenzhen old town delivery guy with parcel' },
      { url: '/images/09/Project/CHI09.webp', orientation: 'portrait', alt: 'Construction worker going home sunset' },
      { url: '/images/09/Project/CHI010.webp', orientation: 'portrait', alt: 'People sitting outside eating traditional food' },
      { url: '/images/09/Project/CHI11.webp', orientation: 'portrait', alt: 'Night market china selling stuff' },
    ]
  },
  {
    slug: '10',
    title: 'Vietnam - Midnight Streets',
    linkTitle: 'vietnam-night',
    coverImage: '/images/10/Cover/VIETN1.webp',
    coverImageAlt: 'Ha Noi night train street father carrying daughter on shoulders mom taking picture',
    orientation: 'portrait',
    images: [
      { url: '/images/10/Project/VIETN0.webp', orientation: 'portrait', alt: 'Ha Noi night train street father carrying daughter on shoulders mom taking picture' },
      { url: '/images/10/Project/VIETN2.webp', orientation: 'portrait', alt: 'Train Street night Hanoi people walking over rails' },
      { url: '/images/10/Project/VIETN3.webp', orientation: 'portrait', alt: 'Night market Da Nang food market midnight' },
      { url: '/images/10/Project/VIETN10.webp', orientation: 'portrait', alt: 'Man is making Bahn Mi street food' },
      { url: '/images/10/Project/VIETN4.webp', orientation: 'portrait', alt: 'Night market Da Nang' },
      { url: '/images/10/Project/VIETN5.webp', orientation: 'portrait', alt: 'Street Food Da Nang' },
      { url: '/images/10/Project/VIETN6.webp', orientation: 'portrait', alt: 'Ho Chi Minh old woman with bycicle' },
      { url: '/images/10/Project/VIETN7.webp', orientation: 'portrait', alt: 'Tet festival Vietnamese flags on street' },
      { url: '/images/10/Project/VIETN8.webp', orientation: 'portrait', alt: 'Train Street Ha Noi vietnamese girl standing on rails' },
      { url: '/images/10/Project/VIETN9.webp', orientation: 'portrait', alt: 'Train Street Ha Noi train is driving through' },

    ]
  },
  {
    slug: '11',
    title: 'Hong Kong - City of Layers',
    linkTitle: 'hong-kong',
    coverImage: '/images/11/Cover/HK1.webp',
    coverImageAlt: 'People queueing for Louis Vuitton in Hong Kong as it would be live essentials',
    orientation: 'portrait',
    images: [
      { url: '/images/11/Project/HK0.webp', orientation: 'portrait', alt: 'People queueing for Louis Vuitton in Hong Kong as it would be live essentials' },
      { url: '/images/11/Project/HK2.webp', orientation: 'portrait', alt: 'People waiting to cross street in Hong Kong' },
      { url: '/images/11/Project/HK3.webp', orientation: 'portrait', alt: 'Night market, traditional laterns' },
      { url: '/images/11/Project/HK4.webp', orientation: 'portrait', alt: 'Street food with crab sign' },
      { url: '/images/11/Project/HK5.webp', orientation: 'portrait', alt: 'People crossing street in Hong Kong' },
      { url: '/images/11/Project/HK6.webp', orientation: 'portrait', alt: 'BVLGARI Store in Hong Kong city of money and rich people' },
      { url: '/images/11/Project/HK7.webp', orientation: 'portrait', alt: 'Students learning mandarin characters' },
    ]
  },
  {
    slug: '12',
    title: 'North Carolina - Infinite Horizons',
    linkTitle: 'north-carolina',
    coverImage: '/images/12/Cover/NC1.webp',
    coverImageAlt: 'Beach situation old Couple is sitting chairs enjoying waves of ocean and young couple is crossing them',
    orientation: 'portrait',
    images: [
      { url: '/images/12/Project/NC2.webp', orientation: 'portrait', alt: 'Freedom in two ways ocean and flying birds and waves' },
      { url: '/images/12/Project/NC3.webp', orientation: 'portrait', alt: 'Old couple is sitting on beach enjoying waves' },
    ]
  },
  {
    slug: '13',
    title: 'Alps - Life',
    linkTitle: 'alps-life',
    coverImage: '/images/13/Cover/AL1.webp',
    coverImageAlt: 'Morning Shadows of Alps',
    orientation: 'portrait',
    images: [
      { url: '/images/13/Project/AL2.webp', orientation: 'portrait', alt: 'Morning shadows of Alps at Tegernsee' },
      { url: '/images/13/Project/AL3.webp', orientation: 'portrait', alt: 'Pink Flower in green alps gras' },
      { url: '/images/13/Project/AL4.webp', orientation: 'portrait', alt: 'Waterfall waterdrops in light' },
      { url: '/images/13/Project/AL5.webp', orientation: 'portrait', alt: 'lake misurina italy yellow school in front of snow mountain' },
      { url: '/images/13/Project/AL6.webp', orientation: 'portrait', alt: 'morning shadows alps first lights over mountains' },
    ]
  },
  {
    slug: '14',
    title: 'Munich - Frozen in Time',
    linkTitle: 'munich-winter',
    coverImage: '/images/14/Cover/MUEWI1.webp',
    coverImageAlt: 'Frauenkirche 1000mm from Olympiaberg cold morning hours',
    orientation: 'landscape',
    images: [
      { url: '/images/14/Project/MUEWI1.webp', orientation: 'landscape', alt: 'Frauenkirche 1000mm from Olympiaberg cold morning hours' },
      { url: '/images/14/Project/MUEWI2.webp', orientation: 'landscape', alt: 'Munich buildings smoke' },
    ]
  },
  {
    slug: '15',
    title: 'Yosemite - Scale of Silence',
    linkTitle: 'yosemite',
    coverImage: '/images/15/Cover/YON04.webp',
    coverImageAlt: 'Half Dome Yosemite Nationalpark',
    orientation: 'landscape',
    images: [
      { url: '/images/15/Project/YON01.webp', orientation: 'portrait', alt: 'University walk' },
      { url: '/images/15/Project/YON02.webp', orientation: 'portrait', alt: 'Yosemite Nationalpark the dome window' },
      { url: '/images/15/Project/YON03.webp', orientation: 'portrait', alt: 'Yosemite Nationalpark landscape' },
      { url: '/images/15/Project/YON04.webp', orientation: 'landscape', alt: 'Half Dome Yosemite Nationalpark light shadows' },
      { url: '/images/15/Project/YON05.webp', orientation: 'portrait', alt: 'Landscape Yosemite' },
      { url: '/images/15/Project/YON06.webp', orientation: 'portrait', alt: 'University' },
    ]
  },
  {
    slug: '16',
    title: 'Art - Shapes',
    linkTitle: 'art',
    coverImage: '/images/16/Cover/ART01.webp',
    coverImageAlt: 'Clouds Black and White',
    orientation: 'portrait',
    images: [
      { url: '/images/16/Project/ART01.webp', orientation: 'portrait', alt: 'Clouds Black and White' },
      { url: '/images/16/Project/ART02.webp', orientation: 'portrait', alt: 'Thunderstorm Clouds Black and White' },
      { url: '/images/16/Project/ART03.webp', orientation: 'portrait', alt: 'Rain Clouds Black and White' },
    ]
  },
  {
    slug: '17',
    title: 'Rome - Layers of History',
    linkTitle: 'rome',
    coverImage: '/images/17/Cover/ROM09.webp',
    coverImageAlt: 'Old man playing instrument on streets black and white',
    orientation: 'portrait',
    images: [
      { url: '/images/17/Project/ROM01.webp', orientation: 'landscape', alt: 'Skyline Rome Dome Cathedral' },
      { url: '/images/17/Project/ROM02.webp', orientation: 'portrait', alt: 'In Burger we trust sign US sign' },
      { url: '/images/17/Project/ROM03.webp', orientation: 'portrait', alt: 'Buildings Rome green trees' },
      { url: '/images/17/Project/ROM04.webp', orientation: 'portrait', alt: 'Edge house trist walls green balcony' },
      { url: '/images/17/Project/ROM05.webp', orientation: 'portrait', alt: 'Old woman gets supported walking from young woman' },
      { url: '/images/17/Project/ROM06.webp', orientation: 'portrait', alt: 'Rome buildings green trees' },
      { url: '/images/17/Project/ROM07.webp', orientation: 'portrait', alt: 'Rome buildings' },
      { url: '/images/17/Project/ROM08.webp', orientation: 'portrait', alt: 'Rome buildings bird view' },
      { url: '/images/17/Project/ROM09.webp', orientation: 'portrait', alt: 'Old man playing instrument on streets black and white' },
      { url: '/images/17/Project/ROM10.webp', orientation: 'portrait', alt: 'Old building Rome cathedral' },
      { url: '/images/17/Project/ROM11.webp', orientation: 'portrait', alt: 'Fence mirroring in water' },
      { url: '/images/17/Project/ROM12.webp', orientation: 'portrait', alt: 'Tree in front of old building' },
      { url: '/images/17/Project/ROM13.webp', orientation: 'portrait', alt: 'Buildings through green trees' },
      { url: '/images/17/Project/ROM14.webp', orientation: 'portrait', alt: 'Vatican inside gold dome' },
    ]
  },
  {
    slug: '18',
    title: 'Vietnam - Rythm of Life',
    linkTitle: 'vietnam-day',
    coverImage: '/images/18/Cover/VIET2.webp',
    coverImageAlt: 'Old lady selling essential vegetables in vietnam',
    orientation: 'portrait',
    images: [
      { url: '/images/18/Project/VIET2.webp', orientation: 'portrait', alt: 'Dog is laying on stairs in front of restaurant' },
      { url: '/images/18/Project/VIET4.webp', orientation: 'portrait', alt: 'Temple during ted child is running away from mother' },
      { url: '/images/18/Project/VIET5.webp', orientation: 'portrait', alt: 'Shoes in front of door on ferry' },
      { url: '/images/18/Project/VIET7.webp', orientation: 'portrait', alt: 'Hoi an boats in river' },
      { url: '/images/18/Project/VIET8.webp', orientation: 'portrait', alt: 'Chicken on scooter' },
      { url: '/images/18/Project/VIET9.webp', orientation: 'portrait', alt: 'Hoi An boats on river during night lights on river' },
      { url: '/images/18/Project/VIET11.webp', orientation: 'portrait', alt: 'Ha Long Bay Boat cruises on river' },
      { url: '/images/18/Project/VIET12.webp', orientation: 'portrait', alt: 'Group of man sitting on ferry ground playing cards' },
      { url: '/images/18/Project/VIET14.webp', orientation: 'portrait', alt: 'Traditional lamps in shop with chair in the middle' },
    ]
  },
]
