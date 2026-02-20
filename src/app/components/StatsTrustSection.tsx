import React from "react";
import VideoTestimonialCard from "./VideoTestimonialCard";
import Image from "next/image";

const content = [
    { text1: "🔥 Mind-blown !", text2: "by resume review" },
    { text1: "💯 Got 3 offers in 2 weeks!", text2: "by resume review" },
    { text1: "🕊️ Got 3 offers in 2 weeks!", text2: "by resume review" },
];

const testimonials = [
    {
        name: "Pratham",
        role: "Software Engineer",
    },
    {
        name: "Pratham",
        role: "Software Engineer",
    },
    {
        name: "Pratham",
        role: "Software Engineer",
    },
    {
        name: "Pratham",
        role: "Software Engineer",
    },
    {
        name: "Pratham",
        role: "Software Engineer",
    },
    {
        name: "Pratham",
        role: "Software Engineer",
    },
    {
        name: "Pratham",
        role: "Software Engineer",
    },
    {
        name: "Pratham",
        role: "Software Engineer",
    },
    {
        name: "Pratham",
        role: "Software Engineer",
    },
    {
        name: "Pratham",
        role: "Software Engineer",
    },
];

// const StatCard = ({ title, value }: { title: string; value: string }) => (
//     <div className="flex flex-col items-center justify-center rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl px-10 py-18 text-center shadow-2xl">
//         <p className="text-sm md:text-base text-white/70 mb-6">{title}</p>
//         <p className="text-4xl md:text-5xl font-bold bg-linear-to-b from-[#4A88E7] to-[#58B5FA] bg-clip-text text-transparent">
//             {value}
//         </p>
//     </div>
// );

export default function StatsTrustSection() {
    return (
        <section className="relative w-full py-24 flex flex-col items-center overflow-hidden">

            {/* Radial glow */}
            <div className="relative z-10 px-6 ">
                {/* Heading */}
                <h2 className="text-center text-5xl font-medium text-white tracking-tight leading-tight">
                    Trusted by 2,500+ professionals
                    <br />
                    who landed their dream offers
                </h2>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-3 gap-16">
                    {/* <StatCard title="Average Salary Jump" value="₹8L" />
                    <StatCard title="Offer Conversion Rate" value="94%" />
                    <StatCard title="Interview Success Rate" value="87%" /> */}
                    <div className="flex flex-col items-center justify-center rounded-3xl border border-white/15 bg-linear-to-br from-[#12161B] to-[#070A0F] backdrop-blur-xl px-10 py-18 text-center shadow-2xl">
                        <p className="text-sm md:text-base text-white/70 mb-6">{'Average Salary Jump'}</p>
                        <p className="text-4xl md:text-5xl font-bold bg-linear-to-b from-[#4A88E7] to-[#58B5FA] bg-clip-text text-transparent">
                            ₹8L
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-3xl border border-white/15 bg-linear-to-br from-[#12161B] to-[#070A0F] backdrop-blur-xl px-10 py-18 text-center shadow-2xl">
                        <p className="text-sm md:text-base text-white/70 mb-6">{'After Convertion Rate'}</p>
                        <p className="text-4xl md:text-5xl font-bold bg-linear-to-b from-[#B1BCDB] to-[#80D2F7] bg-clip-text text-transparent">
                            94%
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-3xl border border-white/15 bg-linear-to-br from-[#12161B] to-[#070A0F]  backdrop-blur-xl px-10 py-18 text-center shadow-2xl">
                        <p className="text-sm md:text-base text-white/70 mb-6">{'Interview Success Rate'}</p>
                        <p className="text-4xl md:text-5xl font-bold bg-linear-to-b from-[#4A88E7] to-[#58B5FA] bg-clip-text text-transparent">
                            87%
                        </p>
                    </div>
                </div>

                {/* Latest offers ticker */}
                <div className="mt-16 flex justify-center">
                    <div className="rounded-full border border-white/15 bg-linear-to-r from-[#13141B] to-[#070A0E] backdrop-blur-md px-8 py-4 text-sm md:text-xl text-white/80">
                        Latest Offers:&nbsp;
                        <span className="font-medium text-white">Subhadip</span> →
                        <span className="text-blue-400">
                            <Image src="/statsTrustSectionCompany/viza.svg" alt="VISA" width={50} height={50} className="inline" />
                        </span>
                        <span className="mx-3">|</span>
                        <span className="font-medium text-white">Ishita</span> →
                        <span className="text-sky-400 ml-1">
                            <Image src="/statsTrustSectionCompany/microsoft.svg" alt="Microsoft" width={50} height={50} className="inline" />
                        </span>
                        <span className="mx-3">|</span>
                        <span className="font-medium text-white">Shivansh</span> →
                        <span className="text-yellow-400">
                            <Image src="/statsTrustSectionCompany/amazon.svg" alt="Amazon" width={50} height={50} className="inline" />

                        </span>
                    </div>
                </div>

                {/* Testimonials bubbles */}
                <div className="mt-14 grid grid-cols-3 gap-16">
                    {content.map((text, idx) => (
                        <div key={idx} className="relative w-full flex justify-center mb-8.75">
                            <Image src={'/triangle_ic.svg'} alt="" width={100} height={100} className="h-8.75 absolute -bottom-8.75 scale-y-[-1] left-3/5"/>
                            <div className="w-9/10 text-center text-sm md:text-xl border border-white/15 bg-linear-to-r from-[#13141B] to-[#070A0E]  backdrop-blur-lg rounded-3xl  px-6 py-4 text-white/90 shadow-xl">
                                <div>{text.text1}</div>
                                <div>{text.text2}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-16 items-center w-full justify-center my-10">
                    {testimonials.map((testimonial, idx) => (
                        <VideoTestimonialCard
                            key={idx}
                            name={testimonial.name}
                            role={testimonial.role}
                        />
                    ))}
                </div>

                <div className="mt-14 grid grid-cols-[1fr_2fr_1fr] gap-6">
                    <div className="w-full flex justify-center ">
                        <div className="relative w-full text-center text-sm md:text-xl border border-white/15 bg-linear-to-r from-[#13141B] to-[#070A0E]  backdrop-blur-lg rounded-3xl  px-6 py-4 text-white/90 shadow-xl">
                            <div>{"🔥 Mind-blown !"}</div>
                            <div>{"by resume review"}</div>
                            <Image src={'/triangle_ic.svg'} alt="" width={100} height={100} className="h-8.75 absolute -top-8.75 left-2/3"/>
                        </div>
                    </div>
                    <div className="w-full flex justify-center ">
                        <div className="w-full text-center flex justify-center items-center text-lg md:text-2xl border border-white/15 bg-linear-to-r from-[#13141B] to-[#070A0E]  backdrop-blur-lg rounded-full  px-5 py-4 text-white/90 shadow-xl">
                            <div className="">{"See Real Linkedin Success Stories"}</div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center ">
                        <div className="realtive w-full text-center text-sm md:text-xl border border-white/15 bg-linear-to-r from-[#13141B] to-[#070A0E] backdrop-blur-lg rounded-3xl  px-6 py-4 text-white/90 shadow-xl">
                            <div>{"🔥 Mind-blown !"}</div>
                            <div>{"by resume review"}</div>
                            <Image src={'/triangle_ic.svg'} alt="" width={100} height={100} className="h-8.75 absolute -top-8.75 scale-x-[-1] left-1/5"/>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

