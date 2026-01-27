
import React, { useState, useEffect, useRef } from 'react';
import { PenTool, CheckCircle, ArrowRight, ShieldCheck, Star, ChevronLeft, ChevronRight, User, Quote, Send } from 'lucide-react';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1590054790395-63ad360ca217?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1558905619-17254263bc89?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
];

const SERVICES = [
  { 
    title: 'Villa Gardens', 
    type: 'Villa',
    desc: 'Creating private sanctuaries with vertical gardens, aromatic paths, and minimalist lawn designs.',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600'
  },
  { 
    title: 'Resort Estates', 
    type: 'Resort',
    desc: 'Large-scale planting, water features, and path lighting for luxury hospitality properties.',
    img: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=600'
  },
  { 
    title: 'Urban Offices', 
    type: 'Office',
    desc: 'Biophilic interior design and terrace gardens to boost employee productivity and wellness.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600'
  },
  { 
    title: 'Minimalist Courtyards', 
    type: 'Villa',
    desc: 'Japanese-inspired zen spaces focused on texture, light, and low-maintenance native species.',
    img: 'https://images.unsplash.com/photo-1582037928867-173811213389?auto=format&fit=crop&q=80&w=600'
  },
  { 
    title: 'Luxury Rooftops', 
    type: 'Office',
    desc: 'High-altitude greenery engineered for wind resistance and optimized for panoramic views.',
    img: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=600'
  }
];

const TESTIMONIALS = [
  {
    name: "Vikram Seth",
    role: "Architect, VS Associates",
    text: "IGO's scientific approach to plant selection saved our project. They understood the coastal soil chemistry perfectly.",
    avatar: "https://i.pravatar.cc/150?u=vikram",
    rating: 5
  },
  {
    name: "Anita Raj",
    role: "Homeowner, ECR Villa",
    text: "My garden looks like a resort. The automated irrigation system they installed works flawlessly even when I'm traveling.",
    avatar: "https://i.pravatar.cc/150?u=anita",
    rating: 5
  },
  {
    name: "Sanjay Gupta",
    role: "Operations Manager, TechPark",
    text: "The indoor bio-design they executed for our lobby has become the highlight of our office. Productivity and morale are up.",
    avatar: "https://i.pravatar.cc/150?u=sanjay",
    rating: 5
  }
];

