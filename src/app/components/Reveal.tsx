"use client";

import React, { useEffect, useRef, FC } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;      // seconds
  duration?: number;   // seconds
  y?: number;
};
const Reveal: FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  duration = 0.75,
  y = 18,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.10, margin: "0px 0px -10% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(inView ? "show" : "hidden");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y, filter: "blur(4px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { delay, duration, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;