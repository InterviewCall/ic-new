import { Briefcase, Goal, Rocket, Search } from "lucide-react"
import { BiDownArrow } from "react-icons/bi"
import { Plus } from "lucide-react";


export default function JobSwitchExectionSection() {
    return (
        <div className="mt-30 mb-10 relative">
            <div className="absolute inset-0 mx-auto top-[15%] -z-10 h-200 w-200 rounded-full bg-white/5 blur-[95px]" />

            <div>
                <div className="text-7xl font-light text-center">
                    Job Switch Execution System
                </div>
                <div className="text-3xl font-light text-center my-3 text-white/70">
                    The system that tracks applications, referrals, interviews, <br />
                    and offers — end to end.
                </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-white/10 border border-white/10 rounded-2xl my-10">
                <FeatureCard logo={<Briefcase />} heading="Application Strategy">
                    <div className="text-xl text-white/60 font-extralight"><b>3</b> Jobs of interest</div>
                    <div className="text-xl text-white/60 font-extralight"><b>7</b> High fit targets</div>
                </FeatureCard>
                <FeatureCard logo={<Rocket />} heading="Refrral Workflow">
                    <div className="text-xl text-white/60 font-extralight"><b>2</b> Pending</div>
                    <div className="text-xl text-white/60 font-extralight"><b>5</b> Strong Matches</div>
                </FeatureCard>
                <FeatureCard logo={<Goal />} heading="Weekly Targets">
                    <div className="text-xl text-white/60 font-extralight"><b className="text-green-300">80%</b> Activity Success</div>
                    <div className="text-xl text-white/60 font-extralight"><b>3</b> Interviews Booked</div>
                </FeatureCard>
                

            </div>

            <div className="border border-white/10 rounded-xl">
                <div className="flex items-center justify-between border-white/10 border-b py-4 px-6">
                    <div className="basis-1/2 flex items-center gap-x-3 text-2xl font-light   ">
                        <Rocket />
                        <div>
                            Application Strategy
                        </div>
                    </div>
                    <button className="px-6 py-3 border-white/10 border rounded-xl">
                        + New referral
                    </button>
                </div>
                <div className="p-6 grid grid-cols-2 gap-5">
                    {/* jobs of interes */}
                    <div className="h-full">
                        <JobInterests />
                    </div>
                    {/* referal  */}
                    <div className="h-full">
                        <ReferralWorkflowCard />
                    </div>
                    {/* recruiter */}
                    <div className="h-full">
                        <RecruiterFollowupsCard />
                    </div>
                    {/* negotiation */}
                    <div>
                        <NegotiationOffersCard />
                    </div>
                </div>
            </div>
        </div>
    )
};

