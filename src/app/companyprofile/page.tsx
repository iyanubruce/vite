"use client";
import { useRef } from "react";
import CoverSection from "./components/CoverSection";
import OverviewSection from "./components/OverviewSection";
import VisionMissionSection from "./components/VisionMissionSection";
import WhyUsSection from "./components/WhyUsSection";
import ServicesSection from "./components/ServicesSection";
import CoreValuesSection from "./components/CoreValuesSection";
import TeamSection from "./components/TeamSection";
import ClientsSection from "./components/ClientsSection";
import ContactFooter from "./components/ContactFooter";
import Image from "next/image";

export default function CompanyProfilePage() {
  const profileRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');
        @media print {
          .no-print { display: none !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      ` }} />

      <div
        ref={profileRef}
        className="bg-white min-h-screen"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <CoverSection onPrint={handlePrint} />
        <OverviewSection />
        <VisionMissionSection />
        <WhyUsSection />
        <ServicesSection />
        <CoreValuesSection />
        <TeamSection />
        <ClientsSection />
        <ContactFooter />
      </div>
    </>
  );
}
