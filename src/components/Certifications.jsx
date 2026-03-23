import { motion } from 'framer-motion';
import { Award, CheckCircle2, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google",
      date: "Sep 2024",
      skills: ["Networking Fundamentals", "TCP/IP", "DNS"],
      link: "/The Bits and Bytes of Computer Networking.pdf"
    },
    {
      title: "Center for Professional Enhancement",
      issuer: "Lovely Professional University",
      date: "Jul 2025",
      skills: ["Data Structures", "Algorithms", "Problem Solving"],
      link: "/Summer Training Certificate.pdf"
    },
    {
      title: "28 Days Dynamic Programming Training",
      issuer: "Skill Stone",
      date: "Jun 2025",
      skills: ["Dynamic Programming", "Recursion", "Optimization"],
      link: null
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      issuer: "IBM",
      date: "Sep 2024",
      skills: ["OS Concepts", "Hardware", "Linux"],
      link: "/Introduction to Hardware and Operating Systems.pdf"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyber-fuchsia/5 rounded-full blur-[120px] pointer-events-none" />

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
              Training &
            </span>{' '}
            <span className="text-glow-cyan text-cyber-cyan">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto border-l-2 border-cyber-border/40 pl-8 relative">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              className="mb-12 relative group"
            >
              <div className="absolute -left-[45px] top-1 p-1 bg-cyber-background border-2 border-cyber-border rounded-full group-hover:border-cyber-cyan group-hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] transition-all duration-300">
                <CheckCircle2 size={24} className="text-cyber-cyan/50 group-hover:text-cyber-cyan transition-colors" />
              </div>

              <div className="glass p-6 rounded-2xl border-l-[3px] border-l-transparent group-hover:border-l-cyber-cyan transition-all duration-300 transform group-hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,229,255,0.05)]">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Award size={24} className="text-cyber-fuchsia hidden md:inline-block" />
                    {cert.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-cyber-cyan/10 text-cyber-cyan text-sm font-semibold border border-cyber-cyan/20">
                    {cert.date}
                  </span>
                </div>
                
                <p className="text-lg text-cyber-textMain mb-4">
                  {cert.issuer}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-xs tracking-wider uppercase font-medium text-cyber-textMuted bg-cyber-background px-2 py-1 rounded border border-cyber-border/30 group-hover:border-cyber-cyan/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cyber-cyan hover:text-white transition-colors mt-2 font-medium"
                  >
                    View Certificate <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
