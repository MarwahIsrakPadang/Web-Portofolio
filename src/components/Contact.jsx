import { Mail, ExternalLink, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { reveal, revealLeft } from "../lib/animations";

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
    <section id="contact" className="py-10 px-6 relative">
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
            Contact
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary leading-[1.2]">
            Let's Work<br />Together
          </h2>
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={reveal}
          className="text-secondary text-center mb-6 max-w-md mx-auto"
        >
          Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={revealLeft}
          className="grid grid-cols-2 gap-4 max-w-lg mx-auto"
        >
          <a
            href="https://www.instagram.com/marwahpadang/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 text-sm text-primary hover:border-accent hover:shadow-md hover:shadow-violet-500/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
              <InstagramIcon size={17} className="text-accent shrink-0" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-secondary">Instagram</p>
              <p className="text-sm font-medium text-primary truncate">marwahpadang</p>
            </div>
            <ExternalLink size={13} className="text-secondary shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="https://github.com/MarwahIsrakPadang"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 text-sm text-primary hover:border-accent hover:shadow-md hover:shadow-violet-500/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
              <GithubIcon size={17} className="text-accent shrink-0" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-secondary">GitHub</p>
              <p className="text-sm font-medium text-primary truncate">@MarwahIsrakPadang</p>
            </div>
            <ExternalLink size={13} className="text-secondary shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <div className="group flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 text-sm text-primary">
            <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
              <Mail size={17} className="text-accent shrink-0" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-secondary">Email</p>
              <p className="text-sm font-medium text-primary truncate">marwahpadang27@gmail.com</p>
            </div>
          </div>

          <div className="group flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 text-sm text-primary">
            <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
              <MapPin size={17} className="text-accent shrink-0" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-secondary">Location</p>
              <p className="text-sm font-medium text-primary">Indonesia</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
