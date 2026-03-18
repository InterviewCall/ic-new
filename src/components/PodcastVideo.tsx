'use client';

import { podcastLink } from "@/utils/links";
import Image from "next/image";
import { useState } from "react";
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
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <div className="relative w-full overflow-hidden rounded-xl border border-gray-400 bg-black my-16">

            <div className="relative aspect-video w-full bg-neutral-900">
                {
                    !isOpen && (
                        <Image src="/studentSucessStoryThumbnail.svg" alt="" width={100} height={100} className="absolute inset-0 h-full w-full object-cover" />
                    )
                }
                {isOpen && (
                    <div
                        onClick={() => { setIsOpen(false) }}
                        className=""
                    >
                        <iframe
                            onLoad={() => { setLoading(false) }}
                            onClick={() => { setIsOpen(false) }}
                            src={(podcastLink)}
                            className="absolute inset-0 h-full w-full "
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        <div
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-x-0 z-10 top-0 h-8/10  "
                        />

                        {loading && <div className="absolute inset-x-0 z-10 top-0 h-full flex items-center justify-center ">
                            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        </div>}
                    </div>
                )}


                {!isOpen && (
                    <>
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div onClick={() => { setIsOpen(true); setLoading(true) }} className="flex h-20 w-20 items-center justify-center rounded-full bg-black/60 backdrop-blur 
                  cursor-pointer transition hover:bg-black/80">
                                <FaPlay className="h-6 w-6 text-white" />
                            </div>
                        </div>

                        <div className="absolute inset-0 md:bottom-5 flex items-end justify-between px-6 pb-2 md:pb-6 text-white">
                            <div className="">
                                <p className="text-lg md:text-3xl font-semibold leading-tight md:leading-normal">{leftSpeaker.name}</p>
                                <p className="text-sm md:text-lg text-white/70 leading-tight md:leading-normal">{leftSpeaker.role}</p>
                            </div>

                            <div className="text-right">
                                <p className="text-lg md:text-3xl font-semibold leading-tight md:leading-normal">{rightSpeaker.name}</p>
                                <p className="text-sm md:text-lg text-white/70 leading-tight md:leading-normal">{rightSpeaker.role}</p>
                            </div>
                        </div></>
                )}
            </div>
        </div>
    );
};

