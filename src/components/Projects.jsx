import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    title: "Trie-based Search Suggestion Engine",
    description: "A real-time, prefix-matching autocomplete suggestion engine. Integrated Wikipedia API for live article summaries combined with local Trie indexing for faster search results.",
    image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=800",
    tech: ["Python", "Flask", "Trie Data Structure", "Wikipedia API", "JSON"],
    githubUrl: "https://github.com/Kunalrai07"
  },
  {
    title: "Crypto AI Bot",
    description: "An LSTM-powered deep learning system designed to predict hourly BTC/ETH price movements using historical trading data. Features end-to-end data processing and model evaluation.",
    image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=800",
    tech: ["Python", "TensorFlow", "NumPy", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/Kunalrai07"
  }
];

const TiltCard = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-[450px] rounded-2xl glass border border-cyber-border/50 overflow-hidden group cursor-pointer"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-10 transition-opacity duration-500 will-change-transform"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-background via-cyber-background/80 to-transparent z-10" />

      {/* Internal border glow */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyber-cyan/30 rounded-2xl transition-all duration-500 z-30 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0)] group-hover:shadow-[inset_0_0_20px_rgba(0,229,255,0.2)]" />

      <div 
        style={{ transform: "translateZ(75px)" }}
        className="absolute inset-0 p-8 flex flex-col justify-end z-20"
      >
        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-cyber-cyan transition-colors">
          {project.title}
        </h3>
        
        <p className="text-cyber-textMuted text-sm md:text-base mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20 rounded">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white glass border border-cyber-border/50 px-4 py-2 rounded-lg hover:text-cyber-cyan hover:border-cyber-cyan/50 transition-colors shadow-[0_0_10px_rgba(0,229,255,0.4)]">
            <Github size={16} /> View Source
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyber-textMuted">
              Featured
            </span>{' '}
            <span className="text-glow-fuchsia text-cyber-fuchsia">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-fuchsia to-transparent mx-auto rounded-full" />
        </motion.div>

        {/* 3D Perspective Container */}
        <div style={{ perspective: "1000px" }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 * idx, duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <TiltCard project={proj} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
