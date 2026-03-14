'use client';

import { openBookACallForm } from "@/lib/redux/slices/ShowBookACallFormSlice";
import { useDispatch } from "react-redux";

export default function TopBarBookACall() {
    const dispatch = useDispatch();

    return (
        <div onClick={()=>{dispatch(openBookACallForm())}} className="hover:cursor-pointer sticky left-0 top-0 h-12 md:h-16 w-full text-white/80 hover:text-white bg-[#0b173a] hover:underline hover:bg-[#080C19] transition duration-100 flex items-center justify-center">
            <div className="text-lg md:text-2xl  hover:underline">
                Need a help? Request a Call back 
            </div>
        </div>
    )
}