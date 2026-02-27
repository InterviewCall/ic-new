"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { monthWiseModulesArray, whyMap } from "../utils/content";
import { X } from "lucide-react";


export default function TrainingModules() {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState<number>(0);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [selectedModule, setSelectedModule] = useState<number | null>(101);
    const [isOpen, setIsOpen] = useState(false);

    // useEffect(()=>{
    //     console.log(position)
    // },[position])

    useEffect(() => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const maxScroll = container.scrollHeight - container.clientHeight;
            container.scrollTop = ((100 - position) / 100) * maxScroll;
        }
    })

    useEffect(() => {
        if (isDragging && scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const maxScroll = container.scrollHeight - container.clientHeight;
            // 
            container.scrollTop = ((100 - position) / 100) * maxScroll;
        }
    }, [position, isDragging]);

    const handleScroll = () => {
        if (isDragging || !scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const scrollPercentage = (container.scrollTop / (container.scrollHeight - container.clientHeight)) * 100;
        setPosition(100 - scrollPercentage);
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging || !trackRef.current) return;
            const rect = trackRef.current.getBoundingClientRect();
            const offsetY = e.clientY - rect.top;
            let percentage = (offsetY / rect.height) * 100;
            percentage = Math.max(0, Math.min(100, percentage));
            setPosition(percentage);
        };

        const handleMouseUp = () => setIsDragging(false);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div>
            <div className="text-center text-6xl tracking-tight">
                Our in depth training modules
            </div>
            <div className="text-center text-2xl font-light tracking-wide mt-2 text-white/70">
                To get into MAANG and sustain for years to come
            </div>

            <div className="grid grid-cols-[9fr_1fr] md:grid-cols-[1fr_9fr] h-fit md:h-175 mt-10 relative">
                {/* why section mobile */}
                {
                    isOpen && (
                        <div className=" fixed    top-0 flex items-center justify-center inset-0 z-30">
                            <div className="bg-black/40 backdrop-blur-xs fixed w-full h-full">

                            </div>
                            <div className="flex items-start ">
                                <div className="bg-[#030F15]  relative isolate border top-0 h border-white/30 rounded-2xl p-6 text-3xl bg-linear-to-br from-[#06121A] to-[#08111] overflow-hidden">
                                    <div className="relative isolate p-6 bg-linear-to-tr from-[#041018] to-[#030F15] rounded-2xl space-y-2">
                                        <div className="flex justify-between">

                                            <Image
                                                src={'/design2.svg'}
                                                alt=""
                                                width={100}
                                                height={100}
                                                className="h-auto w-1/4 mb-6"
                                            />
                                            <div className="hover:cursor-pointer p-1 mr-3 text-center bg-red-800 rounded-full" onClick={() => { setIsOpen(false) }}>
                                                <X />
                                            </div>
                                        </div>

                                        <div className="my-3">Why learn this:</div>

                                        <div className="z-10 text-xl text-[#5B7D92] space-y-4 mb-6">
                                            {selectedModule && whyMap[selectedModule]?.text}
                                        </div>

                                        {selectedModule && whyMap[selectedModule]?.topic.map((topic, tIndex) => (
                                            <div
                                                key={tIndex}
                                                className="px-2.5 py-1 rounded-xl text-lg bg-[#B76A00] w-fit mb-2"
                                            >
                                                {topic}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                {/* scrollbar div desktop */}
                <div className="hidden md:flex justify-center h-full">
                    <div
                        ref={trackRef}
                        className="relative h-full w-[1.5px] bg-[#1CABFF] rounded-full"
                    >
                        {/* Scoll Button */}
                        <div
                            onMouseDown={() => setIsDragging(true)}
                            style={{ top: `${position}%`, transform: "translateY(-50%)" }}
                            className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full cursor-pointer z-20"
                        >
                            <div className="relative w-full h-full">
                                <Image src={'/design1.svg'} alt="" width={30} height={30} className="absolute top-0 left-0 w-full h-full" />
                                <div className="z-10 bg-transparent w-full h-full absolute top-0 left-0"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* content div */}
                <div className="grid md:grid-cols-2 h-180  w-full pl-3 md:pl-0">
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="w-full overflow-y-auto md:pr-4 no-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {/* <div className="w-full h-px bg-blue-500/10 shadow-[0_0_20px_1px_rgba(59,130,246,0.6)] sticky top-0 z-10"></div> */}

                        {monthWiseModulesArray.slice().reverse().map((module) => (
                            <div key={module.id} className="mb-20">
                                <div className="grid grid-cols-[1fr_15fr_15fr]">
                                    <div></div>
                                    <div className="m-4 mt-6 text-3xl font-semibold text-white">
                                        {module.time}
                                    </div>
                                    <div></div>
                                </div>

                                <div className="grid grid-cols-1 gap-x-2 mb-6">
                                    {/* left cards */}
                                    <div className="space-y-5 text-2xl px-2 md:px-5">
                                        {module.content.map((item, i) => (
                                            <div
                                                key={i}
                                                className="transition-transform duration-200 hover:scale-103 hover:cursor-pointer border border-white/30 rounded-2xl p-8 bg-linear-to-br from-[#0A121D] to-[#051017]"
                                                onClick={() => { setSelectedModule(item.id); setIsOpen(true) }}
                                            >
                                                <div>{item.heading}</div>
                                                <div className="text-white/50 text-xl">{item.subHeading}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* why div desktop*/}
                    <div className="hidden md:flex items-center h-full">
                        <div className="relative isolate border my-10  h-78/100 border-white/30 rounded-2xl p-6 text-3xl bg-linear-to-br from-[#06121A] to-[#08111] overflow-hidden">
                            <div className="relative isolate p-6 bg-linear-to-tr from-[#041018] to-[#030F15] rounded-2xl space-y-2">
                                <Image
                                    src={'/design2.svg'}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="h-auto w-1/4 mb-6"
                                />

                                <div className="my-3">Why learn this:</div>

                                <div className="z-10 text-xl text-[#5B7D92] space-y-4 mb-6">
                                    {selectedModule && whyMap[selectedModule]?.text}
                                </div>

                                {selectedModule && whyMap[selectedModule]?.topic.map((topic, tIndex) => (
                                    <div
                                        key={tIndex}
                                        className="px-2.5 py-1 rounded-xl text-lg bg-[#B76A00] w-fit mb-2"
                                    >
                                        {topic}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* scrollbar div mobile */}
                <div className="flex md:hidden justify-center h-full">
                    <div
                        ref={trackRef}
                        className="relative h-full w-[1.5px] bg-[#1CABFF] rounded-full"
                    >
                        {/* Scoll Button */}
                        <div
                            onMouseDown={() => setIsDragging(true)}
                            style={{ top: `${position}%`, transform: "translateY(-50%)" }}
                            className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full cursor-pointer z-20"
                        >
                            <div className="relative w-full h-full">
                                <Image src={'/design1.svg'} alt="" width={30} height={30} className="absolute p-1 md:p-0 top-0 left-0 w-full h-full" />
                                <div className="z-10 bg-transparent w-full h-full absolute top-0 left-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}