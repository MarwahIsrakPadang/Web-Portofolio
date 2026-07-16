import { useMotionValue, useSpring } from "framer-motion";
import { useCallback } from "react";

export function useSpotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = useCallback(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-9999);
    mouseY.set(-9999);
  }, [mouseX, mouseY]);

  return { mouseX: springX, mouseY: springY, handleMouseMove, handleMouseLeave };
}
