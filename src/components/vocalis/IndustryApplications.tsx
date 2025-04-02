
import React from 'react';
import { 
  HeartPulse, 
  MessageCircle, 
  Shield, 
  Accessibility, 
  FileText, 
  Globe 
} from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';

interface IndustryApplicationsProps {
  scrollToContact: () => void;
}

const IndustryApplications: React.FC<IndustryApplicationsProps> = ({ scrollToContact }) => {
  const applications = [
    {
      industry: "Healthcare",
      title: "AI-Powered Medical Dictation",
      description: "Automated, real-time transcription for physicians and healthcare professionals. Enhancing EHR documentation efficiency with AI-driven ASR.",
      icon: HeartPulse
    },
    {
      industry: "Customer Service",
      title: "Voice Analytics & Sentiment Detection",
      description: "AI-powered speech analytics for intent detection and sentiment analysis. Real-time feedback loops for improved customer interactions.",
      icon: MessageCircle
    },
    {
      industry: "Security",
      title: "AI-Driven Voice Authentication",
      description: "Fraud-resistant speaker verification for secure identity management. Continuous authentication for high-security applications.",
      icon: Shield
    },
    {
      industry: "Accessibility",
      title: "Inclusive Voice AI Technologies",
      description: "AI-driven voice interfaces for enhanced accessibility solutions. Speech-to-text and text-to-speech solutions for assistive applications.",
      icon: Accessibility
    },
    {
      industry: "Media & Content",
      title: "Automated Transcription & Generation",
      description: "High-accuracy ASR for media professionals, journalists, and podcasters. AI-powered summarisation and voice-enhanced content creation.",
      icon: FileText
    },
    {
      industry: "Business",
      title: "Multilingual Communication",
      description: "Real-time AI translation for seamless global collaboration. Enterprise-ready multilingual transcription and voice-driven AI assistants.",
      icon: Globe
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-dark-800">
      <div className="container mx-auto">
        <SectionHeader
          badge="Industry Applications"
          title={<>Transforming Enterprises with <span className="text-gradient">AI-Driven Audio Intelligence</span></>}
          description="Explore how our audio intelligence solutions transform operations across diverse industries"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-xl transition-transform duration-300 hover:translate-y-[-5px]"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-teal-500/10 p-2 rounded-lg mr-3">
                    <Icon className="h-5 w-5 text-teal-500" />
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium">
                    {app.industry}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{app.title}</h3>
                <p className="text-gray-400">{app.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={scrollToContact} 
            className="px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300"
          >
            Explore Industry Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustryApplications;
