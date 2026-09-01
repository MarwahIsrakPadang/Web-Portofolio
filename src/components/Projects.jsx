import { useState } from "react";
import { FolderGit2, ExternalLink, X } from "lucide-react";

function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size} className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../data/projects";

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose} className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" 
      />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-slate-900 border border-white/10 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white"><X /></button>
        {project.image_url && <img src={project.image_url} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />}
        <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
        <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>
        <div className="flex gap-4">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-violet-600 rounded-lg text-white text-sm hover:bg-violet-700">
              <GithubIcon size={16} /> GitHub
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={() => onClick(project)}
      className="group cursor-pointer bg-slate-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-violet-500/30 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(139,92,246,0.2)] flex flex-col h-full"
    >
      <div className="aspect-video overflow-hidden">
        {project.image_url ? (
          <img src={project.image_url} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-800/50"><FolderGit2 className="text-slate-700" size={40} /></div>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">{project.title}</h3>
        <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{project.description}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section id="projek" className="py-16 px-6 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((p, i) => <ProjectCard key={p.id} project={p} onClick={setSelectedProject} />)}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  );
}
