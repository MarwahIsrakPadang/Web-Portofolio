import { motion } from "framer-motion";
import { SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiPhp, SiLaravel, SiMysql, SiFlutter, SiGit, SiJavascript } from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "PHP", icon: SiPhp },
  { name: "Laravel", icon: SiLaravel },
  { name: "MySQL", icon: SiMysql },
  { name: "Flutter", icon: SiFlutter },
  { name: "Git", icon: SiGit },
  { name: "JavaScript", icon: SiJavascript },
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
            <tech.icon className="w-6 h-6" />
            {tech.name}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

