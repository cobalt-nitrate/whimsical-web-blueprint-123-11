
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Partners = () => {
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
      id="partners" 
      ref={sectionRef}
      className="py-20 bg-dark-800 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            Industrial Projects Showcase
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforming Industries with <span className="text-gradient">AI Innovation</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Explore our pioneering projects across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ProjectCard 
            industry="Healthcare"
            tech={["Computer Vision", "Gen AI"]}
            title="AI-Powered Medical Imaging"
            description="Advanced medical image analysis using state-of-the-art computer vision models."
          />
          
          <ProjectCard 
            industry="Legal"
            tech={["NLP", "Gen AI"]}
            title="Automated Legal Analysis"
            description="Intelligent document processing and analysis for legal professionals."
          />
        </div>
        
        <div className="text-center">
          <button className="px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  industry: string;
  tech: string[];
  title: string;
  description: string;
}

const ProjectCard = ({ industry, tech, title, description }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="glass-card glass-card-hover p-6 rounded-lg opacity-0"
    >
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 bg-dark-700 text-teal-500 rounded-full text-xs">
          {industry}
        </span>
        {tech.map((t) => (
          <span key={t} className="px-3 py-1 bg-dark-700 text-teal-500 rounded-full text-xs">
            {t}
          </span>
        ))}
      </div>

      <div className="aspect-video bg-dark-700 rounded-lg mb-4"></div>
      
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <a 
        href="#" 
        className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors duration-300 text-sm font-medium group"
      >
        View Case Study
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default Partners;
