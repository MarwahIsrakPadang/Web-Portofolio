import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { reveal, revealLeft } from "../lib/animations";

const experiences = [
  {
    type: "work",
    icon: Briefcase,
    title: "Frontend Developer",
    subtitle: "Proyek Pribadi",
    period: "2025 - Sekarang",
    desc: "Membangun aplikasi web modern menggunakan Flutter, Laravel, React, Tailwind CSS, Node.js, dan berbagai teknologi lainnya.",
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "Teknologi Informasi (TI)",
    subtitle: "Universitas Islam Negeri Ar-Raniry",
    period: "2023 - Sekarang",
    desc: "Mahasiswa aktif program studi Teknologi Informasi (TI) angkatan 2023, semester 7, yang mendalami programming, pengembangan web, dan teknologi informasi.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-10 px-6">
      <div className="section-divider mb-8" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="text-center mb-4"
        >
          <p className="text-sm font-medium text-accent tracking-[0.2em] uppercase mb-2">
            My Journey
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary leading-[1.2]">
            Work Experience<br />& Education
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
          Perjalanan karir dan pendidikan saya.
        </motion.p>

        <div className="relative">
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-border" />

          <div className="flex flex-col gap-6">
            {experiences.map((e, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={revealLeft}
                className="relative pl-14"
              >
                <div className="absolute left-[11px] top-1.5 w-[15px] h-[15px] rounded-full bg-accent border-[3px] border-bg shadow shadow-violet-500/30" />

                <div className="bg-card border border-border rounded-xl p-4 hover:border-accent/40 hover:shadow-sm hover:shadow-violet-500/5 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                        <e.icon size={17} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-primary">{e.title}</h3>
                        <p className="text-xs text-secondary">{e.subtitle}</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-accent bg-violet-500/10 px-2.5 py-1 rounded-full shrink-0 self-start">
                      {e.period}
                    </span>
                  </div>
                  <p className="text-sm text-secondary leading-relaxed">{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
