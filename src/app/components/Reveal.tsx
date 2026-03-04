"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;      // seconds
  duration?: number;   // seconds
  y?: number;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: (custom: { delay: number; duration: number }) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: custom.delay,
      duration: custom.duration,
      ease: [0.16, 1, 0.3, 1], // smoother than before
    },
  }),
};

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.75,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      custom={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
}