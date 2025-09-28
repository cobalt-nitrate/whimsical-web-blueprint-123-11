import React, { useRef, useEffect } from 'react';
import { Zap, TrendingUp, Shield } from 'lucide-react';
const WhyWeExistSection = () => {
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
  return <section ref={sectionRef} className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI that Works in the{' '}
              <span className="text-gradient bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Real World
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">Our advanced models are expertly designed to understand medical terminolog</p>
            
            <p className="text-teal-400 text-lg font-medium">
              We shorten the gap between lab breakthroughs and clinical adoption.
            </p>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400 mb-1">60%</div>
                <div className="text-xs text-gray-400">Faster Deployment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">99.7%</div>
                <div className="text-xs text-gray-400">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                <div className="text-xs text-gray-400">Monitoring</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="glass-card p-8 relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 h-full">
                  {Array.from({
                  length: 64
                }).map((_, i) => <div key={i} className="border border-teal-500/20" style={{
                  animationDelay: `${i * 50}ms`
                }} />)}
                </div>
              </div>

              {/* Central visualization */}
              <div className="relative z-10">
                {/* Lab to Clinic Flow */}
                <div className="flex items-center justify-between mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <Zap className="h-8 w-8 text-purple-400" />
                    </div>
                    <p className="text-sm text-gray-300">Research Lab</p>
                  </div>

                  {/* Arrow with pulse animation */}
                  <div className="flex-1 mx-4">
                    <div className="relative">
                      <div className="h-0.5 bg-gradient-to-r from-purple-500 to-teal-500 animate-pulse"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        <div className="w-0 h-0 border-l-4 border-l-teal-500 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <Shield className="h-8 w-8 text-teal-400" />
                    </div>
                    <p className="text-sm text-gray-300">Clinical Use</p>
                  </div>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-dark-700/50 rounded-lg text-center">
                    <div className="text-teal-400 font-semibold text-sm mb-1">Compliant Solution Framework</div>
                    <div className="text-xs text-gray-400">HIPAA, GDPR, CE</div>
                  </div>
                  <div className="p-4 bg-dark-700/50 rounded-lg text-center">
                    <div className="text-blue-400 font-semibold text-sm mb-1">On-Prem & Edge Deployments</div>
                    <div className="text-xs text-gray-400">Hospital Hardware</div>
                  </div>
                  <div className="p-4 bg-dark-700/50 rounded-lg text-center">
                    <div className="text-purple-400 font-semibold text-sm mb-1">Workflow Native</div>
                    <div className="text-xs text-gray-400">EHR Integration</div>
                  </div>
                  <div className="p-4 bg-dark-700/50 rounded-lg text-center">
                    <div className="text-green-400 font-semibold text-sm mb-1">Rapid Deploy</div>
                    <div className="text-xs text-gray-400">Weeks not Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyWeExistSection;