
import React, { useState } from 'react';
import { Filter, ShoppingBag, Star, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { Product } from '../types';

const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Monstera Deliciosa', price: 1450, category: 'Indoor', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=400', maintenance: 'Medium', light: 'Indirect', description: 'Classic Swiss Cheese Plant, grown in climate-controlled polyhouses for superior leaf health.' },
  { id: '2', name: 'Fiddle Leaf Fig', price: 2800, category: 'Indoor', image: 'https://images.unsplash.com/photo-1597055181300-e3633a207518?auto=format&fit=crop&q=80&w=400', maintenance: 'High', light: 'Direct', description: 'Architectural statement plant. Highly robust, acclimatized to Indian coastal conditions.' },
  { id: '3', name: 'Zamioculcas Zamiifolia (ZZ)', price: 850, category: 'Indoor', image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&q=80&w=400', maintenance: 'Low', light: 'Shade', description: 'The indestructible office plant. Ultra-low water requirements.' },
  { id: '4', name: 'Areca Palm (Large)', price: 1200, category: 'Outdoor', image: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80&w=400', maintenance: 'Medium', light: 'Direct', description: 'Natural air purifier. Perfect for screening and creating privacy.' },
  { id: '5', name: 'Snake Plant Futura', price: 650, category: 'Indoor', image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=400', maintenance: 'Low', light: 'Shade', description: 'Hardy air purifier that releases oxygen at night.' },
  { id: '6', name: 'Birds of Paradise', price: 3500, category: 'Landscape', image: 'https://images.unsplash.com/photo-1509223197845-458d87318791?auto=format&fit=crop&q=80&w=400', maintenance: 'Medium', light: 'Direct', description: 'Stunning tropical flowers. Ideal for resort-style home gardens.' }
];

interface ShopProps {
  addToCart: () => void;
}

const Shop: React.FC<ShopProps> = ({ addToCart }) => {
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* Search & Categories Bar */}
      <div className="border-b bg-gray-50/50 sticky top-20 z-40 px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {['All', 'Indoor', 'Outdoor', 'Landscape', 'Exotic'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${filter === cat ? 'bg-green-700 text-white shadow-md' : 'bg-white text-gray-600 hover:border-green-200 border border-gray-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:w-64">
              <input type="text" placeholder="Search plants..." className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600 bg-white" />
              <Filter className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 mb-4">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{product.maintenance} Care</span>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); addToCart(); }}
                  className="absolute bottom-4 right-4 bg-white p-4 rounded-2xl shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-green-700 hover:text-white"
                >
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                    <div className="flex items-center text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded">
                        <Star className="w-3 h-3 fill-current mr-1" /> 4.9
                    </div>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                <div className="text-lg font-bold text-green-700 pt-2">₹{product.price.toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Banner */}
      <section className="bg-gray-50 border-t mt-20 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
                <ShieldCheck className="w-12 h-12 text-green-600 mb-4" />
                <h4 className="font-bold text-xl mb-2">Health Guaranteed</h4>
                <p className="text-gray-500 text-sm">Every plant is checked by IGO Lab experts before dispatch.</p>
            </div>
            <div className="flex flex-col items-center">
                <Truck className="w-12 h-12 text-green-600 mb-4" />
                <h4 className="font-bold text-xl mb-2">Safe Pan-India Delivery</h4>
                <p className="text-gray-500 text-sm">Special protective packaging ensures zero leaf damage.</p>
            </div>
            <div className="flex flex-col items-center">
                <RotateCcw className="w-12 h-12 text-green-600 mb-4" />
                <h4 className="font-bold text-xl mb-2">15-Day Free Returns</h4>
                <p className="text-gray-500 text-sm">Not happy with the health? We'll replace it, no questions asked.</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
