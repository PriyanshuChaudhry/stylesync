import React from 'react';
import { useWardrobe } from '../context/WardrobeContext';
import { ThumbsUp, ThumbsDown, Sparkles } from 'lucide-react';

export default function OutfitGenerator() {
  const { outfits, generateOutfit, toggleOutfitLike } = useWardrobe();

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Outfit Generator</h2>
        <button
          onClick={generateOutfit}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          <Sparkles className="w-5 h-5" />
          Generate Outfit
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {outfits.map(outfit => (
          <div
            key={outfit.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="grid grid-cols-3 gap-2 p-4">
              {outfit.items.map(item => (
                <div key={item.id} className="aspect-square overflow-hidden rounded-md">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {outfit.items.map(item => (
                    <span
                      key={item.id}
                      className="text-sm text-gray-600 capitalize"
                    >
                      {item.category}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleOutfitLike(outfit.id)}
                    className={`p-2 rounded-full ${
                      outfit.liked
                        ? 'bg-green-100 text-green-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <ThumbsUp className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => toggleOutfitLike(outfit.id)}
                    className={`p-2 rounded-full ${
                      outfit.liked === false
                        ? 'bg-red-100 text-red-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <ThumbsDown className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}