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

// import dynamic from "next/dynamic";

// const ClockTimer = dynamic(() => import("./components/ClockTimer"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <div className="w-full h-full">
      <InterviewCallHero />
      <HeroMarque />
      <div className="w-full flex flex-col items-center ">
        <div className="w-80/100  ">
          <StatsTrustSection />
          <JourneyComparison />
          <Roadmap />
          <ProblemBank />
          <RoleMatchedMentors />
          <JobSwitchExectionSection />
          <MeetYourInstructors />
          <StudentSuccessStories />
          <TrainingModules />
          <CohortSection />
          <CommunitySection />
          <InterviewCallSystem />
          <JoinCohortSection />
          <Footer />
          {/* <ClockTimer targetDate="2025-12-31T23:59:59"/> */}
        </div>
      </div>
    </div>
  );
}
