
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Bot, FileText, Headphones, Image, Search, Video, Zap } from 'lucide-react';

const Tools = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    }, {
      threshold: 0.1
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
  
  const toolsData = [
    {
      id: 1,
      title: "AI Agents",
      description: "Your Automated AI Workforce for complex business operations, lead generation, marketing, HR, Products teams and much more",
      icon: Bot
    },
    {
      id: 2,
      title: "Enterprise Search Engine",
      description: "Next Gen RAG powered knowledge management and retrieval system without hallucinations",
      icon: Search
    },
    {
      id: 3,
      title: "Synthetic Data Generation",
      description: "High Quality Synthetic Data to train ML Models without compromising sensitive real-world data",
      icon: Zap
    },
    {
      id: 4,
      title: "Customer Support Assistant",
      description: "Chatbot and Voice assistant that handles customer queries & resolves complaints all by itself",
      icon: Headphones
    },
    {
      id: 5,
      title: "Audio Analytics Business Intelligence",
      description: "Analyzes customer calls, meetings, and voice interactions to extract actionable insights",
      icon: Activity
    },
    {
      id: 6,
      title: "AI-Powered Document Intelligence",
      description: "Extracts key information from documents, PDFs, and contracts with NLP and Vision Models to provide meaningful insights",
      icon: FileText
    },
    {
      id: 7,
      title: "Video Interpretation & Analytics",
      description: "Complete suite for object detection, motion tracking, facial recognition, and behavioral analysis in real-time video streams",
      icon: Video
    },
    {
      id: 8,
      title: "AI Content Generation Suite",
      description: "Creates, enhances, and personalize auto captioned video and audio, voice-over effortlessly for marketing, media production, e-learning",
      icon: Image
    },
    {
      id: 9,
      title: "Vision AI for Quality Assurance",
      description: "Leverages computer vision to detect defects, anomalies, and inconsistencies in real-time during the manufacturing process",
      icon: Image
    }
  ];

  return (
    <section id="tools" ref={sectionRef} className="py-20 bg-dark-900 opacity-0">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            AI Toolkit
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enterprise-Grade AI Solutions & Frameworks
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Explore our suite of specialized AI tools designed for enterprise applications and specific industry use cases.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {toolsData.slice(0, 8).map((tool) => (
            <ToolCard 
              key={tool.id} 
              title={tool.title} 
              description={tool.description} 
              Icon={tool.icon} 
              delay={(tool.id) * 100} 
            />
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/ai-toolkit" className="px-8 py-3 rounded-full bg-dark-700 hover:bg-dark-600 text-white transition-all duration-300 hidden">
            Load More
          </Link>
        </div>
      </div>
    </section>
  );
};

interface ToolCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
  delay: number;
}

const ToolCard = ({ title, description, Icon, delay }: ToolCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        if (entry.target instanceof HTMLElement) {
          entry.target.style.animationDelay = `${delay}ms`;
        }
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
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
      className="glass-card glass-card-hover rounded-lg p-6 opacity-0 flex flex-col h-full overflow-hidden relative group"
    >
      <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex items-center justify-center mb-4 w-12 h-12 rounded-full bg-dark-700 group-hover:bg-teal-500/20 transition-colors duration-300">
        <Icon className="w-6 h-6 text-teal-500" />
      </div>
      
      <h3 className="text-white font-medium text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default Tools;
