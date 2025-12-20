import Image from "next/image";

export default function JoinCohortSection() {
    return (
        <div className="w-full my-20">
            <div className="text-center text-7xl w-full leading-18">
                Only 50 students per <br />
                cohort <br />
                Ready to become one?
            </div>
            <div className="flex justify-center items-center gap-x-24 my-20 text-2xl text-white/80">

                <button className="w-64 py-4 rounded-xl bg-linear-to-br from-[#012444] to-[#014394] border border-blue-600/10 hover:cursor-pointer">
                    Apply Now
                </button>
                <button className="w-64 py-4 rounded-xl bg-linear-to-br from-[#091724] to-[#02060c] border border-gray-600/10 hover:cursor-pointer">
                    Book Intro Call
                </button>
            </div>

            <div className="text-center text-4xl tracking-tight text-white/80">
                July Batch closes in
            </div>

            <div className="grid grid-cols-6 mx-10 mt-10 gap-x-16 justify-center">
                <Image alt="" src={'/bwPfp1.svg'} width={0} height={0} className="w-full h-auto" />
                <Image alt="" src={'/bwPfp2.svg'} width={0} height={0} className="w-full h-auto" />
                <Image alt="" src={'/bwPfp1.svg'} width={0} height={0} className="w-full h-auto" />
                <Image alt="" src={'/bwPfp2.svg'} width={0} height={0} className="w-full h-auto" />
                <Image alt="" src={'/bwPfp1.svg'} width={0} height={0} className="w-full h-auto" />
                <Image alt="" src={'/bwPfp2.svg'} width={0} height={0} className="w-full h-auto" />

            </div>

            <div className="flex items-center mt-10 justify-evenly h-12">
                <Image alt="" src={'/bwMeta.svg'} width={0} height={0} className="w-auto h-full" />
                <Image alt="" src={'/bwGoogle.svg'} width={0} height={0} className="w-auto h-full" />
                <Image alt="" src={'/bwAmazon.svg'} width={0} height={0} className="w-auto h-full" />
                <Image alt="" src={'/bwNetflix.svg'} width={0} height={0} className="w-auto h-full" />
                <Image alt="" src={'/bwApple.svg'} width={0} height={0} className="w-auto h-full" />

            </div>

        </div>
    )
}