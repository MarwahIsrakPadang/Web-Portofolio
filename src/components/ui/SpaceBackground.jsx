import { motion, useScroll, useTransform } from "framer-motion";

export default function SpaceBackground() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#030014]">
      {/* Stars layer */}
      <div className="absolute inset-0 opacity-50">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>
      {/* Nebula layers */}
      <motion.div 
        style={{ y }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-violet-600/10 rounded-full blur-[120px]" 
      />
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 1000], [0, -100]) }}
        className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" 
      />
    </div>
  );
}
