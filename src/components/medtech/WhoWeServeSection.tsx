import React, { useRef, useEffect } from 'react';
import { Building2, Wrench, GraduationCap, Rocket, MapPin } from 'lucide-react';

const WhoWeServeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    }, {
      threshold: 0.2
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const segments = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Hospitals & Health Systems",
      subtitle: "Oncology, Ophthalmology, Neuroscience",
      description: "AI-powered diagnostic systems integrated directly into clinical workflows",
      color: "teal"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Med-Tech Manufacturers",
      subtitle: "Device Integration & AI Enhancement",
      description: "Embed intelligence into medical devices and diagnostic equipment",
      color: "blue"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Research Institutions & Universities",
      subtitle: "Academic Medical Centers",
      description: "Accelerate research translation from lab to clinical practice",
      color: "purple"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Healthcare Startups",
      subtitle: "Early & Mid-Stage Companies",
      description: "Scale healthcare innovation with production-ready AI infrastructure",
      color: "green"
    }
  ];

  const regions = [
    { name: "USA", flag: "🇺🇸", description: "Primary market with major health systems" },
    { name: "MENA", flag: "🌍", description: "Growing healthcare AI adoption" },
    { name: "Europe", flag: "🇪🇺", description: "GDPR-compliant AI solutions" },
    { name: "India", flag: "🇮🇳", description: "Localized healthcare AI development" }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      teal: "from-teal-500/20 to-teal-600/20 text-teal-400",
      blue: "from-blue-500/20 to-blue-600/20 text-blue-400",
      purple: "from-purple-500/20 to-purple-600/20 text-purple-400",
      green: "from-green-500/20 to-green-600/20 text-green-400"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.teal;
  };

  return (
    <section ref={sectionRef} className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            Target Markets
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Who We <span className="text-gradient bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Empowering healthcare organizations across multiple segments and global regions.
          </p>
        </div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover p-6 rounded-lg text-center group transition-all duration-300"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(segment.color)} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {segment.icon}
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
                {segment.title}
              </h3>
              
              <p className="text-sm text-teal-400 mb-3 font-medium">
                {segment.subtitle}
              </p>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {segment.description}
              </p>
            </div>
          ))}
        </div>

        {/* Geographic Regions */}
        <div className="glass-card p-8 rounded-lg">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 text-teal-400" />
              Global Presence
            </h3>
            <p className="text-gray-400">Serving healthcare organizations across key regions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <div
                key={index}
                className="text-center p-4 bg-dark-700/30 rounded-lg hover:bg-dark-700/50 transition-all duration-300 group"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {region.flag}
                </div>
                <h4 className="text-white font-semibold mb-2 group-hover:text-teal-400 transition-colors duration-300">
                  {region.name}
                </h4>
                <p className="text-gray-400 text-sm">
                  {region.description}
                </p>
              </div>
            ))}
          </div>

          {/* Connection lines visualization */}
          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <svg className="w-full h-16" viewBox="0 0 800 60">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#14b8a6" stopOpacity="0"/>
                    <stop offset="50%" stopColor="#14b8a6" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#14b8a6" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path
                  d="M 0 30 Q 200 10 400 30 T 800 30"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;