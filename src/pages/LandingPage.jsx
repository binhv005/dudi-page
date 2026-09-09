import React, { useState, useEffect } from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import AboutIntro from '../components/landing/AboutIntro';
import ProblemSigns from '../components/landing/ProblemSigns';
import Solutions from '../components/landing/Solutions';
import CaseStudies from '../components/landing/CaseStudies';
import Process from '../components/landing/Process';
import Pricing from '../components/landing/Pricing';
import FullRedesign from '../components/landing/FullRedesign';
import WhyDudi from '../components/landing/WhyDudi';
import FAQ from '../components/landing/FAQ';
import LeadForm from '../components/landing/LeadForm';
import FinalCTA from '../components/landing/FinalCTA';
import Footer from '../components/landing/Footer';
import TechBackground from '../components/common/TechBackground';
import BackToTop from '../components/common/BackToTop';
import MobileStickyBar from '../components/common/MobileStickyBar';
import FloatingContact from '../components/common/FloatingContact';

export default function LandingPage() {
  const [selectedPackage, setSelectedPackage] = useState('Chưa biết / cần tư vấn');

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const handleSelectPackage = (pkgValue) => {
    setSelectedPackage(pkgValue);
    const formElement = document.getElementById('form-tu-van');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-[#0F172A] dark:text-[#F8FAFC] selection:bg-[#D71920] selection:text-white relative overflow-x-hidden font-sans transition-colors duration-300">
      {/* S01: Clean White Floating Header */}
      <Header />

      <main className="flex-1 w-full">
        {/* S02: Full-screen Cinematic Hero with Cloudinary Video (Hero has its own self-contained background) */}
        <Hero />

        {/* Middle Content Wrapper with Peach Ripple & Sparse Floating Dots Background */}
        <div className="relative overflow-hidden">
          {/* Background rendered strictly at backmost layer z-0 */}
          <TechBackground />

          {/* S02.5: About DUDI — Editorial Introduction with Tech Mascot Assistant */}
          <AboutIntro />

          {/* S03: Editorial Diagnostic List (01-06, NO cards) */}
          <ProblemSigns />

          {/* S04: Website Diagnosis Map (Interactive 8-node radar, NO cards) */}
          <Solutions />

          {/* S05: Case Studies (Large Asymmetric Composition, NO cards) */}
          <CaseStudies />

          {/* S06: Process (Vertical Editorial Timeline with Red Progress Line) */}
          <Process />

          {/* S07: Pricing (Clean Editorial Comparison Matrix with 2M featured) */}
          <Pricing onSelectPackage={handleSelectPackage} />

          {/* S08: Full Rebuild (Dramatic Full-Width Section, Deep Red Gradient) */}
          <FullRedesign onSelectPackage={handleSelectPackage} />

          {/* S09: Why DUDI (Statement Typography + 4-point Horizontal Proof Rail) */}
          <WhyDudi />

          {/* S10: FAQ (Minimal White Editorial Accordion) */}
          <FAQ />

          {/* S11: Contact Form (Premium Split-Screen Section) */}
          <LeadForm selectedPackage={selectedPackage} />

          {/* S12: Final CTA (Bright White Section with Abstract Flowing Red Shape) */}
          <FinalCTA />
        </div>
      </main>

      {/* S13: Footer (Footer has its own dark background) */}
      <Footer />

      {/* UX Helpers */}
      <FloatingContact />
      <BackToTop />
      <MobileStickyBar />
    </div>
  );
}
