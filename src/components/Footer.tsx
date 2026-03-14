import { MoveRight } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full rounded-t-2xl border-white/20 bg-linear-to-r from-[#1b2736] to-[#080c14] py-8 px-4 md:px-10">
            <div className="grid md:grid-cols-2">
                <div>
                    <div className="text-4xl tracking-tight text-white hover:cursor-pointer">
                        <Link href={'/'}>Interview Call</Link>
                    </div>
                    <div className="text-xl text-white/60">
                        Built by engineers. For engineers.
                    </div>
                </div>
                <div>
                    <div className="border border-white/10 p-6 mt-4 md:mt-0 px-4 md:px-10 md:flex justify-between items-center rounded-xl bg-linear-to-r from-[#1b2736] to-[#080c14]">
                        <div className="text-xl text-white/60 text-balance ">
                            Stay updated on openings,<br />
                            wins & early access
                        </div>
                        <button disabled className="rounded-2xl mt-4 md:mt-0 w-36 h-12 text-xl bg-blue-500 hover:cursor-not-allowed text-white">Subscribe</button>
                    </div>
                    <div className="px-2 text-xl text-white/60 leading-snug my-2">
                        <div>
                            {"Offer at Meesho "}<MoveRight className="inline" />
                            <br className=" md:hidden" />
                            {" Offer at Meesho "}<MoveRight className="inline" />
                            <br className=" md:hidden" />
                        </div>
                        <div>
                            {"Capstone Demo this Friday"}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-[6fr_1fr] my-8">
                <div className="flex flex-wrap md:grid grid-cols-4 font-light text-lg text-white/90 gap-x-4 gap-y-2">
                    {/* <Link href="/" className="hover:text-blue-400 transition-colors">About</Link> */}
                    {/* <Link href="/" className="hover:text-blue-400 transition-colors">FAQs</Link> */}
                    <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
                    <Link href="/terms-conditions" className="hover:text-blue-400 transition-colors">Terms</Link>
                    <Link href="/contact-us" className="hover:text-blue-400 transition-colors">Contact</Link>
                    <Link href="/refund-policy" className="hover:text-blue-400 transition-colors">Refund Policy</Link>
                </div>
                <div className="flex items-center gap-x-4 md:gap-x-0 mt-6 md:mt-0 md:justify-evenly">
                    <FaLinkedinIn className="text-white" size={35} />
                    <FaFacebookF className="text-white" size={30} />
                    <FaTwitter className="text-white" size={30} />


                </div>
            </div>

            <div className="grid md:grid-cols-[5fr_1fr] text-white/50">
                <div>©InterviewCall 2025: All Rights Reserved.</div>
                <div>Built with 💙 India</div>
            </div>
        </div>
    );
}
