
import React from 'react';
import PageLayout from '@/components/PageLayout';

const About = () => {
  return (
    <PageLayout>
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">
              About <span className="text-gradient">Us</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
              Leading the future of AI research and implementation.
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-medium mb-4">Our Mission</h2>
                <p className="text-gray-400 mb-6">
                  Advancing AI technology while making it accessible and practical for real-world applications.
                </p>
              </div>
              <div className="bg-dark-800 rounded-lg aspect-video"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Vision', 'Innovation', 'Impact'].map((item) => (
              <div key={item} className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-medium mb-2">{item}</h3>
                <p className="text-gray-400">Our commitment to excellence and innovation in AI technology.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
