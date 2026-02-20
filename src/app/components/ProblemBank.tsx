import Image from "next/image";


const content = [
    {
        heading: "Marketplace Matching",
        subHeading: "(Production-grade systems taught by senior engineers)",
        text: [
            "Supply–demand matching",
            "Rebalancing strategies",
            "Fairness tradeoffs",
        ],
    },
    {
        heading: "Ranking & Relevance Systems",
        subHeading: "(Ranking systems design and tradeoffs)",
        text: [
            "Home feed ranking architecture",
            "Candidate retrieval pipelines",
            "Query-time scoring & tuning",
        ],
    },
    {
        heading: "Data Infrastructure & Pipelines",
        subHeading: "(How data systems are built for reliability, not demos)",
        text: [
            "CDC pipelines & event ingestion",
            "Backfills, reprocessing & recovery",
            "SLO-driven ETL design",
        ],
    },
    {
        heading: "Payments & Fraud Systems",
        subHeading: "(High-stakes systems with real failure costs)",
        text: [
            "Chargeback detection logic",
            "Risk scoring frameworks",
            "Velocity limits & abuse prevention",
        ],
    },
    {
        heading: "Video & Media Systems",
        subHeading: "(Systems built for scale, latency, and user experience)",
        text: [
            "Playback pipeline architecture",
            "CDN & caching strategy",
            "QoE metrics & degradation handling",
        ],
    },
    {
        heading: "Messaging & Streaming",
        subHeading: "(Event-driven systems used at scale)",
        text: [
            "Kafka-based architecture design",
            "Exactly-once processing semantics",
            "Replay & recovery strategies",
        ],
    },
];


export default function ProblemBank() {
    return (
        <section className="w-full relative text-white flex flex-col items-center rounded-2xl">
            <div className="absolute top-20 inset-x-0 mx-auto -z-10 h-96 w-96 rounded-full bg-[#011D4A]/60 blur-3xl" />

            {/* Header */}
            <div className="w-full mx-auto text-center space-y-4 my-20 mb-32 ">
                <h2 className="text-5xl tracking-tighter">
                    The Problem Bank You Actually Need
                </h2>
                <p className="text-white/60 text-center text-2xl leading-6 font-light">
                    These are not theoretical questions. Each system is built and taught by <br />
                    engineers who’ve designed and operated it in production.
                </p>

                {/* Pills */}
                <div className="flex justify-center gap-3 px-4 py-1 rounded-full bg-radial from-[#030e18] to-[#071d38] shadow-[0_0_60px_5px_rgba(7,29,56,1)] mt-12 border border-blue-600/10 w-fit mx-auto items-center">
                    {["Latency", "Scale", "Fairness", "SLOs"].map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xl  text-white/70"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Main Card */}
            <div className="relative flex flex-col items-center w-full h-full">
               <div className="absolute w-full border top-1/2 -translate-y-1/2 border-white h-full bg-[#194086] rounded-full blur-3xl z-0"></div>

            <div className="z-10 w-full  bg-[linear-gradient(to_bottom_right,#223B63_0%,#0C1324_40%,#0C1324_60%,#223B63_100%)] bg-white/5 border border-white/10 rounded-2xl ">
                <div className="p-10 ">
                    <h3 className="text-4xl ">
                        <span className="text-[#8BC2F6]">Driver–Rider </span>Matching System (Production-Scale)
                    </h3>
                    <p className="text-2xl font-light text-white/60 mt-1">
                        Taught by senior engineers who built and scaled similar systems
                    </p>
                </div>
                {/* Left Content */}
                <div className="grid grid-cols-2 pr-0 pt-0 pb-6 p-16 text-2xl">
                    <div className="space-y-5 font-light">
                        <div>
                            <p className="text-[#A6CEF3]">Contrainst</p>
                        <ul className="list-disc text-[#A6CEF3] space-y-2 ml-8">
                            <li> p95 latency &lt; 200ms</li>
                            <li> Fairness across zones</li>
                            <li> Cancellation risk</li>
                            <li> City-level supply imbalance</li>
                        </ul>
                        </div>

                        <div className=" text-[#A6CEF3] space-y-1 ">
                            <p className="text-[#A6CEF3]">What interviewers check</p>
                            <ul className=" list-disc ml-8">
                                <li>How the system is modeled</li>
                                <li>Trade-offs made in production</li>
                                <li>Data structures used at scale</li>
                                <li>Failure modes & mitigations</li>
                            </ul>
                        </div>

                    </div>

                    {/* Right Image */}
                    <div className="flex flex-col gap-y-7 items-center justify-center">
                        <div className="relative w-full h-fit rounded-l-[35px]  border border-white/10 flex items-center justify-center">
                            <Image
                                src="/problemBank.svg"
                                alt=""
                                width={0}
                                height={0}
                                className="w-full h-auto opacity-80"
                            />
                        </div>
                        <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition px-5 py-3 rounded-lg text-xl font-medium">
                            View system breakdown →
                        </button>
                    </div>
                </div>
            </div>
            </div>

            {/* Bottom Cards */}
            <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.map((content, idx) => (
                    <Card key={idx} heading={content.heading} subHeading={content.subHeading} texts={content.text} />
                ))}
            </div>
            <div className="relative flex flex-col items-center">
               <div className="absolute w-full border top-1/2 -translate-y-1/2 border-white h-9/10 bg-[#194086] rounded-full blur-3xl z-0"></div>

                <Comparison />
            </div>
            <div className="my-10 w-1/3 flex flex-col items-center ">
                <div className="text-2xl font-light text-white/60">
                    Get access after eligibility call
                </div>
                <button className="py-3.5 relative bg-radial from-black to-white/5 w-full text-2xl mt-3 rounded-2xl border border-white/10 px-6 overflow-hidden">
                    <div className="absolute bottom-10 inset-0 flex items-center justify-center z-0">
                        <div className="h-8 w-32 rounded-full bg-[#437adf] blur-[30px]" />
                    </div>

                    <span className="relative z-10">
                        Unlock in your roadmap
                    </span>
                </button>
            </div>
        </section>
    );
};


