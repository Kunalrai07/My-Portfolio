import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter, Target } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio Contact Inquiry");
    const body = encodeURIComponent("Hello Kunal, I would like to get in touch regarding...");
    window.location.href = `mailto:kunalrai007@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyber-cyan/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyber-fuchsia/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyber-textMuted">Let's </span>
            <span className="text-glow-cyan text-cyber-cyan">Connect</span>
          </h2>
          <p className="text-cyber-textMuted text-lg mb-8 max-w-md">
            I'm currently looking for new opportunities, and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-cyber-textMain hover:text-cyber-cyan transition-colors cursor-pointer group">
              <div className="p-4 bg-cyber-card border border-cyber-border rounded-xl group-hover:border-cyber-cyan/50 shadow-inner group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all">
                <Mail size={24} />
              </div>
              <span className="text-lg font-medium group-hover:text-glow-cyan flex-1 truncate">kunalrai007@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-cyber-textMain hover:text-cyber-fuchsia transition-colors cursor-pointer group">
              <div className="p-4 bg-cyber-card border border-cyber-border rounded-xl group-hover:border-cyber-fuchsia/50 shadow-inner group-hover:shadow-[0_0_15px_rgba(209,0,209,0.3)] transition-all">
                <Linkedin size={24} />
              </div>
              <span className="text-lg font-medium group-hover:text-glow-fuchsia">LinkedIn Profile</span>
            </div>
            <div className="flex items-center gap-4 text-cyber-textMain hover:text-cyber-cyan transition-colors cursor-pointer group">
              <div className="p-4 bg-cyber-card border border-cyber-border rounded-xl group-hover:border-cyber-cyan/50 shadow-inner group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all">
                <Twitter size={24} />
              </div>
              <span className="text-lg font-medium group-hover:text-glow-cyan">Twitter / X</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <form onSubmit={handleSubmit} className="glass border border-cyber-border/60 p-8 rounded-3xl relative overflow-hidden group">
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 via-transparent to-cyber-fuchsia/5 pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <div className="relative">
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="peer w-full bg-transparent border-b-2 border-cyber-border/60 py-2 text-white placeholder-transparent focus:outline-none focus:border-cyber-cyan transition-colors"
                  placeholder="Name"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 -top-5 text-cyber-textMuted text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-cyber-cyan peer-focus:text-sm font-medium"
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="peer w-full bg-transparent border-b-2 border-cyber-border/60 py-2 text-white placeholder-transparent focus:outline-none focus:border-cyber-fuchsia transition-colors"
                  placeholder="Email"
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 -top-5 text-cyber-textMuted text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-cyber-fuchsia peer-focus:text-sm font-medium"
                >
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea 
                  id="message" 
                  rows="4"
                  required
                  className="peer w-full bg-transparent border-b-2 border-cyber-border/60 py-2 text-white placeholder-transparent focus:outline-none focus:border-cyber-cyan transition-colors resize-none"
                  placeholder="Message"
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-0 -top-5 text-cyber-textMuted text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-cyber-cyan peer-focus:text-sm font-medium"
                >
                  Message
                </label>
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-fuchsia text-white font-bold text-lg relative overflow-hidden group flex items-center justify-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Target size={20} /> Initialize Link
                </span>
                
                {/* Sweeping Shine Effect */}
                <span className="absolute top-0 -left-full w-full h-full bg-white/30 transform skew-x-12 group-hover:animate-[shine_0.8s_ease-in-out_forwards]" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      <style jsx="true">{`
        @keyframes shine {
          100% {
            left: 200%;
          }
        }
      `}</style>
    </section>
  );
}
