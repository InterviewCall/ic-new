'use client';

import { openCohortForm } from "@/lib/redux/slices/ShowCohortFormSlice";
import Image from "next/image"
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
    // Add this ref at the top with your other refs
    const animationRef = useRef<number | null>(null);
    const isProgrammaticScroll = useRef(false);

    // Add these two refs alongside your existing ones
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
    };

    const handleScrollRight = () => {
        if (isProgrammaticScroll.current) return;

        const container = scrollContainerRightRef.current;
        if (!container) return;
        const maxRange = getMaxScrollRange();
        setPosition((container.scrollTop / maxRange) * 100);
    };

    // const handleWheelScroll = (e: React.WheelEvent) => {
    //     e.preventDefault();
    //     e.stopPropagation();

    //     const maxRange = getMaxScrollRange();
    //     const currentScroll = (position / 100) * maxRange;
    //     const scrollDelta = e.deltaY;
    //     const newScroll = currentScroll + scrollDelta;
    //     const newPosition = (newScroll / maxRange) * 100;
    //     const clampedPosition = Math.max(0, Math.min(100, newPosition));
    //     const diff = 0.001
    //     if(position < clampedPosition) {
    //         for(let i= position; i <= clampedPosition; i= i+diff) {
    //             setPosition((prev)=> prev+diff);
    //         }

    //     }else{
    //         for(let i= position; i >= clampedPosition; i= i-diff) {
    //             setPosition((perv)=> perv-diff);
    //         }
    //     }
    // };

    // const handleWheelScroll = (e: React.WheelEvent) => {
    //     e.preventDefault();
    //     e.stopPropagation();

    //     const maxRange = getMaxScrollRange();
    //     const currentScroll = (position / 100) * maxRange;
    //     const newScroll = currentScroll + e.deltaY * 2.5;
    //     const targetPosition = Math.max(0, Math.min(100, (newScroll / maxRange) * 100));

    //     // Cancel any in-progress animation
    //     if (animationRef.current !== null) {
    //         cancelAnimationFrame(animationRef.current);
    //     }

    //     const startPosition = position;
    //     const startTime = performance.now();
    //     const DURATION = 400; // ms — adjust for faster/slower feel

    //     const animate = (currentTime: number) => {
    //         const elapsed = currentTime - startTime;
    //         const progress = Math.min(elapsed / DURATION, 1);

    //         // Ease-out cubic
    //         const eased = 1 - Math.pow(1 - progress, 3);
    //         const newPos = startPosition + (targetPosition - startPosition) * eased;

    //         setPosition(newPos);

    //         if (progress < 1) {
    //             animationRef.current = requestAnimationFrame(animate);
    //         } else {
    //             animationRef.current = null;
    //         }
    //     };

    //     animationRef.current = requestAnimationFrame(animate);
    // };

    const handleWheelScroll = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const maxRange = getMaxScrollRange();

    // Always accumulate into targetPositionRef, never read from `position`
    // This is the key fix for trackpads — rapid small events just keep
    // updating the destination without restarting the animation
    const currentTargetScroll = (targetPositionRef.current / 100) * maxRange;
    const newScroll = currentTargetScroll + e.deltaY * 2.5;
    targetPositionRef.current = Math.max(0, Math.min(100, (newScroll / maxRange) * 100));

    // If an animation is already running, let it keep chasing the updated target
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    const animate = () => {
        const diff = targetPositionRef.current - position;

        // Stop when close enough — avoids infinite micro-updates
        if (Math.abs(diff) < 0.05) {
            setPosition(targetPositionRef.current);
            isAnimatingRef.current = false;
            animationRef.current = null;
            return;
        }

        // Lerp: move 12% closer to target each frame
        // — naturally fast at start, decelerates as it approaches
        // — also handles trackpad momentum: as deltaY shrinks, target
        //   stops moving and the ball smoothly catches up
        setPosition(prev => {
            const updated = prev + (targetPositionRef.current - prev) * 0.12;
            return updated;
        });

        animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
};
    useEffect(() => {
        isProgrammaticScroll.current = true;

        const left = scrollContainerLeftRef.current;
        const right = scrollContainerRightRef.current;
        if (!left || !right) return;

        const maxRange = getMaxScrollRange();
        const targetScrollPx = (position / 100) * maxRange;

        const leftMax = left.scrollHeight - left.clientHeight;
        const rightMax = right.scrollHeight - right.clientHeight;

        left.scrollTop = Math.min(targetScrollPx, leftMax);
        right.scrollTop = Math.min(targetScrollPx, rightMax);

        setTimeout(() => {
            isProgrammaticScroll.current = false;
        }, 5);
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
            <div className="text-center w-full text-4xl md:text-7xl mb-2 md:mb-36">
                How It Looks
            </div>
            <div className="w-full grid md:grid-cols-[6fr_4fr_6fr] md:h-188 relative ">
                <div className="absolute hidden md:block top-0 w-full h-20 bg-linear-to-b from-[#0a0e16] to-transparent "></div>
                <div className="absolute hidden md:block bottom-0 w-full h-20 bg-linear-to-t from-[#060914] to-transparent "></div>

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
                        <div className="hidden md:block h-20"></div>
                    </div>
                </div>

                {/* Centre — draggable ball on vertical track */}
                <div
                    onWheel={handleWheelScroll}
                    className="hidden md:flex w-full  flex-col items-center justify-center overflow-hidden "
                >
                    <div ref={desktopTrackRef} className="w-px h-9/10 bg-radial from-[#0750CD] from-0% via-[#0750CD] via-50% to-transparent to-99%"></div>
                    <BallOnTrack
                        position={position}
                        trackRef={desktopTrackRef}
                        onDragStart={() => setIsDragging(true)}
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
                        <div className="hidden md:block h-20"></div>

                    </div>
                    {/*
                        Equaliser padding: makes the right column's scrollHeight match
                        the left column's so both reach 100% at the same moment.
                        Calculated at runtime via the useEffect above; the static spacer
                        below gives the right column room to breathe visually.
                    */}
                    <ScrollEqualiser
                        leftRef={scrollContainerLeftRef}
                        rightRef={scrollContainerRightRef}
                    />
                </div>
            </div>

            <button onClick={() => { dispatch(openCohortForm()) }} className="hover:cursor-pointer my-3 md:mt-32 flex items-center gap-x-3 text-2xl bg-linear-to-r from-[#13141B] tracking-wider to-[#070A0E] rounded-2xl md:rounded-full border border-white/20 px-8 md:px-16 py-6">
                <div>View Full Curriculum</div>
                <div>
                    <FaAngleRight size={30} />
                </div>
            </button>
        </div>
    );
}


