'use client';

import { openBookACallForm } from "@/lib/redux/slices/ShowBookACallFormSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function TopBarBookACall() {
    const dispatch = useDispatch();

    return (
        <div className=" sticky left-0 top-0 h-12 md:h-16 w-full text-white/80 hover:text-white bg-[#0b173a]  hover:bg-[#080C19] transition duration-100 flex items-center justify-center gap-x-2">
            <Image src={'./headerEmoji.svg'} alt="" height={1000} width={1000} className="w-auto h-7 md:h-9 " />
            <div className="text-lg md:text-2xl ">
                Need a help? Talk to us at
                <span className="underline">
                    <a href="tel:+916295797609" className="inline md:hidden px-2">6295797609 </a>
                </span>
                <span className="hidden md:inline px-2">6295797609 or</span>
                
                <span  onClick={() => { dispatch(openBookACallForm()) }}  className="hover:cursor-pointer underline hidden md:inline ">Request a Call back</span>
            </div>

        </div>
    )
}