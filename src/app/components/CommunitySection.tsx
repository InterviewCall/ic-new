import Image from "next/image";

export default function CommunitySection() {
    return (
        <section className="w-full rounded-3xl bg-linear-to-b from-[#050B14] to-[#02060C] p-10">
            <h2 className="mb-10 text-center text-6xl font-medium text-white">
                Community & Belonging
            </h2>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Left column */}
                <div className="grid gap-6">
                    <LiveStudentsCard />
                    <AlumniStoryCard />
                </div>

                {/* Right column */}
                <div className="grid gap-6">
                    <UpcomingClassesCard />
                    <VictoriesCard />
                </div>
            </div>

            <LearningExperience />
        </section>
    );
}

function LiveStudentsCard() {
    return (
        <div className="flex flex-col items-center justify-center rounded-2xl bg-[#0A1220] p-10 text-center shadow-inner">
            <div className="text-7xl font-semibold  bg-linear-to-br from-[#eeeeee] to-[#1c68aa] bg-clip-text text-transparent
                drop-shadow-[0_0_30px_rgba(95,168,255,2)]">142</div>
            <div className="mt-2 text-lg text-white/70">
                students learning <br /> right now
            </div>
        </div>
    );
}


function UpcomingClassesCard() {
    const classes = [
        {
            name: "Sougata Sat",
            time: "12:30 PM",
            title: "High-Level Design Case Study: Driver-Rider Optimization",
        },
        {
            name: "Ishan Sa",
            time: "6:00 PM",
            title: "Real-World use of Dynamic Programming in the Industry",
        },
        {
            name: "Emma",
            time: "3:17 PM",
            title: "High-Level Design Case Study: Microsoft Data Infra Optimization",
        },
        {
            name: "Emma",
            time: "3:17 PM",
            title: "Segment Tree Hard Problems",
        },
    ];

    return (
        <div className="rounded-2xl p-6 border border-white/20">
            <div className="rounded-2xl bg-linear-to-br from-[#0f1622] to-[#05080C] p-6 border border-white/10">
                <div className="mb-4 flex items-center justify-between">
                    <div className="text-white text-2xl tracking-tight">Upcoming Classes</div>
                    <button className="text-lg text-white/50 hover:underline hover:cursor-pointer ">
                        Register Now
                    </button>
                </div>

                <div className="space-y-4 ">
                    {classes.map((item, i) => (
                        <div key={i} className="flex gap-3 ">
                            <Image
                                src="/cohortPfp1.svg"
                                alt=""
                                width={100}
                                height={100}
                                className="h-15 w-auto rounded-full"
                            />
                            <div className="p-3 border border-white/5 w-full rounded-lg space-y-1 bg-linear-to-bl from-[#0A111E] to-[#050911]">
                                <div className="text-lg text-[#99C9E7]">
                                    {item.name} · {item.time}
                                </div>
                                <div className="text-base text-white/80">
                                    {item.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


function AlumniStoryCard() {
    return (
        <div className="relative flex items-center justify-center rounded-2xl bg-[#0A1220] p-8">
            <div className="rounded-xl bg-[#0F1C2E] px-6 py-4 text-sm text-white flex items-center gap-x-5">
                <Image alt="" src={'/cohortPfp1.svg'} width={70} height={70} className="rounded-full" />
                <div className="text-lg">
                    Alumni story <br /> preview
                </div>
            </div>

            {/* dotted glow */}
            <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-6">
                <div className="h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
            </div>
        </div>
    );
}


function VictoriesCard() {
    const items = [
        "6 new job offers 🎉",
        "4 internal problems added",
        "3 capstones completed",
    ];

    return (
        <div className="rounded-2xl bg-linear-to-br from-[#121a27] to-[#05080c] p-6">
            <div className="rounded-2xl bg-linear-to-r from-[#191f2b] to-[#070a0f]  p-6">
                <div className="mb-4 text-2xl text-white">
                    This Week’s victories
                </div>

                <ul className="space-y-1 text-lg text-white">
                    {items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-blue-400" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


function LearningExperience() {
    return (
        <section className="w-full py-10">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_2fr]">

                <div className="relative rounded-2xl bg-linear-to-br from-[#0A121D] to-[#050911] p-6 shadow-inner flex flex-col">

                    <div className="flex flex-1 flex-col bg-linear-to-br from-[#131822] to-[#090b13] border border-white/10 h- p-6 rounded-2xl">

                        <div className="mb-4 text-sm text-white/60 p-3 border border-white/10 rounded-lg bg-linear-to-b from-[#131820] to-[#1F2630] ">Live-Voice-Over-Analysis</div>

                        <div className="relative flex flex-1 h-full items-center justify-center rounded-xl bg-black/40">
                            <Image
                                src="/resume1.svg"
                                alt=""
                                width={0}
                                height={0}
                                className="opacity-80 w-full h-auto rounded-2xl"
                            />

                            {(
                                <div className="absolute flex h-14 w-14 items-center justify-center rounded-full bg-black/60 backdrop-blur">
                                    ▶
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-6 text-center text-2xl font-medium  text-white">
                        Resume Teardown
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 border border-white/30 rounded-2xl p-6 bg-linear-to-br from-[#0A121D] to-[#050911]">
                    <div className="bg-linear-to-br from-[#080b0e] to-[#0F131A] rounded-2xl flex flex-col items-center p-6 w-full">
                        <Image alt="" src={'/code.svg'} width={100} height={100} className=" w-full h-auto rounded-2xl" />

                        <div className="grid grid-cols-[1fr_5fr] items-center gap-2  w-full gap-x-6 my-3">
                            <div>
                                <Image alt="" src={'/code.svg'} width={48} height={48} className="rounded-full" />
                            </div>
                            <div className="">
                                Name <br /> Designation
                            </div>

                        </div>
                        <div className=" text-base text leading-5 font-normal text-white/80 bg-gray-900 rounded-2xl p-4">
                            Good use of Whiteboard 
                            design in the classes to 
                            understand hard problems.
                        </div>
                        <div className="mt-6 text-center text-2xl font-medium  text-white">
                            Code Review
                        </div>
                    </div>

                    <div className="w-full ">
                        <Image alt="" src={'/whiteboard.svg'} width={0} height={0} className="w-full h-auto rounded-2xl" />
                            <div className="mt-4 text-2xl text-center">
                                Whiteboard Design
                            </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <TestimonialCard />
                <GalleryCard />
            </div>
        </section>
    );
}


function TestimonialCard() {
    return (
        <div className="relative col-span-2 rounded-2xl bg-linear-to-br from-[#0A121D] to-[#050911] p-10">
            <span className="h-fit top-10 absolute">
                <Image alt="" src={'/colon.svg'} width={0} height={0} className="inline h-10 w-fit" />
                <Image alt="" src={'/colon.svg'} width={0} height={0} className="inline h-10 w-fit" />

            </span>
            <span className=" block mt-2 ml-16 text-5xl text-white">
                I landed my dream job after InterviewCall.{`"`}</span>
        </div>
    );
}

function GalleryCard() {
    return (
        <div className="relative rounded-2xl bg-linear-to-br from-[#0A121D] to-[#050911] p-6">
            <div className="relative flex h-40 items-center justify-center rounded-xl bg-black/40">
                <Image
                    src="/hoverBlur.svg"
                    alt=""
                    width={0}
                    height={0}
                    className="w-full opacity-40 blur-sm overflow-hidden"
                />

                <div className="absolute rounded-md bg-black/60 px-4 py-2 text-sm text-white">
                    Hover to Focus
                </div>
            </div>

            <div className="mt-4 text-2xl font-medium text-center text-white">
                Offer Letter Gallery
            </div>
        </div>
    );
}
