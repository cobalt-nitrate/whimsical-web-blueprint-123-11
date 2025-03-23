
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Features = () => {
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
      id="features" 
      ref={sectionRef}
      className="py-20 bg-dark-800 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            Cutting-Edge AI Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Deploying Multimodal Intelligence On-Premise - Your Data Stays Yours
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            title="State-Of-The-Art Foundation Models"
            description="Deploy our advanced models on your infrastructure with full control over data privacy and compliance requirements."
            delay="100"
          />
          
          <FeatureCard
            title="Production-Grade Training & Deployment"
            description="Enterprise-grade infrastructure for training and deploying large language models with reliability in mind."
            delay="200"
          />
          
          <FeatureCard
            title="Semantic Retrieval-Based Prediction"
            description="Advanced semantic search capabilities integrated with your knowledge base for precision and accuracy."
            delay="300" 
          />
          
          <FeatureCard
            title="Analog/Digital Intelligence & Fine-Tuning"
            description="Specialized fine-tuning and customization options to adapt models to your specific domain and use cases."
            delay="400"
          />
        </div>
      </div>

      <div className="relative mt-24 mb-12">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/5"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-dark-800 px-4 text-sm text-gray-400">Explore More</span>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  delay: string;
}

const FeatureCard = ({ title, description, delay }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          if (entry.target instanceof HTMLElement) {
            entry.target.style.animationDelay = `${delay}ms`;
          }
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
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="glass-card glass-card-hover p-6 rounded-lg opacity-0"
    >
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <a 
        href="#" 
        className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors duration-300 text-sm font-medium group"
      >
        Learn More 
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default Features;
