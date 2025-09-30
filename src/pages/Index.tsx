import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import EventsSection from "../components/sections/EventsSection";
import BlogSection from "../components/sections/BlogSection";
import TeamSection from "../components/sections/TeamSection"
import SponsorsSection from "../components/sections/Sponsors";   

export default function Index() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <BlogSection />
      <TeamSection />
      <SponsorsSection /> 
    </div>
  );
}
