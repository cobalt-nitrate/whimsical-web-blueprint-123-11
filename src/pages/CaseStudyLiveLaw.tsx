import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Check, ArrowRight, Award, Search, FileText, Clock, Brain, Scroll, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
const CaseStudyLiveLaw = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <PageLayout>
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
                  <div className="p-4 rounded-lg w-48 h-48 flex items-center justify-center">
                    <img src="/lovable-uploads/2a8a9acd-d9f5-4c0e-8db6-a55ae5c0ac76.png" alt="Live Law Logo" className="w-full h-auto" />
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
        <section className="bg-dark-900 py-[9px]">
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
            </div>
          </div>
        </section>

        {/* Solution Section - Improved Layout */}
        <section className="py-12 bg-dark-800">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">The Solution</h2>
              
              <p className="text-gray-300 mb-10 text-center max-w-3xl mx-auto">
                To address these challenges, Live Law integrated NovaForge's next-generation legal research platform, 
                tailored for the Indian legal ecosystem.
              </p>
              
              {/* Solution Grid - Redesigned */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* AI-Enhanced Search Engine */}
                <div className="glass-card p-8 rounded-xl border border-dark-700 hover:border-teal-500/30 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-teal-500/10 flex items-center justify-center">
                      <Search className="w-7 h-7 text-teal-500" />
                    </div>
                    <h3 className="text-xl font-semibold">AI-Enhanced Search Engine</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-white">Semantic Search:</span>
                        <span className="text-gray-400"> Enabled conceptual and intent-based search rather than keyword matching.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-white">Contextual Processing:</span>
                        <span className="text-gray-400"> Factored user behavior and history for more relevant results.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-white">Natural Language Processing:</span>
                        <span className="text-gray-400"> Incorporated spelling corrections and query enrichment.</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Comprehensive Legal Database */}
                <div className="glass-card p-8 rounded-xl border border-dark-700 hover:border-teal-500/30 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-teal-500/10 flex items-center justify-center">
                      <FileText className="w-7 h-7 text-teal-500" />
                    </div>
                    <h3 className="text-xl font-semibold">Comprehensive Legal Database</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-white">Diverse Legal Content:</span>
                        <span className="text-gray-400"> High Court judgments, tribunal decisions, and legal documents.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-white">Automated Updates:</span>
                        <span className="text-gray-400"> 24-hour refresh cycle for up-to-date legal references.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-white">Data Structuring:</span>
                        <span className="text-gray-400"> Improved document organization and citation linking.</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Intuitive User Experience */}
                <div className="glass-card p-8 rounded-xl border border-dark-700 hover:border-teal-500/30 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-teal-500/10 flex items-center justify-center">
                      <Scroll className="w-7 h-7 text-teal-500" />
                    </div>
                    <h3 className="text-xl font-semibold">Intuitive User Experience</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-white">Research Workspaces:</span>
                        <span className="text-gray-400"> Dedicated environments for organizing case research.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-white">Modular Search Filters:</span>
                        <span className="text-gray-400"> Google-like search with predefined categories.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-white">Document Bookmarking:</span>
                        <span className="text-gray-400"> Efficient organization of legal references.</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* AI-Powered Legal Assistance */}
                <div className="glass-card p-8 rounded-xl border border-dark-700 hover:border-teal-500/30 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-teal-500/10 flex items-center justify-center">
                      <Brain className="w-7 h-7 text-teal-500" />
                    </div>
                    <h3 className="text-xl font-semibold">AI-Powered Legal Assistance</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-white">Chat-Based AI Assistant:</span>
                        <span className="text-gray-400"> Responds to legal queries with source citations.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-white">Judgment Summaries:</span>
                        <span className="text-gray-400"> AI-generated case overviews for efficiency.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-white">Legal Drafting Tools:</span>
                        <span className="text-gray-400"> Template-based document creation assistance.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Visual Demo Section */}
              <div className="glass-card p-6 rounded-xl border border-dark-700 mb-8">
                <div className="aspect-video bg-dark-900 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-400 mb-2">Platform Demo</p>
                    <p className="text-sm text-gray-500">[Interactive demo would appear here]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="bg-dark-900 py-[16px]">
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
    </PageLayout>;
};
export default CaseStudyLiveLaw;