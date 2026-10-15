import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { GitWorkflow } from "@/components/GitWorkflow";
import { FeaturesBento } from "@/components/FeaturesBento";
import { LiveObservability } from "@/components/LiveObservability";
import { Databases } from "@/components/Databases";
import { GlobalInfra } from "@/components/GlobalInfra";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsWall } from "@/components/TestimonialsWall";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink selection:bg-accent/30 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechMarquee />
        <GitWorkflow />
        <FeaturesBento />
        <LiveObservability />
        <Databases />
        <GlobalInfra />
        <PricingSection />
        <TestimonialsWall />
        <FAQAccordion />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
