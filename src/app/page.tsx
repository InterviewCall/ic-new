import InterviewCallHero from "./components/InterviewCallHero";
import JourneyComparison from "./components/JourneyComparison";
import HeroMarque from "./components/HeroMarque";
import StatsTrustSection from "./components/StatsTrustSection";
import Roadmap from "./components/Roadmap";

export default function Home() {
  return (
    <div className="w-full h-full">
      <InterviewCallHero/>
      <HeroMarque />
      <StatsTrustSection />
      <JourneyComparison/>
      <Roadmap />
    </div>
  );
}
