
import React from 'react';
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/lexora/HeroSection';
import AIToolkit from '@/components/lexora/AIToolkit';
import KeyCapabilities from '@/components/lexora/KeyCapabilities';
import OnPremiseDeployment from '@/components/lexora/OnPremiseDeployment';
import WhyChooseLexora from '@/components/lexora/WhyChooseLexora';
import CTASection from '@/components/lexora/CTASection';

const Lexora = () => {
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
      <AIToolkit />
      <KeyCapabilities scrollToContact={scrollToContact} />
      <OnPremiseDeployment scrollToContact={scrollToContact} />
      <WhyChooseLexora scrollToContact={scrollToContact} />
      <CTASection scrollToContact={scrollToContact} />
    </PageLayout>
  );
};

export default Lexora;
