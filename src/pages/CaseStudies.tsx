import React, { useEffect, useRef, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { ArrowRight, Search, Brain, LineChart, HeartPulse, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
const CaseStudies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const caseStudies = [{
    id: "msk-cancer-center",
    title: "Medical Imaging: Enhancing PACS Viewer Functionality for MSK Cancer Center",
    category: "Healthcare",
    industry: "Medical Imaging",
    description: "Memorial Sloan Kettering Cancer Center transformed their radiology workflow with NovaForge AI integration.",
    icon: HeartPulse,
    featured: true,
    link: "/case-study-msk"
  }, {
    id: "global-bank-fraud",
    title: "AI-Powered Fraud Detection at Global Bank",
    category: "Finance",
    industry: "Banking",
    description: "How NovaForge helped reduce fraudulent transactions by 65% for a leading financial institution.",
    icon: LineChart,
    featured: false,
    link: "#"
  }, {
    id: "retail-personalization",
    title: "Personalizing Customer Experience with AI",
    category: "Retail",
    industry: "E-Commerce",
    description: "How a Fortune 500 retailer increased conversion rates by 27% with personalized recommendations.",
    icon: Building,
    featured: false,
    link: "#"
  }, {
    id: "autonomous-manufacturing",
    title: "AI Quality Control in Manufacturing",
    category: "Manufacturing",
    industry: "Automotive",
    description: "Implementing computer vision systems for real-time quality control in automotive production.",
    icon: Brain,
    featured: false,
    link: "#"
  }];
  const filteredCaseStudies = searchQuery ? caseStudies.filter(cs => cs.title.toLowerCase().includes(searchQuery.toLowerCase()) || cs.category.toLowerCase().includes(searchQuery.toLowerCase()) || cs.industry.toLowerCase().includes(searchQuery.toLowerCase()) || cs.description.toLowerCase().includes(searchQuery.toLowerCase())) : caseStudies;
  return <PageLayout>
      <div className="pt-28 pb-20">
        <section className="py-16 bg-dark-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Discover how Novaforge AI has helped leading organizations across industries transform their operations and create new opportunities.
              </p>
              
              <div className="relative max-w-md mx-auto mt-8">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input type="text" className="block w-full pl-10 pr-3 py-2 border border-dark-600 rounded-md leading-5 bg-dark-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition duration-150 ease-in-out sm:text-sm" placeholder="Search by industry or technology..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              </div>
            </div>

            {/* Featured Case Study */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Featured Case Study</h2>
              
              <div className="glass-card p-6 md:p-8 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-500 text-xs font-medium">Featured</span>
                      <span className="px-3 py-1 rounded-full bg-dark-700 text-gray-300 text-xs">Healthcare</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Enhancing PACS Viewer for MSK Cancer Center</h3>
                    <p className="text-gray-400 mb-6">
                      Memorial Sloan Kettering Cancer Center, one of the world's premier cancer treatment facilities, 
                      transformed their radiological workflow through NovaForge's integrated AI capabilities, 
                      advanced visualization tools, and intuitive user experience.
                    </p>
                    
                    
                    
                    <Link to="/case-study-msk" className="inline-flex items-center px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300">
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                  
                  <div className="hidden md:block aspect-video bg-dark-700 rounded-lg">
                    <div className="w-full h-full flex items-center justify-center">
                      <HeartPulse className="w-16 h-16 text-teal-500/50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* All Case Studies */}
            <div>
              <h2 className="text-2xl font-bold mb-6">All Case Studies</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredCaseStudies.filter(cs => !cs.featured).map(caseStudy => {
                const CaseIcon = caseStudy.icon;
                return <div key={caseStudy.id} className="glass-card p-6 rounded-xl border border-white/5 hover:border-teal-500/20 transition-colors duration-300">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center">
                          <CaseIcon className="w-5 h-5 text-teal-500" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-dark-700 text-gray-300 text-xs">{caseStudy.category}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                      <p className="text-gray-400 mb-6 text-sm">{caseStudy.description}</p>
                      
                      <Link to={caseStudy.link} className={`inline-flex items-center text-sm font-medium group ${caseStudy.id === "msk-cancer-center" ? "text-teal-500 hover:text-teal-400" : "text-gray-400"}`}>
                        {caseStudy.id === "msk-cancer-center" ? "Read Case Study" : "Coming Soon"}
                        {caseStudy.id === "msk-cancer-center" && <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />}
                      </Link>
                    </div>;
              })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>;
};
export default CaseStudies;