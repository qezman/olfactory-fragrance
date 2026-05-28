"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function FloatingPerfume() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const rotateY = useTransform(smoothX, [-300, 300], [-20, 20]);
  const rotateX = useTransform(smoothY, [-300, 300], [20, -20]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-[430px]
          h-[430px]
          rounded-full
          border
          border-cyan-300/20
        "
      />

      {/* Perfume */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.05,
        }}
        className="relative z-20"
      >
        <Image
          src="/perfume-2.png"
          alt="Perfume"
          width={420}
          height={520}
          priority
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}
