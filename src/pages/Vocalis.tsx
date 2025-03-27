
import React, { useEffect, useRef } from 'react';
import PageLayout from '@/components/PageLayout';
import { ArrowRight, Mic, MicOff, Headphones, Volume, Volume2 } from 'lucide-react';

const Vocalis = () => {
  // Refs for animation elements
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const useCasesRef = useRef<HTMLDivElement>(null);

  // Animation on scroll
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

    const elements = [heroRef.current, featuresRef.current, useCasesRef.current];
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const features = [
    {
      title: "Real-time Speech Recognition",
      description: "Convert speech to text with high accuracy in real-time with minimal latency and support for multiple languages.",
      icon: <Mic className="h-8 w-8 text-teal-500" />
    },
    {
      title: "Audio Classification",
      description: "Identify and categorize diverse sounds and audio patterns with precise contextual understanding.",
      icon: <Volume className="h-8 w-8 text-teal-500" />
    },
    {
      title: "Voice Authentication",
      description: "Secure biometric voice recognition solutions that provide reliable speaker identification and verification.",
      icon: <Headphones className="h-8 w-8 text-teal-500" />
    },
    {
      title: "Noise Reduction",
      description: "Advanced algorithms for clear audio processing in noisy environments with dynamic background filtering.",
      icon: <Volume2 className="h-8 w-8 text-teal-500" />
    }
  ];

  const useCases = [
    {
      title: "Healthcare Dictation Systems",
      description: "Enabling medical professionals to accurately document patient interactions without manual input, improving efficiency and care delivery.",
      industry: "Healthcare"
    },
    {
      title: "Customer Service Voice Analytics",
      description: "Analyzing customer service calls to extract sentiment, intent, and key information to improve service quality and training.",
      industry: "Customer Service"
    },
    {
      title: "Security & Authentication",
      description: "Providing voice-based authentication for sensitive applications, reducing fraud and enhancing security measures.",
      industry: "Security"
    },
    {
      title: "Inclusive Technology",
      description: "Creating voice-controlled interfaces for users with disabilities, enhancing accessibility and independence.",
      industry: "Accessibility"
    },
    {
      title: "Content Creation & Transcription",
      description: "Automatic transcription and content generation tools for podcasters, journalists, and content creators.",
      industry: "Media"
    },
    {
      title: "Multilingual Communication",
      description: "Real-time speech translation enabling seamless communication across language barriers in global business settings.",
      industry: "Business"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-dark-900 opacity-0 transition-opacity duration-1000"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
                Vocalis Technology
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gradient">Speech & Audio</span> Intelligence Solutions
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-8">
                Creating responsive audio processing systems with minimal latency for superior voice and sound recognition.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-teal-500 text-black font-medium rounded-full hover:bg-teal-600 transition-colors duration-300">
                  Request Demo
                </button>
                <button className="px-6 py-3 bg-dark-700 text-white font-medium rounded-full hover:bg-dark-600 transition-colors duration-300 flex items-center">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-teal-500 rounded-3xl blur-3xl opacity-10"></div>
                <div className="relative glass-card rounded-3xl overflow-hidden aspect-video">
                  {/* Placeholder for hero image */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Features Section */}
      <div
        ref={featuresRef}
        className="py-20 px-6 md:px-12 lg:px-24 bg-dark-800 opacity-0 transition-opacity duration-1000"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
              Core Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced <span className="text-gradient">Audio Intelligence</span> Features
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Our speech and audio processing technologies deliver superior performance across diverse environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-xl transition-transform duration-300 hover:translate-y-[-5px]"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Highlights */}
      <div className="py-20 px-6 md:px-12 lg:px-24 bg-dark-900">
        <div className="container mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
                  Technical Excellence
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  State-of-the-Art <span className="text-gradient">Audio Processing</span>
                </h2>
                <p className="text-gray-400 mb-6">
                  Our audio processing architecture delivers industry-leading performance with minimal latency and computational efficiency.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-teal-500/10 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-teal-500 w-2 h-2 rounded-full"></div>
                    </div>
                    <p className="text-gray-300">Real-time processing with latency under 100ms</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal-500/10 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-teal-500 w-2 h-2 rounded-full"></div>
                    </div>
                    <p className="text-gray-300">Support for 50+ languages and dialects</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal-500/10 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-teal-500 w-2 h-2 rounded-full"></div>
                    </div>
                    <p className="text-gray-300">Edge-optimized models for on-device processing</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal-500/10 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-teal-500 w-2 h-2 rounded-full"></div>
                    </div>
                    <p className="text-gray-300">High accuracy in noisy environments</p>
                  </li>
                </ul>
              </div>
              <div className="hidden lg:block">
                <div className="glass-card rounded-xl overflow-hidden aspect-square bg-dark-700">
                  {/* Technical diagram placeholder */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div
        ref={useCasesRef}
        className="py-20 px-6 md:px-12 lg:px-24 bg-dark-800 opacity-0 transition-opacity duration-1000"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
              Industry Applications
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vocalis <span className="text-gradient">Use Cases</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Explore how our audio intelligence solutions transform operations across industries
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl transition-transform duration-300 hover:translate-y-[-5px]"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
                  {useCase.industry}
                </div>
                <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Vocalis;
