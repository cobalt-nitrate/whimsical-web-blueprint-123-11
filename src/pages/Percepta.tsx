
import React, { useRef } from 'react';
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/percepta/HeroSection';
import OverviewSection from '@/components/percepta/OverviewSection';
import CoreCapabilities from '@/components/percepta/CoreCapabilities';
import TechnicalHighlights from '@/components/percepta/TechnicalHighlights';
import SolutionsSection from '@/components/percepta/SolutionsSection';
import AdaptabilitySection from '@/components/percepta/AdaptabilitySection';
import UseCasesSection from '@/components/percepta/UseCasesSection';
import CTASection from '@/components/percepta/CTASection';

const Percepta = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageLayout>
      <HeroSection scrollToContact={scrollToContact} />
      <OverviewSection />
      <CoreCapabilities />
      <TechnicalHighlights />
      <SolutionsSection />
      <AdaptabilitySection />
      <UseCasesSection />
      <div ref={contactRef}>
        <CTASection />
      </div>
    </PageLayout>
  );
};

export default Percepta;
