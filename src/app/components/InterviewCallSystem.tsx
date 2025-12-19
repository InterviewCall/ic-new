import { Calendar } from "lucide-react"
import Image from "next/image"

export default function InterviewCallSystem() {
    return (
        <div className="relative isolate w-full">
            {/* Blur background */}
            <div className="absolute top-20 inset-x-0 mx-auto -z-10 h-96 w-96 rounded-full bg-[#011D4A]/90 blur-3xl" />

            {/* Text */}
            <div className="relative z-10 text-center tracking-tighter text-7xl text-white my-20">
                The InterviewCall <br /> System
            </div>

            <div className="grid grid-cols-3 gap-x-10">
                <Card imageSrc="/system1.svg" title="Learn" />
                <Card imageSrc="/system2.svg" title="Solve" />
                <Card imageSrc="/system3.svg" title="Lead" />
            </div>

            <div className=" grid grid-cols-[2fr_3fr] gap-x-5 mt-20 text-3xl items-center ">
                <div className="text-right text-white/60">
                    Other Programs/<br />
                    YouTube break<br />
                    the chain
                </div>
                <div className="relative h-64  w-full text-white/80 text-4xl">
                    <div className="absolute -top-36">
                        <Image alt="" src={'/chain.svg'} width={0} height={0} className="w-full h-auto" />
                        <div className="bottom-0  inset-x-0 mx-auto text-center">
                            IC completes it
                        </div>
                    </div>
                </div>

            </div>

            {/* mock */}
            <div className="w-full flex flex-col items-center">
                <div className="relative my-20 isolate w-1/2 flex flex-col items-center  rounded-2xl border border-white/10 bg-linear-to-br from-[#09121d] to-[#000000] p-8 text-center">

                    {/* Glow */}
                    <div className="absolute inset-0 -z-10 rounded-2xl bg-[#1d488f] blur-[120px] opacity-60" />

                    {/* Text */}
                    <h2 className="text-4xl font-medium text-white leading-snug tracking-tight">
                        Try a real mock.
                        <br />
                        <span className="font-normal text-white/80">
                            No payment. No pressure.
                        </span>
                    </h2>

                    {/* Date Picker */}
                    <div className="relative mt-6 w-full">
                        <Calendar className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
                        <input
                            type="date"
                            className="w-full appearance-none rounded-lg border border-white/20 bg-white/5 px-12 py-3 text-sm text-white outline-none
                     focus:border-[#1C6BFF]"
                        />
                    </div>

                    {/* Button */}
                    <button className="mt-6 w-fit rounded-xl bg-[#1C6BFF] py-3 px-10 text-2xl font-medium text-white transition hover:bg-[#1558d6]">
                        Try Free
                    </button>
                </div>
            </div>
        </div>
    )
}

function Card({ imageSrc, title }: { imageSrc: string, title: string }) {
    return (
        <div className="flex justify-center">
            <div className="w-52 h-52 rounded-xl bg-linear-to-br from-black/50 to-[#011D4A] border border-blue-500/20 flex flex-col items-center p-6 justify-around">
                <Image alt="" src={imageSrc} width={0} height={0} className="h-24 w-auto" />
                <div className="p-4 text-3xl text-white font-medium text-center">
                    {title}
                </div>
            </div>
        </div>
    )
}