// const BALL_RADIUS = 40; 
// function BallOnTrack({
//     position,
//     trackRef,
//     onDragStart,
// }: {
//     position: number;
//     trackRef: React.RefObject<HTMLDivElement | null>;
//     onDragStart: () => void;
// }) {
//     const [clampedTop, setClampedTop] = useState<string>("0px");

//     useEffect(() => {
//         const track = trackRef.current;
//         if (!track) return;

//         const h = track.getBoundingClientRect().height;
//         if (h === 0) return;

//         const rawPx = (position / 100) * h;
//         const clampedPx = Math.max(BALL_RADIUS, Math.min(h - BALL_RADIUS, rawPx));

//         setClampedTop(`${clampedPx}px`);
//     }, [position, trackRef]);

//     return (
//         <div
//             onMouseDown={onDragStart}
//             style={{ top: clampedTop, transform: "translateY(-50%)" }}
//             className="absolute h-20 w-20 bg-[radial-gradient(circle_at_center,#013EF2,#0A89FF)] rounded-full shadow-[0_0_60px_40px_rgba(1,62,242,0.7)] cursor-grab active:cursor-grabbing"
//         />
//     );
// }

// const BALL_RADIUS = 40;

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
        // const clampedPx = Math.max(BALL_RADIUS, Math.min(h - BALL_RADIUS, rawPx));
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

function ConceptCard({ duration, icon, heading, subHeading, topSpacing }: ConceptCardProps) {
    return (
        <div className="my-3 md:my-0 flex flex-col items-center w-full">
            <div
                className="hidden md:block bg-transparent"
                style={{ height: topSpacing ? `${topSpacing}px` : undefined }}
            ></div>

            <div className="text-gray-400 font-light text-sm my-3">{duration}</div>
            <div className="border tracking-tight border-white/30 rounded-2xl py-8 px-6 w-90/100 space-y-6 bg-[linear-gradient(to_bottom_right,#081E3D_0%,#081425_60%,#1F2F46_100%)] h-full">
                <div>
                    <Image src={icon} alt="" height={100} width={100} className="h-16" />
                </div>
                <div className="text-5xl md:text-5xl text-white">{heading}</div>
                <div className="text-2xl text-gray-300">{subHeading}</div>
            </div>
        </div>
    );
}