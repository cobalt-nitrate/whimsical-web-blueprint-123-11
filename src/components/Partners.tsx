
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
    industry: "Healthcare",
    tech: ["Computer Vision", "Gen AI"],
    title: "AI-Powered Medical Imaging",
    description: "Advanced medical image analysis using state-of-the-art computer vision models."
  }, {
    industry: "Legal",
    tech: ["NLP", "Gen AI"],
    title: "Automated Legal Analysis",
    description: "Intelligent document processing and analysis for legal professionals."
  }, {
    industry: "Education",
    tech: ["Multimodal AI", "NLP"],
    title: "Personalized Learning Platform",
    description: "Adaptive learning systems that tailor educational content to individual needs."
  }, {
    industry: "Finance",
    tech: ["Predictive Analytics", "NLP"],
    title: "Risk Assessment Framework",
    description: "Advanced financial risk modeling and prediction systems."
  }, {
    industry: "Sustainability",
    tech: ["Computer Vision", "IoT"],
    title: "Environmental Monitoring",
    description: "Real-time environmental data analysis and predictive modeling."
  }, {
    industry: "Manufacturing",
    tech: ["Computer Vision", "Edge AI"],
    title: "Quality Control Automation",
    description: "Automated visual inspection systems for manufacturing processes."
  }];
  
  return (
    <section id="partners" ref={sectionRef} className="py-20 bg-dark-800 opacity-0">
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

        <div className="mb-12">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <ProjectCard industry={project.industry} tech={project.tech} title={project.title} description={project.description} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static left-0 right-0 translate-y-0 bg-dark-700 hover:bg-dark-600 border-teal-500/20 text-white" />
              <CarouselNext className="relative static left-0 right-0 translate-y-0 bg-dark-700 hover:bg-dark-600 border-teal-500/20 text-white" />
            </div>
          </Carousel>
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

const ProjectCard = ({
  industry,
  tech,
  title,
  description
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
      <div className="flex flex-wrap gap-2 mb-4 min-h-2">
        {tech.map(t => (
          <div key={t} className="inline-flex px-3 py-1 bg-dark-700 text-teal-500 rounded-full text-xs whitespace-nowrap">
            {t}
          </div>
        ))}
        <div className="inline-flex px-3 py-1 bg-dark-700 text-teal-500 rounded-full text-xs whitespace-nowrap">
          {industry}
        </div>
      </div>

      <div className="aspect-video bg-dark-700 rounded-lg mb-4 w-full"></div>
      
      <h3 className="text-xl font-semibold mb-3 text-white h-14">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
    </div>
  );
};

export default Partners;
