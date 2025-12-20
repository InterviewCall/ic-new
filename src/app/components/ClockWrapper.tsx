'use client';
import dynamic from "next/dynamic";

const ClockTimer = dynamic(() => import("./ClockTimer"), {
  ssr: false,
});

// import ClockTimer from "./ClockTimer";

export default function ClockWrapper(){
    return <ClockTimer targetDate="2025-12-31T23:59:59"/>
}