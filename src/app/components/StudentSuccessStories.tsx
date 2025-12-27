
import Image from "next/image";
import PodcastVideo from "./PodcastVideo";
export default function StudentSuccessStories() {
    return (
        <div className="w-full text-white">
            <div className="text-6xl font-medium tracking-tight text-center">
                Student Sucess Stories
            </div>

            <div className="font-extralight tracking-wide my-3 text-center text-2xl">
                Real Transformations , Real careers, Real Impact
            </div>
            <PodcastVideo
                leftSpeaker={{
                    name: "Shivansh Yashasvi",
                    role: "SDE at Amazon",
                }}
                rightSpeaker={{
                    name: "Sunyul Hossen",
                    role: "Ex-Goldman Sachs, Poland",
                }}
            />

            <div className="grid grid-cols-2 gap-5 my-10">
                <TestimonialCard designation="SDE at Microsoft" image="/test.svg" name="Ishita Srivastava"
                    text={["Six months ago I’d never",
                        "coded. Today I’m building",
                        "features used by millions."]} />
                <TestimonialCard designation="SDE at Microsoft" image="/test.svg" name="Ishita Srivastava"
                    text={["Six months ago I’d never",
                        "coded. Today I’m building",
                        "features used by millions."]} />

            </div>




        </div>
    )
}

function TestimonialCard({ image, text, name, designation }: { image: string, text: string[], name: string, designation: string }) {
    return (

        <div className="relative isolate h-72 border border-white/30 overflow-hidden rounded-2xl">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-[#383F46]/80 to-[#464E55]/80 z-10 opacity-50" />

            {/* Blurred image (background only) */}
            <Image
                // src="/image1.svg"
                src={image}
                alt=""
                width={100}
                height={100}
                className="absolute right-0 h-full w-auto z-0 blur-sm"
            />

            {/* Content */}
            <div className="relative z-20 p-6 space-y-4">
                <div className="flex items-center h-8 gap-x-1 ">
                    <Image src="/colon.svg" alt="" width={100} height={100} className="h-full w-auto" />
                    <Image src="/colon.svg" alt="" width={100} height={100} className="h-full w-auto" />
                </div>

                <div className="px-2 text-white/80 text-3xl font-extralight w-95/100 leading-9 ">
                    {/* Six months ago I’d never <br />
                        coded. Today I’m building <br />
                        features used by millions. */}
                    {text.map((item, idx) => <div key={idx}>{item}</div>)}
                </div>

                <div className="px-2 text-xl text-white/80 leading-6 mt-4">
                    <div>
                        -{name}
                    </div>

                    <div>
                        {designation}
                    </div>
                </div>
            </div>
        </div>


    )
}

