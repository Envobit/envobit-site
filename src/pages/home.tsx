import { useEffect } from "react";
import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/hero";
import Problem from "@/components/sections/problem";
import Team from "@/components/sections/team";
import Services from "@/components/sections/services";
import Methodology from "@/components/sections/methodology";
import Results from "@/components/sections/results";
import Vision from "@/components/sections/vision";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/ui/footer";

export default function Home() {
  useEffect(() => {
    // Set up intersection observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Problem />
      <Team />
      <Services />
      <Methodology />
      <Results />
      <Vision />
      <FinalCTA />
      <Footer />
    </div>
  );
}
