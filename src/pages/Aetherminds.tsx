
import React from 'react';
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/aetherminds/HeroSection';
import CapabilitiesSection from '@/components/aetherminds/CapabilitiesSection';
import ModelTypesSection from '@/components/aetherminds/ModelTypesSection';
import WhyChooseSection from '@/components/aetherminds/WhyChooseSection';
import EnhancementsSection from '@/components/aetherminds/EnhancementsSection';
import DifferentiationSection from '@/components/aetherminds/DifferentiationSection';
import CTASection from '@/components/aetherminds/CTASection';

const Aetherminds = () => {
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
      <CapabilitiesSection />
      <ModelTypesSection />
      <EnhancementsSection />
      <WhyChooseSection scrollToContact={scrollToContact} />
      <DifferentiationSection />
      <CTASection scrollToContact={scrollToContact} />
    </PageLayout>
  );
};

export default Aetherminds;
