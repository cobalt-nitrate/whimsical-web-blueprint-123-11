
import React from 'react';
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/percepta/HeroSection';
import OverviewSection from '@/components/percepta/OverviewSection';
import CoreCapabilities from '@/components/percepta/CoreCapabilities';
import SolutionsSection from '@/components/percepta/SolutionsSection';
import AdaptabilitySection from '@/components/percepta/AdaptabilitySection';
import TechnicalHighlights from '@/components/percepta/TechnicalHighlights';
import UseCasesSection from '@/components/percepta/UseCasesSection';
import CTASection from '@/components/percepta/CTASection';

const Percepta = () => {
  return (
    <PageLayout>
      <HeroSection />
      <OverviewSection />
      <CoreCapabilities />
      <SolutionsSection />
      <AdaptabilitySection />
      <TechnicalHighlights />
      <UseCasesSection />
      <CTASection />
    </PageLayout>
  );
};

export default Percepta;
