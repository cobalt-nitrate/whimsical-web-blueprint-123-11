import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ExternalLink, Tags } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const PortfolioShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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
  const portfolioItems = [{
    id: 1,
    name: "In Radiology",
    tags: "USA",
    outcome: "Enterprise Imaging Platform for Radiology Practioners & Scientists",
    details: ["Diagnose, monitor & report with AI Assitance", "Train, Validate & Deploy custom radiology AI models","AI guided data annotation & labelling automation"],
    link: "/case-study-msk"
  }, {
    id: 2,
    name: "In Surgeries",
    tags: "India",
    outcome: "Surgical vision intelligence stack for Surgeons & HODs",
    details: ["Real time AI assistance in Surgical Decisions such as dissections zones & safety judgements ", "Monitor Safety & Protocols for Surgeries via Post-Op Video Analysis", "Automate Surgical Video Labelling for Anatomy & Safe Zones with AI"],
    link: "#"
  }, {
    id: 3,
    name: "In Prosthetics",
    tags: "USA",
    outcome: "Gen AI suite Prosthetic 3D models generation & Automated Quality Control",
    details: ["Automate 3D prosthetics model generation with diffusion Models", "Build Robust QC pipelines with Computer Vision and Anomaly Detection", "Automate 3D data annotation & labelling with AI"],
    link: "#"
  }, {
    id: 4,
    name: "In Diagnostics",
    tags: "India",
    outcome: "Library of Diagnostics AI Models ready to embed with Medical Devices",
    details: ["Custom Diagnostics models for integration with Medical Devices", "Train, Fine-tune or validate models on your private datasets", "Access open-source and exclusive medical datasets curated by us"],
    link: "#"
  }];
  return <section ref={sectionRef} className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">Deeptech Research</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Portfolio <span className="text-gradient bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Showcase</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Co-innovating the future of Medical AI with leading healthcare institutions and med-tech companies across the Globe.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {portfolioItems.map((item, index) => <div key={item.id} className="glass-card glass-card-hover p-6 rounded-lg transition-all duration-300 cursor-pointer relative overflow-hidden" onMouseEnter={() => setHoveredCard(item.id)} onMouseLeave={() => setHoveredCard(null)} style={{
          animationDelay: `${index * 200}ms`
        }}>
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 transition-opacity duration-300 ${hoveredCard === item.id ? 'opacity-100' : 'opacity-0'}`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                      <span className="px-2 py-1 text-xs bg-teal-500/20 text-teal-400 rounded-full">
                        {item.tags}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{item.outcome}</p>
                  </div>
                  
                  <div className={`transition-transform duration-300 ${hoveredCard === item.id ? 'transform rotate-45' : ''}`}>
                    <ArrowRight className="h-5 w-5 text-teal-400" />
                  </div>
                </div>

                {/* Hover Details */}
                <div className={`transition-all duration-300 overflow-hidden ${hoveredCard === item.id ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-4 border-t border-gray-700/50">
                    {item.details.map((detail, i) => <div key={i} className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                        <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
                        {detail}
                      </div>)}
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        {/* See Full Case Studies CTA */}
        <div className="text-center">
          <Link to="/case-studies">
            <Button variant="outline" className="px-6 py-3 rounded-full border-teal-500/50 text-teal-400 hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300 hover:scale-105">
              <ExternalLink className="mr-2 h-4 w-4" />
              See Full Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
export default PortfolioShowcase;