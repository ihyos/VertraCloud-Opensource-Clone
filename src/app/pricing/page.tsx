import React from "react";
import { Navbar } from "@/components/Navbar";
import { PricingSection } from "@/components/PricingSection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink selection:bg-accent/30 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-8">
        <PricingSection />
        <FAQAccordion />
      </main>
      <Footer />
    </div>
  );
}
