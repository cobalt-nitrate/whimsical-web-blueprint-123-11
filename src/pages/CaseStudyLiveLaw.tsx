
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Check, ArrowRight, Award, Search, FileText, Clock, Brain, Scroll, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudyLiveLaw = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <div className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="bg-dark-900 py-16 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-500/10 blur-[100px]" />
            <div className="absolute top-1/3 -left-40 w-96 h-50 rounded-full bg-teal-500/5 blur-[100px]" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
                Legal Technology Case Study
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl">
                How Live Law Improved Search Accuracy and Efficiency with AI
              </h1>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-8">
                <span>Legal Technology</span>
                <span>•</span>
                <span>AI Search</span>
                <span>•</span>
                <span>Document Processing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section with Live Law Logo */}
        <section className="py-1 bg-dark-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-start gap-12 mb-8">
                {/* Live Law Logo Column */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                  <div className="bg-[#1a365d] p-4 rounded-lg w-48 h-48 flex items-center justify-center">
                    <div className="text-3xl font-bold text-white">LIVE LAW</div>
                  </div>
                </div>
                
                {/* Overview Content Column */}
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Introduction</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Legal professionals in India spend a significant portion of their working hours conducting research 
                    and drafting legal documents. However, traditional research platforms have long been inefficient, 
                    leading to lost productivity and frustration among legal practitioners. Live Law, a leading legal 
                    news and research platform, partnered with NovaForge to leverage its AI-powered legal research tool 
                    and address these challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 bg-dark-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">The Challenge</h2>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Before adopting NovaForge, Live Law faced several challenges in providing legal professionals 
                with an efficient research solution:
              </p>
              
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="glass-card p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">Time-Consuming Research</h3>
                    <p className="text-gray-400">
                      Lawyers spent an average of 23.5 hours per week (nearly 47% of their working hours) 
                      on legal research and drafting.
                    </p>
                  </div>
                  
                  <div className="glass-card p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">Incomplete Data Coverage</h3>
                    <p className="text-gray-400">
                      Many platforms failed to provide comprehensive case law databases, with 80% of lawyers 
                      citing "lack of data" as a major roadblock.
                    </p>
                  </div>
                  
                  <div className="glass-card p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">Inefficient Search Experience</h3>
                    <p className="text-gray-400">
                      Over 60% of legal professionals preferred using Google or traditional books due to the 
                      poor user experience of legal search tools.
                    </p>
                  </div>
                  
                  <div className="glass-card p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-white">Manual Document Processing</h3>
                    <p className="text-gray-400">
                      Attorneys had to manually sift through lengthy judgments, often exceeding 300 pages, 
                      without AI-assisted summaries or contextual insights.
                    </p>
                  </div>
                  
                  <div className="glass-card p-6 rounded-lg md:col-span-2">
                    <h3 className="text-xl font-semibold mb-3 text-white">Lack of Research Organization</h3>
                    <p className="text-gray-400">
                      Existing platforms lacked structured workspaces for tracking research, 
                      making case management cumbersome.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-lg border-l-4 border-teal-500 mb-8">
                <p className="italic text-gray-300">
                  "A simple Google search works better than Manupatra and SCC."
                </p>
                <p className="text-right mt-4 text-teal-500 font-medium">— High Court Lawyer</p>
              </div>
              
              <div className="glass-card p-6 rounded-lg border-l-4 border-teal-500">
                <p className="italic text-gray-300">
                  "I read a judgment if it's around 30 pages but wouldn't prefer manually reading a 300-page judgment."
                </p>
                <p className="text-right mt-4 text-teal-500 font-medium">— Legal Professional</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-1 bg-dark-800">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">The Solution</h2>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                To address these challenges, Live Law integrated NovaForge's next-generation legal research platform, 
                tailored for the Indian legal ecosystem. Key innovations included:
              </p>
              
              {/* AI-Enhanced Search Engine */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center">
                    <Search className="w-6 h-6 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-semibold">AI-Enhanced Search Engine</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Semantic Search:</span>
                      <span className="text-gray-400"> Enabled conceptual and intent-based search rather than relying solely on keyword matching.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Contextual Processing:</span>
                      <span className="text-gray-400"> Factored in user behavior, browsing history, and bookmarks to deliver more relevant results.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Natural Language Processing (NLP):</span>
                      <span className="text-gray-400"> Incorporated spelling corrections, query enrichment, and paraphrasing for more accurate search outcomes.</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Comprehensive Legal Database */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Comprehensive Legal Database</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Diverse Legal Content:</span>
                      <span className="text-gray-400"> Included High Court judgments, tribunal decisions, central and state acts, and other critical legal documents.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Automated Updates:</span>
                      <span className="text-gray-400"> Ensured a 24-hour refresh cycle for up-to-date legal references.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Data Processing & Structuring:</span>
                      <span className="text-gray-400"> Improved document organization, citation linking, and metadata tagging for better accessibility.</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Intuitive User Experience */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center">
                    <Scroll className="w-6 h-6 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-semibold">Intuitive User Experience</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Research Workspaces:</span>
                      <span className="text-gray-400"> Provided dedicated environments for lawyers to organize and track case research.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Modular Search Filters:</span>
                      <span className="text-gray-400"> Designed Google-like search functionality with predefined categories for refined results.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Document Bookmarking & Notes:</span>
                      <span className="text-gray-400"> Allowed users to annotate and organize legal references efficiently.</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* AI-Powered Legal Assistance */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-teal-500" />
                  </div>
                  <h3 className="text-xl font-semibold">AI-Powered Legal Assistance</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Chat-Based AI Assistant:</span>
                      <span className="text-gray-400"> Responded to legal queries with source citations.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Judgment Summaries:</span>
                      <span className="text-gray-400"> Provided AI-generated case overviews, reducing time spent on lengthy judgments.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Legal Drafting Tools:</span>
                      <span className="text-gray-400"> Assisted in creating legal documents based on templates and user inputs.</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-white">Document Review:</span>
                      <span className="text-gray-400"> Highlighted missing citations, red-lined changes, and flagged grammatical errors.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-dark-900">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Results & Impact</h2>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                By integrating NovaForge's AI-powered research tool, Live Law significantly improved 
                efficiency and user satisfaction:
              </p>
              
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Award className="h-5 w-5 text-teal-500 mr-2" />
                  Key Improvements
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-300">
                      Enhanced Search Accuracy: Lawyers reported a marked improvement in search relevance 
                      compared to traditional keyword-based platforms.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-300">
                      Time Savings: AI-generated summaries reduced judgment review times by up to 50%.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-gray-300">
                      Mobile Accessibility: Early users appreciated the ability to conduct legal research 
                      across devices, despite some initial usability concerns on mobile.
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* User Growth Timeline */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <Users className="h-5 w-5 text-teal-500 mr-2" />
                  User Growth & Adoption
                </h3>
                
                <p className="text-gray-300 mb-4">
                  Live Law followed a phased rollout plan for the AI-powered legal research platform:
                </p>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-dark-700"></div>
                  
                  {/* Timeline items */}
                  <div className="space-y-6">
                    <div className="flex gap-6">
                      <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center z-10">
                        <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">User Acceptance Testing (Nov 2024)</h4>
                        <p className="text-gray-400">200 early users</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-6">
                      <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center z-10">
                        <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Beta Program Launch (Jan 2025)</h4>
                        <p className="text-gray-400">500 users</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-6">
                      <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center z-10">
                        <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Early Access (May 2025)</h4>
                        <p className="text-gray-400">10,000 users</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-6">
                      <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center z-10">
                        <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Official Product Launch (Aug 2025)</h4>
                        <p className="text-gray-400">25,000 users</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-6">
                      <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center z-10">
                        <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Post-Launch Marketing (Aug-Dec 2025)</h4>
                        <p className="text-gray-400">Targeting 100,000 users</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Outlook Section */}
        <section className="py-16 bg-dark-800">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Future Outlook</h2>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Live Law and NovaForge continue to enhance the platform with:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">Advanced Search Features</h3>
                  <p className="text-gray-400">
                    Further refining Named Entity Recognition and query intent detection.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">Expanded Legal Database</h3>
                  <p className="text-gray-400">
                    Adding more High Court and tribunal decisions.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">AI-Powered Drafting & Review</h3>
                  <p className="text-gray-400">
                    Strengthening document automation and citation validation.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-white">Collaborative Research Spaces</h3>
                  <p className="text-gray-400">
                    Enabling team-based legal research and case tracking.
                  </p>
                </div>
                
                <div className="glass-card p-6 rounded-lg md:col-span-2">
                  <h3 className="text-xl font-semibold mb-3 text-white">Analytics & Visualization</h3>
                  <p className="text-gray-400">
                    Introducing legal trend analysis tools for better decision-making.
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-12 leading-relaxed">
                Live Law remains committed to its vision of leveraging AI to revolutionize legal research in India. 
                By continuing its partnership with NovaForge, the platform is set to redefine how Indian lawyers 
                access and analyze legal information.
              </p>
            </div>
          </div>
        </section>

        {/* More Case Studies Section */}
        <section className="py-16 bg-dark-900">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">More Case Studies</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-lg hover:border-teal-500/40 border border-transparent transition-colors duration-300">
                  <div className="text-xs text-gray-400 mb-2">Healthcare</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Enhancing PACS Viewer for MSK Cancer Center</h3>
                  <p className="text-gray-400 text-sm mb-4">How NovaForge transformed radiological workflow with AI integration</p>
                  <Link to="/case-study-msk" className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors duration-300 text-sm font-medium group">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
                
                <div className="glass-card p-6 rounded-lg hover:border-teal-500/40 border border-transparent transition-colors duration-300">
                  <div className="text-xs text-gray-400 mb-2">Finance</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">AI-Powered Fraud Detection at Global Bank</h3>
                  <p className="text-gray-400 text-sm mb-4">How NovaForge helped reduce fraudulent transactions by 65%</p>
                  <Link to="#" className="inline-flex items-center text-gray-400 transition-colors duration-300 text-sm font-medium group">
                    Coming Soon
                  </Link>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Link to="/case-studies" className="px-6 py-3 rounded-full bg-dark-700 hover:bg-dark-600 text-white transition-all duration-300 inline-flex items-center">
                  View All Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default CaseStudyLiveLaw;