function Card({ heading, subHeading, texts }: { heading: string, subHeading: string, texts: string[] }) {
    return (
        <div className="z-10 border border-white/10 rounded-xl p-5 flex gap-4 bg-[linear-gradient(to_bottom_left,#192A4B_0%,#0C1325_30%)] shadow-[0_0_30px_6px_rgba(7,29,56,0.35)]">
            <div className="w-full h-full flex flex-col justify-between">
                <div>
                    <h4 className=" text-3xl">{heading}</h4>
                    <p className="text-xl text-white/60 mt-1">
                        {subHeading}
                    </p>
                    <div className="ml-10 mt-3 text-xl">
                        <ul className=" list-disc">
                            {texts.map((text, idx) => (
                                <li key={idx}>{text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <button className="text-blue-400 text-xl font-light mt-2 text-right w-full bottom-0">
                    View system →
                </button>
            </div>
        </div>
    )
};

function Comparison() {
    return (
        <div className="w-full z-10 mt-10  rounded-lg grid grid-cols-[5fr_1fr_5fr] items-center text-center p-3 border border-blue-300/10 bg-radial from-[#0C1429] to-[#080C1A]">
            <div className="text-3xl font-light text-[#98C1EF]">
                Generic Prep
            </div>
            <div className="text-xl">
                VS
            </div>
            <div className="text-3xl font-light text-[#98C1EF]">
                Production Systems
            </div>
            <div className="p-6 h-full">
                <div className="p-6 rounded-xl text-xl font-light text-left bg-linear-to-bl  from-[#172038] to-[#0D1321]">
                    <div className="text-[#7AA8D7]">Hypothetical problems</div>
                    <div className="blur-[3px]">Build zomato like Food-delivery</div>
                    <div className="text-[#7AA8D7]">Idealized solutions</div>
                    <div className="blur-[3px]">Use React, MongoDB and Node</div>
                    <div className="text-[#7AA8D7]">No ownership of failures</div>
                </div>
            </div>
            <div className="w-full">
                <Image alt="Alt" src={'/rightArrow.svg'} width={0} height={0} className="w-full h-auto" />
            </div>
            <div className="p-6 h-full">
                <div className="p-6 rounded-xl text-2xl flex flex-col justify-between font-light text-left bg-linear-to-br h-full from-[#0d1729] to-[#03050a]">
                    <ul className="list-disc ml-6 space-y-1">

                        <li className="text-[#7AA8D7]">Real constraints & metrics</li>
                        <li className="text-[#7AA8D7]">Failure modes encountered</li>
                        <li className="text-[#7AA8D7]">Tradeoffs actually made</li>
                    </ul>
                    <div className="text-base text-white/60">
                        {"(Trained by engineers who owned these systems)"}
                    </div>
                </div>
            </div>
        </div>
    )
}
