import React, { useState } from 'react';
import { useWardrobe } from '../context/WardrobeContext';
import { ClothingCategory } from '../types';
import { Filter } from 'lucide-react';

export default function WardrobeGrid() {
  const { filterClothes } = useWardrobe();
  const [activeCategory, setActiveCategory] = useState<ClothingCategory | null>(null);

  const categories: ClothingCategory[] = ['tops', 'bottoms', 'shoes', 'accessories', 'outerwear'];

  const filteredClothes = filterClothes(activeCategory);

  return (
    <div className="p-4">
      <div className="flex items-center gap-4 mb-6 overflow-x-auto pb-2">
        <Filter className="w-5 h-5 text-gray-500" />
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full text-sm ${
            activeCategory === null
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
              activeCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredClothes.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500 capitalize">{item.category}</p>
              <div className="mt-2 flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-gray-600 capitalize">
                  {item.color}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}