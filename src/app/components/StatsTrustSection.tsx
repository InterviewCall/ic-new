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
        <section className="relative w-full pb-10 md:pb-24 py-24 flex flex-col items-center overflow-hidden">

            {/* Radial glow */}
            <div className="relative z-10 px-6 sm:px-6 w-full">
                {/* Heading */}
                <h2 className="hidden md:block text-center text-5xl font-medium text-white tracking-tight leading-tight">
                    Trusted by 2,500+ professionals
                    <br />
                    who landed their dream offers
                </h2>

                <h2 className="block md:hidden text-center text-4xl font-medium text-white tracking-tight leading-tight">
                    Trusted by 2,500+ professionals
                    who landed their dream offers
                </h2>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-1 px-4 md:px-0 w-full md:grid-cols-3 gap-8 md:gap-16">
                    {/* <StatCard title="Average Salary Jump" value="₹8L" />
                    <StatCard title="Offer Conversion Rate" value="94%" />
                    <StatCard title="Interview Success Rate" value="87%" /> */}
                    <div className="flex flex-col items-center justify-center rounded-3xl border border-white/15 bg-linear-to-br from-[#12161B] to-[#070A0F] backdrop-blur-xl px-4 md:px-10 py-8 md:py-18 text-center shadow-2xl">
                        <p className="text-xl md:text-base text-white/70 mb-6">{'Average Salary Jump'}</p>
                        <p className="text-4xl md:text-5xl font-bold bg-linear-to-b from-[#4A88E7] to-[#58B5FA] bg-clip-text text-transparent">
                            ₹8L
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-3xl border border-white/15 bg-linear-to-br from-[#12161B] to-[#070A0F] backdrop-blur-xl px-4 md:px-10 py-8 md:py-18 text-center shadow-2xl">
                        <p className="text-xl md:text-base text-white/70 mb-6">{'After Convertion Rate'}</p>
                        <p className="text-4xl md:text-5xl font-bold bg-linear-to-b from-[#B1BCDB] to-[#80D2F7] bg-clip-text text-transparent">
                            94%
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-3xl border border-white/15 bg-linear-to-br from-[#12161B] to-[#070A0F]  backdrop-blur-xl px-4 md:px-10 py-8 md:py-18 text-center shadow-2xl">
                        <p className="text-xl md:text-base text-white/70 mb-6">{'Interview Success Rate'}</p>
                        <p className="text-4xl md:text-5xl font-bold bg-linear-to-b from-[#4A88E7] to-[#58B5FA] bg-clip-text text-transparent">
                            87%
                        </p>
                    </div>
                </div>

                {/* Latest offers ticker */}
                <div className="mt-16 flex justify-center w-full">
                    <div className="rounded-2xl  md:rounded-full border w-full md:w-fit border-white/15 bg-linear-to-r from-[#13141B] to-[#070A0E] backdrop-blur-md px-8 py-4 text-lg md:text-xl text-white/80">
                        <div className="text-xl w-full md:w-fit text-center block md:inline md:text-start md:text-xl font-extralight text-white/90 ">
                            Latest Offers:
                        </div>
                        {/* <br className="md:hidden" /> */}
                        <div className="mb-0 grid grid-cols-[3fr_1fr_2.3fr] md:inline justify-center  ">
                            <span className="font-medium text-white text-xl md:text-inherit text-end">Subhadip</span> 
                            <span className="mx-5 md:mx-0">
                                →
                            </span>
                            <span className="text-blue-400 ">
                                <Image src="/statsTrustSectionCompany/viza.svg" alt="VISA" width={50} height={50} className="inline " />
                            </span>
                        </div>
                        {/* <br className="md:hidden" /> */}
                        <span className="mx-3 hidden md:inline">|</span>
                        <div className="grid grid-cols-[3fr_1fr_2.3fr] md:inline justify-center  ">

                            <span className="font-medium text-white text-xl md:text-inherit text-end">Ishita</span> 
                            <span className="mx-5 md:mx-0">
                                →
                            </span>
                            <span className="text-sky-400 ml-1">
                                <Image src="/statsTrustSectionCompany/microsoft.svg" alt="Microsoft" width={50} height={50} className="inline" />
                            </span>
                        </div>
                        {/* <br className="md:hidden" /> */}

                        <span className="mx-3 hidden md:inline">|</span>
                        <div className="grid grid-cols-[3fr_1fr_2.3fr] md:inline justify-center  ">

                            <span className="font-medium text-white text-xl md:text-inherit text-end">Shivansh</span>
                            <span className="mx-5 md:mx-0">
                                →
                            </span>
                            <span className="text-yellow-400">
                                <Image src="/statsTrustSectionCompany/amazon.svg" alt="Amazon" width={50} height={50} className="inline" />

                            </span>
                        </div>
                    </div>
                </div>

                {/* Testimonials bubbles */}
                <div className="mt-8 md:mt-14 grid md:grid-cols-3 gap-4 md:gap-16">
                    {content.map((text, idx) => (
                        <div key={idx} className="relative w-full flex justify-center md:mb-8.75">
                            <Image src={'/triangle_ic.svg'} alt="" width={100} height={100} className="hidden md:block h-8.75 absolute -bottom-8.75 scale-y-[-1] left-3/5" />
                            <div className="w-full md:w-9/10 text-center text-lg md:text-xl border border-white/15 bg-linear-to-r from-[#13141B] to-[#070A0E]  backdrop-blur-lg rounded-3xl  px-6 py-4 text-white/90 shadow-xl">
                                <div className="hidden md:block">
                                    {text.text1} <br /> {text.text2}

                                </div>
                                <div className="block md:hidden">
                                    {text.text1} {text.text2}
                                </div>
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

                <div className="mt-14 grid md:grid-cols-[1fr_2fr_1fr] gap-6">
                    <div className="w-full flex justify-center ">
                        <div className="relative w-full text-center text-sm md:text-xl border border-white/15 bg-linear-to-r from-[#13141B] to-[#070A0E]  backdrop-blur-lg rounded-3xl  px-6 py-4 text-white/90 shadow-xl">
                            <div className="hidden md:block">{"🔥 Mind-blown !"} {"by resume review"}</div>
                            <div className="block md:hidden">{"🔥 Mind-blown ! by resume review"}</div>

                            <Image src={'/triangle_ic.svg'} alt="" width={100} height={100} className="hidden md:block h-8.75 absolute -top-8.75 left-2/3" />
                        </div>
                    </div>
                    <div className="w-full flex justify-center ">
                        <div className="w-full text-center flex justify-center items-center text-lg md:text-2xl border border-white/15 bg-linear-to-r from-[#13141B] to-[#070A0E]  backdrop-blur-lg rounded-full  px-5 py-4 text-white/90 shadow-xl">
                            <div className="">{"See Real Linkedin Success Stories"}</div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center ">
                        <div className="relative w-full text-center text-sm md:text-xl border border-white/15 bg-linear-to-r from-[#13141B] to-[#070A0E]  backdrop-blur-lg rounded-3xl  px-6 py-4 text-white/90 shadow-xl">
                            <div className="hidden md:block">{"🔥 Mind-blown !"} {"by resume review"}</div>
                            <div className="block md:hidden">{"🔥 Mind-blown ! by resume review"}</div>
                            <Image src={'/triangle_ic.svg'} alt="" width={100} height={100} className="hidden md:block h-8.75 absolute -top-8.75 scale-x-[-1] left-1/5" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

