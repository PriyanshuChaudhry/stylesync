import { ClothingItem } from '../types';

export const mockClothes: ClothingItem[] = [
  {
    id: '1',
    name: 'White T-Shirt',
    category: 'tops',
    color: 'white',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    season: ['spring', 'summer']
  },
  {
    id: '2',
    name: 'Blue Jeans',
    category: 'bottoms',
    color: 'blue',
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
    season: ['spring', 'fall']
  },
  {
    id: '3',
    name: 'White Sneakers',
    category: 'shoes',
    color: 'white',
    imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
    season: ['spring', 'summer', 'fall']
  },
];