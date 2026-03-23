import { motion } from 'framer-motion';
import { Trophy, Heart, Award } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: "Community Service & Environment",
      description: "Volunteering in NGO for orphans and old age women. Played a vital role in taking the initiative of planting as many plants as possible.",
      icon: <Heart size={24} className="text-cyber-fuchsia" />,
      highlight: "Social Impact",
      date: "Ongoing"
    },
    {
      title: "Analytical Quiz Quest",
      description: "Secured Runner Up position in the School of Computer Science analytical quiz quest.",
      icon: <Award size={24} className="text-cyber-cyan" />,
      highlight: "Runner Up",
      date: "Recent"
    },
    {
      title: "Sports Leadership",
      description: "Served as the Captain of the School Football Team, demonstrating teamwork and leadership skills.",
      icon: <Trophy size={24} className="text-[#FFD700]" />,
      highlight: "Captain",
      date: "2019 - 2020"
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-[120px] pointer-events-none" />

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
              My{' '}
            </span>
            <span className="text-glow-cyan text-cyber-cyan">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              className="glass p-8 rounded-2xl border border-cyber-border hover:border-cyber-cyan/30 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyber-cyan/10 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="w-12 h-12 rounded-xl bg-cyber-card border border-cyber-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-cyber-cyan/50 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                {item.icon}
              </div>

              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyber-cyan/10 px-3 py-1 rounded-full border border-cyber-cyan/20">
                  {item.highlight}
                </span>
                <span className="text-sm text-cyber-textMuted font-medium">
                  {item.date}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-glow-cyan transition-colors">
                {item.title}
              </h3>
              
              <p className="text-cyber-textMain leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
