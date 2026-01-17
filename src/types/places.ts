import type { ImageSourcePropType } from 'react-native';
import type { Icon } from 'iconsax-react-nativejs';

export interface PlaceItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: ImageSourcePropType;
}

export interface Category {
  id: string;
  title: string;
  icon?: Icon;
  bgImg: string;
  items: PlaceItem[];
}

