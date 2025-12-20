"use client";

import React, { useEffect, useState } from "react";

type CountdownTimerProps = {
  targetDate: string | Date; // ISO string or Date object
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getTimeLeft = (target: Date): TimeLeft => {
  const now = new Date().getTime();
  const diff = target.getTime() - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

export default function ClockTimer ({ targetDate }: CountdownTimerProps) {
  const target = new Date(targetDate);
  

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(target)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  const isExpired =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (isExpired) {
    return (
      <div className="text-red-500 font-semibold">
        Time has expired
      </div>
    );
  }

  return (
    <div className="flex gap-4 text-center">
      <TimeBox label="Days" value={timeLeft.days} />
      <TimeBox label="Hours" value={timeLeft.hours} />
      <TimeBox label="Minutes" value={timeLeft.minutes} />
      <TimeBox label="Seconds" value={timeLeft.seconds} />
    </div>
  );
};


const TimeBox = ({ label, value }: { label: string; value: number }) => (
  <div className="rounded-xl bg-gray-900 text-white px-4 py-2 w-25 flex flex-col items-center">
    <div className="text-2xl font-bold">
      {String(value).padStart(2, "0")}
    </div>
    <div className="text-xs uppercase tracking-wide opacity-80">
      {label}
    </div>
  </div>
);
