"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import CohortStepForm from "./forms/CohortForms";
import BookACallStepForm from "./forms/BookACallForms";
import ModalWrapper from "./ModalWrapper";

const logos = [
  { name: "Google", src: "/heroCompany/google.svg" },
  { name: "Microsoft", src: "/heroCompany/microsoft.svg" },
  { name: "Sony", src: "/heroCompany/sony.svg" },
];

export default function InterviewCallHero() {
  const [showCohortForm, setShowCohortForm] = useState(false);
  const [showBookACallForm, setShowBookACallForm] = useState(false);

  // useEffect(()=>{
  //   hidePopup();
  // })

  return (
    <div className="relative min-h-200 w-full bg-[url(/heroSectionBG.svg)] bg-no-repeat bg-cover bg-top  items-center justify-center ">
      {/* {isFormOpen && <CohortStepForm closeForm={()=> setIsFormOpen(false)} />} */}
      <ModalWrapper>
        {showCohortForm && (
          <div className="fixed top-0 left-0 z-100 w-full h-full">
            <CohortStepForm closeForm={() => setShowCohortForm(false)} />
          </div>
        )}
        {showBookACallForm && (
          <div className="fixed top-0 left-0 z-100 w-full h-full">
            <BookACallStepForm closeForm={() => setShowBookACallForm(false)} />
          </div>
        )}
      </ModalWrapper>

      <div className="flex items-center justify-between px-4 md:px-14 py-8 pb-3 md:pb-6 md:py-8">
        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <Image
            src={"/interviewCallFullLogo.svg"}
            alt=""
            width={100}
            height={100}
            className="w-35 md:w-60"
          />
        </div>
        {/* <button className="rounded-xl bg-[#183678] transition px-4 md:px-7 py-2 md:py-3 text-sm md:text-xl text-white font-medium md:font-light hover:cursor-pointer">
          Request Callback
        </button> */}

        {/* <motion.button
          initial="rest"
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
          variants={{
            rest: { y: 0, scale: 1 },
            hover: { y: -2, scale: 1.02 },
          }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          className="relative overflow-hidden rounded-xl bg-[#183678] px-4 md:px-7 py-2 md:py-3 text-sm md:text-xl text-white font-medium md:font-light hover:cursor-pointer"
        >
          <motion.span
            variants={{
              rest: { x: "-120%", opacity: 0 },
              hover: { x: "120%", opacity: 1 },
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, transparent, rgba(255,255,255,0.18), transparent)",
            }}
          />
          <span className="relative z-10">Request Callback</span>
        </motion.button> */}

        {/* <motion.button
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          onClick={() => { setShowBookACallForm(true); }}
          className="relative overflow-hidden rounded-xl bg-[#183678] px-4 md:px-7 py-2 md:py-3 text-sm md:text-xl text-white font-medium md:font-light hover:cursor-pointer"
        >
          <motion.span
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, transparent, rgba(255,255,255,0.18), transparent)",
            }}
            initial={{ x: "-140%" }}
            animate={{ x: ["-140%", "140%"] }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              repeat: Infinity,
              repeatType: "reverse", // left->right then right->left
              // repeatDelay: 0.4,      // small pause so it feels premium
            }}
          />
          <span className="relative z-10 ">Request Callback</span>
        </motion.button> */}
        <motion.button
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          onClick={() => {
            setShowBookACallForm(true);
          }}
          className="relative overflow-hidden rounded-xl bg-[#183678] px-4 md:px-7 py-2 md:py-3 text-sm md:text-xl text-white font-medium md:font-light hover:cursor-pointer"
        >
          <motion.span
            className="pointer-events-none absolute top-0 left-0 z-1 h-full w-[14%]"
            style={{
              background:
                "linear-gradient(102deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0.45) 50%, hsla(0,0%,100%,0) 100%)",
              transform: "translateX(-240%) rotate(20deg)",
              transformOrigin: "center",
            }}
            animate={{ x: ["0%", "760%"] }}
            transition={{
              duration: 1.05,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 0,
            }}
          />

          <span className="relative z-2">Request Callback</span>
        </motion.button>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-9/10 md:w-[85%] my-5 rounded-3xl backdrop-blur-2xl  shadow-2xl border border-white/30">
          {/* Header */}

          {/* Content */}
          <div className="px-6 md:px-8 py-10 md:py-16 flex flex-col  items-center text-start tracking-tighter">
            <div className="w-full sm:w-85/100">
              <h1 className="hidden md:block text-3xl md:text-[70px]  font-medium  text-white leading-tighter ">
                {/* Crack Top Tech Jobs. <br /> Learn DSA, System Design <br /> from Engineering Managers. */}

                <Reveal delay={0.0}>
                  <span className="block">Crack Top Tech Jobs.</span>
                </Reveal>
                <Reveal delay={0.08}>
                  <span className="block">Learn DSA, System Design</span>
                </Reveal>
                <Reveal delay={0.16}>
                  <span className="block">from Engineering Managers.</span>
                </Reveal>
              </h1>

              <h1 className="block md:hidden text-4xl md:text-6xl  text-white leading-tighter  text-start">
                <Reveal delay={0.08}>
                  <span className="block">
                    Crack Top Tech Jobs After training from Engineering Managers
                  </span>
                </Reveal>
              </h1>

              <Reveal delay={0.26} className="hidden md:block">
                <p className="mt-6 text-2xl font-light tracking-normal md:tracking-tight leading-tight text-white/80 max-w-xl">
                  Engineering Managers from Google, Microsoft, Sony & more
                  personally coach and place you.
                </p>
              </Reveal>

              <Reveal delay={0.2} className="block md:hidden">
                <p className="mt-6 text-2xl font-light tracking-normal md:tracking-tight leading-tight text-white/80 max-w-xl">
                  Engineering Managers from Google, Microsoft, Sony & more
                  personally coach and place you.
                </p>
              </Reveal>

              {/* <div className="mt-8 w-full flex flex-wrap items-center gap-3 md:gap-6">
                <div className="w-full md:w-fit p-px rounded-xl bg-linear-to-tr from-[#53BCFF] to-[#2A99FF] overflow-hidden">
                  <button
                    onClick={() => {
                      setShowCohortForm(true);
                    }}
                    className="flex gradient-border  text-lg sm:text-xl w-full md:w-fit justify-center items-center tracking-normal gap-2 rounded-xl bg-[radial-gradient(circle,#0F4BC1,#2461C5)] transition md:px-6 py-3 text-white font-medium md:font-light"
                  >
                    Apply for Next Cohort
                    <ArrowRight size={18} />
                  </button>
                </div>

                <button className="flex items-center  bg-[#091b42] border border-white/30 md:border-0 rounded-xl md:rounded-none md:px-6 py-3 md:w-fit md:bg-transparent  justify-center md:justify-start  w-full text-lg gap-2 tracking-normal text-white md:text-white/80 hover:text-white transition">
                  View Curriculum
                  <ArrowRight size={16} />
                </button>
              </div> */}

              <div className="mt-8 w-full flex flex-wrap items-center gap-3 md:gap-6">
                {/* <div className="w-full md:w-fit p-px rounded-xl bg-linear-to-tr from-[#53BCFF] to-[#2A99FF] overflow-hidden">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                    className="hover:cursor-pointer flex text-lg sm:text-xl w-full md:w-fit justify-center items-center tracking-normal gap-2 rounded-xl bg-[radial-gradient(circle,#0F4BC1,#2461C5)] md:px-6 py-3 text-white font-medium md:font-light"
                  >
                    Apply for Next Cohort
                    <ArrowRight size={18} />
                  </motion.button>
                </div> */}

                <div className="w-full md:w-fit">
                  {/* Outer wrapper = border thickness */}
                  <div className="relative rounded-xl p-0.5 overflow-hidden">
                    {/* Rotating full-border gradient layer (oversized so corners never clip) */}
                    {/* <motion.div
                      className="absolute -inset-10 rounded-[40px]"
                      style={{
                        // Hard stops = less blending = removes whitish glow
                        background:
                          "conic-gradient(from 0deg, #53BCFF 0deg 90deg, #2A99FF 90deg 180deg, #53BCFF 180deg 270deg, #2A99FF 270deg 360deg)",
                        willChange: "transform",
                      }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2.2,
                        ease: "linear",
                        repeat: Infinity,
                      }}
                    /> */}

                    {/* Inner fill covers center so only border ring is visible */}
                    <div
                      onClick={() => {
                        setShowCohortForm(true);
                      }}
                      className="relative rounded-[10px] bg-[radial-gradient(circle,#0F4BC1,#2461C5)]"
                    >
                      {/* <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 22,
                        }}
                        className="flex w-full md:w-fit items-center justify-center gap-2 rounded-[10px] bg-transparent md:px-6 py-3 text-lg sm:text-xl text-white font-medium md:font-light tracking-normal hover:cursor-pointer"
                      >
                        Apply for Next Cohort
                        <ArrowRight size={18} />
                      </motion.button> */}

                      <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 22,
                        }}
                        className="relative flex w-full md:w-fit items-center justify-center gap-2 overflow-hidden rounded-[14px] border-0 bg-transparent px-4 md:px-6 py-3 text-lg sm:text-xl text-white font-medium md:font-light tracking-normal outline-none ring-0 hover:cursor-pointer focus:outline-none focus:ring-0"
                      >
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 248 64"
                          fill="none"
                          className="pointer-events-none absolute inset-0 z-0"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <filter
                              id="softGlowWhite"
                              x="-40%"
                              y="-40%"
                              width="180%"
                              height="180%"
                            >
                              <feGaussianBlur
                                stdDeviation="1.8"
                                result="blur"
                              />
                              <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                          </defs>

                          <motion.rect
                            x="1"
                            y="1"
                            width="245"
                            height="61"
                            rx="12.5"
                            stroke="#fff"
                            strokeWidth="2.3"
                            strokeDasharray="40 560"
                            animate={{ strokeDashoffset: [120, -480] }}
                            transition={{
                              duration: 2.35,
                              ease: "linear",
                              repeat: Infinity,
                            }}
                            opacity="0.85"
                          />

                          <motion.rect
                            x="1"
                            y="1"
                            width="245"
                            height="61"
                            rx="12.5"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeDasharray="5 595"
                            animate={{ strokeDashoffset: [115, -485] }}
                            transition={{
                              duration: 2.35,
                              ease: "linear",
                              repeat: Infinity,
                            }}
                            opacity="0.75"
                            filter="url(#softGlowWhite)"
                          />

                          <motion.rect
                            x="1"
                            y="1"
                            width="245"
                            height="61"
                            rx="12.5"
                            stroke="#fff"
                            strokeWidth="1.7"
                            strokeDasharray="5 595"
                            animate={{ strokeDashoffset: [110, -490] }}
                            transition={{
                              duration: 2.35,
                              ease: "linear",
                              repeat: Infinity,
                            }}
                            opacity="0.65"
                          />

                          <motion.rect
                            x="1"
                            y="1"
                            width="245"
                            height="61"
                            rx="12.5"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeDasharray="5 595"
                            animate={{ strokeDashoffset: [105, -495] }}
                            transition={{
                              duration: 2.35,
                              ease: "linear",
                              repeat: Infinity,
                            }}
                            opacity="0.58"
                            filter="url(#softGlowWhite)"
                          />

                          <motion.rect
                            x="1"
                            y="1"
                            width="245"
                            height="61"
                            rx="12.5"
                            stroke="#fff"
                            strokeWidth="1.4"
                            strokeDasharray="5 595"
                            animate={{ strokeDashoffset: [100, -500] }}
                            transition={{
                              duration: 2.35,
                              ease: "linear",
                              repeat: Infinity,
                            }}
                            opacity="0.5"
                          />
                        </svg>

                        <span className="relative z-10 flex items-center gap-2">
                          <span className="font-medium">Apply for Next Cohort</span>
                          <ArrowRight size={18} />
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="hover:cursor-pointer flex items-center bg-[#091b42] border border-white/30 md:border-0 rounded-xl md:rounded-none md:px-6 py-3 md:w-fit md:bg-transparent justify-center md:justify-start w-full text-lg gap-2 tracking-normal text-white md:text-white/80 hover:text-white"
                >
                  View Curriculum
                  <ArrowRight size={16} />
                </motion.button>
              </div>

              <div className="mt-8 md:mt-10 md:flex justify-between items-center">
                <div className="text-lg md:text-lg text-white/50 text-center tracking-normal md:text-start font-extralight md:font-light">
                  Trained by engineers from
                </div>
                {/* <div className="flex mt-1 items-center justify-evenly gap-4 md:gap-8 text-white/50 font-semibold text-lg">
                  {
                    logos.map((logo, idx) => {
                      return <Image src={logo.src} alt={logo.name} key={idx} width={100} height={100} className="w-20 h-auto md:w-30 " />
                    })}
                </div> */}
                <div className="flex mt-1 items-center justify-evenly gap-4 md:gap-8 text-white/50 font-semibold text-lg">
                  {logos.map((logo, idx) => (
                    <motion.div
                      key={logo.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{
                        once: false,
                        amount: 0.2,
                        margin: "0px 0px -10% 0px",
                      }}
                      transition={{
                        delay: idx * 0.08,
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{ y: -2, scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="cursor-pointer select-none"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={100}
                        height={100}
                        className="w-20 h-auto md:w-30 opacity-70 hover:opacity-100 transition"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
