
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Research = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="research" 
      ref={sectionRef}
      className="py-20 bg-dark-900 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            Research Focus
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Our Next-Gen AI Research Verticals
          </h2>
        </div>

        <div className="bg-dark-800 rounded-xl p-8 glass-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gradient">Percepta</h3>
              <p className="text-gray-400">Building digital brains to run for days on edge devices without cloud computing.</p>
            </div>
            
            {/* Right top corner reserved for image */}
            <div className="hidden md:block">
              {/* Image placeholder */}
            </div>
          </div>
          
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-6">Core Capabilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <Capability title="Modeling" />
              <Capability title="Multi-Modal" />
              <Capability title="3D Reasoning" />
              <Capability title="Time-Series" />
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="#" 
              className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors duration-300 text-sm font-medium"
            >
              Explore Use Cases 
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Capability = ({ title }: { title: string }) => (
  <div className="bg-dark-700 p-4 rounded-lg text-center">
    <h4 className="font-medium text-white">{title}</h4>
  </div>
);

export default Research;
