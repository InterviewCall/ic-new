import Image from "next/image";
import React from "react";

export default function JourneyComparison() {
    return (
        <section className="relative flex flex-col items-center w-full bg-black py-24 overflow-hidden">
            {/* Top heading */}
            <div className="relative w-[85%] z-10 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
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
                <div className="mt-6 grid grid-cols-2 gap-10">
                    {/* 10L card */}
                    <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl grid grid-cols-[1.5fr_1fr] gap-4 ">
                        <div className="text-left p-6 space-y-5">
                            <p className="text-6xl font-semibold text-white">₹30L</p>
                            <p className="text-4xl font-semibold text-white">/ year</p>
                            <p className="mt-2 text-2xl  text-white">
                                Rents shared flat unsure of <br /> next role
                            </p>
                        </div>
                        <Image src={"/10lpa.svg"} alt="10LPA" width={50} height={50} className="w-full " />
                    </div>

                    {/* 30L card */}
                    <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl grid grid-cols-[1.5fr_1fr] gap-4 ">
                        <div className="text-left p-6 space-y-5">
                            <p className="text-6xl font-semibold text-white">₹30L</p>
                            <p className="text-4xl font-semibold text-white">/ year</p>
                            <p className="mt-2 text-2xl  text-white">
                                Travels quarterly, gifts MacBooks, chooses roles
                            </p>
                        </div>
                        <Image src={"/30lpa.svg"} alt="30LPA" width={50} height={50} className="w-full " />
                    </div>
                </div>

                {/* Footer hashtag */}
                <p className="my-10 text-5xl font-light text-blue-400">
                    #LifeAfterInterviewCall
                </p>

                <div className="grid grid-cols-4  text-white mb-5">

                    <DayCount number={1} left={false} right />
                    <DayCount number={2} left right />
                    <DayCount number={3} left right />
                    <DayCount number={4} left right={false} />
                    
                </div>
                <div className="grid grid-cols-4  text-white">
                    <div className="flex flex-col items-center">
                        <Image src={'/image1.svg'} alt="" height={100} width={100} className="w-8/10"/>
                        <div>
                            Improved work-
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image src={'/image2.svg'} alt="" height={100} width={100} className="w-8/10"/>
                        <div>
                            Explored Spain
                        </div>
                    </div>


                    <div className="flex flex-col items-center">
                        <Image src={'/image3.svg'} alt="" height={100} width={100} className="w-8/10"/>
                        <div>
                            Frague after
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image src={'/image4.svg'} alt="" height={100} width={100} className="w-8/10"/>
                        <div>
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
      {<div className={`h-1 ${left ? " bg-[#164AA2] " : " bg-transparent "} flex-1`}></div>}
      <div className="px-10 py-5 bg-[#161A21] text-white rounded-full text-sm font-medium ">
        Day {number}
      </div>
      {<div className={`h-1 ${right ? " bg-[#164AA2] " : " bg-transparent "} flex-1`}></div>}
    </div>
  );
}

