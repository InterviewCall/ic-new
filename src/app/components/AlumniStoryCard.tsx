'use client';

import Image from "next/image";
import { useState } from "react";

export default function AlumniStoryCard() {
    const [activeDotId, setActiveDotId] = useState<string | null>('8');
    return (
        <div
            onMouseLeave={() => { setActiveDotId("8") }}
            className="relative max-md:hidden flex items-center justify-center rounded-4xl h-125 w-125">
            <Image src={'/indiaMap.svg'} alt="" height={1000} width={1000} className="absolute inset-0 rounded-4xl left-0 h-full w-full object-cover" />
            <Dot id="1" left="214" top="103" alumniSrc={'/cohortPfp1.svg'} name={'Rohit'} isActive={activeDotId === '1'} onHover={() => setActiveDotId('1')} onLeave={() => setActiveDotId(null)} />
            <Dot id="2" left="166" top="306" alumniSrc={'/cohortPfp1.svg'} name={'Shreya'} isActive={activeDotId === '2'} onHover={() => setActiveDotId('2')} onLeave={() => setActiveDotId(null)} />
            <Dot id="3" left="209" top="127" alumniSrc={'/cohortPfp1.svg'} name={'Rohit'} isActive={activeDotId === '3'} onHover={() => setActiveDotId('3')} onLeave={() => setActiveDotId(null)} />
            <Dot id="4" left="194" top="174" alumniSrc={'/cohortPfp1.svg'} name={'Shreya'} isActive={activeDotId === '4'} onHover={() => setActiveDotId('4')} onLeave={() => setActiveDotId(null)} />
            <Dot id="5" left="395" top="178" alumniSrc={'/cohortPfp1.svg'} name={'Rohit'} isActive={activeDotId === '5'} onHover={() => setActiveDotId('5')} onLeave={() => setActiveDotId(null)} />
            <Dot id="6" left="304" top="244" alumniSrc={'/cohortPfp1.svg'} name={'Shreya'} isActive={activeDotId === '6'} onHover={() => setActiveDotId('6')} onLeave={() => setActiveDotId(null)} />
            <Dot id="7" left="242" top="197" alumniSrc={'/cohortPfp1.svg'} name={'Rohit'} isActive={activeDotId === '7'} onHover={() => setActiveDotId('7')} onLeave={() => setActiveDotId(null)} />
            <Dot id="8" left="175" top="245" alumniSrc={'/cohortPfp1.svg'} name={'Shreya'} isActive={activeDotId === '8'} onHover={() => setActiveDotId('8')} onLeave={() => setActiveDotId(null)} />
            <Dot id="9" left="259" top="265" alumniSrc={'/cohortPfp1.svg'} name={'Rohit'} isActive={activeDotId === '9'} onHover={() => setActiveDotId('9')} onLeave={() => setActiveDotId(null)} />
            <Dot id="10" left="200" top="400" alumniSrc={'/cohortPfp1.svg'} name={'Shreya'} isActive={activeDotId === '10'} onHover={() => setActiveDotId('10')} onLeave={() => setActiveDotId(null)} />
            <Dot id="11" left="222" top="360" alumniSrc={'/cohortPfp1.svg'} name={'Shreya'} isActive={activeDotId === '11'} onHover={() => setActiveDotId('11')} onLeave={() => setActiveDotId(null)} />
            <Dot id="12" left="209" top="330" alumniSrc={'/cohortPfp1.svg'} name={'Shreya'} isActive={activeDotId === '12'} onHover={() => setActiveDotId('12')} onLeave={() => setActiveDotId(null)} />


            {/* <AlumniCard /> */}

            {/* dotted glow */}
            <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-6">
                <div className="h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
            </div>
        </div>
    );
}

function BottomTriangle({ currentAlumni }: { currentAlumni: { src: string, name: string } | null }) {
    if (!currentAlumni) return null;

    return <div className="absolute -top-10 -left-3 z-19 w-20 h-20 ">
        {/* <Image alt="" src={'/pointerAlumni.svg'} width={100} height={100} className="rounded-full w-20 h-20" /> */}
        <svg width="44" height="44" viewBox="0 0 24 24" className="rotate-200">
            <polygon points="12,4 4,20 20,20" fill="#0f1c2e" className="" stroke="#FFFFFF1A"/>
        </svg>
    </div>
}


function AlumniCard({ currentAlumni }: { currentAlumni: { src: string, name: string } | null }) {
    if (currentAlumni === null) return null;

    return (
        <div className="absolute z-20 w-60 h-22 border border-white/10 -top-25 shadow-2xl shadow-black rounded-xl bg-[#0F1C2E] px-6 py-4 text-sm text-white flex items-center gap-x-5 ">
            <Image alt="" src={'/cohortPfp1.svg'} width={100} height={100} className="rounded-full w-14 h-14" />
            <div className="text-lg">
                {currentAlumni.name} story <br /> preview
            </div>
        </div>
    )
}

function Dot({ top, left, alumniSrc, name, isActive, onHover, onLeave }: { id: string, top: string, left: string, alumniSrc: string, name: string, isActive: boolean, onHover: () => void, onLeave: () => void }) {
    return (
        <div
            style={{ top: `${top}px`, left: `${left}px` }}
            className="absolute"
        >
            <div
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                className="relative cursor-pointer rounded-full h-2 w-2 bg-linear-to-tr from-[#67B1F5] to-[#245AB5] shadow-[0_0_10px_1px_rgba(103,177,245,0.9)]"
            >

                <AlumniCard currentAlumni={isActive ? { src: alumniSrc, name } : null} />
                <BottomTriangle currentAlumni={isActive ? { src: alumniSrc, name } : null} />

            </div>
        </div>
    )
}



