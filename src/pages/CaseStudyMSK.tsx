import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Check, ArrowRight, Award, BarChart3, Clock, Brain, HeartPulse, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
const CaseStudyMSK = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <PageLayout>
      <div className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="bg-dark-900 py-16 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-500/10 blur-[100px]" />
            <div className="absolute top-1/3 -left-40 w-96 h-50 rounded-full bg-teal-500/5 blur-[100px]" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
                Healthcare Case Study
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl">
              Medical Imaging: Enhancing PACS Viewer Functionality for MSK Cancer Center
              </h1>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-8">
                <span>Healthcare</span>
                <span>•</span>
                <span>Medical Imaging</span>
                <span>•</span>
                <span>AI Integration</span>
              </div>
            </div>
            
            
          </div>
        </section>

        {/* Overview Section with MSK Logo */}
        <section className="py-1 bg-dark-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-start gap-12 mb-8">
                {/* MSK Logo Column */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                  <div className="bg-[#00438f] p-4 rounded-lg w-48 h-48 flex items-center justify-center">
                    <img src="/lovable-uploads/34d6a729-eba9-4164-9919-6d2762721bf5.png" alt="Memorial Sloan Kettering Cancer Center Logo" className="w-full object-fill" />
                  </div>
                </div>
                
                {/* Overview Content Column */}
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Overview</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Memorial Sloan Kettering (MSK) Cancer Center, one of the world's premier cancer treatment facilities, 
                    faced significant challenges with their legacy PACS (Picture Archiving and Communication Systems) platform. 
                    Their existing solution lacked modern AI capabilities, creating inefficiencies in image analysis, 
                    diagnosis, and educational dataset creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section - Reorganized to 2 rows with multiple columns */}
        <section className="py-16 bg-dark-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">The Challenge</h2>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                MSK Cancer Center was struggling with several limitations in their outdated imaging system:
              </p>
              
              <div className="mb-8">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  <div className="glass-card p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">Limited AI Integration</h3>
                    <p className="text-gray-400">
                      Their previous PACS system (GE PACS) had no native AI capabilities, making it impossible 
                      to train custom algorithms or deploy automated analysis tools.
                    </p>
                  </div>
                  
                  <div className="glass-card p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">Inefficient Image Labeling</h3>
                    <p className="text-gray-400">
                      Radiologists needed to manually label thousands of images for creating training datasets, 
                      a tedious process without specialized tools.
                    </p>
                  </div>
                  
                  <div className="glass-card p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">Workflow Bottlenecks</h3>
                    <p className="text-gray-400">
                      Clinicians reported "too many options" with poor organization, making it difficult to quickly 
                      access needed functions or compare images across time periods.
                    </p>
                  </div>
                </div>
                
                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-card p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">Lack of Customization</h3>
                    <p className="text-gray-400">
                      The system couldn't be tailored to individual radiologist workflows or preferences, 
                      requiring extra clicks and time-consuming navigation.
                    </p>
                  </div>
                  
                  <div className="glass-card p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">Poor Cross-Study Comparison</h3>
                    <p className="text-gray-400">
                      Physicians struggled to effectively compare patient images across different time periods, 
                      especially for tracking treatment progress.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-lg border-l-4 border-teal-500">
                <p className="italic text-gray-300">
                  "We were dealing with too many options and confusing interfaces. Finding basic functions like 
                  window settings adjustment was unnecessarily difficult, and organizing studies by relevant 
                  criteria was nearly impossible. We needed something cleaner, clearer, and more intuitive."
                </p>
                <p className="text-right mt-4 text-teal-500 font-medium">— Dr. Giovanna Caxeiro, Radiologist at MSK</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-1 bg-dark-800">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">The Solution</h2>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Authera implemented NovaForge, a next-generation PACS viewer with integrated AI capabilities. 
                The solution was designed specifically to address MSK's challenges through:
              </p>
              
              {/* AI-Powered Image Analysis */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-semibold">AI-Powered Image Analysis & Training Framework</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  NovaForge was built with a revolutionary approach to AI integration:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Custom AI Model Development:</span>
                      <span className="text-gray-400"> Radiologists could now create their own AI models directly from the PACS interface by clicking a "make new classification AI model" button or using voice commands.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Intuitive Labeling Tools:</span>
                      <span className="text-gray-400"> The system included a comprehensive set of image labeling capabilities including polygon creation, clustering, and class assignment.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Cloud-Based AI Training:</span>
                      <span className="text-gray-400"> Labeled images could be sent to a separate cloud environment for algorithm training, then deployed back to the PACS for immediate use.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Continuous Learning:</span>
                      <span className="text-gray-400"> Deployed models improved over time through radiologist feedback, creating a virtuous cycle of enhancement.</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Advanced Visualization */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center">
                    <LineChart className="w-6 h-6 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Advanced Visualization & Navigation</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Multiplanar Reconstruction:</span>
                      <span className="text-gray-400"> Integrated tools for resampling images in different planes with customizable slice thickness and field of view options.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Measurement Tools:</span>
                      <span className="text-gray-400"> Comprehensive suite including bidirectional measurement, circle tools for signal intensity analysis, and arrow annotations.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Optimized Image Display:</span>
                      <span className="text-gray-400"> Window/level adjustment via intuitive mouse controls, contrast settings, and image rotation/flipping capabilities.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Multi-Layout Views:</span>
                      <span className="text-gray-400"> Customizable screen arrangements for comparing images across time periods or modalities.</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Streamlined User Experience */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Streamlined User Experience</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Natural Language Interface:</span>
                      <span className="text-gray-400"> Voice command integration allowing radiologists to control the system hands-free or request specific patient studies.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Customizable Keyboard Shortcuts:</span>
                      <span className="text-gray-400"> Users could personalize keyboard commands to access frequently used functions instantly.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Persistent User Preferences:</span>
                      <span className="text-gray-400"> The system remembered each user's preferred settings for text size, layout, and tool configuration.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Web-Based Architecture:</span>
                      <span className="text-gray-400"> Built on a Vendor Neutral Archive (VNA) for consistent performance across hospital networks and remote access.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section - Without individual efficiency stats */}
        <section className="py-16 bg-dark-900">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Results</h2>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                After implementing NovaForge, MSK Cancer Center experienced significant improvements across multiple performance metrics:
              </p>
              
              
              
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Brain className="h-5 w-5 text-teal-500 mr-2" />
                  Enhanced Diagnostic Capabilities
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-300">
                      Successfully deployed 12 custom AI models for automated lesion measurement, structure highlighting, and preliminary classifications
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-300">
                      Improved detection rates for subtle abnormalities by 18% through AI-assisted screening
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-300">
                      Reduced inter-observer variability by 22% through standardized measurement tools
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Award className="h-5 w-5 text-teal-500 mr-2" />
                  Improved Collaboration
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-300">
                      Streamlined consultation process between radiologists and clinical teams
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-300">
                      Enhanced teaching capabilities through easily shareable annotations and findings
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-300">
                      Better documentation of imaging findings for tumor boards and research
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6 rounded-lg border-l-4 border-teal-500">
                <p className="italic text-gray-300">
                  "NovaForge's workflow automation capabilities have transformed how we approach image analysis. 
                  Tasks that used to require multiple manual steps can now be accomplished with a single command. 
                  The system adapts to how I work, rather than forcing me to adapt to it."
                </p>
                <p className="text-right mt-4 text-teal-500 font-medium">— Dr. Luke Pike, Specialty Radiologist at MSK</p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Outlook - Reorganized to 2x2 grid */}
        <section className="py-16 bg-dark-800">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Future Outlook</h2>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                MSK Cancer Center is continuing to expand their use of the NovaForge platform in several ways:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Row 1, Column 1 */}
                <div className="glass-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">AI Model Library Development</h3>
                  <p className="text-gray-400">
                    Creating a comprehensive library of specialty-specific AI models that can be shared across departments 
                    and potentially with other institutions.
                  </p>
                </div>
                
                {/* Row 1, Column 2 */}
                <div className="glass-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">Voice Dictation Integration</h3>
                  <p className="text-gray-400">
                    Further enhancing the natural language capabilities to generate preliminary reports and automate documentation.
                  </p>
                </div>
                
                {/* Row 2, Column 1 */}
                <div className="glass-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">VR/AR Implementation</h3>
                  <p className="text-gray-400">
                    Exploring three-dimensional visualization options for complex anatomical structures and surgical planning.
                  </p>
                </div>
                
                {/* Row 2, Column 2 */}
                <div className="glass-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">Multi-Institutional Collaboration</h3>
                  <p className="text-gray-400">
                    Establishing frameworks for sharing anonymized datasets and AI models with partner research institutions.
                  </p>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-lg border-l-4 border-teal-500 mb-12">
                <p className="italic text-gray-300">
                  "What makes NovaForge revolutionary isn't just the technology—it's how seamlessly it integrates into our 
                  clinical workflow. The system anticipates our needs and provides exactly the tools we need, exactly when 
                  we need them. It's allowing us to focus more on patients and less on technology."
                </p>
                <p className="text-right mt-4 text-teal-500 font-medium">— Dr. Giovanna Caxeiro, Radiologist at MSK</p>
              </div>
              
            </div>
          </div>
        </section>

        {/* More Case Studies Section */}
        <section className="py-16 bg-dark-900">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">More Case Studies</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-lg hover:border-teal-500/40 border border-transparent transition-colors duration-300">
                  <div className="text-xs text-gray-400 mb-2">Financial Services</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">AI-Powered Fraud Detection at Global Bank</h3>
                  <p className="text-gray-400 text-sm mb-4">How NovaForge helped reduce fraudulent transactions by 65%</p>
                  <Link to="#" className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors duration-300 text-sm font-medium group">
                    Coming Soon
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
                
                <div className="glass-card p-6 rounded-lg hover:border-teal-500/40 border border-transparent transition-colors duration-300">
                  <div className="text-xs text-gray-400 mb-2">Retail</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Personalizing Customer Experience with AI</h3>
                  <p className="text-gray-400 text-sm mb-4">How a Fortune 500 retailer increased revenue by 27%</p>
                  <Link to="#" className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors duration-300 text-sm font-medium group">
                    Coming Soon
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Link to="/case-studies" className="px-6 py-3 rounded-full bg-dark-700 hover:bg-dark-600 text-white transition-all duration-300 inline-flex items-center">
                  View All Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>;
};
export default CaseStudyMSK;