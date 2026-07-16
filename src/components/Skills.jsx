import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Database,
  Layout,
  GitBranch,
  Server,
  Smartphone,
  Terminal,
  Globe,
  PenTool,
  Container,
} from "lucide-react";
import { reveal } from "../lib/animations";
import { useTilt } from "../lib/useTilt";

const devSkills = [
  { label: "Frontend", icon: Layout, items: "React, Tailwind, JavaScript", level: 90 },
  { label: "Backend", icon: Server, items: "Node.js, Express, PHP, Laravel", level: 80 },
  { label: "Database", icon: Database, items: "MySQL", level: 75 },
  { label: "Mobile", icon: Smartphone, items: "Flutter", level: 70 },
  { label: "Version Control", icon: GitBranch, items: "Git, GitHub", level: 85 },
  { label: "Lainnya", icon: Code2, items: "REST API, NFC", level: 75 },
];

const tools = [
  { icon: Terminal, label: "VS Code" },
  { icon: Terminal, label: "Postman" },
  { icon: GitBranch, label: "Git" },
  { icon: Globe, label: "Vite" },
  { icon: Container, label: "Laragon" },
  { icon: PenTool, label: "Figma" },
];

function SkillBar({ level, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
      />
    </div>
  );
}

function SkillCard({ skill, index }) {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt(6);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      variants={reveal}
      style={{ perspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:shadow-violet-500/5 transition-shadow duration-300"
    >
      <motion.div style={{ rotateX, rotateY }} className="p-4 flex flex-col gap-2 origin-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
            <skill.icon size={20} className="text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-primary">{skill.label}</h3>
            <p className="text-xs text-secondary">{skill.items}</p>
          </div>
        </div>
        <SkillBar level={skill.level} delay={index * 0.1} />
        <span className="text-xs text-secondary text-right">{skill.level}%</span>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-10 px-6">
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
            My Skills
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary leading-[1.2]">
            Technologies &<br />Tools I Use
          </h2>
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={reveal}
          className="text-secondary text-center mb-6"
        >
          Teknologi yang saya kuasai.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {devSkills.map((s, i) => (
            <SkillCard key={s.label} skill={s} index={i} />
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={reveal}
        >
          <h3 className="text-lg font-semibold text-primary text-center mb-6">
            Development Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-secondary hover:border-accent hover:text-accent hover:bg-accent/5 hover:shadow-sm transition-all"
              >
                <t.icon size={16} />
                <span className="font-medium">{t.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
