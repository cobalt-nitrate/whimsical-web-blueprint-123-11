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
      title: "Technical & Domain Expertise",
      description: "Our team combines advanced biomedical engineering expertise with deep applied AI experience"
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-400" />,
      title: "Generative & Vision AI",
      description: "Vast library of segmentation, detection, generative & reasoning models for medical applications"
    },
    {
      icon: <Database className="h-8 w-8 text-purple-400" />,
      title: "Research Ready Data",
      description: "On-Demand cleaned, annotated & structured multimodal medical datasets for AI model training."
    },
    {
      icon: <Microscope className="h-8 w-8 text-green-400" />,
      title: "Optimized Cost & Time",
      description: "State of the Art serving frameworks & Hardware level optimizations to reduce cloud costs and latency."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            Our Strengths
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Accelerate your success <span className="text-gradient bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">With Novaforge.ai</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our core pillars that empower healthcare organizations to innovate and excel in the AI-driven future.
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

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            From model to medicine, we are your partner in turning healthcare AI into measurable impact
          </p>
          <button 
            onClick={() => {
              const contactElement = document.getElementById('contact');
              if (contactElement) {
                contactElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="glass-card glass-card-hover px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            Schedule a Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;