import React, { useRef, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { TransformationsSection } from "./components/TransformationsSection";
import { WhyUsSection } from "./components/WhyUsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  const contactRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<string>("Garden Fencing");

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F2] text-[#182016] selection:bg-[#809618] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onEstimateClick={() => scrollToContact()} />

      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <Hero onEstimateClick={() => scrollToContact()} />

        {/* 2. SERVICES SECTION */}
        <ServicesSection
          onSelectService={(serviceTitle) => {
            // Map uppercase service title to form dropdown option
            let mapped = "Garden Fencing";
            if (serviceTitle.includes("FENCING")) mapped = "Garden Fencing";
            else if (serviceTitle.includes("BUILDINGS")) mapped = "Garden Building";
            else if (serviceTitle.includes("ROOMS")) mapped = "Garden Room";
            else if (serviceTitle.includes("DECKING")) mapped = "Decking";
            else if (serviceTitle.includes("LANDSCAPING")) mapped = "Landscaping";
            else if (serviceTitle.includes("TRANSFORMATIONS")) mapped = "Garden Transformation";
            scrollToContact(mapped);
          }}
        />

        {/* 3. GARDEN TRANSFORMATIONS SECTION */}
        <TransformationsSection
          onDiscussClick={(prefService) => {
            let mapped = "Garden Transformation";
            if (prefService) {
              if (prefService.includes("Fence")) mapped = "Garden Fencing";
              else if (prefService.includes("Room")) mapped = "Garden Room";
              else if (prefService.includes("Building")) mapped = "Garden Building";
              else if (prefService.includes("Deck")) mapped = "Decking";
              else if (prefService.includes("Land")) mapped = "Landscaping";
            }
            scrollToContact(mapped);
          }}
        />

        {/* 4. WHY FALKIRK FENCES */}
        <WhyUsSection />

        {/* 5. CONTACT / FREE ESTIMATE */}
        <ContactSection ref={contactRef} initialService={selectedService} />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
