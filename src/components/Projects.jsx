import { useState, useEffect } from "react";
import { FolderGit2, X } from "lucide-react";
import { motion, useTransform, AnimatePresence } from "framer-motion";
import { projectsData } from "../data/projects";
import { reveal, revealLeft, revealRight } from "../lib/animations";
import { useTilt } from "../lib/useTilt";
import { useSpotlight } from "../lib/useSpotlight";

const tagColors = {
  React: "bg-blue-500/10 text-blue-400",
  "Node.js": "bg-green-500/10 text-green-400",
  Express: "bg-gray-500/10 text-gray-400",
  MySQL: "bg-orange-500/10 text-orange-400",
  NFC: "bg-purple-500/10 text-purple-400",
  PHP: "bg-indigo-500/10 text-indigo-400",
  Bootstrap: "bg-violet-500/10 text-violet-400",
};

function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
    >
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
      >
        <X size={24} />
      </button>
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { rotateX, rotateY, handleMouseMove: tiltMove, handleMouseLeave: tiltLeave } = useTilt(8);
  const { mouseX, mouseY, handleMouseMove: spotMove, handleMouseLeave: spotLeave } = useSpotlight();

  const handleMove = (e) => {
    tiltMove(e);
    spotMove(e);
  };

  const handleLeave = (e) => {
    tiltLeave(e);
    spotLeave(e);
  };

  const spotlight = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(circle at ${x}px ${y}px, rgba(139,92,246,0.08) 0%, transparent 50%)`
  );

  return (
    <>
      <AnimatePresence>
        {lightboxOpen && project.image && (
          <Lightbox
            src={project.image}
            alt={project.title}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={index}
        variants={index % 2 === 0 ? revealLeft : revealRight}
        style={{ perspective: 1200 }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1 transition-all duration-300"
      >
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: spotlight }}
        />

        <motion.div style={{ rotateX, rotateY }} className="origin-center relative z-10">
          <div className="h-40 bg-gradient-to-br from-violet-950 via-slate-900 to-purple-950 flex items-center justify-center relative overflow-hidden">
            {project.image ? (
              <button onClick={() => setLightboxOpen(true)} className="w-full h-full absolute inset-0 cursor-zoom-in">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                />
              </button>
            ) : (
              <FolderGit2 size={40} className="text-accent/30 group-hover:scale-110 group-hover:text-accent/50 transition-all duration-300" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <span className="absolute top-3 left-3 text-5xl font-black text-white/[0.04] select-none">
              #{String(project.id).padStart(2, "0")}
            </span>
            <span className="absolute top-3 right-3 text-[11px] font-semibold text-violet-400/50 uppercase tracking-wider">
              Web
            </span>
          </div>

        <div className="p-4 flex flex-col gap-2">
          <h3 className="text-base font-semibold text-primary leading-snug group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-secondary leading-relaxed flex-1 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                  tagColors[tag] || "bg-slate-500/10 text-slate-400"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-accent hover:text-hover transition-colors pt-2 border-t border-border"
            >
              <FolderGit2 size={13} /> Lihat di GitHub
            </a>
          )}
        </div>
      </motion.div>
    </motion.article>
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-10 px-6 relative">
      <div className="section-divider mb-8" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="text-center mb-6"
        >
          <p className="text-sm font-medium text-accent tracking-[0.2em] uppercase mb-2">
            What I Build
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary leading-[1.2]">
            I Make Incredible<br />Projects
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projectsData.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
