
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-center'; // Note: Lucide React often exports standard icons, let's fix the import
import { Play as PlayIcon } from 'lucide-react';
import { PortfolioItem } from '../types';

const portfolioItems: PortfolioItem[] = [
  { 
    id: 1, 
    title: 'Aero Dynamics | GT3', 
    category: 'Video', 
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800&h=1000' 
  },
  { 
    id: 2, 
    title: 'Peak Performance', 
    category: 'Photo', 
    imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800&h=800' 
  },
  { 
    id: 3, 
    title: 'Monaco Heritage', 
    category: 'Photo', 
    imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800&h=600' 
  },
  { 
    id: 4, 
    title: 'Endurance Spirit', 
    category: 'Video', 
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800&h=1200' 
  },
  { 
    id: 5, 
    title: 'Precision Braking', 
    category: 'Photo', 
    imageUrl: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800&h=1000' 
  },
  { 
    id: 6, 
    title: 'Court Dominance', 
    category: 'Video', 
    imageUrl: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800&h=800' 
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Photo' | 'Video'>('All');

  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-cyan-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Portfolio</span>
            <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter italic uppercase text-white leading-tight">
              The Visual <span className="text-cyan-400">Proof</span>
            </h2>
            <p className="text-xl text-gray-400 font-light">Capturing the raw intensity of high-performance machines and elite athletes.</p>
          </div>
          
          <div className="flex bg-white/5 p-1 rounded-full w-fit border border-white/10 backdrop-blur-md">
            {(['All', 'Photo', 'Video'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2.5 rounded-full text-sm font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                  ? 'bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.4)]' 
                  : 'text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-3xl bg-gray-900 aspect-[4/5] cursor-pointer border border-white/5"
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                
                {item.category === 'Video' && (
                  <div className="absolute top-6 right-6 z-10 w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center text-black shadow-2xl">
                    <PlayIcon className="w-5 h-5 fill-current" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">{item.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-1 uppercase italic tracking-tighter">{item.title}</h3>
                  <div className="h-1 w-12 bg-cyan-400 mt-2 transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
