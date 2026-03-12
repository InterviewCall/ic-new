'use client';

import { openCohortForm } from "@/lib/redux/slices/ShowCohortFormSlice";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { useDispatch } from "react-redux";

const roadmap = {
  left: [
    {
      topSpacing: 100,
      duration: "Month 1 – 4 · DS · CS",
      heading: "Master the Fundamentals",
      icon: "/icons/fundamentals.svg",
      subHeading:
        "Learn Data Structures & Algorithms, master CS theory with weekly hands-on labs",
    },
    {
      topSpacing: 250,
      duration: "Month 5 – 6 · Backend",
      heading: "Production Engineering",
      icon: "/icons/production.svg",
      subHeading:
        "Launch APIs, learn infrastructure, scale applications to production",
    },
    {
      topSpacing: 250,
      duration: "Month 9 – 10 · Career",
      heading: "Land Your Dream Job",
      icon: "/icons/job.svg",
      subHeading:
        "Mock interviews by Engineering Managers, get hired by top tech firms",
    },
  ],

  right: [
    {
      topSpacing: 250,
      duration: "Month 7 – 8 · System Design",
      heading: "System Design Mastery",
      icon: "/icons/system-design.svg",
      subHeading:
        "Build scalable systems, lead technical discussions, design for millions of users",
    },
    {
      topSpacing: 250,
      duration: "Month 8 – 9 · Projects",
      heading: "Real-World Projects",
      icon: "/icons/projects.svg",
      subHeading:
        "Work in engineering teams, build capstone projects, present to industry leaders",
    },
  ],
};

