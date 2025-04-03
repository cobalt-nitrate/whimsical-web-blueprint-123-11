import React from 'react';
import PageLayout from '@/components/PageLayout';
import SectionHeader from '@/components/ui/section-header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
const About = () => {
  const teamMembers = [{
    name: "Anfas Nujum",
    position: "CEO",
    institution: "IIT MADRAS"
  }, {
    name: "Harshit Singh",
    position: "Product",
    institution: "IIT DELHI"
  }];
  const missionPoints = [{
    id: "01",
    title: "Purpose Driven Innovation",
    description: "At NovaForge.ai, our mission is to drive purposeful innovation, creating technology solutions that not only advance the frontiers of AI but also contribute to a better world. We are committed to partnering with organizations to turn visionary ideas into impactful realities, ensuring that every innovation serves a greater purpose."
  }, {
    id: "02",
    title: "Industrializing Research",
    description: "We aim to bridge the gap between research and real-world application by industrializing cutting-edge innovations. By turning groundbreaking research into scalable AI solutions, we empower organizations to harness the full potential of technology for impactful and sustainable growth."
  }];
  return <PageLayout>
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <SectionHeader title={<>About <span className="text-gradient">Us</span></>} description="Leading the future of AI research and implementation." align="left" />
          </div>

          {/* Meet Our Team Section */}
          <div className="glass-card p-8 rounded-xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">MEET OUR TEAM</h2>
            
            <div className="mb-8">
              <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-16">
                After their journey at IIT Madras and IIT Delhi, our leadership built novaforge.ai after 5+ years experience across AI, Metaverse, Enterprise Software and B2B, B2C
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {teamMembers.map((member, index) => <div key={index} className="flex flex-col items-center">
                  <Avatar className="w-32 h-32 mb-6 border-2 border-teal-500">
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-teal-500 font-medium mb-1">{member.position}</p>
                  <p className="text-gray-400">{member.institution}</p>
                </div>)}
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="glass-card p-8 rounded-xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {missionPoints.map((point, index) => <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-500 font-bold text-xl">
                      {point.id}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">{point.title}</h3>
                    <p className="text-gray-300">{point.description}</p>
                  </div>
                </div>)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {['Vision', 'Innovation', 'Impact'].map(item => <div key={item} className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-medium mb-2">{item}</h3>
                <p className="text-gray-400">Our commitment to excellence and innovation in AI technology.</p>
              </div>)}
          </div>
        </div>
      </div>
    </PageLayout>;
};
export default About;