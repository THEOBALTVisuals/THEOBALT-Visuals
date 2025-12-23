
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* High-Impact Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2000&auto=format&fit=crop" 
          alt="Cinematic Automotive Background" 
          className="w-full h-full object-cover opacity-70 scale-105"
        />
        {/* Overlay for depth and text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60"></div>
      </div>

      <div className="container mx-auto text-center z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.2 }}
             className="mb-8"
          >
            <h2 className="text-xl md:text-2xl font-light tracking-[0.4em] text-white/70 uppercase">THEOBALT Visuals</h2>
          </motion.div>
          
          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter text-white mb-6 leading-none italic uppercase drop-shadow-2xl">
            Feel the energy
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-2xl text-white/60 mb-14 font-light tracking-wide uppercase">
            High-Performance Visual Storytelling & Cinematic Automotive Artistry
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio"
              className="px-12 py-6 bg-white text-black rounded-full font-black text-lg uppercase tracking-widest transition-all w-full sm:w-auto shadow-2xl"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-12 py-6 bg-transparent text-white border-2 border-white/40 rounded-full font-bold text-lg uppercase tracking-widest backdrop-blur-md transition-all w-full sm:w-auto"
            >
              Let's Connect
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Aesthetic bottom transition */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
