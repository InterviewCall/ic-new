import Image from "next/image"


const content = [
    {
        time: "Month 1",
        content: [
            { heading: "Java/CPP + OOP", subHeading: "2 Weeks" },
            { heading: "Data Structures & Algorithms", subHeading: "Level 1 · 4 Weeks" },
            { heading: "Data Structures & Algorithms", subHeading: "Level 2 · 8 Weeks" },
            { heading: "Java/CPP + OOP", subHeading: "2 Weeks" },
        ],
        why: {
            text: "Mastering core Java concepts like data types, control structures, and OOP will set the stage for tackling advanced topics and building scalable web applications.",
            topic: [
                "Introduction to Java/C++, Input Output",
                "Data Types, Operators, Conditions, Loops",
                "Patterns Problems, Functions, 1D - 2D Arrays",
                "Strings, Memory Management, OOP",
                "Java Collections / C++ STL",
            ],
        },
    },
];

export default function TrainingModules() {
    return (
        <div>
            <div className="text-center text-6xl tracking-tight">
                Our in depth training modules
            </div>
            <div className="text-center text-2xl font-light tracking-wide mt-2 text-white/70">
                To get into MAANG and sustain for years to come
            </div>

            {content.map((module, index) => (
                <div key={index}>
                    <div className="grid grid-cols-[1fr_15fr_15fr]">
                        <div></div>
                        <div className="m-4 mt-6 text-3xl font-semibold text-white">
                            {module.time}
                        </div>
                        <div></div>
                    </div>

                    <div className="grid grid-cols-[1fr_15fr_15fr] gap-x-2 mb-6">
                        {/* design */}
                        <div className=" flex flex-col items-center">
                            <Image src={'/design1.svg'} alt="" width={30} height={30} />
                            <div className="h-full w-[1.5px] bg-[#1CABFF]"></div>
                        </div>

                        {/* left cards */}
                        <div className=" space-y-5 text-2xl">
                            {module.content.map((item, i) => (
                                <div
                                    key={i}
                                    className="border border-white/30 rounded-2xl p-8  bg-linear-to-br from-[#111D29] to-[#000000]"
                                >
                                    <div>{item.heading}</div>
                                    <div>{item.subHeading}</div>
                                </div>
                            ))}
                        </div>

                        {/* right why section */}
                        <div className="relative isolate border border-white/30 rounded-2xl p-6 text-3xl 
                        bg-linear-to-br from-[#111D29] to-[#000000] overflow-hidden">

                            <div className="relative isolate p-6 bg-linear-to-tr from-[#030F15] to-black rounded-2xl space-y-2">
                                <Image
                                    src={'/design2.svg'}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="h-auto w-1/4 mb-6"
                                />

                                <div className="my-3">
                                    Why learn this:
                                </div>

                                <div className="z-10 text-xl text-white/50 space-y-4 mb-6">
                                    {module.why.text}
                                </div>

                                {module.why.topic.map((topic, tIndex) => (
                                    <div
                                        key={tIndex}
                                        className="px-2.5 py-1 rounded-xl text-lg bg-[#B76A00] w-fit"
                                    >
                                        {topic}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
