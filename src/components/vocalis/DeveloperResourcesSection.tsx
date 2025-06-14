
import React from 'react';
import { Code, Users, Gift, Gamepad2 } from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';

const DeveloperResourcesSection = () => {
  const resources = [
    {
      title: 'Playground',
      description: 'Try it free now for a seamless audio API experience!',
      icon: <Gamepad2 className="h-8 w-8 text-teal-500" />,
      action: 'Go to Playground',
      bgGradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Get $200 in free credits!',
      description: 'That can fuel transcription for 750 hours, or generate text-to-speech audio for ~200 hours. No credit card needed.',
      icon: <Gift className="h-8 w-8 text-teal-500" />,
      action: 'Sign Up Free',
      bgGradient: 'from-teal-500/20 to-emerald-500/20',
      highlight: true
    },
    {
      title: 'Community',
      description: '2,000+ community members 1,300+ discussions answered',
      icon: <Users className="h-8 w-8 text-teal-500" />,
      action: 'Join our Community',
      bgGradient: 'from-blue-500/20 to-cyan-500/20'
    }
  ];

  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <SectionHeader
          title={<>Developer Resources & <span className="text-gradient">Community</span></>}
          description="Everything you need to get started with Vocalis AI"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-xl transition-all duration-300 hover:translate-y-[-5px] relative overflow-hidden ${
                resource.highlight ? 'border border-teal-500/30' : ''
              }`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${resource.bgGradient} opacity-10`}></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="p-3 bg-teal-500/10 rounded-lg w-fit mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                  <p className="text-gray-300">{resource.description}</p>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    resource.highlight
                      ? 'bg-teal-500 hover:bg-teal-600 text-black'
                      : 'border border-teal-500/30 text-teal-500 hover:bg-teal-500/10'
                  }`}
                >
                  {resource.action}
                </button>

                {/* Special visual elements for playground card */}
                {resource.title === 'Playground' && (
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-xl"></div>
                )}

                {/* Special visual elements for credits card */}
                {resource.highlight && (
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-teal-500/40 to-emerald-500/40 rounded-full blur-lg"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Connect with our community</p>
          <div className="flex justify-center gap-4">
            {['Discord', 'GitHub', 'Twitter', 'LinkedIn'].map((platform) => (
              <button
                key={platform}
                className="w-10 h-10 bg-dark-700 hover:bg-dark-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <span className="text-teal-500 text-sm font-bold">
                  {platform.charAt(0)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperResourcesSection;
