
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Anchor, BarChart2, Clock, FileCheck, RefreshCcw, Shield, Zap } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
const CaseStudySatva = () => {
  // Refs for animation elements
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Set up intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe hero section
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    // Observe stat items
    statsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="pt-32 pb-20 bg-dark-900 relative overflow-hidden opacity-0"
      >
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-500/10 blur-[100px]" />
          <div className="absolute bottom-0 -left-20 w-96 h-96 rounded-full bg-teal-500/5 blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/df1e37af-fd75-456f-a0d1-f8aafa731046.png" 
                  alt="Satva Trust Logo" 
                  className="h-16 mb-6"
                />
                <span className="text-teal-500 text-sm font-medium">CASE STUDY</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 leading-tight">
                  Revolutionizing Maritime Parametric Insurance
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  How NovaForge's Analytics Solution Delivered Rapid Trigger Verification
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={scrollToContact} 
                  className="px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300 flex items-center"
                >
                  Get Similar Solution
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                
                <a 
                  href="#solution" 
                  className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 text-white transition-all duration-300"
                >
                  View Solution Details
                </a>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="glass-card p-8 rounded-xl relative">
                <div className="absolute -top-3 -right-3 px-4 py-1 bg-teal-500 text-black text-xs font-bold rounded-full">
                  MARITIME INDUSTRY
                </div>
                <h3 className="text-xl font-semibold mb-4">Key Results</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-teal-500 flex-shrink-0" />
                    <span>Enhanced accuracy of parametric trigger parameters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-teal-500 flex-shrink-0" />
                    <span>Accelerated payout verification process</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BarChart2 className="h-5 w-5 text-teal-500 flex-shrink-0" />
                    <span>Reduced data acquisition costs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <RefreshCcw className="h-5 w-5 text-teal-500 flex-shrink-0" />
                    <span>Expanded historical data analysis from 2 to 5+ years</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-dark-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Overview</h2>
            <p className="text-gray-300 mb-6">
              Satva Trust, operating in the maritime insurance sector, faced critical challenges in selecting optimal 
              trigger parameters for their parametric insurance products. With maritime operations subject to unpredictable 
              weather conditions and vessel-specific variables, they needed a solution that could accurately determine when 
              insurance payouts should be triggered.
            </p>
            <p className="text-gray-300">
              NovaForge Innovations developed an adaptive analytics framework that transformed Satva's ability to estimate 
              and verify parametric triggers, resulting in faster payouts and more reliable insurance products.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-dark-900 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-500/5 blur-[50px] -z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Challenge</h2>
            <div className="glass-card p-8 rounded-xl mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-teal-500/10 p-3 rounded-lg">
                  <Anchor className="h-6 w-6 text-teal-500" />
                </div>
                <div>
                  <blockquote className="text-lg italic text-gray-300 mb-4">
                    "Our parametric insurance model needed precise trigger parameters that balanced protection for shipping 
                    companies while maintaining financial viability for us. The amount of data required to make those 
                    determinations was overwhelming our existing systems."
                  </blockquote>
                  <cite className="text-sm text-gray-400">— Maritime Insurance Lead, Satva Trust</cite>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">
              Parametric insurance in the maritime industry offers pre-specified payouts based on trigger events rather than 
              requiring lengthy damage assessments. While this approach provides faster claim settlement, Satva Trust encountered 
              several significant challenges:
            </p>
            
            <div className="space-y-6 mb-6">
              <div className="bg-dark-800 p-6 rounded-lg border-l-4 border-teal-500">
                <h3 className="font-semibold mb-2">Trigger Parameter Variability</h3>
                <p className="text-gray-400">
                  The optimal range for trigger parameters (such as wind speed thresholds) showed substantial variations 
                  based on vessel specifics, regional conditions, and temporal factors.
                </p>
              </div>
              
              <div className="bg-dark-800 p-6 rounded-lg border-l-4 border-teal-500">
                <h3 className="font-semibold mb-2">Data Acquisition Complexity</h3>
                <p className="text-gray-400">
                  Obtaining reliable weather, sea state, and vessel data across multiple sources was costly and inefficient.
                </p>
              </div>
              
              <div className="bg-dark-800 p-6 rounded-lg border-l-4 border-teal-500">
                <h3 className="font-semibold mb-2">Processing Limitations</h3>
                <p className="text-gray-400">
                  Handling large volumes of historical and real-time maritime data required significant computational resources and 
                  specialized expertise.
                </p>
              </div>
              
              <div className="bg-dark-800 p-6 rounded-lg border-l-4 border-teal-500">
                <h3 className="font-semibold mb-2">Verification Accuracy</h3>
                <p className="text-gray-400">
                  Ensuring timely and accurate verification of trigger conditions was essential for maintaining trust in 
                  their insurance products.
                </p>
              </div>
              
              <div className="bg-dark-800 p-6 rounded-lg border-l-4 border-teal-500">
                <h3 className="font-semibold mb-2">Basis Risk</h3>
                <p className="text-gray-400">
                  There was a real possibility that significant damage could occur just below trigger thresholds, 
                  potentially undermining customer confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-dark-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Solution</h2>
            <p className="text-gray-300 mb-10">
              NovaForge Innovations implemented a comprehensive, cloud-based analytics solution with four key deliverables:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="glass-card p-6 rounded-lg">
                <div className="bg-teal-500/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <FileCheck className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">1. Streamlined Data Acquisition System</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Identified and verified data sources against rigorous requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Created pipeline for bulk acquisition with download and compression processing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Established continuous acquisition pipeline with fault tolerance mechanisms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Implemented quality assurance checks for data integrity</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6 rounded-lg">
                <div className="bg-teal-500/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <BarChart2 className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">2. Scalable Analytics Backend</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Developed state-managed data processing for acquired maritime data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Created online formation of analytics estimates for real-time decision support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Designed optimized data storage schema for efficient operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Implemented smart data management to reduce operational costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Built automatic periodic state backups for deployed assets</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6 rounded-lg">
                <div className="bg-teal-500/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Zap className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">3. Phased Scale-Up Capabilities</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Scaled pipelines to handle increasing volumes of historical data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Implemented progressive expansion from 2 years to 5+ years of historical data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Established quality assurance processes at each scaling phase</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6 rounded-lg">
                <div className="bg-teal-500/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Shield className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">4. Machine Learning for Predictive Fuel Estimation</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Integrated training pipeline onto cloud platform for foundational pretraining</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Created domain adaptation capabilities to match specific maritime contexts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Developed in-house evaluation and model benchmarking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span>Implemented continuous learning pipeline for ongoing improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-dark-900 relative">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-teal-500/5 blur-[50px] -z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">Results</h2>
            
            <div className="glass-card p-8 rounded-xl mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-teal-500/10 p-3 rounded-lg">
                  <BarChart2 className="h-6 w-6 text-teal-500" />
                </div>
                <div>
                  <blockquote className="text-lg italic text-gray-300 mb-4">
                    "NovaForge's analytics framework has revolutionized how we approach parametric insurance. We can now provide 
                    shipping companies with tailored coverage based on objective, verifiable data, resulting in faster payouts 
                    and greater customer satisfaction."
                  </blockquote>
                  <cite className="text-sm text-gray-400">— Senior Data Analyst, Satva Trust</cite>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8">
              The implementation of NovaForge's adaptive analytics solution delivered transformative results for 
              Satva Trust's parametric insurance operations:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Stats cards with animation refs */}
              <div 
                ref={(el) => (statsRefs.current[0] = el)} 
                className="bg-dark-800 p-6 rounded-lg opacity-0"
              >
                <h3 className="text-xl font-semibold mb-4">Operational Efficiency</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span><strong>Reduced Data Acquisition Costs</strong>: Cloud-integrated bulk and continuous data sourcing mechanisms substantially decreased data collection expenses.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span><strong>Streamlined Processing</strong>: The state-managed data processing system handled complex maritime data efficiently, reducing processing time by significant margins.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span><strong>Enhanced Scalability</strong>: Progressive scaling capabilities allowed Satva to expand historical data analysis from 2 years to 5+ years without system overhaul.</span>
                  </li>
                </ul>
              </div>
              
              <div 
                ref={(el) => (statsRefs.current[1] = el)} 
                className="bg-dark-800 p-6 rounded-lg opacity-0"
                style={{ animationDelay: '150ms' }}
              >
                <h3 className="text-xl font-semibold mb-4">Enhanced Insurance Products</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span><strong>More Accurate Trigger Parameters</strong>: The solution provided vessel-specific and regionally optimized trigger parameters, improving the precision of insurance offerings.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span><strong>Faster Payout Verification</strong>: Automated verification of trigger conditions enabled rapid processing and payment of claims.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span><strong>Reduced Basis Risk</strong>: More nuanced trigger parameters minimized the risk of significant damage occurring just below payout thresholds.</span>
                  </li>
                </ul>
              </div>
              
              <div 
                ref={(el) => (statsRefs.current[2] = el)} 
                className="bg-dark-800 p-6 rounded-lg opacity-0"
                style={{ animationDelay: '300ms' }}
              >
                <h3 className="text-xl font-semibold mb-4">Competitive Advantage</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span><strong>Data-Driven Decision Making</strong>: The ability to analyze extensive historical maritime data provided Satva with insights that competitors lacked.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span><strong>Predictive Capabilities</strong>: Machine learning-based fuel estimation allowed for more accurate risk assessment and premium calculations.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span><strong>Customer Confidence</strong>: Transparent, data-backed trigger parameters increased trust in Satva's parametric insurance products.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Outlook Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Future Outlook</h2>
            
            <p className="text-gray-300 mb-6">
              With NovaForge's solution in place, Satva Trust is well-positioned to:
            </p>
            
            <div className="glass-card p-8 rounded-xl mb-10">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-teal-500/10">
                    <ArrowRight className="h-4 w-4 text-teal-500" />
                  </div>
                  <span>Expand their parametric insurance offerings to cover additional maritime risks</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-teal-500/10">
                    <ArrowRight className="h-4 w-4 text-teal-500" />
                  </div>
                  <span>Implement more sophisticated trigger mechanisms based on multiple parameters</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-teal-500/10">
                    <ArrowRight className="h-4 w-4 text-teal-500" />
                  </div>
                  <span>Utilize predictive analytics to anticipate maritime weather patterns and proactively alert clients</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-teal-500/10">
                    <ArrowRight className="h-4 w-4 text-teal-500" />
                  </div>
                  <span>Develop new insurance products for specific vessel types and shipping routes</span>
                </li>
              </ul>
            </div>
            
            <p className="text-gray-300">
              The continuous learning capabilities built into the system ensure that Satva's parametric insurance models will become 
              increasingly accurate over time, further cementing their position as an industry leader in maritime risk management.
            </p>
          </div>
        </div>
      </section>

{/* More Case Studies Section */}
<section className="py-16 bg-dark-900">
  <div className="container mx-auto px-6">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">More Case Studies</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* First case study */}
        <div className="glass-card p-6 rounded-lg hover:border-teal-500/40 border border-transparent transition-colors duration-300">
          <div className="text-xs text-gray-400 mb-2">Medical</div>
          <h3 className="text-lg font-semibold mb-2 text-white">AI-Powered Medical Imaging Analysis</h3>
          <p className="text-gray-400 text-sm mb-4">How NovaForge helped a MSK Cancer Center integrate an advanced DICOM Viewer with AI Assisted Solutions</p>
          <Link to="/case-study-msk" className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors duration-300 text-sm font-medium group">
            Read Case Study
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
        
        {/* Second case study */}
        <div className="glass-card p-6 rounded-lg hover:border-teal-500/40 border border-transparent transition-colors duration-300">
          <div className="text-xs text-gray-400 mb-2">Legal</div>
          <h3 className="text-lg font-semibold mb-2 text-white">Improved Search Accuracy and Efficiency with AI for Live Law</h3>
          <p className="text-gray-400 text-sm mb-4">Intelligent document analysis for legal professionals</p>
          <Link to="/case-study-livelaw" className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors duration-300 text-sm font-medium group">
            Read Case Study
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Transform Your Industry with Custom Analytics?
            </h2>
            <p className="text-gray-300 mb-8">
              Discover how our innovative AI solutions can address your unique industry challenges.
            </p>
            <button 
              onClick={scrollToContact} 
              className="px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300"
            >
              Contact Our Team Today
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CaseStudySatva;
