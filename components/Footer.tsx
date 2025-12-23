
import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-black tracking-tighter mb-6 block text-white">
              THEOBALT <span className="text-cyan-400">VISUALS</span>
            </a>
            <p className="text-gray-500 font-light max-w-sm mb-8 leading-relaxed">
              Pioneering the intersection of aesthetics and efficiency. I build world-class visual assets and digital frameworks for industry leaders.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Linkedin, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-sm">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-500 hover:text-cyan-400 transition-colors">My Services</a></li>
              <li><a href="#portfolio" className="text-gray-500 hover:text-cyan-400 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-cyan-400 transition-colors">Contact Me</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">My Philosophy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Copyright 2025</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 font-medium">© 2025 THEOBALT Visuals. All rights reserved.</p>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Available for new projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
