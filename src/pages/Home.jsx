import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import ServicesPreview from "../components/home/ServicesPreview";
import AboutPreview from "../components/home/AboutPreview";
import Stats from "../components/home/Stats";
import CareerPreview from "../components/home/CareerPreview";
import Testimonials from "../components/home/Testimonials";
import EmergencyCTA from "../components/home/EmergencyCTA";

export default function Home() {
  return (
    <>
      <Hero />

      <Features />

      <ServicesPreview />

      <AboutPreview />

      <Stats />

      <CareerPreview />

      <Testimonials />

      <EmergencyCTA />
    </>
  );
}