export default function Roadmap() {
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const desktopTrackRef = useRef<HTMLDivElement>(null);
  const scrollContainerLeftRef = useRef<HTMLDivElement>(null);
  const scrollContainerRightRef = useRef<HTMLDivElement>(null);

  const animationRef = useRef<number | null>(null);
  const isProgrammaticScroll = useRef(false);
  const targetPositionRef = useRef(0);
  const isAnimatingRef = useRef(false);

  const dispatch = useDispatch();

  const getMaxScrollRange = () => {
    const left = scrollContainerLeftRef.current;
    const right = scrollContainerRightRef.current;
    if (!left || !right) return 1;

    const leftMax = left.scrollHeight - left.clientHeight;
    const rightMax = right.scrollHeight - right.clientHeight;

    return Math.max(leftMax, rightMax, 1);
  };

  const handleScrollLeft = () => {
    if (isProgrammaticScroll.current) return;

    const container = scrollContainerLeftRef.current;
    if (!container) return;

    const maxRange = getMaxScrollRange();
    setPosition((container.scrollTop / maxRange) * 100);
    targetPositionRef.current = (container.scrollTop / maxRange) * 100;
  };

  const handleScrollRight = () => {
    if (isProgrammaticScroll.current) return;

    const container = scrollContainerRightRef.current;
    if (!container) return;

    const maxRange = getMaxScrollRange();
    setPosition((container.scrollTop / maxRange) * 100);
    targetPositionRef.current = (container.scrollTop / maxRange) * 100;
  };

  const handleWheelScroll = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const maxRange = getMaxScrollRange();
    const currentTargetScroll = (targetPositionRef.current / 100) * maxRange;
    const newScroll = currentTargetScroll + e.deltaY * 2.5;

    targetPositionRef.current = Math.max(
      0,
      Math.min(100, (newScroll / maxRange) * 100)
    );

    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    const animate = () => {
      setPosition((prev) => {
        const diff = targetPositionRef.current - prev;

        if (Math.abs(diff) < 0.05) {
          isAnimatingRef.current = false;
          animationRef.current = null;
          return targetPositionRef.current;
        }

        const updated = prev + diff * 0.12;
        animationRef.current = requestAnimationFrame(animate);
        return updated;
      });
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const left = scrollContainerLeftRef.current;
    const right = scrollContainerRightRef.current;
    if (!left || !right) return;

    isProgrammaticScroll.current = true;

    const maxRange = getMaxScrollRange();
    const targetScrollPx = (position / 100) * maxRange;

    const leftMax = left.scrollHeight - left.clientHeight;
    const rightMax = right.scrollHeight - right.clientHeight;

    left.scrollTop = Math.min(targetScrollPx, leftMax);
    right.scrollTop = Math.min(targetScrollPx, rightMax);

    const timeout = window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 5);

    return () => window.clearTimeout(timeout);
  }, [position, isDragging]);

  useEffect(() => {
    const handleMove = (clientY: number) => {
      if (!isDragging) return;

      const track = desktopTrackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      if (rect.height === 0) return;

      const offsetY = clientY - rect.top;
      let percentage = (offsetY / rect.height) * 100;
      percentage = Math.max(0, Math.min(100, percentage));

      targetPositionRef.current = percentage;
      setPosition(percentage);
    };

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientY);
    const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientY);
    const handleUp = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, [isDragging]);

  useEffect(() => {
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="flex w-full flex-col items-center px-3">
      <div className="mb-2 w-full text-center text-4xl md:mb-36 md:text-7xl">
        How It Looks
      </div>

      <div className="relative w-full md:grid md:h-188 md:grid-cols-[6fr_4fr_6fr]">
        <div className="absolute top-0 hidden h-20 w-full bg-linear-to-b from-[#0a0e16] to-transparent md:block"></div>
        <div className="absolute bottom-0 hidden h-20 w-full bg-linear-to-t from-[#060914] to-transparent md:block"></div>

        {/* Left col */}
        <div
          ref={scrollContainerLeftRef}
          onScroll={handleScrollLeft}
          className="w-full md:h-full md:overflow-y-scroll hide-scroll"
        >
          <div>
            {roadmap.left.map((item, index) => (
              <ConceptCard
                key={index}
                topSpacing={item.topSpacing}
                duration={item.duration}
                heading={item.heading}
                icon={item.icon}
                subHeading={item.subHeading}
              />
            ))}
            <div className="hidden h-20 md:block"></div>
          </div>
        </div>

        {/* Centre */}
        <div
          onWheel={handleWheelScroll}
          className="relative hidden w-full flex-col items-center justify-center overflow-visible md:flex"
        >
          <div
            ref={desktopTrackRef}
            className="h-9/10 w-px bg-radial from-[#0750CD] from-0% via-[#0750CD] via-50% to-transparent to-99%"
          ></div>

          <BallOnTrack
            position={position}
            trackRef={desktopTrackRef}
            onDragStart={() => {
              setIsDragging(true);
              isAnimatingRef.current = false;
              targetPositionRef.current = position;

              if (animationRef.current !== null) {
                cancelAnimationFrame(animationRef.current);
                animationRef.current = null;
              }
            }}
          />
        </div>

        {/* Right col */}
        <div
          ref={scrollContainerRightRef}
          onScroll={handleScrollRight}
          className="w-full md:h-full md:overflow-y-scroll hide-scroll"
        >
          <div>
            {roadmap.right.map((item, index) => (
              <ConceptCard
                key={index}
                topSpacing={item.topSpacing}
                duration={item.duration}
                heading={item.heading}
                icon={item.icon}
                subHeading={item.subHeading}
              />
            ))}
            <div className="hidden h-20 md:block"></div>
          </div>

          <ScrollEqualiser
            leftRef={scrollContainerLeftRef}
            rightRef={scrollContainerRightRef}
          />
        </div>
      </div>

      <button
        onClick={() => {
          dispatch(openCohortForm());
        }}
        className="my-3 flex items-center gap-x-3 rounded-2xl border border-white/20 bg-linear-to-r from-[#13141B] to-[#070A0E] px-8 py-6 text-2xl tracking-wider hover:cursor-pointer md:mt-32 md:rounded-full md:px-16"
      >
        <div>View Full Curriculum</div>
        <div>
          <FaAngleRight size={30} />
        </div>
      </button>
    </div>
  );
}

