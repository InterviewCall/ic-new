import InterviewCallHero from "./components/InterviewCallHero";
import JourneyComparison from "./components/JourneyComparison";
import HeroMarque from "./components/HeroMarque";
import StatsTrustSection from "./components/StatsTrustSection";
import Roadmap from "./components/Roadmap";
import MeetYourInstructors from "./components/MeetYourInstructors";
import StudentSuccessStories from "./components/StudentSuccessStories";

export default function Home() {
  return (
    <div className="w-full h-full">
      <InterviewCallHero />
      <HeroMarque />
      <div className="w-full flex flex-col items-center ">
        <div className="w-85/100">
          <StatsTrustSection />
          <JourneyComparison />
          <Roadmap />
          <MeetYourInstructors />
          <StudentSuccessStories />
        </div>
      </div>
    </div>
  );
}
