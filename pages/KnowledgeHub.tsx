
import React from 'react';
import { BookOpen, Search, Filter, ArrowRight } from 'lucide-react';

const KnowledgeHub: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-white py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Growth Center.</h1>
            <p className="text-gray-500">Insights from IGO Lab on plants, landscapes, and agritech.</p>
          </div>
          <div className="w-full md:w-96 relative">
            <input type="text" placeholder="Search articles, guides, tutorials..." className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {[
            { 
              title: 'Top 10 Air-Purifying Plants for Chennai Homes', 
              cat: 'Plant Care', 
              img: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=400',
              read: '5 min read'
            },
            { 
              title: 'How to Build a Sustainable Kitchen Garden', 
              cat: 'Urban Farming', 
              img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=400',
              read: '12 min read'
            },
            { 
              title: 'Understanding Soil pH for Exotic Palms', 
              cat: 'Lab Insights', 
              img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=400',
              read: '8 min read'
            }
          ].map((art, i) => (
            <div key={i} className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="h-60 overflow-hidden relative">
                <img src={art.img} alt={art.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{art.cat}</div>
              </div>
              <div className="p-8">
                <div className="text-xs text-gray-400 font-bold mb-2 uppercase tracking-widest">{art.read}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-green-700 transition-colors">{art.title}</h3>
                <div className="flex items-center text-green-700 font-bold text-sm gap-2">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Browse by Interest</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {['Plant Care 101', 'Landscape Design', 'AgriTech & IoT', 'Pest Control', 'Seasonal Tips', 'Vertical Gardens', 'Indoor Mastery', 'Sustainable Living'].map(cat => (
                    <div key={cat} className="p-8 border border-white/10 rounded-3xl text-center hover:bg-white/5 transition-all cursor-pointer">
                        <div className="text-green-400 mb-4 flex justify-center"><BookOpen /></div>
                        <h4 className="font-bold">{cat}</h4>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeHub;