function JobInterests() {
    return (
        <div
            className="
        relative
        rounded-xl
        border border-white/15
        bg-white/5
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(0,0,0,0.6)]
      "
        >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 text-xl font-light">
                <div>May 5 - 11</div>
                <div>
                    20 <BiDownArrow className="inline" />
                </div>
            </div>

            {/* Title Row */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/10">
                <div className="text-xl font-light">Jobs Of Interest</div>
                <button className="px-6 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition">
                    <Search className="inline" /> Search
                </button>
            </div>

            {/* Content */}
            <div className="px-6 py-2 space-y-1">
                <div className="text-lg font-extralight text-white/50">
                    Domestic And Overseas Jobs
                </div>
                <JobCard />
                <JobCard />
                <JobCard />
            </div>

            {/* Add Job */}
            <button className="mx-6 my-3 px-4 py-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition">
                + Add Job
            </button>

            {/* Glass highlight overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-bl from-white/5 via-transparent to-transparent" />
        </div>
    );
}



function RecruiterFollowupsCard() {
    return (
        <div className="relative w-full h-full rounded-xl border border-white/15 bg-trasnparent backdrop-blur-xl p-4 text-white shadow-[0_0_40px_rgba(0,0,0,0.6)]">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-md bg-blue-500/15 text-blue-400 flex items-center justify-center">
                        ⬡
                    </div>
                    <h3 className="text-xl font-extralight text-white/90">
                        Recruiter Follow-ups
                    </h3>
                </div>

                <button className="flex items-center gap-1 rounded-md border border-white/15 bg-white/5 px-2 py-1 font-extralight text-white/70 hover:bg-white/10 hover:text-white transition">
                    <Plus size={20} />
                    New Reminder
                </button>
            </div>

            {/* List */}
            <div className="mt-4 space-y-3">
                {[1, 2].map((_, i) => (
                    <div
                        key={i}
                        className="flex items-start justify-between rounded-lg border border-white/10 bg-white/0 backdrop-blur-md p-3"
                    >
                        {/* Left */}
                        <div className="flex items-start gap-3">
                            <Image
                                src="/pfp4.svg"
                                alt="recruiter"
                                width={70}
                                height={0}
                                className="h-auto"
                            />

                            <div className="font-extralight">
                                <p className="text-xl">Anna Wilson</p>
                                <p className="text-lg text-white/70">
                                    Senior Recruiter @ Coinbase
                                </p>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="text-right">
                            <p className="text-base text-white/40">
                                Sent 3 days ago
                            </p>

                            <div className="mt-1 flex justify-end gap-1">
                                <Badge />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Glass highlight overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-br from-white/5 via-transparent to-transparent" />
        </div>
    );
}



import { CheckCircle } from "lucide-react";

type OfferRowProps = {
    status: "Pending" | "In Negotiation";
};

function OfferRow({ status }: OfferRowProps) {
    return (
        <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-4 py-3">
            {/* Left */}
            <div className="flex items-start gap-3">
                {/* Netflix Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
                    <Image alt="" src={'/netflix.svg'} width={0} height={0} className="w-full h-auto" />
                </div>

                <div>
                    <p className="text-lg font-light text-white">
                        Senior Backend Engineer
                    </p>
                    <div className="mt-1 flex items-center gap-1 text-xs text-white/50">
                        <span className="flex h-4 w-4 items-center justify-center rounded bg-blue-500/20 text-blue-400">
                            ✓
                        </span>
                        Reviewed <span className="mx-1">·</span> 1 week ago
                    </div>
                </div>
            </div>

            {/* Status */}
            <span
                className={`rounded-md px-3 py-1 text-base font-extralight ${status === "Pending"
                    ? "bg-yellow-500/15 text-yellow-300"
                    : "bg-blue-500/15 text-blue-300"
                    }`}
            >
                {status}
            </span>
        </div>
    );
}

function NegotiationOffersCard() {
    return (
        <div className="w-full max-w-2xl rounded-xl border border-white/10  p-4 text-white shadow-[0_0_40px_rgba(0,0,0,0.75)]">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                    <h3 className="text-xl font-extralight text-white/90">
                        Negotiation & Offers
                    </h3>
                </div>

                <div className="flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                    ₹7LPA – ₹9LPA
                </div>
            </div>

            {/* Divider */}
            <div className="my-3 h-px bg-white/10" />

            {/* Offers */}
            <div className="space-y-3">
                <OfferRow status="Pending" />
                <OfferRow status="In Negotiation" />
            </div>

            {/* Negotiations */}
            <div className="w-full h-fit relative">
                <div className="absolute my-4 text-lg font-light text-white/80">
                    Offer negotiation range
                </div>
                <Image alt="" src={'/nego.svg'} width={0} height={0} className="w-full h-auto " />
            </div>
        </div>
    );
}


function Badge() {
    return (
        <span className="rounded-md relative w-42 h-8 overflow-hidden  text-sm font-light flex items-center justify-center">

            {/* Left background */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-900 z-0" />

            {/* Right background */}
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[#2C756E] z-0" />

            {/* Triangle */}
            <div
                className="absolute left-13 w-9 h-9 rotate-180 bg-[#2C756E] z-0"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 0 100%)",
                }}
            />

            {/* Text (ON TOP) */}
            <div className="relative z-10 text-white">
                Sr.SWE @ HM Pending
            </div>

        </span>
    )
}



import Image from "next/image";


function ReferralWorkflowCard() {
    return (
        <div className="relative w-full h-full text-xl font-light rounded-xl border border-white/15 bg-transparent backdrop-blur-xl p-4 text-white shadow-[0_0_40px_rgba(0,0,0,0.6)]">

            {/* Header */}
            <div className="flex items-center justify-between">
                <h3 className="text-white/90">Referral Workflow</h3>
                <div className="flex items-center gap-1 text-white/40">
                    Backed <span className="text-[10px]">▾</span>
                </div>
            </div>

            {/* Tabs */}
            <div className="mt-3 flex justify-between items-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-md px-6 py-3">
                <div className="flex items-center gap-x-5">
                    <div className="text-white">Pending</div>
                    <div className="text-white/50">Accepted</div>
                </div>
                <div className="text-white/50">Declined</div>
            </div>

            {/* List */}
            <div className="mt-4 space-y-3 h-96">
                {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-start justify-between rounded-lg border border-white/10 bg-white/5 backdrop-blur-md p-3">

                        {/* Left */}
                        <div className="flex items-start gap-3">
                            <Image src="/pfp4.svg" alt="profile" width={70} height={0} className="h-auto" />
                            <div className="font-extralight">
                                <p className="text-xxl">Shiv S.</p>
                                <p className="text-lg text-white/70">
                                    SWE II @ <span>Google</span>
                                </p>
                                <p className="mt-0.5 text-white/40">5 Years @ Google</p>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="text-right text-base text-white/40">
                            <p>YouTube Team</p>
                            <p className="mt-1">Last activity 5 hours ago</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-4 flex items-center justify-between text-white/40">
                <button className="text-sm hover:text-white transition">‹</button>
                <div className="flex gap-1">
                    {[1, 2, 3, 4].map((_, i) => (
                        <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === 1 ? "bg-white" : "bg-white/30"}`} />
                    ))}
                </div>
                <button className="text-sm hover:text-white transition">›</button>
            </div>

            {/* Glass highlight overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-br from-white/5 via-transparent to-transparent" />
        </div>
    );
}



function JobCard() {
    return (
        <div className="border border-white/10 rounded-xl px-5 py-2">
            <div className="flex items-center justify-between">
                <div className="text-xl font-extralight">Backend Engineer@Netflix</div>
                <div className="px-3 py-1.5 rounded-lg border border-white/10">Draft</div>
            </div>
            <div className="grid grid-cols-5 gap-x-2 my-2">
                <JobStatusCard color="#6BB68F" text="Draft" />
                <JobStatusCard color="#71AF87" text="@Submitted" />
                <JobStatusCard color="#EFD67D" text="1 onsite" />
                <JobStatusCard color="#333241" text="Onsite" />
                <JobStatusCard color="#333241" text="Offer" />

            </div>
        </div>
    )
}

function FeatureCard({ logo, heading, children }: { logo: React.ReactNode, heading: string, children: React.ReactNode }) {
    return (
        <div className=" flex justify-center gap-x-5 p-6">
            <div className="mt-2">
                {logo}
            </div>
            <div className="leading-tight">
                <div className="text-2xl font-light mb-2">
                    {heading}
                </div>
                {/*  */}
                {children}
            </div>
        </div>
    )
};

function JobStatusCard({ color, text }: { color: string; text: string }) {
    return (
        <div>
            <div
                className="h-1 w-full rounded-full"
                style={{ backgroundColor: color }}
            />
            <div className="mt-1 text-center text-white/60 font-extralight">
                {text}
            </div>
        </div>
    );
}