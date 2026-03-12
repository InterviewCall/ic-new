
import InterviewCallHero from "./components/InterviewCallHero";
import JourneyComparison from "./components/JourneyComparison";
import HeroMarque from "./components/HeroMarque";
import StatsTrustSection from "./components/StatsTrustSection";
import Roadmap from "./components/Roadmap";
import MeetYourInstructors from "./components/MeetYourInstructors";
import StudentSuccessStories from "./components/StudentSuccessStories";
import TrainingModules from "./components/TrainingModules";
import CohortSection from "./components/CohortSection";
import CommunitySection from "./components/CommunitySection";
import InterviewCallSystem from "./components/InterviewCallSystem";
import JoinCohortSection from "./components/JoinCohortSection";
import Footer from "./components/Footer";
import ProblemBank from "./components/ProblemBank";
import RoleMatchedMentors from "./components/RoleMatchedMentor";
import JobSwitchExectionSection from "./components/JobSwitchExecutionSection";
import Reveal from "./components/Reveal";
import PopUpWrapper from "./components/PopUpWrapper";

// import dynamic from "next/dynamic";

// const ClockTimer = dynamic(() => import("./components/ClockTimer"), {
//   ssr: false,
// });

const sections = [
  { component: StatsTrustSection, css: "bg-[#05080E]" },
  { component: JourneyComparison, css: "bg-linear-to-b from-[#05080E] to-[#0B0F17]" },
  { component: Roadmap, css: "bg-linear-to-b from-[#0B0F17] to-[#050813]" },
  { component: ProblemBank, css: "bg-linear-to-b from-[#050813] to-[#020207]" },
  { component: RoleMatchedMentors, css: "bg-linear-to-b from-[#020207] to-[#04050C]" },
  { component: JobSwitchExectionSection, css: "bg-linear-to-b from-[#04050C] to-[#0F0E17]" },
  { component: MeetYourInstructors, css: "bg-linear-to-b from-[#0F0E17] to-[#000B22]" },
  { component: StudentSuccessStories, css: "bg-linear-to-b from-[#000B22] to-[#0C1224]" },
  { component: TrainingModules, css: "bg-linear-to-b from-[#0C1224] to-[#030C12]" },
  { component: CohortSection, css: "bg-linear-to-b from-[#030C12] to-[#020C14]" },
  { component: CommunitySection, css: "bg-linear-to-b from-[#020C14] to-[#020A14]" },
  { component: InterviewCallSystem, css: "bg-linear-to-b from-[#020A14] to-[#000305]" },
  { component: JoinCohortSection, css: "bg-linear-to-b from-[#000305] to-[#0C142D]" },
  { component: Footer, css: "bg-linear-to-b from-[#0C142D] to-[#080C19]" },
];


export default function Home() {
  return (
    <div className="w-full h-full overflow-x-hidden ">

      <InterviewCallHero />
      <HeroMarque />
      <div className="w-full flex flex-col items-center ">
        <div className="w-10/10">
          {sections.map(({ component: Component, css }, index) => (
            <div
              key={index}
              className={`w-full flex flex-col items-center ${css}`}
            >
              <div className="w-full md:w-8/10 relative">
                <PopUpWrapper />

                <Reveal duration={0.75}>
                  <Component />
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
