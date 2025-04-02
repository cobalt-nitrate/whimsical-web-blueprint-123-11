
import React from 'react';
import SectionHeader from '@/components/ui/section-header';
import { Zap, CheckCircle, Clock, Cpu } from 'lucide-react';

const WhyChooseVocalis = () => {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6 text-teal-500" />,
      title: "3X Faster Processing",
      description: "Faster ASR processing compared to traditional models."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-teal-500" />,
      title: "70% Error Reduction",
      description: "Reduction in transcription errors with adaptive learning."
    },
    {
      icon: <Clock className="h-6 w-6 text-teal-500" />,
      title: "10X Noise Reduction",
      description: "Improvement in noise reduction accuracy."
    },
    {
      icon: <Cpu className="h-6 w-6 text-teal-500" />,
      title: "Edge-Optimized",
      description: "Edge-compute-optimised AI with real-time processing."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-dark-900">
      <div className="container mx-auto">
        <SectionHeader
          badge="Why Vocalis?"
          title={<>Redefining <span className="text-gradient">AI-Driven Speech Intelligence</span></>}
          description="Our solutions deliver measurable advantages over traditional speech recognition systems"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl text-center transition-transform duration-300 hover:translate-y-[-5px]"
            >
              <div className="mx-auto w-14 h-14 bg-teal-500/10 rounded-full flex items-center justify-center mb-5">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseVocalis;
