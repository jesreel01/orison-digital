import {
  HeroSection,
  ServicesSection,
  WorkSection,
  AboutSection,
  TestimonialsSection,
  ContactSection,
} from "../sections";
import { ProcessTimeline } from "../ui/ProcessTimeline";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessTimeline />
      {/* <WorkSection /> */}
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default LandingPage;