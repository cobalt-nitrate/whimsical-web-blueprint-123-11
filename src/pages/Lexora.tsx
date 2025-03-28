
import React from 'react';
import { ArrowRight, Check, Server, Shield, Zap, Brain, BarChart } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';

const Lexora = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-dark-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <div className="flex flex-wrap gap-2 mb-6">
                {['AI Language Models', 'Context-Aware AI', 'Enterprise NLP', 'Knowledge Retrieval', 'AI Agents'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Domain-Specific LLM for <span className="text-gradient">Enterprises</span>
              </h1>
              
              <p className="text-gray-300 text-lg mb-8">
                Lexora is your enterprise-ready AI platform, offering industry-leading natural language processing with a 10M token context space, structured reasoning, and a proprietary lightweight LLM.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={scrollToContact}
                  className="px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300"
                >
                  Get Started with Lexora
                </button>
                
                <Link to="/research" className="px-6 py-3 rounded-full border border-white/10 hover:border-white/30 text-white hover:bg-dark-800 transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="hidden md:block relative">
              <div className="relative z-10 glass-card p-6 rounded-xl">
                {/* AI Visual Representation - placeholder for an image or visualization */}
                <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-700 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-20 h-20 text-teal-500/70" />
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-dark-700 rounded-full w-3/4"></div>
                  <div className="h-2 bg-dark-700 rounded-full w-full"></div>
                  <div className="h-2 bg-dark-700 rounded-full w-1/2"></div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-lg border border-teal-500/20 teal-glow">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-teal-500/10 rounded-lg">
                    <Zap className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Token Context</div>
                    <div className="text-lg font-bold text-teal-500">10M</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 glass-card p-4 rounded-lg border border-teal-500/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-teal-500/10 rounded-lg">
                    <BarChart className="h-5 w-5 text-teal-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Parameter Count</div>
                    <div className="text-lg font-bold text-teal-500">2B</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core AI Toolkit */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
              Our Core AI ToolKit
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Modular AI for Seamless Integration
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Lexora provides powerful AI-driven microservices for your enterprise needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'RAG',
                subtitle: 'Retrieval-Augmented Generation',
                description: 'Fact-based responses with real-time knowledge retrieval.',
                icon: Brain
              },
              {
                title: 'NER',
                subtitle: 'Named Entity Recognition',
                description: 'Identify and categorize key entities in your data.',
                icon: Check
              },
              {
                title: 'Search',
                subtitle: 'AI-powered search',
                description: 'Advanced search with semantic understanding.',
                icon: Zap
              },
              {
                title: 'Agents',
                subtitle: 'Intelligent automation',
                description: 'Automated workflows and decision-making.',
                icon: BarChart
              }
            ].map((tool, index) => (
              <div key={index} className="glass-card glass-card-hover p-6 rounded-xl">
                <div className="bg-teal-500/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <tool.icon className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                <p className="text-gray-400 text-sm mb-1">{tool.subtitle}</p>
                <p className="text-gray-500 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
              Key Capabilities
            </div>
          </div>
          
          {/* High Context Space */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  High Context Space <span className="text-gradient">(10M Tokens)</span>
                </h2>
                <p className="text-gray-300 mb-6">
                  Scaling AI to handle vast amounts of information without losing accuracy.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Why It Matters:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span className="text-gray-300">Enhanced Accuracy: Retains crucial details over extended conversations.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span className="text-gray-300">Better Decision Support: Contextual insights for superior reasoning.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span className="text-gray-300">Scalable Knowledge Processing: Designed for enterprise-scale applications.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Use Cases:</h3>
                <ul className="space-y-4">
                  {[
                    'AI-powered legal research & case analysis',
                    'Financial modeling with extensive historical data',
                    'AI chatbots with full conversation memory',
                    'Large-scale enterprise knowledge retrieval',
                    'Advanced medical diagnostics with historical insights'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-500 mr-2">✔</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button 
                    onClick={scrollToContact}
                    className="w-full px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300"
                  >
                    Explore High Context Use Cases
                  </button>
                </div>
              </div>
            </div>
            
            {/* Step-by-Step Reasoning */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-10">
              <div className="order-2 md:order-1 glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Use Cases:</h3>
                <ul className="space-y-4">
                  {[
                    'AI-assisted contract review with clause breakdown',
                    'Research assistance with structured synthesis',
                    'Financial reports with reasoning-based insights',
                    'AI code debugging with step-by-step explanations',
                    'Multi-hop AI-driven question answering'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-500 mr-2">✔</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button 
                    onClick={scrollToContact}
                    className="w-full px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300"
                  >
                    Explore Reasoning Use Cases
                  </button>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Step-by-Step <span className="text-gradient">Reasoning</span>
                </h2>
                <p className="text-gray-300 mb-6">
                  Breaks down complex tasks into logical steps for precise and explainable AI-driven outputs.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Why It Matters:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span className="text-gray-300">Increased Transparency: Logical flow of AI decisions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span className="text-gray-300">Error Reduction: Iterative validation prevents misinformation.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span className="text-gray-300">Complex Workflow Automation: Handles multi-step reasoning processes.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Lightweight & Precise */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Lightweight & Precise for <span className="text-gradient">Domain-Specific AI</span>
                </h2>
                <p className="text-gray-300 mb-6">
                  Powered by a 2 Billion Parameter Proprietary LLM for precision AI.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Why It Matters:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span className="text-gray-300">Faster Performance: Optimized for efficiency with rapid inference.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span className="text-gray-300">Higher Accuracy: Domain-specific fine-tuning reduces noise.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span className="text-gray-300">Lower Costs: Reduced compute power requirements vs. massive LLMs.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Use Cases:</h3>
                <ul className="space-y-4">
                  {[
                    'AI-driven compliance monitoring for enterprises',
                    'High-precision financial & legal document analysis',
                    'AI-powered clinical research and diagnostics',
                    'Intelligent domain-specific customer support',
                    'Real-time business analytics & reporting'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-500 mr-2">✔</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button 
                    onClick={scrollToContact}
                    className="w-full px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300"
                  >
                    Explore Domain-Specific Use Cases
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* On-Premise Deployment */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
              On-Premise Deployment & Edge AI
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Deploy AI Anywhere – From Cloud to Edge
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Lexora is designed for seamless on-premise deployment, ensuring data security and performance optimization. 
              Its lightweight architecture allows deployment even on edge devices with just 32GB RAM, making it ideal for 
              environments with limited computing resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'Enterprise Data Control',
                description: 'Keep sensitive data within your infrastructure.',
                icon: Shield
              },
              {
                title: 'Lower Latency',
                description: 'AI processing happens on-site, reducing response times.',
                icon: Zap
              },
              {
                title: 'Cost-Efficient Scaling',
                description: 'No reliance on expensive cloud computing.',
                icon: BarChart
              }
            ].map((benefit, index) => (
              <div key={index} className="glass-card glass-card-hover p-6 rounded-xl">
                <div className="bg-teal-500/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <benefit.icon className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={scrollToContact}
              className="px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300"
            >
              Learn About Offline Deployment
            </button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Lexora */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
              Why Choose Lexora?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transformative AI for Business Efficiency
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {[
              {
                metric: '3X',
                description: 'Faster AI Deployment: Pre-trained models reduce engineering overhead.'
              },
              {
                metric: '70%',
                description: 'Cost Reduction: Optimized AI architecture lowers operational expenses.'
              },
              {
                metric: '100%',
                description: 'Enterprise-Grade Security: Built-in compliance for regulated industries.'
              },
              {
                metric: '10X',
                description: 'Greater Context Utilization: Surpasses traditional AI models in memory retention.'
              },
              {
                metric: '85%',
                description: 'Reduced Error Rates: Step-by-step validation ensures accuracy.'
              }
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-teal-500 mb-2">{stat.metric}</div>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
          
          <div className="glass-card p-8 rounded-xl mb-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold mb-4">
                Tackling AI Hallucinations - A Core Lexora Advantage
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Ensuring AI Reliability with Advanced Hallucination Prevention
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Multi-Step Validation',
                  description: 'AI cross-checks responses before output.'
                },
                {
                  title: 'Live Knowledge Retrieval',
                  description: 'Combines real-time data with static memory.'
                },
                {
                  title: 'Adaptive AI Tuning',
                  description: 'Context dynamically refines responses.'
                },
                {
                  title: 'Confidence-Based Outputs',
                  description: 'Uncertain responses flagged for human oversight.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-dark-700 p-5 rounded-lg">
                  <h4 className="font-medium text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-xl">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold mb-4">
                Our Proprietary LLM: Built for Real-World Impact
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <ul className="space-y-4">
                  {[
                    'Fine-Tuned for Industry-Specific Precision',
                    'Curated Datasets for Maximum Accuracy',
                    'High Performance at a Fraction of the Cost',
                    'Enterprise-Ready Security & Compliance'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-500 mr-2">✔</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4">
                  Why Lightweight LLMs Over Generalized LLMs?
                </h4>
                <p className="text-gray-400 mb-4">
                  "Faster, Cheaper, and More Accurate for Business Needs"
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="py-2 text-left text-gray-400">Feature</th>
                        <th className="py-2 text-left text-teal-500">Lexora's Lightweight LLM</th>
                        <th className="py-2 text-left text-gray-400">Generalized LLMs</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr>
                        <td className="py-3 text-left text-gray-300">Speed</td>
                        <td className="py-3 text-left text-teal-500">5-10X Faster</td>
                        <td className="py-3 text-left text-gray-400">Slower due to high compute requirements</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-left text-gray-300">Cost Efficiency</td>
                        <td className="py-3 text-left text-teal-500">Lower infrastructure costs</td>
                        <td className="py-3 text-left text-gray-400">Expensive to deploy & maintain</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-left text-gray-300">Precision</td>
                        <td className="py-3 text-left text-teal-500">Tailored for specific industries</td>
                        <td className="py-3 text-left text-gray-400">General-purpose, lacks depth</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-left text-gray-300">Context Awareness</td>
                        <td className="py-3 text-left text-teal-500">Long-form contextual memory</td>
                        <td className="py-3 text-left text-gray-400">Shorter context limits</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-left text-gray-300">Customization</td>
                        <td className="py-3 text-left text-teal-500">Fine-tuned for specific business needs</td>
                        <td className="py-3 text-left text-gray-400">Requires significant adaptation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-gray-300 mt-4">
                  Lexora gives enterprises a clear AI advantage: faster deployment, lower costs, and higher domain-specific precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your AI Capabilities?
            </h2>
            <p className="text-gray-300 mb-8">
              Join leading enterprises that have transformed their operations with Lexora's domain-specific AI solutions.
            </p>
            <button 
              onClick={scrollToContact}
              className="px-8 py-4 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium text-lg transition-all duration-300"
            >
              Get Started with Lexora Today
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Lexora;
