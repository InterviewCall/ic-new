import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const logos = [
  { name: "Google", src: "/heroCompany/google.svg" },
  { name: "Microsoft", src: "/heroCompany/microsoft.svg" },
  { name: "Sony", src: "/heroCompany/sony.svg" },
];

export default function InterviewCallHero(){
  return (
    <div className="min-h-220 w-full bg-[url(/heroSectionBG.svg)] bg-no-repeat bg-cover bg-top  items-center justify-center ">
      <div className="flex items-center justify-between px-8 py-10">
        <div className="flex items-center gap-2 text-white font-semibold text-lg">
            <Image src={"/interviewCallFullLogo.svg"} alt="" width={100} height={100} className=" w-50"/>
          
        </div>
        <button className="rounded-xl bg-[#183678] transition px-7 py-3 text-md text-white font-light hover:cursor-pointer">
          Request Callback
        </button>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[85%] my-5 rounded-3xl backdrop-blur-3xl  shadow-2xl border border-white/30">
          {/* Header */}

          {/* Content */}
          <div className="px-8 py-20 flex flex-col  items-center text-start tracking-tighter">
            <div className="w-6/10">
              <h1 className="text-5xl md:text-6xl  text-white leading-tighter ">
                Crack Top Tech Jobs <br />
                Trained by Those Who Hire <br />
                for Them.
              </h1>

              <p className="mt-6 text-2xl font-light leading-tight text-white/80 max-w-xl">
                Engineering Managers from Google, Microsoft, Sony & more personally
                coach and place you.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <button className="flex items-center tracking-normal gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 transition px-6 py-3 text-white font-medium">
                  Apply for Next Cohort
                  <ArrowRight size={18} />
                </button>

                <button className="flex items-center gap-2 tracking-normal text-white/90 hover:text-white transition">
                  View Curriculum
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="mt-10 flex justify-between items-center">
                <div className="text-sm text-white/60 font-light">
                  Trained by engineers from
                </div>
                <div className="flex items-center gap-8 text-white/50 font-semibold text-lg">
                 {
                  logos.map((logo, idx) => {
                    return <Image src={logo.src} alt={logo.name} key={idx} width={100} height={100} className="h-8 object-contain"/>
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


