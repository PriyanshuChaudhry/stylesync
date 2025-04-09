import React, { useState } from 'react';
import { WardrobeProvider } from './context/WardrobeContext';
import WardrobeGrid from './components/WardrobeGrid';
import OutfitGenerator from './components/OutfitGenerator';
import AddItemModal from './components/AddItemModal';
import { Plus } from 'lucide-react';

function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <WardrobeProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">StyleSync</h1>
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Add Item
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-8">
            <WardrobeGrid />
            <OutfitGenerator />
          </div>
        </main>

        <AddItemModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
        />
      </div>
    </WardrobeProvider>
  );
}

export default App;