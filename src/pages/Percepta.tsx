
import React from 'react';
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/percepta/HeroSection';
import OverviewSection from '@/components/percepta/OverviewSection';
import CoreCapabilities from '@/components/percepta/CoreCapabilities';
import TechnicalHighlights from '@/components/percepta/TechnicalHighlights';
import SolutionsSection from '@/components/percepta/SolutionsSection';
import UseCasesSection from '@/components/percepta/UseCasesSection';
import AdaptabilitySection from '@/components/percepta/AdaptabilitySection';
import CTASection from '@/components/percepta/CTASection';

const Percepta: React.FC = () => {
  // This function will be used to scroll to the contact form when CTA buttons are clicked
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageLayout>
      <HeroSection scrollToContact={scrollToContact} />
      <OverviewSection />
      <CoreCapabilities />
      <TechnicalHighlights />
      <SolutionsSection />
      <UseCasesSection />
      <AdaptabilitySection />
      <CTASection />
    </PageLayout>
  );
};

export default Percepta;
