import { motion } from "framer-motion";
import profil from "../assets/profil.png";

function GithubIcon({ size = 20, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function InstagramIcon({ size = 20, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const socials = [
  { icon: GithubIcon, href: "https://github.com/MarwahIsrakPadang" },
  { icon: InstagramIcon, href: "https://www.instagram.com/marwahpadang/" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-12 overflow-hidden bg-[#030014]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full pointer-events-none" style={{
        background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.05) 30%, transparent 60%)",
      }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <p className="text-base sm:text-lg text-secondary tracking-wide mb-2">
            Hello, I'm
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] text-primary">
            Marwah<br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Israk Padang
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-end order-1 md:order-2"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-52 h-60 sm:w-60 sm:h-68 md:w-68 md:h-84 lg:w-76 lg:h-96"
          >
            <div className="absolute -top-10 -left-10 -right-10 -bottom-10 rounded-full bg-gradient-to-b from-purple-600/20 via-transparent to-transparent blur-3xl pointer-events-none" />
            <img
              src={profil}
              alt="Marwah Israk Padang"
              className="w-full h-full object-contain object-bottom drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center md:text-right order-3"
        >
          <p className="text-secondary text-sm sm:text-base font-medium tracking-wide mb-1">
            Creative
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-[1.2]">
            <span className="bg-gradient-to-l from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Full-Stack
            </span>
            <br />
            <span className="bg-gradient-to-l from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Developer
            </span>
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute left-6 sm:left-10 bottom-20 flex-col gap-5 items-center hidden md:flex"
      >
        <div className="w-px h-16 bg-gradient-to-b from-purple-500/50 to-transparent" />
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent hover:-translate-y-0.5 transition-all"
          >
            <s.icon size={17} />
          </a>
        ))}
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-purple-500/50" />
      </motion.div>
    </section>
  );
}
