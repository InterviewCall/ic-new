'use client';

import Image from "next/image";
import { FaPlay } from "react-icons/fa";

type Speaker = {
    name: string;
    role: string;
};

type PodcastVideoProps = {
    leftSpeaker: Speaker;
    rightSpeaker: Speaker;
    duration?: string;
};

export default function PodcastVideo({
    leftSpeaker,
    rightSpeaker,
}: PodcastVideoProps) {
    return (
        <div className="relative w-full overflow-hidden rounded-xl border border-gray-400 bg-black my-16">

            <div className="relative aspect-video w-full bg-neutral-900">
                <Image src="/studentSucessStoryThumbnail.svg" alt="" width={100} height={100} className="absolute inset-0 h-full w-full object-cover" />

                <div className="absolute inset-0 bg-black/40" />

                {/* Play button */}
                <div  className="absolute inset-0 flex items-center justify-center z-20">
                    <div onClick={()=>{alert("Clikced")}} className="flex h-20 w-20 items-center justify-center rounded-full bg-black/60 backdrop-blur 
                  cursor-pointer transition hover:bg-black/80">
                        <FaPlay className="h-6 w-6 text-white" />
                    </div>
                </div>

                <div className="absolute inset-0 bottom-5 flex items-end justify-between px-6 pb-6 text-white">
                    <div>
                        <p className="text-lg font-semibold">{leftSpeaker.name}</p>
                        <p className="text-sm text-white/70">{leftSpeaker.role}</p>
                    </div>

                    <div className="text-right">
                        <p className="text-lg font-semibold">{rightSpeaker.name}</p>
                        <p className="text-sm text-white/70">{rightSpeaker.role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

