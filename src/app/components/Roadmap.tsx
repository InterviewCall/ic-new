import Image from "next/image"

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
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-[5fr_2fr_5fr]  bg-black">
                {/* 1st col */}
                <div className="w-full   " >
                    {
                        roadmap.left.map((item, index) => <ConceptCard key={index} topSpacing={item.topSpacing} duration={item.duration} heading={item.heading} icon={item.icon} subHeading={item.subHeading} />)
                    }
                    <div className="h-20 bg-transparent">

                    </div>
                </div>
                {/* Balls */}
                <div className="w-full relative    flex flex-col items-center" >
                    {/* blue balls */}
                    <div className="w-px h-full bg-[#0750CD]"></div>
                    <div className="absolute top-50 h-14 w-14 bg-[radial-gradient(circle_at_center,#013EF2,#0A89FF)] rounded-full shadow-[0_0_50px_30px_rgba(1,62,242,0.7)]"></div>

                    {/* yellow balls */}
                    <div className="absolute bottom-50 h-14 w-14 rounded-full bg-[radial-gradient(circle_at_center,#E2820B,#FDD233)] shadow-[0_0_50px_30px_rgba(226,130,11,0.7)]"></div>
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
            <button className="hover:cursor-pointer bg-linear-to-r from-white/10 to-black rounded-xl border border-white/20 px-8 py-3 ">
                View Full Curriculum 
            </button>
        </div>
    )
};


type ConceptCardProps = { duration: string, icon: string, heading: string, subHeading: string, topSpacing: number }

function ConceptCard({ duration, icon, heading, subHeading, topSpacing }: ConceptCardProps) {
    return (
        <div className="flex flex-col items-center w-full">
            <div
                className="bg-transparent"
                style={{ height: topSpacing ? `${topSpacing}px` : undefined }}
            ></div>

            <div className="text-gray-400 font-light text-sm my-3">{duration}</div>
            <div className="border tracking-tight border-white/30 rounded-2xl py-8 px-6 w-90/100 space-y-6 bg-linear-to-b from-[#0B0F17] to-[#081727]">
                <div>
                    <Image src={icon} alt="" height={100} width={100} className="h-16 " />
                </div>
                <div className="text-5xl text-white">
                    {heading}
                </div>

                <div className="text-2xl text-gray-300">
                    {subHeading}
                </div>

            </div>
        </div>
    )
}