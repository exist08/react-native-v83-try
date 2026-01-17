import { atom } from 'jotai';
import type { Category } from '../types/places';
import {
  BhadbhadaWaterfall,
  ChandSilverWaterfall,
  JharKhandiCover,
  JhojaWaterfall,
  JungleCover,
  KhitouliDam,
  KudiyaGhatChillCover,
  KudiyaGhatCover,
  MadhkoleshwarCover,
  MahanadiPathwari,
  ParselMHCover,
  PathraCover,
  RailwayBridgeCover,
  RohaniyaTreeCover,
  TharkaTankCover,
  VGarhKila,
} from '../utils/AllImages';
import { Camera, Drop, Money3 } from 'iconsax-react-nativejs';

const categoriesData: Category[] = [
  {
    id: '1',
    title: 'SELFIE POINTS',
    icon: Camera,
    bgImg: 'https://images.pexels.com/photos/4552994/pexels-photo-4552994.jpeg',
    items: [
      {
        id: 1,
        title: 'Kudiya Ghat',
        subtitle: 'A peaceful riverside escape',
        description:
          'The lush green grass, tall trees, and vibrant wildflowers create a colorful natural canvas. The gentle flow of the river produces a calming rhythm, making the place perfect for relaxed selfies and quiet moments close to nature.',
        tags: ['chill', 'riverside', 'breeze', 'nature', 'peaceful', 'greenery'],
        image: KudiyaGhatCover,
      },
      {
        id: 2,
        title: 'Badwara Bridge',
        subtitle: 'Where structure meets scenery',
        description:
          'This iconic bridge offers a striking contrast between solid architecture and flowing water below. With open skies and passing trains, it’s a dramatic yet calm spot ideal for aesthetic photography.',
        tags: ['bridge', 'architecture', 'aesthetic', 'travel', 'photography'],
        image: RailwayBridgeCover,
      },
      {
        id: 3,
        title: 'Rohaniya Tree',
        subtitle: 'A silent giant of nature',
        description:
          'Standing tall and timeless, the Rohaniya Tree feels like a natural landmark. Its massive branches and shade create a serene environment deeply connected to nature.',
        tags: ['tree', 'nature', 'calm', 'heritage', 'shade'],
        image: RohaniyaTreeCover,
      },
      {
        id: 4,
        title: 'Badwara-Majhangwa Jungle',
        subtitle: 'Into the wild green',
        description:
          'Dense greenery, chirping birds, and filtered sunlight define this jungle stretch. Every step feels adventurous and raw.',
        tags: ['jungle', 'wild', 'adventure', 'forest', 'explore'],
        image: JungleCover,
      },
    ],
  },
  {
    id: '2',
    title: 'Waterfalls',
    icon: Drop,
    bgImg: 'https://images.pexels.com/photos/35631320/pexels-photo-35631320.jpeg',
    items: [
      {
        id: 1,
        title: 'Chand Silver',
        subtitle: 'A shimmering natural cascade',
        description:
          'Water flows gracefully over rocks, reflecting sunlight like silver threads. The sound and scenery instantly refresh the mind.',
        tags: ['waterfall', 'fresh', 'nature', 'scenic', 'relax'],
        image: ChandSilverWaterfall,
      },
      {
        id: 2,
        title: 'Johja Waterfall',
        subtitle: 'Nature’s roaring beauty',
        description:
          'A powerful waterfall surrounded by lush greenery. Rising mist and roaring water create an unforgettable experience.',
        tags: ['waterfall', 'mist', 'powerful', 'nature', 'monsoon'],
        image: JhojaWaterfall,
      },
      {
        id: 3,
        title: 'Khitouli Dam',
        subtitle: 'Calm waters, endless horizon',
        description:
          'The vast water body reflects the sky beautifully, offering peaceful views especially during sunrise and sunset.',
        tags: ['dam', 'calm', 'sunset', 'water', 'peaceful'],
        image: KhitouliDam,
      },
      {
        id: 4,
        title: 'Bhadbhada Waterfall',
        subtitle: 'A forest-hidden gem',
        description:
          'Nestled within dense forest, this waterfall feels secret and untouched, surrounded by cool air and greenery.',
        tags: ['waterfall', 'forest', 'hidden-gem', 'cool', 'green'],
        image: BhadbhadaWaterfall,
      },
    ],
  },
  {
    id: '3',
    title: 'Historical Figures',
    icon: Money3,
    bgImg: 'https://images.pexels.com/photos/35641104/pexels-photo-35641104.jpeg',
    items: [
      {
        id: 1,
        title: 'Vijayraghavgarh Kila',
        subtitle: 'Echoes of royal history',
        description:
          'An ancient fort standing tall with stories of royalty, battles, and heritage etched into its walls.',
        tags: ['history', 'fort', 'heritage', 'royal', 'architecture'],
        image: VGarhKila,
      },
      {
        id: 2,
        title: 'Khitouli Dam',
        subtitle: 'Engineering meets legacy',
        description:
          'Beyond utility, this structure represents regional development and historical significance.',
        tags: ['history', 'dam', 'engineering', 'landmark'],
        image: KhitouliDam,
      },
      {
        id: 3,
        title: 'Jharkhandi Kila',
        subtitle: 'A forgotten fortress',
        description:
          'Silent corridors and broken walls give this fort a mysterious charm, perfect for explorers.',
        tags: ['fort', 'ancient', 'mystery', 'heritage', 'explore'],
        image: JharKhandiCover,
      },
      {
        id: 4,
        title: 'Madhkoleshwar Mandir',
        subtitle: 'Sacred and serene',
        description:
          'A peaceful temple surrounded by calmness, ideal for prayer, meditation, and reflection.',
        tags: ['temple', 'spiritual', 'peace', 'devotion', 'heritage'],
        image: MadhkoleshwarCover,
      },
    ],
  },
  {
    id: '4',
    title: 'Rivers',
    bgImg: 'https://images.pexels.com/photos/35640659/pexels-photo-35640659.jpeg',
    items: [
      {
        id: 1,
        title: 'Mahanadi Parsel',
        subtitle: 'Flowing life and calm',
        description:
          'Gentle river flow with cool breezes, perfect for relaxing and enjoying nature’s rhythm.',
        tags: ['river', 'calm', 'breeze', 'nature', 'peaceful'],
        image: ParselMHCover,
      },
      {
        id: 2,
        title: 'Mahanadi Pathwari',
        subtitle: 'A scenic river stretch',
        description:
          'Wide riverbanks and flowing water create a beautiful landscape ideal for walks and photography.',
        tags: ['river', 'scenic', 'nature', 'relax', 'photography'],
        image: MahanadiPathwari,
      },
    ],
  },
  {
    id: '5',
    title: 'Chill Spot',
    bgImg: 'https://images.pexels.com/photos/2888108/pexels-photo-2888108.jpeg',
    items: [
      {
        id: 1,
        title: 'Kudiya Ghat',
        subtitle: 'Slow moments by the river',
        description:
          'Soft winds and flowing water make this spot perfect for relaxing and unwinding.',
        tags: ['chill', 'river', 'breeze', 'peace', 'hangout'],
        image: KudiyaGhatChillCover,
      },
      {
        id: 2,
        title: 'Jojha Waterfall',
        subtitle: 'Cool air, calm mind',
        description:
          'Refreshing mist and greenery uplift your mood and cool the surroundings instantly.',
        tags: ['chill', 'waterfall', 'cool', 'refreshing'],
        image: JhojaWaterfall,
      },
      {
        id: 3,
        title: 'Pathra Pond',
        subtitle: 'Still waters, clear thoughts',
        description:
          'A quiet pond reflecting the sky, offering silence and peace for calm moments.',
        tags: ['pond', 'calm', 'silent', 'nature', 'relax'],
        image: PathraCover,
      },
      {
        id: 4,
        title: 'Tharka Tank',
        subtitle: 'Open skies and calm waters',
        description:
          'A wide water tank perfect for evening visits, especially beautiful during sunset.',
        tags: ['tank', 'sunset', 'calm', 'chill', 'nature'],
        image: TharkaTankCover,
      },
    ],
  },
];

export const categoriesAtom = atom<Category[]>(categoriesData);

