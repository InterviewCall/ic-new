import Image from "next/image"

export default function Roadmap() {
    return (
        <div>
            <div className="grid grid-cols-[5fr_2fr_5fr_1fr_1fr] h-screen bg-black">
                <div className="w-full border border-white" >
                    <Space />
                    <ConceptCard duration="Month 1 - 4 . DS . CS " heading="Master the fundamentals" icon="/icon1.svg" subHeading="Learn Data structures and algorithms master cs theory with week hand on lab " />
                </div>
                <div className="w-full border border-white" ></div>
                <div className="w-full border border-white" ></div>
                <div className="w-full border border-white" ></div>
                <div className="w-full border border-white" ></div>
            </div>
        </div>
    )
};

function Space() {
    return (
        <div className="bg-transparent h-20  ">

        </div>
    )
};

function ConceptCard({ duration, icon, heading, subHeading }: { duration: string, icon: string, heading: string, subHeading: string }) {
    return (
        <div className="flex flex-col items-center ">
            <div className="text-gray-400 font-light text-sm my-3">{duration}</div>
            <div className="border tracking-tight border-white/30 rounded-2xl py-8 px-6 w-55/100 space-y-6 bg-linear-to-b from-[#0B0F17] to-[#081727]">
                <div>
                    <Image src={icon} alt="" height={100} width={100} className="h-16 " />
                </div>
                <div className="text-4xl text-white">
                    {heading}
                </div>

                <div className="text-xl text-gray-300">
                    {subHeading}
                </div>

            </div>
        </div>
    )
}