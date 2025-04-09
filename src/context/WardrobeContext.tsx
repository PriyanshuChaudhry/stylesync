import React, { createContext, useContext, useState, useCallback } from 'react';
import { ClothingItem, Outfit } from '../types';
import { mockClothes } from '../data/mockData';

interface WardrobeContextType {
  clothes: ClothingItem[];
  outfits: Outfit[];
  addClothingItem: (item: ClothingItem) => void;
  generateOutfit: () => void;
  toggleOutfitLike: (outfitId: string) => void;
  filterClothes: (category: string | null) => ClothingItem[];
}

const WardrobeContext = createContext<WardrobeContextType | undefined>(undefined);

export function WardrobeProvider({ children }: { children: React.ReactNode }) {
  const [clothes, setClothes] = useState<ClothingItem[]>(mockClothes);
  const [outfits, setOutfits] = useState<Outfit[]>([]);

  const addClothingItem = useCallback((item: ClothingItem) => {
    setClothes(prev => [...prev, item]);
  }, []);

  const generateOutfit = useCallback(() => {
    const tops = clothes.filter(item => item.category === 'tops');
    const bottoms = clothes.filter(item => item.category === 'bottoms');
    const shoes = clothes.filter(item => item.category === 'shoes');

    if (!tops.length || !bottoms.length || !shoes.length) return;

    const outfit: Outfit = {
      id: crypto.randomUUID(),
      items: [
        tops[Math.floor(Math.random() * tops.length)],
        bottoms[Math.floor(Math.random() * bottoms.length)],
        shoes[Math.floor(Math.random() * shoes.length)]
      ]
    };

    setOutfits(prev => [...prev, outfit]);
  }, [clothes]);

  const toggleOutfitLike = useCallback((outfitId: string) => {
    setOutfits(prev => 
      prev.map(outfit => 
        outfit.id === outfitId 
          ? { ...outfit, liked: !outfit.liked }
          : outfit
      )
    );
  }, []);

  const filterClothes = useCallback((category: string | null) => {
    if (!category) return clothes;
    return clothes.filter(item => item.category === category);
  }, [clothes]);

  return (
    <WardrobeContext.Provider value={{
      clothes,
      outfits,
      addClothingItem,
      generateOutfit,
      toggleOutfitLike,
      filterClothes
    }}>
      {children}
    </WardrobeContext.Provider>
  );
}

export function useWardrobe() {
  const context = useContext(WardrobeContext);
  if (context === undefined) {
    throw new Error('useWardrobe must be used within a WardrobeProvider');
  }
  return context;
}