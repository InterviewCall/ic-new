'use client';

import Image from "next/image";
import ClockWrapper from "./ClockWrapper";
import { useState } from "react";
import CohortStepForm from "./forms/CohortForms";
import BookACallStepForm from "./forms/BookACallForms";
import ModalWrapper from "./ModalWrapper";

export default function JoinCohortSection() {
    const [showCohortForm, setShowCohortForm] = useState(false);
    const [showBookACallForm, setShowBookACallForm] = useState(false);

    
    return (
        <div className="relative w-full mt-0 md:mt-20 mb-20 md:mb-20 px-4 md:px-0">
            <ModalWrapper>
                {showCohortForm && 
                <div className="fixed top-0 left-0 z-100 w-full h-full">
                    <CohortStepForm closeForm={() => setShowCohortForm(false)} />
                </div>}

            {showBookACallForm && 
                <div className="fixed top-0 left-0 z-100 w-full h-full">
                    <BookACallStepForm closeForm={() => setShowBookACallForm(false)} />
                </div>
            }
            </ModalWrapper>
            <div className="text-center text-3xl md:text-7xl w-full md:leading-18">
                Only 50 students per <br className="hidden md:inline"/>
                cohort <br className="hidden md:inline"/>
                Ready to become one?
            </div>
            <div className="flex justify-between md:justify-center items-center gap-x-8 md:gap-x-24 my-10 md:my-20 md:text-2xl text-white/80">

                <button onClick={()=>{setShowCohortForm(true);}} className="w-full md:w-64 py-2 md:py-4 rounded-xl bg-linear-to-br from-[#012444] to-[#014394] border border-blue-600/10 hover:cursor-pointer">
                    Apply Now
                </button>
                <button onClick={()=>{setShowBookACallForm(true)}} className="w-full md:w-64 py-2 md:py-4 rounded-xl bg-linear-to-br from-[#091724] to-[#02060c] border border-gray-600/10 hover:cursor-pointer">
                    Book Intro Call
                </button>
            </div>

            <div className="text-center text-4xl tracking-tight text-white/80">
                July Batch closes in
            </div>
          {/* <ClockTimer targetDate="2025-12-31T23:59:59"/> */}
          <div className="flex w-full justify-center mt-10">
            <ClockWrapper/>
          </div>


            <div className="grid grid-cols-6 mx-10 mt-16 gap-x-16 justify-center">
                <Image alt="" src={'/bwPfp1.svg'} width={0} height={0} className="w-full h-auto" />
                <Image alt="" src={'/bwPfp2.svg'} width={0} height={0} className="w-full h-auto" />
                <Image alt="" src={'/bwPfp1.svg'} width={0} height={0} className="w-full h-auto" />
                <Image alt="" src={'/bwPfp2.svg'} width={0} height={0} className="w-full h-auto" />
                <Image alt="" src={'/bwPfp1.svg'} width={0} height={0} className="w-full h-auto" />
                <Image alt="" src={'/bwPfp2.svg'} width={0} height={0} className="w-full h-auto" />

            </div>

            <div className="flex flex-wrap md:flex-nowrap items-center gap-8 mt-10 justify-evenly md:h-12">
                <Image alt="" src={'/bwMeta.svg'} width={0} height={0} className="h-10 w-auto md:h-full" />
                <Image alt="" src={'/bwGoogle.svg'} width={0} height={0} className="h-10 w-auto md:h-full" />
                <Image alt="" src={'/bwAmazon.svg'} width={0} height={0} className="h-10 w-auto md:h-full" />
                <Image alt="" src={'/bwNetflix.svg'} width={0} height={0} className="h-10 w-auto md:h-full" />
                <Image alt="" src={'/bwApple.svg'} width={0} height={0} className="h-10 w-auto md:h-full" />

            </div>

        </div>
    )
}