import { useState, useEffect, useCallback } from "react";

const roles = [
  "Full-Stack Developer",
  "Web & Mobile Developer",
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE = 2000;

export function useTypewriter() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = roles[roleIndex];

    if (isDeleting) {
      setText(current.substring(0, text.length - 1));
    } else {
      setText(current.substring(0, text.length + 1));
    }
  }, [roleIndex, isDeleting, text]);

  useEffect(() => {
    const current = roles[roleIndex];
    const shouldDelete = !isDeleting && text === current;
    const shouldType = isDeleting && text === "";

    if (shouldDelete) {
      const timeout = setTimeout(() => setIsDeleting(true), PAUSE);
      return () => clearTimeout(timeout);
    }

    if (shouldType) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const timeout = setTimeout(tick, speed);
    return () => clearTimeout(timeout);
  }, [text, roleIndex, isDeleting, tick]);

  return { text, cursor: true };
}
