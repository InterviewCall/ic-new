import Image from "next/image"
import { FaAngleRight } from "react-icons/fa";

const roadmap = {
    left: [
        {
            topSpacing: 100,
            duration: "Month 1 – 4 · DS · CS",
            heading: "Master the Fundamentals",
            icon: "/icons/fundamentals.svg",
            subHeading:
                "Learn Data Structures & Algorithms, master CS theory with weekly hands-on labs",
        },
        {
            topSpacing: 250,
            duration: "Month 5 – 6 · Backend",
            heading: "Production Engineering",
            icon: "/icons/production.svg",
            subHeading:
                "Launch APIs, learn infrastructure, scale applications to production",
        },
        {
            topSpacing: 250,
            duration: "Month 9 – 10 · Career",
            heading: "Land Your Dream Job",
            icon: "/icons/job.svg",
            subHeading:
                "Mock interviews by Engineering Managers, get hired by top tech firms",
        },
    ],

    right: [
        {
            topSpacing: 250,
            duration: "Month 7 – 8 · System Design",
            heading: "System Design Mastery",
            icon: "/icons/system-design.svg",
            subHeading:
                "Build scalable systems, lead technical discussions, design for millions of users",
        },
        {
            topSpacing: 250,
            duration: "Month 8 – 9 · Projects",
            heading: "Real-World Projects",
            icon: "/icons/projects.svg",
            subHeading:
                "Work in engineering teams, build capstone projects, present to industry leaders",
        },
    ],
};

export default function Roadmap() {
    return (
        <div className="flex w-full flex-col items-center px-3">
            <div className="text-center w-full text-4xl md:text-7xl mb-2">
                How It Looks
            </div>
            <div className="w-full grid md:grid-cols-[6fr_4fr_6fr]">
                {/* 1st col */}
                <div className="w-full   " >
                    {
                        roadmap.left.map((item, index) => <ConceptCard key={index} topSpacing={item.topSpacing} duration={item.duration} heading={item.heading} icon={item.icon} subHeading={item.subHeading} />)
                    }
                    <div className="hidden md:block h-20 bg-transparent">

                    </div>
                </div>
                {/* Balls */}
                <div className="hidden md:flex w-full relative flex-col items-center" >
                    {/* blue balls */}
                    <div className="w-px h-full bg-[#0750CD]"></div>
                    <div className="absolute top-50 h-20 w-20 bg-[radial-gradient(circle_at_center,#013EF2,#0A89FF)] rounded-full shadow-[0_0_60px_40px_rgba(1,62,242,0.7)]"></div>

                    {/* yellow balls */}
                    <div className="absolute bottom-50 h-20 w-20 rounded-full bg-[radial-gradient(circle_at_center,#E2820B,#FDD233)] shadow-[0_0_60px_40px_rgba(226,130,11,0.7)]"></div>
                </div>
                {/* 2nd col */}
                <div className="w-full   " >

                    {
                        roadmap.right.map((item, index) => <ConceptCard key={index} topSpacing={item.topSpacing} duration={item.duration} heading={item.heading} icon={item.icon} subHeading={item.subHeading} />)
                    }
                </div>
                {/* sidebar maybe
                <div className="w-full   " ></div>
                sidebar2 maybe 
                <div className="w-full   " ></div> */}
            </div>
            <button className="hover:cursor-pointer my-3 md:my-0 flex items-center gap-x-3 text-2xl bg-linear-to-r from-[#13141B] tracking-wider to-[#070A0E] rounded-2xl md:rounded-full border border-white/20 px-8 md:px-16 py-6 ">
                <div>
                    View Full Curriculum
                </div>
                <div>
                    <FaAngleRight size={30} />
                </div>
            </button>
        </div>
    )
};


type ConceptCardProps = { duration: string, icon: string, heading: string, subHeading: string, topSpacing: number }

function ConceptCard({ duration, icon, heading, subHeading, topSpacing }: ConceptCardProps) {
    return (
        <div className="my-3 md:my-0 flex flex-col items-center w-full">
            <div
                className="hidden md:block bg-transparent"
                style={{ height: topSpacing ? `${topSpacing}px` : undefined }}
            ></div>

            <div className="text-gray-400 font-light text-sm my-3">{duration}</div>
            <div className="border tracking-tight border-white/30 rounded-2xl py-8 px-6 w-90/100 space-y-6 bg-[linear-gradient(to_bottom_right,#081E3D_0%,#081425_60%,#1F2F46_100%)] h-full">
                <div>
                    <Image src={icon} alt="" height={100} width={100} className="h-16 " />
                </div>
                <div className="text-5xl md:text-5xl text-white">
                    {heading}
                </div>

                <div className="text-2xl text-gray-300">
                    {subHeading}
                </div>

            </div>
        </div>
    )
}