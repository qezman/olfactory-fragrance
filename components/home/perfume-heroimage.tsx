"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { PointerEvent } from "react";

export default function FloatingPerfume() {
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 90,
    damping: 24,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 90,
    damping: 24,
  });

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const imageX = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={{ opacity: 0, scale: 1.04 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center justify-center w-full h-full min-h-full overflow-hidden"
    >
      <motion.div
        style={{
          x: imageX,
          y: imageY,
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={prefersReducedMotion ? undefined : { scale: 1.015 }}
        className="relative z-10 h-full w-full"
      >
        <motion.div
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  scale: [1.03, 1.09, 1.03],
                  y: [-8, 8, -8],
                }
          }
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative h-full w-full"
        >
          <Image
            src="/hero-perfume.png"
            alt="Hero-Perfume"
            fill
            priority
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover p-8 drop-shadow-[0_42px_70px_rgba(26,24,20,0.28)] "
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
