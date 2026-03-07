'use client';

import { useEffect, useState } from "react";

const midNightSlot = [
  0,0,0,0,1,1,1,1,
  2,2,2,2,3,3,3,3,
  4,4,4,4,5,5,5,5,
  5,5,5,5,5,5,5,5
]; // ends at 5


const morningSlot = [
  5,7,10,13,16,19,22,25,
  28,31,34,37,40,43,44,45
]; // ends at 45


const daySlot = [
  45,50,55,60,65,70,75,80,
  85,90,95,100,105,110,115,120,
  125,130,135,140,145,147,147,147,
  148,148,148,148,148,148,149,149,
  149,149,149,149,149,149,149,149
]; // ends at 149

const nightSlot = [
    0, -10, -20, -30, -60, -105, -131, -149
]; // 2 hrs

export default function LiveStudentsCard() {
    const baseCount = 1;
    const [liveStudents, setLiveStudents] = useState(baseCount);

    useEffect(() => {
        // const randomInterval = Math.floor(Math.random() * 10000) + 3000 ; 
        const interval = setInterval(() => {
            const currentTime = new Date();
            const hours = currentTime.getHours();
            const minutes = currentTime.getMinutes();

            setLiveStudents(() => {

                if (hours >= 0 && hours < 8) {
                    const time = hours * 60 + minutes;
                    const timeSlot = Math.floor(time / 15);
                    const studentsToAdd = midNightSlot[timeSlot] || 0;
                    return Math.min(150, baseCount + studentsToAdd);

                } else if (hours >= 8 && hours < 12) {

                    const time = (hours - 8) * 60 + minutes;
                    const timeSlot = Math.floor(time / 15);
                    const studentsToAdd = morningSlot[timeSlot] || 0;
                    return Math.min(150, baseCount + studentsToAdd);


                } else if (hours >= 12 && hours < 22) {

                    const time = (hours - 12) * 60 + minutes;
                    const timeSlot = Math.floor(time / 15);
                    const studentsToAdd = daySlot[timeSlot] || 0;
                    return Math.min(150, baseCount + studentsToAdd);

                } else {

                    const time = (hours - 22) * 60 + minutes;
                    const timeSlot = Math.floor(time / 15);
                    const studentsToAdd = nightSlot[timeSlot] || 0;
                    return Math.max(1, baseCount + studentsToAdd);

                }
            });
        }, 1000 );

        return () => clearInterval(interval);

    }, [])

    return (
        <div className="flex flex-col items-center justify-center rounded-2xl bg-[#0A1220] p-10 text-center shadow-inner">
            <div className="text-[170px] font-semibold  bg-linear-to-br from-[#93E8FF] to-[#4CACFF] bg-clip-text text-transparent
                drop-shadow-[0_0_30px_rgba(95,168,255,2)]">{liveStudents}</div>
            <div className="mt-2 text-lg text-white/70">
                students learning <br /> right now 
            </div>
        </div>
    );
}