import { MoveRight } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="w-full rounded-t-2xl border-white/20 bg-linear-to-r from-[#1b2736] to-[#080c14] py-8 px-10">
            <div className="grid grid-cols-2">
                <div>
                    <div className="text-4xl tracking-tight  ">
                        Interview Call
                    </div>
                    <div className="text-xl text-white/60">
                        Built by engineers. For engineers.
                    </div>
                </div>
                <div>
                    <div className="border border-white/10 p-6 px-10 flex justify-between items-center rounded-xl bg-linear-to-r from-[#1b2736] to-[#080c14]">
                        <div className="text-xl text-white/60">
                            Stay updated on openings,<br/>
                            wins & early access
                        </div>
                        <button className="rounded-2xl w-36 h-12 text-xl bg-blue-500">Subscribe</button>
                    </div>
                    <div className="px-2 text-xl text-white/60 leading-snug my-2">
                        <div>
                            {"Offer at Meesho "}<MoveRight className="inline" />{" Offer at Meesho "}<MoveRight className="inline" />
                        </div>
                        <div>
                            {"Capstone Demo this Friday"}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-[6fr_1fr] my-8">
                <div className="grid grid-cols-4 font-light text-lg text-white/90 gap-x-4 gap-y-2">
                    <div>About</div>
                    <div>FAQs</div>
                    <div>Privacy Policy</div>
                    <div>Careers</div>
                    <div>FAQs</div>
                    <div>Refund Policy</div>
                </div>
                <div className="flex items-center justify-evenly">
                    <FaLinkedinIn className="text-white" size={35}/>
                    <FaFacebookF className="text-white"  size={30}/>
                    <FaTwitter className="text-white"  size={30}/>


                </div>
            </div>

            <div className="grid grid-cols-[5fr_1fr] text-white/50">
                <div>©InterviewCall 2025: All Rights Reserved.</div>
                <div>Built with 💙 India</div>
            </div>
        </div>
    );
}
