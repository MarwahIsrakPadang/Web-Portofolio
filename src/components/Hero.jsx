import { m } from "framer-motion";
import profil from "../assets/profil.png";
import { TechMarquee } from "./ui/TechMarquee";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
// ... rest of the file

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <m.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-16"
      >
        <div className="w-full flex flex-col md:flex-row items-center gap-12 px-6">
          <div className="flex-1 text-center md:text-left space-y-6">
            <m.p variants={itemVariants} className="text-violet-400 font-medium tracking-[0.2em] uppercase text-sm">
              Halo, Saya
            </m.p>
            <m.h1 variants={itemVariants} className="text-6xl md:text-8xl font-extrabold text-white leading-tight">
              Marwah Israk Padang
            </m.h1>
            <m.p variants={itemVariants} className="text-xl text-slate-400 max-w-md mx-auto md:mx-0 font-light">
              Pengembang web dan mobile developer pemula yang fokus pada pengalaman pengguna modern.
            </m.p>
            <m.div variants={itemVariants} className="flex justify-center md:justify-start gap-4 pt-4">
              <a href="#projek" className="px-8 py-3 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-200 transition-all">
                Lihat Projek
              </a>
              <a href="#contact" className="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all">
                Mari Berbincang
              </a>
            </m.div>
          </div>

          <m.div variants={itemVariants} className="relative w-full max-w-[280px]">
            <m.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src={profil} 
              alt="Foto Marwah Israk Padang" 
              width="280" 
              height="595" 
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(139,92,246,0.2)]" 
            />
          </m.div>
        </div>

        <div className="w-full">
          <TechMarquee />
        </div>
      </m.div>
    </section>
  );
}


