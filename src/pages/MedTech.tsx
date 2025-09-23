import React from 'react';
import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/medtech/HeroSection';
import WhyWeExistSection from '@/components/medtech/WhyWeExistSection';
import PortfolioShowcase from '@/components/medtech/PortfolioShowcase';
import PillarsSection from '@/components/medtech/PillarsSection';
import HowWeBuildSection from '@/components/medtech/HowWeBuildSection';
import InfrastructureSection from '@/components/medtech/InfrastructureSection';
import WhoWeServeSection from '@/components/medtech/WhoWeServeSection';
import CTASection from '@/components/medtech/CTASection';

const MedTech = () => {
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
      <WhyWeExistSection />
      <PortfolioShowcase />
      <PillarsSection />
      <HowWeBuildSection />
      <InfrastructureSection />
      <WhoWeServeSection />
      <CTASection scrollToContact={scrollToContact} />
    </PageLayout>
  );
};

export default MedTech;