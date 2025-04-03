import React from 'react';
import { ArrowRight, Brain, BarChart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
interface HeroSectionProps {
  scrollToContact: () => void;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  scrollToContact
}) => {
  return <section className="pt-32 pb-16 md:pb-24 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {['AI Language Models', 'Context-Aware AI', 'Enterprise NLP', 'Knowledge Retrieval', 'AI Agents'].map(tag => <span key={tag} className="px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium">
                  {tag}
                </span>)}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Domain-Specific LLM for <span className="text-gradient">Enterprises</span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8">
              Lexora is your enterprise-ready AI platform, offering industry-leading natural language processing with a 10M token context space, structured reasoning, and a proprietary lightweight LLM.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button onClick={scrollToContact} className="px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300">
                Get Started with Lexora
              </button>
              
              <Link to="/research" className="px-6 py-3 rounded-full border border-white/10 hover:border-white/30 text-white hover:bg-dark-800 transition-all duration-300 hidden">
                Learn More
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="relative z-10 glass-card p-6 rounded-xl">
              <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-700 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-20 h-20 text-teal-500/70" />
              </div>
              <div className="space-y-4">
                <div className="h-2 bg-dark-700 rounded-full w-3/4"></div>
                <div className="h-2 bg-dark-700 rounded-full w-full"></div>
                <div className="h-2 bg-dark-700 rounded-full w-1/2"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-lg border border-teal-500/20 teal-glow">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-500/10 rounded-lg">
                  <Zap className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <div className="text-sm font-medium">Token Context</div>
                  <div className="text-lg font-bold text-teal-500">10M</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 glass-card p-4 rounded-lg border border-teal-500/20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-500/10 rounded-lg">
                  <BarChart className="h-5 w-5 text-teal-500" />
                </div>
                <div>
                  <div className="text-sm font-medium">Parameter Count</div>
                  <div className="text-lg font-bold text-teal-500">2B</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;