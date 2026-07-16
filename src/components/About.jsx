import { motion } from "framer-motion";
import { Code2, Sparkles, Target, Zap } from "lucide-react";
import { reveal, revealLeft, revealRight } from "../lib/animations";

const highlights = [
  { icon: Code2, text: "Frontend & Backend Development" },
  { icon: Target, text: "Fokus pada performa & user experience" },
  { icon: Zap, text: "Cepat belajar teknologi baru" },
  { icon: Sparkles, text: "Desain yang bersih & modern" },
];

const tech = [
  "Laravel", "React", "JavaScript", "Tailwind CSS", "Node.js",
  "Express", "MySQL", "Flutter", "Git",
];

export default function About() {
  return (
    <section id="about" className="py-10 px-6 relative">
      <div className="section-divider mb-8" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="text-center mb-4"
        >
          <p className="text-sm font-medium text-accent tracking-[0.2em] uppercase mb-2">
            About
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary leading-[1.2]">
            Get to Know<br />Me Better
          </h2>
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={reveal}
          className="text-secondary text-center max-w-xl mx-auto mb-6 leading-relaxed"
        >
          Saya seorang developer yang fokus membangun web dan aplikasi moderen
          dengan pengalaman di Fluter, Laravel, React, Node.js, dan berbagai teknologi lainnya.
          Saya senang belajar hal baru dan menciptakan solusi yang bermanfaat.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.text}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={i % 2 === 0 ? revealLeft : revealRight}
              className="flex items-center gap-3 bg-card border border-border rounded-xl p-3 hover:border-accent/40 hover:shadow-sm hover:shadow-violet-500/5 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                <h.icon size={18} className="text-accent" />
              </div>
              <span className="text-sm text-primary font-medium">{h.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={reveal}
          className="flex flex-wrap justify-center gap-3"
        >
          {tech.map((t) => (
            <span
              key={t}
              className="bg-card border border-border text-sm text-secondary px-4 py-2 rounded-full hover:border-accent hover:text-accent hover:bg-accent/5 transition-all"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
