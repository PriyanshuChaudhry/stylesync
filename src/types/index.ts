export interface ClothingItem {
  id: string;
  name: string;
  category: ClothingCategory;
  color: string;
  imageUrl: string;
  season: Season[];
}

export type ClothingCategory = 
  | 'tops'
  | 'bottoms'
  | 'shoes'
  | 'accessories'
  | 'outerwear';

export type Season = 'spring' | 'summer' | 'fall' | 'winter';

export interface Outfit {
  id: string;
  items: ClothingItem[];
  liked?: boolean;
}