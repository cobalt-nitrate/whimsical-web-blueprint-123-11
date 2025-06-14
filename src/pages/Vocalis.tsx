
import React from 'react';
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/vocalis/HeroSection';
import CoreCapabilities from '@/components/vocalis/CoreCapabilities';
import TechnicalExcellence from '@/components/vocalis/TechnicalExcellence';
import VoiceFoundationsSection from '@/components/vocalis/VoiceFoundationsSection';
import APIPlaygroundSection from '@/components/vocalis/APIPlaygroundSection';
import IndustryApplications from '@/components/vocalis/IndustryApplications';
import WhyChooseVocalis from '@/components/vocalis/WhyChooseVocalis';
import DeveloperResourcesSection from '@/components/vocalis/DeveloperResourcesSection';
import CTASection from '@/components/vocalis/CTASection';

const Vocalis = () => {
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
      <CoreCapabilities />
      <TechnicalExcellence />
      <VoiceFoundationsSection />
      <APIPlaygroundSection />
      <IndustryApplications scrollToContact={scrollToContact} />
      <WhyChooseVocalis />
      <DeveloperResourcesSection />
      <CTASection scrollToContact={scrollToContact} />
    </PageLayout>
  );
};

export default Vocalis;
