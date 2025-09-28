import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
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
    name: "MSKCC × Authera",
    country: "USA",
    outcome: "AI-native PACS with lesion detection and urgent-case triage.",
    details: ["Reduced diagnostic time by 40%", "99.2% accuracy in lesion detection"],
    link: "/case-study-msk"
  }, {
    id: 2,
    name: "Smileshape",
    country: "USA",
    outcome: "Diffusion-based 3D denture design with automated QA.",
    details: ["50% faster design process", "Automated quality assurance pipeline"],
    link: "#"
  }, {
    id: 3,
    name: "Ashoka × Manipal",
    country: "India",
    outcome: "AI-driven second opinions powering localized datasets.",
    details: ["Localized medical AI for Indian demographics", "24/7 diagnostic support system"],
    link: "#"
  }, {
    id: 4,
    name: "Appasamy Associates",
    country: "India",
    outcome: "Foundation models embedded in ophthalmology devices.",
    details: ["Real-time retinal analysis", "Edge deployment on medical devices"],
    link: "#"
  }];
  return <section ref={sectionRef} className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">AI Research</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Portfolio <span className="text-gradient bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Showcase</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building credibility with recognizable deployments across healthcare institutions and med-tech companies.
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
                        {item.country}
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