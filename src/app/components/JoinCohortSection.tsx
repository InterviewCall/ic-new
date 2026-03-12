'use client';

import Image from "next/image";
import ClockWrapper from "./ClockWrapper";
import { motion } from "framer-motion";
import { useAppDispatch } from "@/lib/redux/hooks";
import { openCohortForm } from "@/lib/redux/slices/ShowCohortFormSlice";
import { openBookACallForm } from "@/lib/redux/slices/ShowBookACallFormSlice";


export default function JoinCohortSection() {
    const dispatch = useAppDispatch();


    return (
        <div className="relative w-full mt-0 md:mt-20 mb-20 md:mb-20 px-4 md:px-0">
            <div className="text-center text-3xl md:text-7xl w-full md:leading-18">
                Only 50 students per <br className="hidden md:inline" />
                cohort <br className="hidden md:inline" />
                Ready to become one?
            </div>
            <div className="flex justify-between md:justify-center items-center gap-x-8 md:gap-x-24 my-10 md:my-20 md:text-2xl text-white/80">

                {/* <button onClick={()=>{setShowCohortForm(true);}} className="w-full md:w-64 py-2 md:py-4 rounded-xl bg-linear-to-br from-[#012444] to-[#014394] border border-blue-600/10 hover:cursor-pointer">
                    Apply Now
                </button> */}

                <button
                    onClick={() => {
                        dispatch(openCohortForm());
                    }}
                    className="relative hover:-translate-y-0.5 transition duration-150 w-full md:w-64 py-2 md:py-4 rounded-xl bg-linear-to-br from-[#012444] to-[#014394] border border-blue-600/10 hover:cursor-pointer overflow-hidden"
                >
                    {/* Animated Border */}
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 248 64"
                        fill="none"
                        className="pointer-events-none absolute inset-0 z-0"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <filter id="softGlowWhite" x="-40%" y="-40%" width="180%" height="180%">
                                <feGaussianBlur stdDeviation="1.8" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        <motion.rect
                            x="1"
                            y="1"
                            width="245"
                            height="61"
                            rx="12.5"
                            stroke="#fff"
                            strokeWidth="2.3"
                            strokeDasharray="40 560"
                            animate={{ strokeDashoffset: [120, -480] }}
                            transition={{
                                duration: 2.35,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                            opacity="0.85"
                        />

                        <motion.rect
                            x="1"
                            y="1"
                            width="245"
                            height="61"
                            rx="12.5"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeDasharray="5 595"
                            animate={{ strokeDashoffset: [115, -485] }}
                            transition={{
                                duration: 2.35,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                            opacity="0.75"
                            filter="url(#softGlowWhite)"
                        />

                        <motion.rect
                            x="1"
                            y="1"
                            width="245"
                            height="61"
                            rx="12.5"
                            stroke="#fff"
                            strokeWidth="1.7"
                            strokeDasharray="5 595"
                            animate={{ strokeDashoffset: [110, -490] }}
                            transition={{
                                duration: 2.35,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                            opacity="0.65"
                        />
                    </svg>

                    {/* Button Text */}
                    <span className="relative z-10">
                        Apply Now
                    </span>
                </button>

                <motion.button
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    onClick={() => {
                        dispatch(openBookACallForm());
                    }}
                    className="relative overflow-hidden w-full md:w-64 py-2 md:py-4 rounded-xl bg-linear-to-br from-[#091724] to-[#02060c] border border-gray-600/10 hover:cursor-pointer"
                >
                    {/* Shine animation */}
                    <motion.span
                        className="pointer-events-none absolute top-0 left-0 z-1 h-full w-[14%]"
                        style={{
                            background:
                                "linear-gradient(102deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0.45) 50%, hsla(0,0%,100%,0) 100%)",
                            transform: "translateX(-240%) rotate(20deg)",
                            transformOrigin: "center",
                        }}
                        animate={{ x: ["0%", "760%"] }}
                        transition={{
                            duration: 1.05,
                            ease: "linear",
                            repeat: Infinity,
                            repeatDelay: 0,
                        }}
                    />

                    {/* Text */}
                    <span className="relative z-2">
                        Book Intro Call
                    </span>
                </motion.button>

                {/* <button onClick={()=>{setShowBookACallForm(true)}} className="w-full md:w-64 py-2 md:py-4 rounded-xl bg-linear-to-br from-[#091724] to-[#02060c] border border-gray-600/10 hover:cursor-pointer">
                    Book Intro Call
                </button> */}
            </div>

            <div className="text-center text-4xl tracking-tight text-white/80">
                July Batch closes in
            </div>
            {/* <ClockTimer targetDate="2025-12-31T23:59:59"/> */}
            <div className="flex w-full justify-center mt-10">
                <ClockWrapper />
            </div>


            <div className="grid grid-cols-6 mx-10 mt-16 gap-x-16 justify-center">
                <Image alt="" src={'/bwPfp1.svg'} width={0} height={0} className="w-full h-auto" />
                <Image alt="" src={'/bwPfp2.svg'} width={0} height={0} className="w-full h-auto" />
                <Image alt="" src={'/bwPfp1.svg'} width={0} height={0} className="w-full h-auto" />
                <Image alt="" src={'/bwPfp2.svg'} width={0} height={0} className="w-full h-auto" />
                <Image alt="" src={'/bwPfp1.svg'} width={0} height={0} className="w-full h-auto" />
                <Image alt="" src={'/bwPfp2.svg'} width={0} height={0} className="w-full h-auto" />

            </div>

            <div className="flex flex-wrap md:flex-nowrap items-center gap-8 mt-10 justify-evenly md:h-12">
                <Image alt="" src={'/bwMeta.svg'} width={0} height={0} className="h-10 w-auto md:h-full" />
                <Image alt="" src={'/bwGoogle.svg'} width={0} height={0} className="h-10 w-auto md:h-full" />
                <Image alt="" src={'/bwAmazon.svg'} width={0} height={0} className="h-10 w-auto md:h-full" />
                <Image alt="" src={'/bwNetflix.svg'} width={0} height={0} className="h-10 w-auto md:h-full" />
                <Image alt="" src={'/bwApple.svg'} width={0} height={0} className="h-10 w-auto md:h-full" />

            </div>

        </div>
    )
}