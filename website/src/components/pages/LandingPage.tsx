import {
  HeroSection,
  ServicesSection,
  WorkSection,
  AboutSection,
  ContactSection,
} from "../sections";
import { ProcessTimeline } from "../ui/ProcessTimeline";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessTimeline />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default LandingPage;