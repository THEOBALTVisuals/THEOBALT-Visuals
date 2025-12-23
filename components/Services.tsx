
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Edit3, Share2, Search, Cpu, Play } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'visuals',
    title: 'Visual Arts',
    description: 'Cinematic videography and high-fashion photography that tells your compelling narrative.',
    icon: <Camera className="w-6 h-6" />,
  },
  {
    id: 'copy',
    title: 'Copywriting',
    description: 'Persuasive storytelling designed to capture attention and drive measurable conversions.',
    icon: <Edit3 className="w-6 h-6" />,
  },
  {
    id: 'social',
    title: 'Social Strategy',
    description: 'Data-driven content planning and distribution to dominate your industry space.',
    icon: <Share2 className="w-6 h-6" />,
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Ranking your content where it matters most, ensuring evergreen organic visibility.',
    icon: <Search className="w-6 h-6" />,
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    description: 'Engineering systems that handle your marketing stack so you can focus on creation.',
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    id: 'post',
    title: 'Premium Editing',
    description: 'Color grading, sound design, and motion graphics that breathe life into raw media.',
    icon: <Play className="w-6 h-6" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-cyan-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block">My Solutions</span>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter italic uppercase text-white leading-tight">
            Ecosystem of <span className="text-cyan-400">Impact</span>
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            I don't just capture images. I build the high-performance infrastructure for your brand's digital legacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-cyan-400/50 transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] group backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white uppercase italic tracking-wider">{service.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
