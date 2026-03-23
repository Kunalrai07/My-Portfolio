import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-cyber-cyan/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyber-fuchsia/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 mb-6 backdrop-blur-sm"
        >
          <span className="text-cyber-cyan text-sm font-medium tracking-wide block relative">
            <span className="absolute -left-2 top-1.5 w-1 h-1 bg-cyber-cyan rounded-full animate-ping"></span>
            Software Development Engineer & Machine Learning Enthusiast
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-cyber-textMuted text-lg md:text-2xl font-medium mb-4"
        >
          Hello, I'm
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
          className="text-5xl md:text-8xl font-black mb-6 tracking-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyber-cyan to-white text-glow-cyan p-2">
            Kunal Rai
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-cyber-textMuted md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          B.Tech CSE Student at Lovely Professional University.
          Specialized in crafting scalable backends, predictive models, and AI-powered applications.
        </motion.p>
        
        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex gap-6 mb-10"
        >
          <a href="https://github.com/Kunalrai07" target="_blank" rel="noreferrer" className="p-3 glass rounded-full hover:border-cyber-cyan hover:text-cyber-cyan hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all duration-300">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/kunal-rai-4312b5289/" target="_blank" rel="noreferrer" className="p-3 glass rounded-full hover:border-cyber-fuchsia hover:text-cyber-fuchsia hover:shadow-[0_0_15px_rgba(209,0,209,0.4)] transition-all duration-300">
            <Linkedin size={24} />
          </a>
          <a href="#" className="p-3 glass rounded-full hover:border-cyber-cyan hover:text-cyber-cyan hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all duration-300">
            <Twitter size={24} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer px-8 py-4 rounded-xl bg-cyber-cyan text-black font-semibold hover:bg-white transition-all shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer px-8 py-4 rounded-xl border border-cyber-border glass hover:border-cyber-cyan/50 hover:bg-cyber-cyan/10 transition-all text-white font-medium"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <Link to="about" smooth={true} duration={500}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-cyber-textMuted hover:text-cyber-cyan transition-colors"
          >
            <ChevronDown size={32} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
