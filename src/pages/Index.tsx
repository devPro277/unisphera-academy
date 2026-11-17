import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProgramsSection from "@/components/ProgramsSection";
import JourneySection from "@/components/JourneySection";
import MentorsSection from "@/components/MentorsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-white">
    <Header />
    <HeroSection />
    <StatsSection />
    <ProgramsSection />
    <JourneySection />
    <MentorsSection />
    <ProjectsSection />
    <TestimonialsSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
