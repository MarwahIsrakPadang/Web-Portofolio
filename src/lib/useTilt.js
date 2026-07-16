import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { useCallback } from "react";

export function useTilt(rotation = 10) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [rotation, -rotation]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-rotation, rotation]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = useCallback(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const xVal = (e.clientX - rect.left) / rect.width - 0.5;
      const yVal = (e.clientY - rect.top) / rect.height - 0.5;
      x.set(xVal);
      y.set(yVal);
    },
    [x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
}
