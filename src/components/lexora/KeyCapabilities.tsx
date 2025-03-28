
import React from 'react';
import { Database, Zap, GitBranch, Shield, ArrowRight, GraduationCap, Scale, LineChart, MessageCircle, HeartPulse, BarChart, Code, BookOpen, FileCheck, HelpCircle, FileText, FlaskConical, Activity, Brain } from 'lucide-react';
import CapabilityCard from './CapabilityCard';

interface KeyCapabilitiesProps {
  scrollToContact: () => void;
}

const KeyCapabilities: React.FC<KeyCapabilitiesProps> = ({ scrollToContact }) => {
  return (
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            Key Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transformative AI Features for Modern Enterprises
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Discover how Lexora's capabilities deliver substantial value across industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12 mb-16">
          {/* High Context Space */}
          <CapabilityCard
            title={<>High Context Space <span className="text-gradient">(10M Tokens)</span></>}
            icon={Database}
            description="Scaling AI to handle vast amounts of information without losing accuracy."
            whyItMatters={[
              {
                icon: Zap,
                title: "Enhanced Accuracy",
                description: "Retains crucial details over extended conversations."
              },
              {
                icon: Brain,
                title: "Better Decision Support",
                description: "Contextual insights for superior reasoning."
              },
              {
                icon: BarChart,
                title: "Scalable Knowledge",
                description: "Designed for enterprise-scale applications."
              }
            ]}
            useCases={[
              {
                icon: Scale,
                description: "AI-powered legal research & case analysis"
              },
              {
                icon: LineChart,
                description: "Financial modeling with extensive historical data"
              },
              {
                icon: MessageCircle,
                description: "AI chatbots with full conversation memory"
              },
              {
                icon: Database,
                description: "Large-scale enterprise knowledge retrieval"
              },
              {
                icon: HeartPulse,
                description: "Advanced medical diagnostics with historical insights"
              }
            ]}
            scrollToContact={scrollToContact}
            ctaText="Explore High Context Use Cases"
          />
          
          {/* Step-by-Step Reasoning */}
          <CapabilityCard
            title={<>Step-by-Step <span className="text-gradient">Reasoning</span></>}
            icon={GitBranch}
            description="Breaks down complex tasks into logical steps for precise and explainable AI-driven outputs."
            whyItMatters={[
              {
                icon: GraduationCap,
                title: "Increased Transparency",
                description: "Logical flow of AI decisions."
              },
              {
                icon: Shield,
                title: "Error Reduction",
                description: "Iterative validation prevents misinformation."
              },
              {
                icon: ArrowRight,
                title: "Complex Workflows",
                description: "Handles multi-step reasoning processes."
              }
            ]}
            useCases={[
              {
                icon: FileCheck,
                description: "AI-assisted contract review with clause breakdown"
              },
              {
                icon: BookOpen,
                description: "Research assistance with structured synthesis"
              },
              {
                icon: BarChart,
                description: "Financial reports with reasoning-based insights"
              },
              {
                icon: Code,
                description: "AI code debugging with step-by-step explanations"
              },
              {
                icon: HelpCircle,
                description: "Multi-hop AI-driven question answering"
              }
            ]}
            scrollToContact={scrollToContact}
            ctaText="Explore Reasoning Use Cases"
          />
          
          {/* Lightweight & Precise */}
          <CapabilityCard
            title={<>Lightweight & Precise for <span className="text-gradient">Domain-Specific AI</span></>}
            icon={Zap}
            description="Powered by a 2 Billion Parameter Proprietary LLM for precision AI."
            whyItMatters={[
              {
                icon: Zap,
                title: "Faster Performance",
                description: "Optimized for efficiency with rapid inference."
              },
              {
                icon: Activity,
                title: "Higher Accuracy",
                description: "Domain-specific fine-tuning reduces noise."
              },
              {
                icon: BarChart,
                title: "Lower Costs",
                description: "Reduced compute power requirements vs. massive LLMs."
              }
            ]}
            useCases={[
              {
                icon: Shield,
                description: "AI-driven compliance monitoring for enterprises"
              },
              {
                icon: FileText,
                description: "High-precision financial & legal document analysis"
              },
              {
                icon: FlaskConical,
                description: "AI-powered clinical research and diagnostics"
              },
              {
                icon: MessageCircle,
                description: "Intelligent domain-specific customer support"
              },
              {
                icon: BarChart,
                description: "Real-time business analytics & reporting"
              }
            ]}
            scrollToContact={scrollToContact}
            ctaText="Explore Domain-Specific Use Cases"
          />
        </div>
      </div>
    </section>
  );
};

export default KeyCapabilities;
