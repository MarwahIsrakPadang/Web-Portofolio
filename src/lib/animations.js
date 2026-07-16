const DURATION = 0.5;

export const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, delay: i * 0.1 },
  }),
};

export const revealLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: DURATION, delay: i * 0.1 },
  }),
};

export const revealRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: DURATION, delay: i * 0.1 },
  }),
};

export const revealScale = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION, delay: i * 0.1 },
  }),
};

export const glowVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, delay: i * 0.3, ease: "easeOut" },
  }),
};
