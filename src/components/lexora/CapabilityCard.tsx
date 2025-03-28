
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

interface WhyItMattersItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface UseCase {
  icon: LucideIcon;
  description: string;
}

interface CapabilityCardProps {
  title: React.ReactNode;
  icon: LucideIcon;
  description: string;
  whyItMatters: WhyItMattersItem[];
  useCases: UseCase[];
  scrollToContact: () => void;
  ctaText: string;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({
  title,
  icon: Icon,
  description,
  whyItMatters,
  useCases,
  scrollToContact,
  ctaText
}) => {
  return (
    <Card className="bg-dark-800 border-white/5 shadow-xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-dark-700 to-dark-800 pb-8">
        <CardTitle className="text-3xl font-bold flex items-center gap-3">
          <Icon className="h-8 w-8 text-teal-500" />
          {title}
        </CardTitle>
        <CardDescription className="text-gray-300 text-lg mt-2">
          {description}
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
                  {whyItMatters.map((item, index) => {
                    const ItemIcon = item.icon;
                    return (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-teal-500/10 p-1.5 rounded-md mt-0.5">
                          <ItemIcon className="h-4 w-4 text-teal-500" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{item.title}</h4>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      </li>
                    );
                  })}
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
                  {useCases.map((useCase, index) => {
                    const UseCaseIcon = useCase.icon;
                    return (
                      <div key={index} className={`bg-dark-600 p-4 rounded-lg ${index === useCases.length - 1 && useCases.length % 2 !== 0 ? 'sm:col-span-2' : ''}`}>
                        <div className="flex items-start gap-3">
                          <div className="bg-teal-500/10 p-2 rounded-md">
                            <UseCaseIcon className="h-5 w-5 text-teal-500" />
                          </div>
                          <div className="text-gray-300 text-sm">
                            {useCase.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
              <CardFooter>
                <button onClick={scrollToContact} className="w-full px-4 py-2 rounded-lg bg-teal-500/10 text-teal-500 hover:bg-teal-500/20 transition-colors duration-300 font-medium">
                  {ctaText}
                </button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CapabilityCard;
