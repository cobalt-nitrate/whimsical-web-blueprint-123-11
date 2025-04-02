
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Partners = () => {
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
  
  const projects = [{
    tech: ["Predictive Model"],
    industry: "Insurance & Maritime",
    title: "Predicting Fuel Consumption for Maritime Parametric Insurance",
    description: "Domain Expertise of Satva Trust in Marine Space coming together with our technical capabilities, Noavforge.ai implemented custom model for predicting fuel consumption of ships",
    link: "/case-study-satva",
    image:"/Marine Logistics Case Study_1x.webp",
  }, {
    title: "AI-Powered Medical Imaging Analysis",
    description: "How NovaForge helped a MSK Cancer Center integrate an advanced DICOM Viewer with AI Assisted Solutions for Automated Image Segmentation and annotation",
    tech: ["Computer Vision", "Segmentation"],
    industry: "Medical",
    link: "/case-study-msk",
    image:"/MRI Case Study_1x.webp",
  }, {
    title: "Legal AI Agent for Research Workflows",
    description: "In Partnershiop with LiveLaw, the largest Indian Legal Media House, NovaForge.ai is developing an AI powered legal search engine for the Indian Lawyers",
    tech: ["Agent", "RAG"],
    industry: "Legal",
    link: "/case-study-livelaw",
    image:"/Legal Case Study_1x.webp",
  }];
  
  return (
    <section id="partners" ref={sectionRef} className="py-20 bg-dark-800 opacity-0">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            Industrial Projects Showcase
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforming Industries with <span className="text-gradient">AI Innovation</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">Our success story in multiple industries was possible through consistent support from our Partners, who brought their domain expertise at our doorstep. </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="w-full">
                  <ProjectCard 
                    industry={project.industry} 
                    tech={project.tech} 
                    title={project.title} 
                    description={project.description} 
                    link={project.link} 
                    image={project.image} 
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static left-0 right-0 translate-y-0 bg-dark-700 hover:bg-dark-600 border-teal-500/20 text-white" />
              <CarouselNext className="relative static left-0 right-0 translate-y-0 bg-dark-700 hover:bg-dark-600 border-teal-500/20 text-white" />
            </div>
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              industry={project.industry} 
              tech={project.tech} 
              title={project.title} 
              description={project.description} 
              link={project.link} 
              image={project.image} 
            />
          ))}
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
  link: string;
  image: string;
}

const ProjectCard = ({
  industry,
  tech,
  title,
  description,
  link,
  image,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
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
  }, []);
  
  return (
    <div ref={cardRef} className="glass-card glass-card-hover p-6 rounded-lg opacity-0 h-full flex flex-col">
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map(t => (
          <div key={t} className="inline-flex px-3 py-1 bg-dark-700 text-teal-500 rounded-full text-xs whitespace-nowrap">
            {t}
          </div>
        ))}
        <div className="inline-flex px-3 py-1 bg-dark-700 text-teal-500 rounded-full text-xs whitespace-nowrap">
          {industry}
        </div>
      </div>
      
      {/* Image Section with proper error handling and fallback */}
      <div className="mb-4 w-full aspect-video rounded-lg overflow-hidden bg-dark-700">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'image';
            e.currentTarget.classList.add('p-4');
          }} 
        />
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-white line-clamp-2">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      <a href={link} className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors font-medium mt-2">
        Read More <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
};

export default Partners;
