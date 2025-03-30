
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
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <PageLayout>
      <HeroSection scrollToContact={scrollToContact} />
      <OverviewSection />
      <CoreCapabilities scrollToContact={scrollToContact} />
      <SolutionsSection scrollToContact={scrollToContact} />
      <AdaptabilitySection scrollToContact={scrollToContact} />
      <UseCasesSection scrollToContact={scrollToContact} />
      <TechnicalHighlights scrollToContact={scrollToContact} />
      <CTASection scrollToContact={scrollToContact} />
    </PageLayout>
  );
};

export default Percepta;
