
import React from 'react';
import { Calendar, UserCheck, ShieldPlus, ChevronRight } from 'lucide-react';

const AMC: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-green-50 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-green-700 font-bold uppercase tracking-widest text-sm mb-4">Elite Garden Services</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Professional Care for <span className="text-green-700 italic">Precious Spaces.</span></h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">Don't let your investment fade. Our AMC plans provide certified agronomists and skilled gardeners to keep your space thriving all year round.</p>
          <div className="flex justify-center">
            <button className="bg-green-700 text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-green-800 transition-all">Request Garden Inspection</button>
          </div>
        </div>
      </section>

      {/* AMC Plans */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { 
              name: 'Essential Care', 
              price: '₹2,500/mo', 
              visits: '2 Visits / Month', 
              features: ['Fertilizing & Nutrients', 'Pruning & Grooming', 'Pest Monitoring', 'Soil Health Check'],
              target: 'Home Balconies & Small Lawns',
              color: 'border-gray-100'
            },
            { 
              name: 'Premium Growth', 
              price: '₹7,500/mo', 
              visits: '4 Visits / Month', 
              features: ['Everything in Essential', 'Seasonal Repotting', 'Disease Management', 'Irrigation Tuning', 'Free Expert Consult (Monthly)'],
              target: 'Villas & Large Private Gardens',
              color: 'border-green-600 ring-2 ring-green-600/20',
              badge: 'Most Popular'
            },
            { 
              name: 'Elite Estate', 
              price: 'Custom Quote', 
              visits: 'Daily/Weekly Care', 
              features: ['Full-time Gardener Placement', 'Bi-weekly Lab Analysis', 'Inventory Management', 'Tech/IoT Monitoring', 'Complete Plant Replacements'],
              target: 'Resorts, Corporate Parks & Large Estates',
              color: 'border-gray-100'
            }
          ].map((plan, i) => (
            <div key={i} className={`p-8 rounded-[2.5rem] border bg-white flex flex-col relative transition-all hover:shadow-2xl ${plan.color}`}>
              {plan.badge && <div className="absolute top-0 right-8 -translate-y-1/2 bg-green-700 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{plan.badge}</div>}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-gray-500 text-sm mb-6">{plan.target}</div>
              <div className="text-4xl font-bold text-gray-900 mb-8">{plan.price}</div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                    <ChevronRight className="w-4 h-4 text-green-600" />
                    {f}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.badge ? 'bg-green-700 text-white hover:bg-green-800' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>Select Plan</button>
            </div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 border-t">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
            <div className="text-center">
                <Calendar className="w-12 h-12 text-green-600 mx-auto mb-6" />
                <h4 className="text-xl font-bold mb-3">Guaranteed Visits</h4>
                <p className="text-gray-500">Digital logs and attendance tracking for every maintenance session.</p>
            </div>
            <div className="text-center">
                <UserCheck className="w-12 h-12 text-green-600 mx-auto mb-6" />
                <h4 className="text-xl font-bold mb-3">Certified Experts</h4>
                <p className="text-gray-500">Gardeners trained in IGO Lab techniques for superior plant longevity.</p>
            </div>
            <div className="text-center">
                <ShieldPlus className="w-12 h-12 text-green-600 mx-auto mb-6" />
                <h4 className="text-xl font-bold mb-3">Replenishment Policy</h4>
                <p className="text-gray-500">If a plant dies under our watch, we replace it for free (Elite Plan).</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AMC;
