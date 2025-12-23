
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Adobe Premiere Pro', level: 95, color: 'bg-cyan-600' },
  { name: 'After Effects', level: 85, color: 'bg-cyan-500' },
  { name: 'DaVinci Resolve', level: 90, color: 'bg-cyan-400' },
  { name: 'Photoshop', level: 80, color: 'bg-cyan-700' },
  { name: 'Automotive Photography', level: 98, color: 'bg-zinc-800' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-zinc-50 text-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 italic uppercase">My Technical Arsenal</h2>
            <div className="w-24 h-2 bg-cyan-400 mx-auto"></div>
          </div>

          <div className="space-y-14">
            {skills.map((skill, index) => (
              <div key={skill.name} className="relative">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-2xl font-black uppercase italic tracking-widest">{skill.name}</span>
                  <span className="text-sm font-bold text-gray-400 tracking-widest">{skill.level}% Expertise</span>
                </div>
                <div className="h-5 bg-gray-200 rounded-full overflow-hidden border border-gray-100 p-0.5 shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    className={`h-full ${skill.color} rounded-full relative shadow-md`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30"></div>
                  </motion.div>
                </div>
                {/* Visual gauge detail */}
                <div className="mt-2 flex space-x-1">
                    {[...Array(40)].map((_, i) => (
                        <div key={i} className={`h-1.5 w-1 rounded-sm ${i/40 * 100 < skill.level ? 'bg-cyan-400/40' : 'bg-gray-200'}`}></div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 p-10 rounded-[3rem] bg-zinc-950 text-white flex flex-col md:flex-row items-center justify-between border border-white/5 shadow-2xl">
            <div className="mb-8 md:mb-0 text-center md:text-left">
                <h4 className="text-3xl font-black italic uppercase mb-3 text-cyan-400 tracking-tighter">My Tech Stack</h4>
                <p className="text-gray-400 font-light text-lg">Industry standard tools for world-class results.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {['Sony Alpha 7S III', 'DJI Ronin RS3', 'Adobe CC', 'Atomos Ninja'].map(item => (
                    <span key={item} className="px-5 py-3 bg-white/5 rounded-xl text-xs font-black uppercase tracking-widest border border-white/10 hover:border-cyan-400 transition-all cursor-default">{item}</span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
