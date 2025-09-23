import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import EventsSection from "../components/sections/EventsSection";

export default function Index() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <EventsSection />
    </div>
  );
}
