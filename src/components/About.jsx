import { motion } from "framer-motion";
import { Code2, Sparkles, Target, Zap } from "lucide-react";

  const highlights = [
    { icon: Code2, text: "Pengembangan Frontend & Backend" },
    { icon: Target, text: "Fokus pada performa & user experience" },
    { icon: Zap, text: "Cepat belajar teknologi baru" },
    { icon: Sparkles, text: "Desain yang bersih & modern" },
  ];

// Hapus tech

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Tentang Saya
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Mengenal Lebih Dekat
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-center max-w-2xl mx-auto mb-16 leading-relaxed text-lg"
        >
          Saya seorang developer yang fokus membangun web dan aplikasi modern
          dengan pengalaman di Flutter, Laravel, React, Node.js, dan berbagai teknologi lainnya.
          Saya senang belajar hal baru dan menciptakan solusi yang bermanfaat.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {highlights.map((h, i) => (
            <motion.div
              key={h.text}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-violet-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                <h.icon size={24} className="text-violet-400" />
              </div>
              <span className="text-slate-200 font-medium">{h.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
