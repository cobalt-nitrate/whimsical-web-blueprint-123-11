
import React from 'react';
import { Mic, MessageSquare, BarChart3, Zap } from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';

const VoiceFoundationsSection = () => {
  const foundations = [
    {
      id: 'voice-agent',
      title: 'Voice Agent API',
      description: 'A unified voice-to-voice API that enables natural-sounding conversations between humans and machines.',
      features: ['Real-time Processing', 'Natural Conversations', 'Multi-turn Dialogue'],
      icon: <Mic className="h-8 w-8 text-teal-500" />,
      action: 'Unlock Voice AI at Scale'
    },
    {
      id: 'speech-to-text',
      title: 'Speech to Text',
      description: 'Transcribe speech with unmatched accuracy, speed, and cost efficiency for enterprise applications.',
      features: ['High Accuracy', 'Low Latency', 'Cost Effective'],
      icon: <MessageSquare className="h-8 w-8 text-teal-500" />,
      action: 'Learn More'
    },
    {
      id: 'audio-intelligence',
      title: 'Audio Intelligence',
      description: 'Advanced audio intelligence for enterprise-scale analysis and automated insights generation.',
      features: ['Pattern Recognition', 'Automated Analysis', 'Enterprise Scale'],
      icon: <BarChart3 className="h-8 w-8 text-teal-500" />,
      action: 'Get Conversation Insights'
    },
    {
      id: 'text-to-speech',
      title: 'Text to Speech',
      description: 'Lightning-fast, humanlike voice for real-time AI and high-throughput applications.',
      features: ['Natural Voice', 'Real-time Generation', 'High Throughput'],
      icon: <Zap className="h-8 w-8 text-teal-500" />,
      action: 'Learn More'
    }
  ];

  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="Voice AI Foundations"
          title={<>Our suite of <span className="text-gradient">Voice AI Tools</span> designed to transform interactions</>}
          description="Offering powerful APIs and models to unlock deeper insights and build seamless voice experiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {foundations.map((foundation) => (
            <div
              key={foundation.id}
              className="glass-card p-8 rounded-xl transition-all duration-300 hover:translate-y-[-5px] group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-teal-500/10 rounded-lg">
                    {foundation.icon}
                  </div>
                  <span className="text-xs font-medium text-teal-500 uppercase tracking-wide">
                    {foundation.title}
                  </span>
                </div>
              </div>

              <div className="relative mb-6">
                {/* Animated voice wave visualization */}
                <div className="aspect-video bg-gradient-to-br from-dark-700 to-dark-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-emerald-500/5 to-teal-500/10 animate-pulse"></div>
                  
                  {/* Dynamic wave animation */}
                  <div className="flex items-center justify-center space-x-1 z-10">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-teal-500/70 rounded-full transform-gpu"
                        style={{
                          height: `${Math.sin(i / 2) * 30 + 20}px`,
                          animation: `audio-wave 2s ease-in-out infinite ${i * 0.1}s`
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Floating indicator */}
                  <div className="absolute bottom-3 right-3 text-xs text-teal-500 bg-dark-800/80 px-2 py-1 rounded">
                    Active
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{foundation.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {foundation.features.map((feature, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-dark-700 text-teal-400 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <button className="text-teal-500 hover:text-teal-400 font-medium text-sm transition-colors group-hover:translate-x-1 transform duration-300">
                {foundation.action} →
              </button>
            </div>
          ))}
        </div>

        <style>
          {`
          @keyframes audio-wave {
            0%, 100% {
              height: 20px;
            }
            50% {
              height: 40px;
            }
          }
          `}
        </style>
      </div>
    </section>
  );
};

export default VoiceFoundationsSection;
