
import React from 'react';
import { ArrowRight, Server, Shield, Zap, Brain, BarChart, Building2, FileText, MessageCircle, Database, HeartPulse, GraduationCap, Scale, Code, GitBranch, LineChart, Briefcase, BookOpen, Activity, Bot, FlaskConical, FileCheck, Microscope, Search, HelpCircle } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { Link } from 'react-router-dom';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
                icon: Search
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
                icon: Bot
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

      {/* Key Capabilities - Redesigned with Cards */}
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
          
          {/* High Context Space */}
          <div className="grid grid-cols-1 gap-12 mb-16">
            <Card className="bg-dark-800 border-white/5 shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-dark-700 to-dark-800 pb-8">
                <CardTitle className="text-3xl font-bold flex items-center gap-3">
                  <Database className="h-8 w-8 text-teal-500" />
                  High Context Space <span className="text-gradient">(10M Tokens)</span>
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg mt-2">
                  Scaling AI to handle vast amounts of information without losing accuracy.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Why It Matters Card */}
                  <div className="md:col-span-1">
                    <Card className="bg-dark-700 border-white/5 h-full">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-teal-500">
                          Why It Matters
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <div className="bg-teal-500/10 p-1.5 rounded-md mt-0.5">
                              <Zap className="h-4 w-4 text-teal-500" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">Enhanced Accuracy</h4>
                              <p className="text-gray-400 text-sm">Retains crucial details over extended conversations.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-teal-500/10 p-1.5 rounded-md mt-0.5">
                              <Brain className="h-4 w-4 text-teal-500" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">Better Decision Support</h4>
                              <p className="text-gray-400 text-sm">Contextual insights for superior reasoning.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-teal-500/10 p-1.5 rounded-md mt-0.5">
                              <BarChart className="h-4 w-4 text-teal-500" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">Scalable Knowledge</h4>
                              <p className="text-gray-400 text-sm">Designed for enterprise-scale applications.</p>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Use Cases Card */}
                  <div className="md:col-span-2">
                    <Card className="bg-dark-700 border-white/5 h-full">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-teal-500">
                          Industry Use Cases
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-dark-600 p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                              <div className="bg-teal-500/10 p-2 rounded-md">
                                <Scale className="h-5 w-5 text-teal-500" />
                              </div>
                              <div className="text-gray-300 text-sm">
                                AI-powered legal research & case analysis
                              </div>
                            </div>
                          </div>
                          <div className="bg-dark-600 p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                              <div className="bg-teal-500/10 p-2 rounded-md">
                                <LineChart className="h-5 w-5 text-teal-500" />
                              </div>
                              <div className="text-gray-300 text-sm">
                                Financial modeling with extensive historical data
                              </div>
                            </div>
                          </div>
                          <div className="bg-dark-600 p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                              <div className="bg-teal-500/10 p-2 rounded-md">
                                <MessageCircle className="h-5 w-5 text-teal-500" />
                              </div>
                              <div className="text-gray-300 text-sm">
                                AI chatbots with full conversation memory
                              </div>
                            </div>
                          </div>
                          <div className="bg-dark-600 p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                              <div className="bg-teal-500/10 p-2 rounded-md">
                                <Database className="h-5 w-5 text-teal-500" />
                              </div>
                              <div className="text-gray-300 text-sm">
                                Large-scale enterprise knowledge retrieval
                              </div>
                            </div>
                          </div>
                          <div className="bg-dark-600 p-4 rounded-lg sm:col-span-2">
                            <div className="flex items-start gap-3">
                              <div className="bg-teal-500/10 p-2 rounded-md">
                                <HeartPulse className="h-5 w-5 text-teal-500" />
                              </div>
                              <div className="text-gray-300 text-sm">
                                Advanced medical diagnostics with historical insights
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <button
                          onClick={scrollToContact}
                          className="w-full px-4 py-2 rounded-lg bg-teal-500/10 text-teal-500 hover:bg-teal-500/20 transition-colors duration-300 font-medium"
                        >
                          Explore High Context Use Cases
                        </button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Step-by-Step Reasoning */}
            <Card className="bg-dark-800 border-white/5 shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-dark-700 to-dark-800 pb-8">
                <CardTitle className="text-3xl font-bold flex items-center gap-3">
                  <GitBranch className="h-8 w-8 text-teal-500" />
                  Step-by-Step <span className="text-gradient">Reasoning</span>
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg mt-2">
                  Breaks down complex tasks into logical steps for precise and explainable AI-driven outputs.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Why It Matters Card */}
                  <div className="md:col-span-1">
                    <Card className="bg-dark-700 border-white/5 h-full">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-teal-500">
                          Why It Matters
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <div className="bg-teal-500/10 p-1.5 rounded-md mt-0.5">
                              <GraduationCap className="h-4 w-4 text-teal-500" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">Increased Transparency</h4>
                              <p className="text-gray-400 text-sm">Logical flow of AI decisions.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-teal-500/10 p-1.5 rounded-md mt-0.5">
                              <Shield className="h-4 w-4 text-teal-500" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">Error Reduction</h4>
                              <p className="text-gray-400 text-sm">Iterative validation prevents misinformation.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-teal-500/10 p-1.5 rounded-md mt-0.5">
                              <ArrowRight className="h-4 w-4 text-teal-500" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">Complex Workflows</h4>
                              <p className="text-gray-400 text-sm">Handles multi-step reasoning processes.</p>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Use Cases Card */}
                  <div className="md:col-span-2">
                    <Card className="bg-dark-700 border-white/5 h-full">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-teal-500">
                          Industry Use Cases
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-dark-600 p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                              <div className="bg-teal-500/10 p-2 rounded-md">
                                <FileCheck className="h-5 w-5 text-teal-500" />
                              </div>
                              <div className="text-gray-300 text-sm">
                                AI-assisted contract review with clause breakdown
                              </div>
                            </div>
                          </div>
                          <div className="bg-dark-600 p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                              <div className="bg-teal-500/10 p-2 rounded-md">
                                <BookOpen className="h-5 w-5 text-teal-500" />
                              </div>
                              <div className="text-gray-300 text-sm">
                                Research assistance with structured synthesis
                              </div>
                            </div>
                          </div>
                          <div className="bg-dark-600 p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                              <div className="bg-teal-500/10 p-2 rounded-md">
                                <BarChart className="h-5 w-5 text-teal-500" />
                              </div>
                              <div className="text-gray-300 text-sm">
                                Financial reports with reasoning-based insights
                              </div>
                            </div>
                          </div>
                          <div className="bg-dark-600 p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                              <div className="bg-teal-500/10 p-2 rounded-md">
                                <Code className="h-5 w-5 text-teal-500" />
                              </div>
                              <div className="text-gray-300 text-sm">
                                AI code debugging with step-by-step explanations
                              </div>
                            </div>
                          </div>
                          <div className="bg-dark-600 p-4 rounded-lg sm:col-span-2">
                            <div className="flex items-start gap-3">
                              <div className="bg-teal-500/10 p-2 rounded-md">
                                <HelpCircle className="h-5 w-5 text-teal-500" />
                              </div>
                              <div className="text-gray-300 text-sm">
                                Multi-hop AI-driven question answering
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <button
                          onClick={scrollToContact}
                          className="w-full px-4 py-2 rounded-lg bg-teal-500/10 text-teal-500 hover:bg-teal-500/20 transition-colors duration-300 font-medium"
                        >
                          Explore Reasoning Use Cases
                        </button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Lightweight & Precise */}
            <Card className="bg-dark-800 border-white/5 shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-dark-700 to-dark-800 pb-8">
                <CardTitle className="text-3xl font-bold flex items-center gap-3">
                  <Zap className="h-8 w-8 text-teal-500" />
                  Lightweight & Precise for <span className="text-gradient">Domain-Specific AI</span>
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg mt-2">
                  Powered by a 2 Billion Parameter Proprietary LLM for precision AI.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Why It Matters Card */}
                  <div className="md:col-span-1">
                    <Card className="bg-dark-700 border-white/5 h-full">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-teal-500">
                          Why It Matters
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <div className="bg-teal-500/10 p-1.5 rounded-md mt-0.5">
                              <Zap className="h-4 w-4 text-teal-500" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">Faster Performance</h4>
                              <p className="text-gray-400 text-sm">Optimized for efficiency with rapid inference.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-teal-500/10 p-1.5 rounded-md mt-0.5">
                              <Activity className="h-4 w-4 text-teal-500" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">Higher Accuracy</h4>
                              <p className="text-gray-400 text-sm">Domain-specific fine-tuning reduces noise.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="bg-teal-500/10 p-1.5 rounded-md mt-0.5">
                              <BarChart className="h-4 w-4 text-teal-500" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white">Lower Costs</h4>
                              <p className="text-gray-400 text-sm">Reduced compute power requirements vs. massive LLMs.</p>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Use Cases Card */}
                  <div className="md:col-span-2">
                    <Card className="bg-dark-700 border-white/5 h-full">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold text-teal-500">
                          Industry Use Cases
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-dark-600 p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                              <div className="bg-teal-500/10 p-2 rounded-md">
                                <Shield className="h-5 w-5 text-teal-500" />
                              </div>
                              <div className="text-gray-300 text-sm">
                                AI-driven compliance monitoring for enterprises
                              </div>
                            </div>
                          </div>
                          <div className="bg-dark-600 p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                              <div className="bg-teal-500/10 p-2 rounded-md">
                                <FileText className="h-5 w-5 text-teal-500" />
                              </div>
                              <div className="text-gray-300 text-sm">
                                High-precision financial & legal document analysis
                              </div>
                            </div>
                          </div>
                          <div className="bg-dark-600 p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                              <div className="bg-teal-500/10 p-2 rounded-md">
                                <FlaskConical className="h-5 w-5 text-teal-500" />
                              </div>
                              <div className="text-gray-300 text-sm">
                                AI-powered clinical research and diagnostics
                              </div>
                            </div>
                          </div>
                          <div className="bg-dark-600 p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                              <div className="bg-teal-500/10 p-2 rounded-md">
                                <MessageCircle className="h-5 w-5 text-teal-500" />
                              </div>
                              <div className="text-gray-300 text-sm">
                                Intelligent domain-specific customer support
                              </div>
                            </div>
                          </div>
                          <div className="bg-dark-600 p-4 rounded-lg sm:col-span-2">
                            <div className="flex items-start gap-3">
                              <div className="bg-teal-500/10 p-2 rounded-md">
                                <BarChart className="h-5 w-5 text-teal-500" />
                              </div>
                              <div className="text-gray-300 text-sm">
                                Real-time business analytics & reporting
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <button
                          onClick={scrollToContact}
                          className="w-full px-4 py-2 rounded-lg bg-teal-500/10 text-teal-500 hover:bg-teal-500/20 transition-colors duration-300 font-medium"
                        >
                          Explore Domain-Specific Use Cases
                        </button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
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
