import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full border-t border-cyber-border/30 bg-cyber-background relative overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded border border-cyber-cyan/50 flex items-center justify-center font-display font-bold text-cyber-cyan text-sm cyber-glitch">
            KR
          </div>
          <span className="font-display font-medium text-cyber-textMain tracking-wide">
            KUNAL RAI
          </span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cyber-textMuted text-sm text-center md:text-left"
        >
          Designed & Built by Kunal Rai © {new Date().getFullYear()}. All Rights Reserved.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-4 text-cyber-textMuted text-sm"
        >
          <a href="#" className="hover:text-cyber-cyan hover:text-glow-cyan transition-all">GitHub</a>
          <span className="text-cyber-border">/</span>
          <a href="#" className="hover:text-cyber-fuchsia transition-all">Twitter</a>
          <span className="text-cyber-border">/</span>
          <a href="#" className="hover:text-cyber-cyan hover:text-glow-cyan transition-all">Email</a>
        </motion.div>
      </div>
    </footer>
  );
}
