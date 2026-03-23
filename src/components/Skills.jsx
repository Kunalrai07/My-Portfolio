import { motion } from 'framer-motion';
import { 
  SiCplusplus, SiJavascript, SiPython, SiTypescript, SiC, 
  SiReact, SiHtml5, SiTailwindcss, SiTensorflow, SiPytorch, SiFlask,
  SiNodedotjs, SiMongodb, SiMysql,
  SiGit, SiGithub, SiPostman
} from 'react-icons/si';
import { FaJava, FaCss3Alt } from 'react-icons/fa';
import { MonitorSmartphone, Database, Terminal, Code2 } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="text-cyber-cyan" size={24} />,
      items: [
        { name: "C++", Icon: SiCplusplus, color: "#00599C" },
        { name: "Java", Icon: FaJava, color: "#007396" },
        { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
        { name: "Python", Icon: SiPython, color: "#3776AB" },
        { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
        { name: "C", Icon: SiC, color: "#A8B9CC" },
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <MonitorSmartphone className="text-cyber-fuchsia" size={24} />,
      items: [
        { name: "React.js", Icon: SiReact, color: "#61DAFB" },
        { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
        { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
        { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },
        { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
        { name: "Flask", Icon: SiFlask, color: "#ffffff" },
      ]
    },
    {
      title: "Backend & Databases",
      icon: <Database className="text-cyber-cyan" size={24} />,
      items: [
        { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
        { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      ]
    },
    {
      title: "Tools & Cloud",
      icon: <Terminal className="text-cyber-fuchsia" size={24} />,
      items: [
        { name: "Git", Icon: SiGit, color: "#F05032" },
        { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
        { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-cyber-background/50">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

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
              Technical
            </span>{' '}
            <span className="text-glow-fuchsia text-cyber-fuchsia">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-fuchsia to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.5, type: "spring" }}
              className="glass p-6 rounded-2xl border-t border-cyber-border/50 hover:border-cyber-cyan/50 hover:-translate-y-2 transition-all duration-300 relative group overflow-hidden shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 rounded-lg bg-cyber-card border border-cyber-border group-hover:border-cyber-fuchsia/50 shadow-inner md:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-col gap-3 relative z-10">
                {category.items.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg bg-cyber-background/80 border border-cyber-border/40 hover:border-cyber-cyan/40 transition-colors shadow-sm group/item cursor-default"
                  >
                    <skill.Icon size={20} style={{ color: skill.color }} className="drop-shadow-sm group-hover/item:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-cyber-textMuted group-hover/item:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
