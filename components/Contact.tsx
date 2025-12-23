
import React from 'react';
import { motion } from 'framer-motion';
import { Send, FileDown, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-gray-900 rounded-[4rem] overflow-hidden border border-white/5 flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2 p-16 md:p-20 flex flex-col justify-center bg-black text-white">
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter italic uppercase leading-none">Let's Create<br /><span className="text-cyan-400">Impact.</span></h2>
            <p className="text-xl text-gray-400 font-light mb-12 leading-relaxed">
              Ready to accelerate your brand presence? Send me your project details and I'll get back to you within 24 hours with a custom creative strategy.
            </p>
            
            <div className="space-y-8 mb-16">
                <div className="flex items-center space-x-6 group cursor-pointer">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-cyan-400 transition-all duration-300">
                        <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-black mb-1">Direct Inquiries</p>
                        <a href="mailto:Thibault.caloone@gmail.com" className="text-xl font-bold hover:text-cyan-400 transition-colors">Thibault.caloone@gmail.com</a>
                    </div>
                </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.02, backgroundColor: '#22d3ee' }}
              whileTap={{ scale: 0.98 }}
              href="#" // Path to your resume PDF
              className="flex items-center justify-center space-x-4 px-10 py-6 bg-cyan-500 text-black rounded-3xl font-black uppercase italic tracking-[0.15em] transition-all w-full shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            >
              <FileDown className="w-6 h-6" />
              <span>Download My Resume (PDF)</span>
            </motion.a>
          </div>

          <div className="lg:w-1/2 bg-white p-16 md:p-20 border-l border-gray-100">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-3">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-cyan-400 focus:ring-0 transition-all outline-none font-bold placeholder:text-gray-300 text-black"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-3">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-cyan-400 focus:ring-0 transition-all outline-none font-bold placeholder:text-gray-300 text-black"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-black uppercase tracking-[0.2em] text-cyan-700 mb-3 font-bold">Service Interest</label>
                <div className="relative">
                  <select className="w-full px-6 py-5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-cyan-400 focus:ring-0 transition-all outline-none appearance-none font-black text-black cursor-pointer">
                    <option>Automotive Cinema / Photo</option>
                    <option>Commercial Brand Video</option>
                    <option>Race Weekend Coverage</option>
                    <option>Full Creative Direction</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-3 h-3 border-r-2 border-b-2 border-black rotate-45"></div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-3">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell me about your goals, vehicle, or brand story..."
                  className="w-full px-6 py-5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-cyan-400 focus:ring-0 transition-all outline-none resize-none font-bold placeholder:text-gray-300 text-black"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#111' }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-6 bg-black text-white rounded-3xl font-black uppercase italic tracking-[0.2em] flex items-center justify-center space-x-3 transition-all shadow-2xl"
              >
                <span>Send Inquiry</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
