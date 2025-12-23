
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=800" 
                alt="Automotive Storytelling" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-cyan-400/10 mix-blend-overlay"></div>
            </div>
            {/* Ambient glows */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-400/10 blur-[100px] rounded-full"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/5 blur-[80px] rounded-full"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-cyan-400 font-black uppercase tracking-[0.3em] text-xs mb-6 block">The Vision</span>
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter italic uppercase leading-none">
              Driven by <span className="text-cyan-400">Adrenaline</span> & Vision.
            </h2>
            <div className="space-y-8 text-gray-400 text-xl font-light leading-relaxed max-w-xl">
              <p>
                My name is Thibault, and my life revolves around finding the perfect frame and the roar of a high-performance engine. What started as a passion for automotive photography has evolved into a full-service creative studio.
              </p>
              <p>
                I believe every brand possesses its own unique energy. My mission is to make that energy tangible. By merging technical precision with an artistic eye for storytelling, I create content that isn't just viewed—it's experienced.
              </p>
              <p>
                Whether it's a cinematic car feature or a high-end commercial shoot, I capture the speed, power, and emotion that your brand truly deserves.
              </p>
            </div>
            
            <div className="mt-14 flex items-center space-x-12">
                <div>
                    <div className="text-4xl font-black text-white italic">50+</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mt-1">Projects</div>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div>
                    <div className="text-4xl font-black text-white italic">100%</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mt-1">Focus</div>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div>
                    <div className="text-4xl font-black text-white italic">PRO</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mt-1">Gear</div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
