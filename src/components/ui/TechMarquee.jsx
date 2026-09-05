import { motion } from "framer-motion";
import { SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiPhp, SiLaravel, SiMysql, SiFlutter, SiGit, SiJavascript } from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
];

export const TechMarquee = () => {
  return (
    <div className="w-full h-24 flex items-center overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <motion.div
        className="flex items-center gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-8 py-4 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-full text-slate-100 text-lg font-medium whitespace-nowrap shadow-sm"
          >
            <tech.icon
              className="w-6 h-6"
              color={tech.color}
            />
            {tech.name}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

