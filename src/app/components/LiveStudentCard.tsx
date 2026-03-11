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
  const isInView = useInView(ref, { once: false, amount: 0.35 });

  const motionValue = useMotionValue<number>(0);

  const [liveStudents, setLiveStudents] = useState(baseCount);
  const [displayStudents, setDisplayStudents] = useState(0);

  const latestTrueValueRef = useRef(baseCount);
  const flickerTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getCurrentTimeMeta = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const isNight = hours >= 0 && hours < 8;

    return { hours, minutes, isNight };
  };

  const getCurrentStudentCount = () => {
    const { hours, minutes, isNight } = getCurrentTimeMeta();

    if (isNight) {
      const time = hours * 60 + minutes;
      const timeSlot = Math.floor(time / 15);
      const studentsToAdd = midnightToMorningSlot[timeSlot] ?? 0;
      return Math.min(5, Math.max(2, baseCount + studentsToAdd));
    } else {
      const time = (hours - 8) * 60 + minutes;
      const timeSlot = Math.floor(time / 15);
      const studentsToAdd = daySlot[timeSlot] ?? 30;
      return Math.min(150, Math.max(30, baseCount + studentsToAdd));
    }
  };

  const getDisplayRange = () => {
    const { isNight } = getCurrentTimeMeta();

    if (isNight) {
      return { min: 2, max: 5 };
    }

    return { min: 30, max: 150 };
  };

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplayStudents(Math.round(latest));
    });

    return () => unsubscribe();
  }, [motionValue]);

  useEffect(() => {
    const updateLiveStudents = () => {
      const next = getCurrentStudentCount();
      latestTrueValueRef.current = next;
      setLiveStudents(next);
    };

    updateLiveStudents();

    const interval = setInterval(updateLiveStudents, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isInView) return;

    motionValue.set(0);

    const controls = animate(motionValue, liveStudents, {
      duration: 1.2,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, liveStudents, motionValue]);

  useEffect(() => {
    if (!isInView) return;

    let cancelled = false;

    const getWeightedOffset = (target: number) => {
      const { isNight } = getCurrentTimeMeta();

      if (isNight) {
        const offsets = [0, 0, 0, -1, 1];
        return offsets[Math.floor(Math.random() * offsets.length)];
      }

      if (target <= 60) {
        const offsets = [0, 0, 0, 0, -2, 2, -4, 4, -6, 6];
        return offsets[Math.floor(Math.random() * offsets.length)];
      }

      if (target <= 100) {
        const offsets = [0, 0, 0, 0, -3, 3, -5, 5, -8, 8];
        return offsets[Math.floor(Math.random() * offsets.length)];
      }

      const offsets = [0, 0, 0, 0, -4, 4, -6, 6, -10, 10];
      return offsets[Math.floor(Math.random() * offsets.length)];
    };

    const getNextDelay = () => {
      return 7000 + Math.floor(Math.random() * 2000); // 3s to 4s
    };

    const scheduleNext = () => {
      if (cancelled) return;

      const target = latestTrueValueRef.current;
      const offset = getWeightedOffset(target);
      const { min, max } = getDisplayRange();

      let nextDisplay = target + offset;

      nextDisplay = Math.max(min, Math.min(max, nextDisplay));

      setDisplayStudents((prev) => {
        const clampedPrev = Math.max(min, Math.min(max, prev));
        const drift = clampedPrev - target;

        if (Math.abs(drift) > 10 && !getCurrentTimeMeta().isNight) {
          return clampedPrev > target ? clampedPrev - 2 : clampedPrev + 2;
        }

        if (Math.abs(drift) > 2 && getCurrentTimeMeta().isNight) {
          return clampedPrev > target ? clampedPrev - 1 : clampedPrev + 1;
        }

        return nextDisplay;
      });

      flickerTimeoutRef.current = setTimeout(scheduleNext, getNextDelay());
    };

    flickerTimeoutRef.current = setTimeout(
      scheduleNext,
      5000 + Math.floor(Math.random() * 1000)
    );

    return () => {
      cancelled = true;
      if (flickerTimeoutRef.current) clearTimeout(flickerTimeoutRef.current);
    };
  }, [isInView]);

  useEffect(() => {
    latestTrueValueRef.current = liveStudents;
  }, [liveStudents]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center rounded-2xl bg-[#0A1220] p-10 text-center shadow-inner"
    >
      <div
        className="text-[170px] font-semibold bg-linear-to-br from-[#93E8FF] to-[#4CACFF] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(95,168,255,2)] tabular-nums"
      >
        {displayStudents}
      </div>

      <div className="mt-2 text-lg text-white/70">
        students learning <br /> right now
      </div>
    </div>
  );
}