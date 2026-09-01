import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  GitBranch,
  Server,
  Smartphone,
} from "lucide-react";

const devSkills = [
  { label: "Frontend", icon: Layout, items: "React, Tailwind, JavaScript", level: 90 },
  { label: "Backend", icon: Server, items: "Node.js, Express, PHP, Laravel", level: 80 },
  { label: "Database", icon: Database, items: "MySQL", level: 75 },
  { label: "Mobile", icon: Smartphone, items: "Flutter", level: 70 },
  { label: "Version Control", icon: GitBranch, items: "Git, GitHub", level: 85 },
  { label: "Lainnya", icon: Code2, items: "REST API, NFC", level: 75 },
];

// Hapus tools

export default function Skills() {
  return (
    <section id="skills" className="pt-0 pb-12 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-violet-400 font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Keahlian
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Teknologi & Tools
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devSkills.map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-violet-500/30 transition-all group"
              >

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <s.icon size={24} className="text-violet-400" />
                </div>
                <h3 className="font-bold text-white text-lg">{s.label}</h3>
              </div>
              <p className="text-slate-400 text-sm">{s.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
