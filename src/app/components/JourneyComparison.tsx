import Image from "next/image";
import React from "react";

export default function JourneyComparison() {
    return (
        <section className="relative flex flex-col items-center w-full pt-0 md:pt-24 py-24 overflow-hidden">
            {/* Top heading */}
            <div className="relative w-full z-10 text-center">
                <h2 className="text-2xl w-full md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    <span>₹10L</span>
                    <span className="text-blue-500 mx-2">→</span>
                    <span>₹30L</span>:
                    <br />
                    Your Journey Starts Here
                </h2>

                {/* Top images */}
                <div className="mt-10 flex gap-1">
                    <div className="flex-1  rounded-l-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
                        <Image src={'/comp10.svg'} alt="" height={100} width={100} className="w-full" />
                    </div>
                    <div className="flex-1 rounded-r-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
                        <Image src={'/comp30.svg'} alt="" height={100} width={100} className="w-full" />

                    </div>
                </div>

                {/* Bottom cards */}
                <div className="mt-6 w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 px-4 md:px-0">
                    {/* 10L card */}
                    <div className="rounded-3xl w-full border border-white/15  backdrop-blur-xl grid grid-cols-[1fr_1.2fr] md:grid-cols-[1fr_1fr] gap-0 overflow-hidden">
                        <div className="text-left py-4 md:py-8 space-y-5 bg-[linear-gradient(to_bottom_left,#353432_0%,transparent_70%)] h-full flex flex-col items-center">
                            <div className="w-7/10 space-y-1">
                                <p className="text-3xl md:text-6xl font-semibold text-white ">₹10L</p>
                                <p className="text-2xl md:text-5xl font-semibold text-white mb-6">/ year</p>
                                <p className="mt-2 text-lg md:text-3xl  text-white">
                                    Rents shared <br /> flat unsure <br /> of next role
                                </p>
                            </div>
                        </div>
                        <Image src={"/10lpa.svg"} alt="10LPA" width={50} height={50} className="w-full " />
                    </div>

                    {/* 30L card */}
                    <div className="rounded-3xl border border-white/15 backdrop-blur-xl grid grid-cols-[1fr_1.2fr] md:grid-cols-[1fr_1fr] gap-0 overflow-hidden">
                        <div className="text-left py-4 md:py-8 space-y-5 bg-[linear-gradient(to_bottom_left,#353432_0%,transparent_70%)] h-full flex flex-col items-center">
                            <div className="w-7/10 space-y-1">
                                <p className="text-3xl md:text-6xl font-semibold text-white">₹30L</p>
                                <p className="text-2xl md:text-5xl font-semibold text-white mb-6">/ year</p>
                                <p className="mt-2 text-lg md:text-3xl  text-white">
                                    Travels quarterly, gifts MacBooks, chooses roles
                                </p>
                            </div>
                        </div>
                        <Image src={"/30lpa.svg"} alt="30LPA" width={100} height={100} className="w-full h-full object-cover " />
                    </div>
                </div>

                {/* Footer hashtag */}
                <p className="mb-8 md:md-15 my-15 text-3xl md:text-5xl w-full font-light text-[#41AAFF]">
                    #LifeAfterInterviewCall
                </p>

                <div className="hidden md:grid grid-cols-4  text-white mb-5">

                    <DayCount number={1} left={false} right />
                    <DayCount number={30} left right />
                    <DayCount number={60} left right />
                    <DayCount number={100} left right={false} />

                </div>
                <div className="grid md:grid-cols-4  text-white">
                    <div className="flex flex-col items-center md:my-0">
                        <div className="w-full block md:hidden">
                            <DayCount number={1} left={false} right={false} />

                        </div>
                        <Image src={'/image1.svg'} alt="" height={100} width={100} className="w-8/10 mt-4 md:mt-0" />
                        <div className="text-3xl md:text-xl mt-3">
                            Improved work
                        </div>
                    </div>
                    <div className="md:hidden w-full flex flex-col items-center h-20">
                        <div className={`w-0.5 h-20 bg-[#164AA2] flex-1 mt-1`}></div>
                    </div>

                    <div className="flex flex-col items-center md:my-0">
                        <div className="w-full block md:hidden">
                            <DayCount number={30} left={false} right={false} />

                        </div>
                        <Image src={'/image2.svg'} alt="" height={100} width={100} className="w-8/10 mt-4 md:mt-0" />
                        <div className="text-3xl md:text-xl mt-3">
                            Explored Spain
                        </div>
                    </div>

                    <div className="md:hidden w-full flex flex-col items-center h-20">
                        <div className={`w-0.5 h-20 bg-[#164AA2] flex-1 mt-1`}></div>
                    </div>

                    <div className="flex flex-col items-center md:my-0">
                        <div className="w-full block md:hidden">
                            <DayCount number={60} left={false} right={false} />

                        </div>
                        <Image src={'/image3.svg'} alt="" height={100} width={100} className="w-8/10 mt-4 md:mt-0" />
                        <div className="text-3xl md:text-xl mt-3">
                            Frague after
                        </div>
                    </div>

                    <div className="md:hidden w-full flex flex-col items-center h-20">
                        <div className={`w-0.5 h-20 bg-[#164AA2] flex-1 mt-1`}></div>
                    </div>

                    <div className="flex flex-col items-center  md:my-0">
                        <div className="w-full block md:hidden">
                            <DayCount number={100} left={false} right={false} />

                        </div>
                        <Image src={'/image4.svg'} alt="" height={100} width={100} className="w-8/10 mt-4 md:mt-0" />
                        <div className="text-3xl md:text-xl mt-3">
                            Promoted to Lead
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};


function DayCount({ number, left, right }: { number: number; left: boolean; right: boolean }) {
    return (
        <div className="flex items-center w-full">
            {<div className={`h-0.5 ${left ? " bg-[#164AA2] " : " bg-transparent "} flex-1`}></div>}
            <div className="px-8 py-4 bg-[#161A21] text-white rounded-full text-2xl font-medium ">
                Day {number}
            </div>
            {<div className={`h-0.5 ${right ? " bg-[#164AA2] " : " bg-transparent "} flex-1`}></div>}
        </div>
    );
}