const Landscape: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filter, setFilter] = useState('All');
  const bookingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredServices = filter === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.type === filter);

  return (
    <div className="bg-white">
      {/* Hero Carousel Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-igo-dark">
        {HERO_IMAGES.map((img, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={img} 
              className="w-full h-full object-cover scale-105 animate-pulse-slow" 
              alt={`Landscape Slide ${idx}`}
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
        
        {/* Carousel Navigation */}
        <button 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)}
          className="absolute left-6 z-20 p-3 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 text-white transition-all hidden md:block"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length)}
          className="absolute right-6 z-20 p-3 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 text-white transition-all hidden md:block"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white w-full">
          <div className="max-w-2xl animate-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">
              Landscape Architecture, <br/>
              <span className="text-igo-lime italic">Perfected.</span>
            </h1>
            <p className="text-xl opacity-90 font-medium mb-10 max-w-lg leading-relaxed">
              We don't just plant trees. We design biological ecosystems engineered to thrive for decades. From sanctuary villas to resort masterplans.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToBooking}
                className="bg-igo-lime text-igo-dark px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-white hover:scale-105 transition-all flex items-center gap-3 shadow-[0_0_40px_rgba(132,204,22,0.3)]"
              >
                Book a Design Consultation <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {HERO_IMAGES.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-igo-lime' : 'w-4 bg-white/30'}`}
            />
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-24">
            <div className="inline-block px-4 py-1 bg-igo-lime/10 text-igo-lime rounded-full text-[10px] font-black uppercase tracking-widest mb-4">Architecture of Nature</div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">Our Design Philosophy</h2>
            <p className="text-gray-500 text-lg font-medium leading-relaxed">
              Every project at IGO follows a rigorous scientific approach combined with high-art aesthetic principles. We bridge the gap between architectural precision and organic growth.
            </p>
        </div>

        {/* Project Filtering */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {['All', 'Villa', 'Resort', 'Office'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border ${
                filter === cat 
                  ? 'bg-igo-dark text-white border-igo-dark shadow-xl' 
                  : 'bg-white text-igo-muted border-gray-100 hover:border-igo-lime hover:text-igo-dark'
              }`}
            >
              {cat === 'All' ? 'All Portfolios' : `${cat} Projects`}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-10">
            {filteredServices.map((s, i) => (
                <div 
                  key={i} 
                  className="group cursor-pointer bg-white rounded-[3rem] p-4 border border-gray-50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                    <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 relative">
                        <img 
                          src={s.img} 
                          alt={s.title} 
                          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                           <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">View Full Gallery</span>
                        </div>
                        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                          {s.type}
                        </div>
                    </div>
                    <div className="px-4 pb-4">
                      <h3 className="text-2xl font-black mb-3 tracking-tighter uppercase">{s.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">{s.desc}</p>
                      <button className="text-igo-lime font-black uppercase text-[10px] tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                        Explore Case Study <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">Why <span className="text-igo-lime">Architects</span> <br/>Choose IGO.</h2>
                  <div className="space-y-8">
                      {[
                          'In-house production of all specimen plants.',
                          'Soil testing and scientific species selection.',
                          'IoT-based irrigation system integration.',
                          'Post-execution maintenance guaranteed.',
                          'PAN-India capability for large deployments.'
                      ].map((item, i) => (
                          <div key={i} className="flex items-center gap-6 group">
                              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-igo-lime transition-colors">
                                <CheckCircle className="text-igo-lime w-6 h-6 group-hover:text-white transition-colors" />
                              </div>
                              <span className="text-lg text-igo-dark font-black uppercase tracking-tight">{item}</span>
                          </div>
                      ))}
                  </div>
              </div>
              <div className="grid grid-cols-2 gap-6 relative">
                  <div className="absolute inset-0 bg-igo-lime/5 blur-[120px] rounded-full"></div>
                  <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col items-center text-center relative z-10 hover:shadow-xl transition-shadow">
                      <ShieldCheck className="w-12 h-12 text-igo-lime mb-6" />
                      <div className="text-5xl font-black tracking-tighter text-igo-dark">100%</div>
                      <div className="text-[10px] uppercase font-black text-gray-400 mt-2 tracking-widest">Completion Rate</div>
                  </div>
                  <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col items-center text-center relative z-10 hover:shadow-xl transition-shadow mt-12">
                      <Star className="w-12 h-12 text-yellow-500 mb-6" />
                      <div className="text-5xl font-black tracking-tighter text-igo-dark">4.9/5</div>
                      <div className="text-[10px] uppercase font-black text-gray-400 mt-2 tracking-widest">Client Rating</div>
                  </div>
                  <div className="col-span-2 bg-igo-dark text-white p-12 rounded-[3rem] shadow-2xl flex items-center justify-between relative z-10 group overflow-hidden">
                      <div className="relative z-10">
                          <div className="text-6xl font-black tracking-tighter">450+</div>
                          <div className="text-[10px] uppercase font-black text-igo-lime tracking-[0.4em] mt-2">Projects Executed Globally</div>
                      </div>
                      <PenTool className="w-24 h-24 opacity-10 absolute -right-4 -bottom-4 group-hover:rotate-12 transition-transform duration-700" />
                  </div>
              </div>
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 text-igo-lime font-black uppercase text-[10px] tracking-widest">
              <Quote className="w-4 h-4" /> Client Voices
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter">Trust built on Growth.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 flex flex-col justify-between hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                <div className="space-y-6">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-lg text-igo-dark font-medium leading-relaxed italic">"{t.text}"</p>
                </div>
                <div className="mt-12 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-black text-igo-dark uppercase text-xs tracking-widest">{t.name}</div>
                    <div className="text-[10px] text-igo-muted font-bold uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section ref={bookingRef} className="py-32 bg-igo-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1590054790395-63ad360ca217?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Form Background" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">Start Your <br/><span className="text-igo-lime italic">Blueprint.</span></h2>
            <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-md">
              Ready to redefine your space? Fill out the form below to connect with a senior landscape architect from IGO Studio.
            </p>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <ShieldCheck className="text-igo-lime w-6 h-6" />
              </div>
              <span className="text-white text-xs font-black uppercase tracking-widest">NDA Secured & Private</span>
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-igo-muted">Full Name</label>
                  <input type="text" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-igo-lime transition-all outline-none text-sm font-medium" placeholder="Alexander Graham" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-igo-muted">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-igo-lime transition-all outline-none text-sm font-medium" placeholder="alex@domain.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-igo-muted">Project Type</label>
                <select className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-igo-lime transition-all outline-none text-sm font-medium appearance-none">
                  <option>Luxury Villa Garden</option>
                  <option>Resort Masterplan</option>
                  <option>Corporate Bio-Design</option>
                  <option>Urban Terrace Garden</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-igo-muted">Brief Message</label>
                <textarea className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-igo-lime transition-all outline-none text-sm font-medium h-32 resize-none" placeholder="Tell us about your vision..."></textarea>
              </div>

              <button className="w-full bg-igo-dark text-white py-6 rounded-2xl font-black uppercase text-xs tracking-[0.4em] hover:bg-igo-lime hover:text-igo-dark transition-all shadow-xl flex items-center justify-center gap-3 group">
                Request Consultation <Send className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landscape;