function interpolateColor(start: string, end: string, factor: number) {
  const s = start.match(/\w\w/g)?.map((x) => parseInt(x, 16)) || [0, 0, 0];
  const e = end.match(/\w\w/g)?.map((x) => parseInt(x, 16)) || [0, 0, 0];

  const result = s.map((val, i) =>
    Math.round(val + factor * (e[i] - val))
  );

  return `#${result.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

function BallOnTrack({
  position,
  trackRef,
  onDragStart,
}: {
  position: number;
  trackRef: React.RefObject<HTMLDivElement | null>;
  onDragStart: () => void;
}) {
  const [clampedTop, setClampedTop] = useState<string>("0px");

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const h = track.getBoundingClientRect().height;
    if (h === 0) return;

    const rawPx = (position / 100) * h;
    const clampedPx = Math.max(0, Math.min(h, rawPx));

    setClampedTop(`${clampedPx}px`);
  }, [position, trackRef]);

  const startInner = "#013EF2";
  const startOuter = "#0A89FF";

  const midInner = "#0FA958";
  const midOuter = "#7DFFB2";

  const endInner = "#E2820B";
  const endOuter = "#FDD233";

  let innerColor = "";
  let outerColor = "";

  if (position <= 50) {
    const t = position / 50;
    innerColor = interpolateColor(startInner, midInner, t);
    outerColor = interpolateColor(startOuter, midOuter, t);
  } else {
    const t = (position - 50) / 50;
    innerColor = interpolateColor(midInner, endInner, t);
    outerColor = interpolateColor(midOuter, endOuter, t);
  }

  return (
    <div
      onMouseDown={onDragStart}
      onTouchStart={onDragStart}
      style={{
        top: clampedTop,
        transform: "translateY(-50%)",
        background: `radial-gradient(circle at center, ${innerColor}, ${outerColor})`,
        boxShadow: `0 0 60px 40px ${outerColor}66`,
      }}
      className="absolute h-20 w-20 rounded-full cursor-grab active:cursor-grabbing"
    />
  );
}

function ScrollEqualiser({
  leftRef,
  rightRef,
}: {
  leftRef: React.RefObject<HTMLDivElement | null>;
  rightRef: React.RefObject<HTMLDivElement | null>;
}) {
  const spacerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const equalise = () => {
      const left = leftRef.current;
      const right = rightRef.current;
      const spacer = spacerRef.current;
      if (!left || !right || !spacer) return;

      spacer.style.height = "0px";

      const leftScroll = left.scrollHeight - left.clientHeight;
      const rightScroll = right.scrollHeight - right.clientHeight;
      const diff = leftScroll - rightScroll;

      spacer.style.height = diff > 0 ? `${diff}px` : "0px";
    };

    const id = requestAnimationFrame(equalise);

    window.addEventListener("resize", equalise);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", equalise);
    };
  }, [leftRef, rightRef]);

  return <div ref={spacerRef} />;
}

type ConceptCardProps = {
  duration: string;
  icon: string;
  heading: string;
  subHeading: string;
  topSpacing: number;
};

function ConceptCard({
  duration,
  icon,
  heading,
  subHeading,
  topSpacing,
}: ConceptCardProps) {
  return (
    <div className="my-3 flex w-full flex-col items-center md:my-0">
      <div
        className="hidden bg-transparent md:block"
        style={{ height: topSpacing ? `${topSpacing}px` : undefined }}
      ></div>

      <div className="my-3 text-sm font-light text-gray-400">{duration}</div>

      <div className="h-full w-90/100 space-y-6 rounded-2xl border border-white/30 bg-[linear-gradient(to_bottom_right,#081E3D_0%,#081425_60%,#1F2F46_100%)] px-6 py-8 tracking-tight">
        <div>
          <Image src={icon} alt="" height={100} width={100} className="h-16" />
        </div>
        <div className="text-5xl text-white md:text-5xl">{heading}</div>
        <div className="text-2xl text-gray-300">{subHeading}</div>
      </div>
    </div>
  );
}