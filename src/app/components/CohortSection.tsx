import Image from "next/image";

type CohortMember = {
    name: string;
    role: string;
    experience: string;
};

const members: CohortMember[] = [
    { name: "Subhadip De", role: "SDE II", experience: "3 YOE" },
    { name: "Amit S.", role: "Senior SWE", experience: "3 YOE" },
    { name: "Amit S.", role: "SWE", experience: "3 YOE" },
    { name: "Amit S.", role: "EM", experience: "21 YOE" },
    { name: "Amit S.", role: "SWE", experience: "3 YOE" },
    { name: "Amit S.", role: "Tech Lead", experience: "14 YOE" },
];

export default function CohortSection() {
    return (
        <section className="relative isolate w-full rounded-2xl p-10 my-10 overflow-hidden">
                <div className="mb-10 text-center text-5xl tracking-tight font-medium text-white">
                    Meet the November Cohort
                </div>
            {/* Blurred background */}

            {/* Optional dark overlay for contrast */}

                {/* <div className="absolute inset-0 bg-black/70 " /> */}
            {/* Content */}
            <div className="relative z-10 ">
                <div
                    className="absolute inset-0 bg-[url('/cohortBg.svg')] bg-no-repeat bg-cover bg-top blur-[150px] scale-105 "
                />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 px-10 ">
                    {members.map((member, index) => (
                        <CohortCard key={index} member={member} />
                    ))}
                </div>
            </div>
        </section>

    );
}

type CohortCardProps = {
    member: {
        name: string;
        role: string;
        experience: string;
    };
};

function CohortCard({ member }: CohortCardProps) {
    return (
        <div className="flex items-center gap-4 rounded-xl bg-linear-to-r from-[#071720] to-[#07131C] p-5 backdrop-blur">
            <Image
                src="/cohortPfp1.svg"
                alt={member.name}
                width={80}
                height={80}
                className="rounded-full"
            />

            <div>
                <div className="text-2xl font-medium text-white">
                    {member.name}
                </div>
                <div className="text-lg text-[#A3BBCB]">
                    {member.role} | {member.experience}
                </div>
            </div>
        </div>
    );
}

