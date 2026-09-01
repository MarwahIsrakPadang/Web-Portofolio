import { motion } from "framer-motion";

function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function InstagramIcon({ size = 18, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}


export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-950 relative min-h-[50vh] flex items-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Kontak
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Mari Bekerja Bersama
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-center mb-12 max-w-md mx-auto"
        >
          Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          <a
            href="https://www.instagram.com/marwahpadang/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-violet-500/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
              <InstagramIcon size={24} className="text-violet-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Instagram</p>
              <p className="text-sm font-medium text-white">@marwahpadang</p>
            </div>
          </a>

          <a
            href="https://github.com/MarwahIsrakPadang"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:border-violet-500/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
              <GithubIcon size={24} className="text-violet-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider">GitHub</p>
              <p className="text-sm font-medium text-white">@MarwahIsrakPadang</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
