"use client";

import { openCohortForm } from "@/lib/redux/slices/ShowCohortFormSlice";
import { X } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function SystemOverviewCard({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const dispatch = useDispatch();

  if (!isOpen) return null;

  return (
    <div className="w-full min-h-full h-full flex flex-col items-center justify-  backdrop-blur-sm bg-black/10 py-4 overflow-y-auto">
      <div className="w-full md:w-1/2  border border-[#3C4A60] rounded-xl py-6 px-10 bg-[linear-gradient(to_bottom_right,#17213C_0%,#030612_50%)] text-white relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute hover:cursor-pointer right-4 top-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="text-center mb-6 tracking-wide font-light">
          <h2 className="text-3xl ">
            Production System Walkthrough
            <span className="text-[#B3CCF6] pl-2">

             (Preview)
            </span>
          </h2>
          <p className="text-lg text-gray-400 mt-1">
            This is how the system is taught inside 
            <span className="text-[#A3B3DD] pl-2 ">

             InterviewCall.
            </span>
          </p>
        </div>



        <Divider />
        {/* System Context */}
        <Section title="System Context">
          <p className="text-base tracking-widest font-extralight text-[#CFD8F8]">
            This system handles real-time matching between supply and demand
            under volatile traffic conditions.
          </p>
        </Section>

        <Divider />

        {/* Design Decisions */}
        <Section title="Design Decisions">
          <ul className="list-disc pl-5 text-lg space-y-1 tracking-widest font-extralight text-[#CFD8F8]">
            <li>Why latency was prioritized over optimal matching</li>
            <li>Why fairness was bounded, not absolute</li>
            <li>Why certain data structures were chosen</li>
          </ul>
        </Section>

        <Divider />

        {/* Tradeoffs */}
        <Section title="Tradeoffs Discussed">
          <ul className="list-disc pl-5 text-lg space-y-1 tracking-widest font-extralight text-[#CFD8F8]">
            <li>Speed vs fairness</li>
            <li>Accuracy vs availability</li>
            <li>Centralized vs distributed matching</li>
          </ul>
        </Section>

        {/* Locked Section */}
        <div className="border border-white/10 rounded-lg p-4 mt-4 bg-radial from-[#0C1327] to-[#080B18] pl-6">
          <div className="flex items-center gap-2 text-2xl text-gray-300 mb-2">
            <Image alt="" src={'/lock.svg'} width={100} height={100} className="w-3 h-auto" />
            <span className="font-light text-[#9BB2F2]">Failure Modes (Sample)</span>
          </div>

          <ul className="text-lg text-gray-400 space-y-1 pl-4 ">
            <li className="blur-xs">Build zomato like Food-delivery</li>
            <li className="blur-xs">Build zomato like Food-delivery</li>
          </ul>

          <div className="text-lg  flex gap-x-3 font-extralight text-[#CFD8F8] mt-3">
            <Image alt="" src={'/lock.svg'} width={100} height={100} className="w-3 h-auto" />
            
            <div>
                Implementation details, design defense, mentor walkthrough unlocked after enrollment.
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button onClick={()=>{dispatch(openCohortForm());}} className="w-64 hover:cursor-pointer py-2 text-xl border border-[#5E96D4] rounded-full bg-radial from-[#19459D] to-[#0A1635] transition">
              Enroll to unlock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className=" ">
      <h3 className="text-3xl font-light tracking-wide mb-2">{title}</h3>
      {children}
    </div>
  );
}

function Divider() {
    return (
        <div className="w-full flex justify-center h-fit mt-4 mb-5 ">
            <div className="h-0.5 w-9/10 bg-radial from-[#6699FF] to-[#090f1f]"></div>
        </div>
    )
}