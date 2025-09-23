import React, { useRef, useEffect } from 'react';
import { Activity, Brain, Database, Microscope, ChevronRight } from 'lucide-react';
import FeatureCard from '@/components/ui/feature-card';

const PillarsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    }, {
      threshold: 0.2
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const pillars = [
    {
      icon: <Activity className="h-8 w-8 text-teal-400" />,
      title: "AI-Native Clinical Workflows",
      description: "Diagnostic co-pilots embedded in PACS, EHR, imaging systems."
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-400" />,
      title: "Generative & Vision AI",
      description: "Custom VLLMs and diffusion models for scan QA, segmentation, 3D generation."
    },
    {
      icon: <Database className="h-8 w-8 text-purple-400" />,
      title: "Healthcare Data Infrastructure",
      description: "Localized data networks, PGHD platforms, research-grade pipelines."
    },
    {
      icon: <Microscope className="h-8 w-8 text-green-400" />,
      title: "Research & Translation Labs",
      description: "Co-develop with hospitals to move research into production in months."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            Core Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Four <span className="text-gradient bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Pillars</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive AI solutions designed to accelerate healthcare innovation and clinical adoption.
          </p>
        </div>

        {/* Desktop: Horizontal Cards */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="glass-card glass-card-hover p-6 rounded-lg h-full flex flex-col group transition-all duration-300"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-teal-400 transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {pillar.description}
              </p>
              
              {/* Hover arrow */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ChevronRight className="h-4 w-4 text-teal-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Stacked Cards */}
        <div className="md:hidden space-y-4">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <FeatureCard
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
              />
            </div>
          ))}
        </div>

        {/* Visual separator */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;