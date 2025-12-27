import Image from "next/image";
import { RotateCcw } from "lucide-react";


export default function RoleMatchedMentors() {
    return (
        <div className="w-full relative my-10 pt-10 rounded-2xl bg-black">
            <div className="absolute top-0 inset-x-0 mx-auto -z-10 h-full w-full rounded-full bg-[#011D4A]/60 blur-3xl" />
            <div className="w-full rounded-2xl ">

            <div className="text-center mb-10">
                <div className="text-7xl font-light tracking-tighter text-white">
                    Meet Your Role-Matched Mentors
                </div>
                <div className="text-3xl my-3 text-white/70 font-light">
                    When an interview is scheduled, our internal system matches candidates<br />
                    with mentors who’ve done similar roles  based on company, level, domain,<br />
                    and availability
                </div>
            </div>

            <div className="rounded-2xl border border-white/20 py-6 px-10 ">
                <div className="text-2xl">
                    How Role-Matching Works at InterviewCall
                </div>
                <div className="grid grid-cols-2 gap-x-10">
                    {/* left */}
                    <div>
                        <span className="mr-2 text-lg">
                            Example :
                        </span>
                        <span className="text-lg text-white/50">
                            How Matching Works internally
                        </span>
                        <div className="flex flex-col items-center w-full mt-8  ">
                            <Card>
                                <div className=" flex items-center justify-center gap-x-5 w-full h-full">
                                    <Image alt="" src={'/icon1.svg'} width={60} height={0} className="h-auto " />
                                    <div className="text-3xl">
                                        Interview Scheduled
                                    </div>
                                </div>
                            </Card>
                            <Image alt="" src={'/rightArrow.svg'} width={100} height={0} className=" h-auto rotate-90" />
                            <Card>
                                <div className="text-center">
                                    <div className="text-white/80 text-2xl">
                                        Role Context Captured
                                    </div>
                                    <div className="text-white/60 text-lg">
                                        {"(company / level / domain / location)"}
                                    </div>
                                </div>
                            </Card>
                            <Image alt="" src={'/rightArrow.svg'} width={100} height={0} className=" h-auto rotate-90" />
                            <Card>
                                <div className="text-center">
                                    <div className="text-white/80 text-2xl">
                                        Mentor Pool Filtered
                                    </div>
                                    <div className="text-white/60 text-lg">
                                        {"(same org / same level / similar bar)"}
                                    </div>
                                </div>
                            </Card>
                            <Image alt="" src={'/rightArrow.svg'} width={100} height={0} className=" h-auto rotate-90" />
                            <Card>
                                <div className="text-center">
                                    <div className="text-white/80 text-2xl">
                                        Final Match Assigned
                                    </div>
                                    <div className="text-white/60 text-lg">
                                        {"(based on availability & relevance)"}
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    {/* right */}
                    <div>
                        <MentorCard />
                    </div>
                </div>
                <div className="w-full rounded-2xl border border-white/20 my-10">
                    <PreparationPlanCard />
                </div>
                <div className="w-full grid grid-cols-[5fr_1fr_5fr_1fr_5fr] text-center">
                    <FeatureCard heading="100+" subHeading="active mentors" />
                    <div className="w-full flex flex-col items-center">
                        <div className="h-full w-1 bg-radial from-white to-black" />
                    </div>
                    <FeatureCard heading="Thousands" subHeading="of mock interviews conducted" />

                    <div className="w-full flex flex-col items-center">
                        <div className="h-full w-1 bg-radial from-white to-black" />
                    </div>
                    <FeatureCard heading="< 48 hours" subHeading="Median assignment time: <48 hours" />
                </div>
                <div className="text-center mt-10 text-xl text-white/60 leading-tight font-extralight">
                    Mentor assignment is managed internally. Direct mentor access or <br />
                    selection is not provided outside the program.
                </div>
            </div>
        </div>
        </div>
    )
};

function FeatureCard({ heading, subHeading }: { heading: string, subHeading: string }) {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="text-3xl tracking-widest">{heading}</div>
            <div className="text-xl font-extralight text-white/70">{subHeading}</div>
        </div>
    )
}

function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full rounded-2xl py-px px-0.5 bg-linear-to-b from-white/20 to-black my-1 h-28">
            <div className="w-full h-full bg-linear-to-b from-[#090d16] to-[#000000] rounded-[calc(var(--radius-2xl)-2px)] px-10 py-6">
                {children}
            </div>
        </div>
    )
};


function PreparationPlanCard() {
    return (
        <div className="relative w-full rounded-xl border border-white/10 bg-linear-to-br from-[#090d1a] to-[#000000] p-5 text-white shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden">
            <div className="absolute -top-4 left-60  z-20 h-24 w-24 rounded-full bg-blue-500 blur-3xl" />

            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-400/40 text-blue-400">
                    <RotateCcw size={14} />
                </div>

                <div className="text-3xl tracking-wider font-light">
                    Your preparation plan
                </div>
            </div>

            {/* Content */}
            <ul className="mt-4 list-disc ml-10 space-y-2 text-xl font-extralight leading-tight text-white/70">
                <li className=" gap-2">
                    <span>2 role-specific mock interviews</span>
                </li>

                <li className=" gap-2">
                    <span>Bar-raiser evaluation checklist</span>
                </li>

                <li className=" gap-2">
                    <span>System design deep dive (domain-specific)</span>
                </li>
            </ul>
        </div>
    );
};

function MentorCard() {
    return (
        <div className="relative w-full rounded-2xl border border-white/10 bg-linear-to-br from-[#080c18] to-[#010205] px-8 py-6 shadow-[0_0_60px_rgba(0,0,0,0.8)] text-white">

            {/* Header */}
            <h3 className="text-3xl font-light tracking-wider text-white/90">
                Mentor Profile (Example)
            </h3>

            {/* Profile Section */}
            <div className="mt-6 flex items-start gap-4">
                {/* Avatar */}
                <Image
                    src="/pfp4.svg"
                    alt="mentor avatar"
                    width={100}
                    height={0}
                    className="w-20 h-auto overflow-hidden rounded-full"
                />


                {/* Info */}
                <div className="font-light tracking-wider">
                    <h4 className="text-3xl font-">Senior</h4>
                    <p className="text-2xl text-white/90 tracking-wide">Backend Engineer</p>
                    <p className="mt-1 text-xl text-white/60">
                        7+ years experience
                    </p>
                </div>
            </div>

            {/* Expertise */}
            <ul className="mt-6 ml-10 list-disc space-y-2 text-xl text-white/80 font-light">
                <li className="">
                    <span className="border-b border-dashed border-blue-400/60 pb-0.5">
                        Marketplace / Payments systems
                    </span>
                </li>
                <li className="">
                    <span>
                        Previously worked on large-scale consumer platforms
                    </span>
                </li>
            </ul>

            {/* Tags */}
            <div className="mt-5 text-xl font-light space-y-2">
                <div className="rounded-lg w-fit border font-lighter border-white/10 bg-white/5 px-5 py-1  text-white/80">
                    ● System design interviewer
                </div>
                <div className="rounded-lg border w-fit border-white/10 bg-white/5 px-5 py-1  text-white/80">
                    ● Production systems owner
                </div>
            </div>

            {/* Footer */}
            <div className="mt-6 border-t border-white/10 pt-4 text-2xl text-white/50 flex items-center gap-2">
                <span className="">🔒</span>
                Matching is performed internally for enrolled candidates only.
            </div>
        </div>
    )
}
