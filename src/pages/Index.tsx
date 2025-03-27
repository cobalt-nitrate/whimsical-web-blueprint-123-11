
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Research from '@/components/Research';
import Partners from '@/components/Partners';
import Tools from '@/components/Tools';
import CaseStudies from '@/components/CaseStudies';

const Index = () => {
  // Smooth scroll handling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href && href !== "#") {
          const target = document.querySelector(href);
          
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <PageLayout>
      <Hero />
      <Features />
      <Research />
      <Partners />
      <Tools />
      <CaseStudies />
    </PageLayout>
  );
};

export default Index;
