import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "wouter";
import { consumePendingScrollTarget } from "@/lib/scroll-target";
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
  const [location] = useLocation();

  // handle scrolling to sections when navigating from another page
  useLayoutEffect(() => {
    // only use pendingScrollTarget from in-memory store
    const target = consumePendingScrollTarget();
    if (!target) {
      // if no target but there's a hash, remove it without scrolling
      if (window.location.hash) {
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname,
        );
      }
      return;
    }

    const element = document.querySelector(target);
    if (!element) return;

    setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [location]);

  // setup intersection observer for fade-in animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, observerOptions);

    // observe all fade-in elements
    const fadeElements = document.querySelectorAll(".fade-in-up");
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
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
