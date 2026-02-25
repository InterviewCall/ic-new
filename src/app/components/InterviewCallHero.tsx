import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const logos = [
  { name: "Google", src: "/heroCompany/google.svg" },
  { name: "Microsoft", src: "/heroCompany/microsoft.svg" },
  { name: "Sony", src: "/heroCompany/sony.svg" },
];

export default function InterviewCallHero() {
  return (
    <div className="min-h-200 w-full bg-[url(/heroSectionBG.svg)] bg-no-repeat bg-cover bg-top  items-center justify-center ">
      <div className="flex items-center justify-between px-4 md:px-14 py-8 pb-3 md:pb-6 md:py-8">
        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <Image src={"/interviewCallFullLogo.svg"} alt="" width={100} height={100} className="w-35 md:w-60" />
        </div>
        <button className="rounded-xl bg-[#183678] transition px-4 md:px-7 py-2 md:py-3 text-sm md:text-xl text-white font-medium md:font-light hover:cursor-pointer">
          Request Callback
        </button>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-9/10 md:w-[85%] my-5 rounded-3xl backdrop-blur-2xl  shadow-2xl border border-white/30">
          {/* Header */}

          {/* Content */}
          <div className=" px-6 md:px-8 py-10 md:py-16 flex flex-col  items-center text-start tracking-tighter">
            <div className="w-full sm:w-85/100">
              <h1 className="hidden md:block text-5xl md:text-[70px]  font-medium  text-white leading-tighter ">
                Crack Top Tech Jobs. <br /> Learn DSA, System Design <br /> from Engineering Managers.
              </h1>
              <h1 className="block md:hidden text-4xl md:text-6xl  text-white leading-tighter  text-start">
                Crack Top Tech Jobs After training from Engineering Managers at <span className="text-3xl">MAANG</span>
              </h1>

              <p className="mt-6 text-2xl font-light tracking-normal md:tracking-tight leading-tight text-white/80 max-w-xl">
                Engineering Managers from Google, Microsoft, Sony & more personally
                coach and place you.
              </p>

              <div className="mt-8 w-full flex flex-wrap items-center gap-3 md:gap-6">
                <div className="w-full md:w-fit p-px rounded-xl bg-linear-to-tr from-[#53BCFF] to-[#2A99FF] overflow-hidden">
                  <button className="flex gradient-border  text-lg sm:text-xl w-full md:w-fit justify-center items-center tracking-normal gap-2 rounded-xl bg-[radial-gradient(circle,#0F4BC1,#2461C5)] transition md:px-6 py-3 text-white font-medium md:font-light">
                    Apply for Next Cohort
                    <ArrowRight size={18} />
                  </button>
                </div>

                <button className="flex items-center  bg-[#091b42] border border-white/30 md:border-0 rounded-xl md:rounded-none md:px-6 py-3 md:w-fit md:bg-transparent  justify-center md:justify-start  w-full text-lg gap-2 tracking-normal text-white md:text-white/80 hover:text-white transition">
                  View Curriculum
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="mt-8 md:mt-10 md:flex justify-between items-center">
                <div className="text-lg md:text-lg text-white/50 text-center tracking-normal md:text-start font-extralight md:font-light">
                  Trained by engineers from
                </div>
                <div className="flex mt-1 items-center justify-evenly gap-4 md:gap-8 text-white/50 font-semibold text-lg">
                  {
                    logos.map((logo, idx) => {
                      return <Image src={logo.src} alt={logo.name} key={idx} width={100} height={100} className="w-20 h-auto md:w-30 " />
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


