
import React, { useState } from 'react';
import { Play, Code, Volume2, Mic } from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';
import { Textarea } from '@/components/ui/textarea';

const useCaseSamples: Record<string, string> = {
  'Try Your Text': '',
  Healthcare:
    "Good morning, Dr. Smith. The patient in room 302 is stable, but we'll need to run additional tests for a full diagnosis.",
  'Customer Service':
    "Thank you for calling ACME support. How may I assist you with your recent purchase?",
  Sales:
    "Hi there! Are you interested in learning more about our exclusive summer offers? Let me know how I can help.",
  'Food Ordering':
    "Hi, I'd like to order a large pepperoni pizza with extra cheese and a side of garlic bread, please.",
};

const APIPlaygroundSection = () => {
  const [activeTab, setActiveTab] = useState('text-to-speech');
  const useCases = [
    'Try Your Text',
    'Healthcare',
    'Customer Service',
    'Sales',
    'Food Ordering'
  ];
  const [activeUseCase, setActiveUseCase] = useState('Try Your Text');
  const [inputText, setInputText] = useState(
    useCaseSamples['Try Your Text'] ||
      "Yeah, I'd like the uh, order a Double-Double Animal Style with, you know, well-done fries, and like, a Neapolitan shake, and could you, you make the burger protein style? Also, like, can you cut the buns business or make sure!"
  );
  const [isCustomText, setIsCustomText] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Handle when a use case (tag) is selected
  const handleUseCaseClick = (useCase: string) => {
    setActiveUseCase(useCase);
    if (useCase === 'Try Your Text') {
      setInputText('');
      setIsCustomText(false);
    } else {
      setInputText(useCaseSamples[useCase]);
      setIsCustomText(false);
    }
  };

  // When user types, mark as custom (so we don't override with tag selection)
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    setIsCustomText(true);
  };

  const apiTabs = [
    { id: 'text-to-speech', label: 'Text to Speech', icon: Volume2 },
    { id: 'speech-to-text', label: 'Speech to Text', icon: Mic },
    { id: 'audio-intelligence', label: 'Audio Intelligence', icon: Code }
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="Try Models + APIs"
          title={<>Play around with <span className="text-gradient">human-like voice AI</span> or transcribe sample audio files</>}
          description="Explore how our audio understanding models work with real-time demonstrations"
        />

        <div className="mt-12">
          {/* API Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {apiTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-teal-500 text-black'
                      : 'glass-card text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Use Case Tags */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {useCases.map((useCase) => (
              <button
                key={useCase}
                onClick={() => handleUseCaseClick(useCase)}
                className={`px-3 py-1.5 text-sm rounded-full border ${
                  activeUseCase === useCase
                    ? 'border-teal-500/70 text-teal-400 bg-dark-800'
                    : 'border-white/20 text-gray-300 hover:border-teal-500/50 hover:text-teal-400'
                } transition-all duration-300`}
              >
                {useCase}
              </button>
            ))}
          </div>

          {/* Main Playground Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Input</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>Thala feminine, English (US)</span>
                  <button className="text-teal-500 hover:text-teal-400">⚙️</button>
                </div>
              </div>

              <div className="bg-dark-700 rounded-lg p-4 mb-4 min-h-[120px]">
                <Textarea
                  placeholder="Write or paste text here"
                  className="bg-dark-700 text-gray-300 text-sm leading-relaxed border-none resize-none p-0 min-h-[80px] focus-visible:ring-0 focus:outline-none"
                  value={inputText}
                  onChange={handleInputChange}
                  maxLength={5000}
                />
                <div className="text-xs text-gray-500 mt-2 text-right">
                  {inputText.length} / 5,000
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Show Voice Filters</span>
                <button className="text-teal-500">▼</button>
              </div>
            </div>

            {/* Output Section */}
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Output</h3>
                <button className="text-teal-500 hover:text-teal-400 text-sm">
                  Explore More Voices →
                </button>
              </div>

              <div className="bg-dark-700 rounded-lg p-4 mb-4 min-h-[120px] flex items-center justify-center">
                {isGenerating ? (
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <span className="ml-2 text-teal-500">Generating...</span>
                  </div>
                ) : (
                  <div className="text-center">
                    <Volume2 className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">Click Generate Speech to create audio</p>
                  </div>
                )}
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className={`w-full py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  isGenerating
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-teal-500 hover:bg-teal-600 text-black'
                }`}
              >
                <Play className="h-4 w-4" />
                {isGenerating ? 'Generating...' : 'Generate Speech'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIPlaygroundSection;
