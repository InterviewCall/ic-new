'use client';

import Image from "next/image";
import { useState } from "react";

export default function AlumniStoryCard() {
    return (
        <div className="relative max-md:hidden flex items-center justify-center rounded-4xl h-125">
                <Image src={'/indiaMap.svg'} alt="" height={1000} width={1000} className="absolute rounded-4xl left-0 h-full w-full object-cover" />
                <Dot left="254" top="85" alumniSrc={'/cohortPfp1.svg'} name={'Rohit'} />
                <Dot left="222" top="103" alumniSrc={'/cohortPfp1.svg'} name={'Shreya'} />
                <Dot left="209" top="127" alumniSrc={'/cohortPfp1.svg'} name={'Rohit'} />
                <Dot left="194" top="174" alumniSrc={'/cohortPfp1.svg'} name={'Shreya'} />
                <Dot left="435" top="178" alumniSrc={'/cohortPfp1.svg'} name={'Rohit'} />
                <Dot left="355" top="244" alumniSrc={'/cohortPfp1.svg'} name={'Shreya'} />
                <Dot left="262" top="197" alumniSrc={'/cohortPfp1.svg'} name={'Rohit'} />
                <Dot left="200" top="250" alumniSrc={'/cohortPfp1.svg'} name={'Shreya'} />
                <Dot left="250" top="257" alumniSrc={'/cohortPfp1.svg'} name={'Rohit'} />
                <Dot left="219" top="400" alumniSrc={'/cohortPfp1.svg'} name={'Shreya'} />
                <Dot left="239" top="350" alumniSrc={'/cohortPfp1.svg'} name={'Shreya'} />
                <Dot left="209" top="330" alumniSrc={'/cohortPfp1.svg'} name={'Shreya'} />


                {/* <AlumniCard /> */}

                {/* dotted glow */}
                <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-6">
                    <div className="h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
                </div>
            </div>
    );
}


function AlumniCard({ currentAlumni }: { currentAlumni: { src: string, name: string } | null }) {
    if (currentAlumni === null) return null;

    return (
        <div className="absolute z-20 w-64 h-25 border border-white/10 -top-25 shadow-2xl shadow-black rounded-xl bg-[#0F1C2E] px-6 py-4 text-sm text-white flex items-center gap-x-5 ">
            <Image alt="" src={'/cohortPfp1.svg'} width={70} height={70} className="rounded-full" />
            <div className="text-lg">
                {currentAlumni.name} story <br /> preview
            </div>
        </div>
    )
}

function Dot({ top, left, alumniSrc, name }: { top: string, left: string, alumniSrc: string, name: string }) {
    const [currentAlumni, setCurrentAlumni] = useState<{ src: string, name: string } | null>(null);

    function handleMouseEnter() {
        setCurrentAlumni({ src: alumniSrc, name });
    }

    function handleMouseLeave() {
        setCurrentAlumni(null);
    }
    return (
        <div
            style={{ top: `${top}px`, left: `${left}px` }}
            className="absolute"
        >
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative cursor-pointer rounded-full h-2 w-2 bg-linear-to-tr from-[#67B1F5] to-[#245AB5] shadow-[0_0_10px_1px_rgba(103,177,245,0.9)]"
            >
            
                <AlumniCard currentAlumni={currentAlumni} />
                

            </div>
        </div>
    )
}



