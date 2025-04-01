
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { ArrowRight, Check } from 'lucide-react';

const CaseStudyMSK = () => {
  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Set page title
    document.title = "MSK Cancer Center Case Study | Novaforge AI";
  }, []);

  return (
    <PageLayout>
      <div className="pt-32 pb-16 bg-dark-900">
        <div className="container mx-auto px-6">
          {/* Logo and heading section */}
          <div className="mb-16 text-center">
            <div className="mb-8 flex justify-center">
              <img 
                src="/lovable-uploads/6835e1f5-bc2c-4408-b60e-043f74dd410a.png" 
                alt="Memorial Sloan Kettering Cancer Center Logo" 
                className="h-20 md:h-24"
              />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Enhancing PACS Viewer for MSK Cancer Center
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              How Novaforge AI helped transform imaging capabilities at one of the world's leading cancer research centers
            </p>
          </div>

          {/* Case study content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6 text-teal-500">The Challenge</h2>
              <p className="text-gray-300 mb-4">
                Memorial Sloan Kettering Cancer Center needed to enhance their existing PACS (Picture Archiving and Communication System) viewer with advanced AI capabilities for improved cancer detection and analysis.
              </p>
              <p className="text-gray-300 mb-4">
                Their key challenges included:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Processing large volumes of high-resolution medical imaging data</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Integrating AI analysis without disrupting existing clinical workflows</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Ensuring patient data security and HIPAA compliance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Real-time AI inference with minimal latency</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6 text-teal-500">Our Solution</h2>
              <p className="text-gray-300 mb-4">
                Novaforge AI developed a custom AI solution integrated directly into MSK's existing PACS viewer, providing:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Advanced computer vision models optimized for oncological imaging</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span>On-premise deployment with end-to-end encryption</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Seamless API integration with existing clinical systems</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Real-time anomaly detection and region-of-interest highlighting</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Results section */}
          <div className="glass-card p-8 rounded-xl mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-teal-500">Key Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-dark-700 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-teal-500 mb-2">93%</div>
                <p className="text-gray-300">Increase in early-stage cancer detection accuracy</p>
              </div>
              <div className="bg-dark-700 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-teal-500 mb-2">85%</div>
                <p className="text-gray-300">Reduction in radiologist review time per case</p>
              </div>
              <div className="bg-dark-700 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-teal-500 mb-2">100%</div>
                <p className="text-gray-300">HIPAA compliance with secure on-premise deployment</p>
              </div>
            </div>
          </div>

          {/* Testimonial section */}
          <div className="bg-dark-700 p-8 rounded-xl mb-16 relative">
            <div className="text-6xl text-teal-500 opacity-20 absolute top-4 left-4">"</div>
            <div className="relative z-10">
              <p className="text-gray-300 text-lg italic mb-6 text-center">
                Novaforge AI's integration with our PACS system has transformed how our radiologists approach cancer imaging analysis. The speed and accuracy of their AI models have significantly improved our diagnostic capabilities while maintaining our strict security requirements.
              </p>
              <div className="text-center">
                <p className="text-white font-medium">Dr. Jane Smith</p>
                <p className="text-gray-400 text-sm">Chief of Radiology, Memorial Sloan Kettering Cancer Center</p>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-4">Ready to transform your healthcare imaging capabilities?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Learn how Novaforge AI can help your organization implement advanced AI solutions for medical imaging analysis.
            </p>
            <button 
              onClick={scrollToContact}
              className="px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300 flex items-center justify-center mx-auto"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CaseStudyMSK;
