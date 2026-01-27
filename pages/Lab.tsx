
import React from 'react';
import { Microscope, Database, Thermometer, Droplets, Zap, ChevronRight, Activity, Cpu } from 'lucide-react';

const Lab: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Lab Header */}
      <section className="bg-igo-dark text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" alt="Tech" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-end gap-10">
            <div className="flex-grow space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-igo-lime rounded text-igo-dark font-black text-[10px] uppercase">Agri-OS Internal v4.0</div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">Precision <br/> <span className="text-igo-lime">Monitoring.</span></h1>
            </div>
            <div className="max-w-md pb-4">
              <p className="text-lg text-gray-400 font-medium">The IGO Lab is the nerve center of our operations. Here, we translate complex biological data into thriving gardens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Dashboard */}
      <section className="max-w-7xl mx-auto px-4 -mt-20 relative z-20 mb-32">
        <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] p-8 md:p-16 border border-gray-100">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { icon: <Thermometer className="w-8 h-8"/>, label: 'Polyhouse Temp', value: '28.4°C', trend: '+0.2°', status: 'Optimal' },
              { icon: <Droplets className="w-8 h-8"/>, label: 'RH% Level', value: '72%', trend: 'Stable', status: 'Balanced' },
              { icon: <Zap className="w-8 h-8"/>, label: 'PAR Photosynthesis', value: '450', trend: '-12', status: 'Peak' },
              { icon: <Activity className="w-8 h-8"/>, label: 'Stomatal Index', value: 'High', trend: 'N/A', status: 'Active' }
            ].map((card, i) => (
              <div key={i} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-igo-lime">{card.icon}</div>
                  <div className="text-[10px] font-black text-green-600 bg-green-50 px-2 py-1 rounded">{card.status}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-black tracking-tighter text-igo-dark">{card.value}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase text-igo-muted tracking-widest">{card.label}</span>
                    <span className={`text-[10px] font-bold ${card.trend.includes('+') ? 'text-green-500' : 'text-gray-400'}`}>{card.trend}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science Focus Areas */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-igo-lime/10 rounded-full blur-3xl"></div>
            <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800" className="rounded-[3rem] relative z-10 shadow-2xl" alt="Lab Work" />
            <div className="absolute -bottom-10 -right-10 bg-igo-dark p-10 rounded-[2.5rem] shadow-2xl z-20 text-white space-y-4 max-w-xs">
              <Cpu className="text-igo-lime w-12 h-12" />
              <h4 className="text-xl font-black uppercase tracking-tighter leading-tight">IoT Sensor Network Integration</h4>
              <p className="text-xs text-gray-400 font-medium">We deploy hardware across every garden we build for remote health monitoring.</p>
            </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl font-black text-igo-dark tracking-tighter uppercase leading-none">Why Science <br/>Matters to your <br/><span className="text-igo-lime">Greenery.</span></h2>
            
            <div className="space-y-10">
              {[
                { title: 'Soil Microbiome R&D', desc: 'We engineer custom substrates using beneficial fungi and bacteria to reduce chemical fertilizer dependency.' },
                { title: 'Climate Acclimatization', desc: 'Every exotic plant species undergoes a 12-week stress test to adapt to Indian coastal humidity levels.' },
                { title: 'Pathogen Early-Warning', desc: 'Automated imaging systems detect pest signatures invisible to the human eye, enabling preventive care.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group cursor-default">
                  <div className="text-4xl font-black text-igo-lime/20 group-hover:text-igo-lime transition-colors">0{i+1}</div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-black uppercase tracking-tighter text-igo-dark">{item.title}</h4>
                    <p className="text-igo-muted font-medium text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Lab CTA */}
      <section className="py-32 bg-gray-50 mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <Microscope className="w-16 h-16 text-igo-dark mx-auto" />
          <h2 className="text-4xl font-black uppercase tracking-tighter">Request a Soil & Lab Audit</h2>
          <p className="text-igo-muted text-lg font-medium">Planning a major landscape project? Our lab can provide detailed site analysis and plant palette verification before you break ground.</p>
          <button className="bg-igo-dark text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-igo-lime hover:text-igo-dark transition-all">Connect with IGO Lab</button>
        </div>
      </section>
    </div>
  );
};

export default Lab;
