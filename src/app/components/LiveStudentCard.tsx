'use client';

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useMotionValue } from "framer-motion";

const midnightToMorningSlot = [
  0, 0, 0, 0,
  1, 1, 1, 1,
  2, 2, 2, 2,
  3, 3, 3, 3,
  3, 3, 3, 3,
  3, 3, 3, 3,
  3, 3, 3, 3,
  3, 3, 3, 3
];

const daySlot = [
  3, 5, 8, 12, 16, 20, 24, 28,
  32, 36, 40, 44, 48, 52, 56, 60,
  64, 68, 72, 76, 80, 84, 88, 92,
  96, 100, 104, 108, 112, 116, 120, 124,
  128, 132, 136, 140, 143, 145, 146, 148,
  148, 148, 148, 148, 148, 148, 148, 148,
  147, 145, 140, 130, 110, 90, 70, 50,
  35, 20, 10, 5, 3, 3, 3, 3
];

export default function LiveStudentsCard() {
  const baseCount = 2;

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  const motionValue = useMotionValue(0);

  const [liveStudents, setLiveStudents] = useState(baseCount);
  const [displayStudents, setDisplayStudents] = useState(0);

  const getCurrentStudentCount = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    if (hours >= 0 && hours < 8) {
      const time = hours * 60 + minutes;
      const timeSlot = Math.floor(time / 15);
      const studentsToAdd = midnightToMorningSlot[timeSlot] ?? 0;
      return Math.min(5, baseCount + studentsToAdd);
    } else {
      const time = (hours - 8) * 60 + minutes;
      const timeSlot = Math.floor(time / 15);
      const studentsToAdd = daySlot[timeSlot] ?? 3;
      return Math.min(150, Math.max(5, baseCount + studentsToAdd));
    }
  };

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplayStudents(Math.round(latest));
    });

    return () => unsubscribe();
  }, [motionValue]);

  useEffect(() => {
    const updateLiveStudents = () => {
      setLiveStudents(getCurrentStudentCount());
    };

    updateLiveStudents();

    const interval = setInterval(updateLiveStudents, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, liveStudents, {
      duration: 1.2,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, liveStudents, motionValue]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center rounded-2xl bg-[#0A1220] p-10 text-center shadow-inner"
    >
      <div
        className="text-[170px] font-semibold bg-linear-to-br from-[#93E8FF] to-[#4CACFF] bg-clip-text text-transparent
        drop-shadow-[0_0_30px_rgba(95,168,255,2)]"
      >
        {displayStudents}
      </div>

      <div className="mt-2 text-lg text-white/70">
        students learning <br /> right now
      </div>
    </div>
  );
}