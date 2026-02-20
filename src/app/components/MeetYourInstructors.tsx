import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function MeetYourInstructors() {
    return (
        <div className=" w-full text-white flex flex-col items-center py-24">
            <div className="text-7xl  tracking-tighter">
                Meet Your Instructors
            </div>
            <div className="text-4xl mb-10 font-extralight text-gray-300 tracking-tighter">
                Learn from the best. Trained by those who hire.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
                <ProfileCard companyLogoUrl="/instructors/uber.svg" imageUrl="/instructors/pfp1.svg" name="Ankush Jain" role="Software Engineer" />
                <ProfileCard companyLogoUrl="/instructors/google.svg" imageUrl="/instructors/pfp2.svg" name="Rohan Gupta" role="Software Engineer" />
                <ProfileCard companyLogoUrl="/instructors/uber.svg" imageUrl="/instructors/pfp1.svg" name="Pratham S" role="Software Engineer" />
                <ProfileCard companyLogoUrl="/instructors/google.svg" imageUrl="/instructors/pfp2.svg" name="Pratham S" role="Software Engineer" />
                <ProfileCard companyLogoUrl="/instructors/uber.svg" imageUrl="/instructors/pfp1.svg" name="Pratham S" role="Software Engineer" />
                <ProfileCard companyLogoUrl="/instructors/google.svg" imageUrl="/instructors/pfp2.svg" name="Pratham S" role="Software Engineer" />
                <ProfileCard companyLogoUrl="/instructors/uber.svg" imageUrl="/instructors/pfp1.svg" name="Pratham S" role="Software Engineer" />
            </div>
        </div>
    )
};


type ProfileCardProps = {
    imageUrl: string;
    name: string;
    role: string;
    companyLogoUrl: string;
};

function ProfileCard({
    imageUrl,
    name,
    role,
    companyLogoUrl
}: ProfileCardProps) {
    return (
        <div className="relative w-64 rounded-2xl overflow-hidden border border-white/10 bg-linear-to-b from-[#0B0F17] to-[#081727] shadow-lg">

            <Image
                src={imageUrl}
                alt={name}
                width={400}
                height={500}
                className="object-cover w-full h-90"
            />

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center shadow-lg">
                    <FaPlay size={20} className="text-white"/>
                </div>
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <div className="text-white text-xl font-semibold">
                    {name}
                </div>
                <div className="text-gray-300 text-sm">
                    {role}
                </div>
                <div className="text-sm font-semibold flex justify-start">
                    <Image
                        src={companyLogoUrl}
                        alt={name}
                        width={80}
                        height={20}
                        className="h-5 w-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
