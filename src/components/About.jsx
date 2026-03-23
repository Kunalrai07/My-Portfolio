import { motion } from 'framer-motion';
import { User, Code, Sparkles, Rocket } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <User className="text-cyber-cyan" size={32} />,
      title: "Who I Am",
      desc: "I'm a B.Tech CSE student at Lovely Professional University, driven by an unyielding curiosity for programming, data structures, and algorithms."
    },
    {
      icon: <Code className="text-cyber-fuchsia" size={32} />,
      title: "What I Do",
      desc: "I specialize in backend development, API integration, and machine learning. I architect systems utilizing Python, NodeJS, and deep learning tools."
    },
    {
      icon: <Sparkles className="text-cyber-cyan" size={32} />,
      title: "My Aesthetic",
      desc: "I believe technology should be beautiful and efficient. I blend complex backends with modern frontend aesthetics to deliver 'wow' moments."
    },
    {
      icon: <Rocket className="text-cyber-fuchsia" size={32} />,
      title: "The Vision",
      desc: "Always pushing boundaries. Currently exploring bleeding-edge AI integrations, Time-Series Modeling, and building scalable full-stack applications."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-cyan/5 rounded-full blur-[120px] pointer-events-none" />

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
              Discover
            </span>{' '}
            <span className="text-glow-cyan text-cyber-cyan">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative group perspective-1000">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan to-cyber-fuchsia rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="/me.jpeg" 
                alt="Kunal Rai" 
                className="relative rounded-3xl w-64 h-80 object-cover border-2 border-cyber-border shadow-2xl transform transition-transform duration-500 group-hover:rotate-x-2 group-hover:rotate-y-[-5deg]"
              />
            </div>
          </motion.div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="glass-card p-6 rounded-2xl group hover:border-cyber-cyan/50 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-cyber-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-cyber-border/50 group-hover:border-cyber-cyan/50 shadow-inner">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyber-cyan transition-colors">
                  {card.title}
                </h3>
                <p className="text-cyber-textMuted text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
