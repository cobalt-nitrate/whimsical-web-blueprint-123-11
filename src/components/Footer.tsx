import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const handleSectionLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string, id: string) => {
    e.preventDefault();

    // If we're already on the home page, just scroll to the section
    if (window.location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else {
      // If we're on another page, navigate to home with the hash
      window.location.href = `/${id ? '#' + id : ''}`;
    }
  };
  return <footer className="bg-dark-900 border-t border-white/5 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-10">
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl text-white">novaforge.ai</span>
              <span className="text-teal-500 font-bold text-xl">.</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Building the future of AI with research-driven approaches and enterprise-grade implementations.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Solutions</h4>
            <ul className="space-y-2">
              <FooterLink to="/" section="features">Foundation Models</FooterLink>
              <FooterLink to="/" section="features">Training</FooterLink>
              <FooterLink to="/" section="features">Deployment</FooterLink>
              <FooterLink to="/" section="features">Fine-Tuning</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Resources</h4>
            <ul className="space-y-2">
              <FooterLink to="/case-studies">Case Studies</FooterLink>
              <FooterLink to="/" section="research">Research</FooterLink>
              <FooterLink to="/case-studies">Blog</FooterLink>
              <FooterLink to="#">Documentation</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="#">Careers</FooterLink>
              <FooterLink to="#">Team</FooterLink>
              <FooterLink to="/" section="contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
            <ul className="space-y-2">
              <FooterLink to="#">Privacy</FooterLink>
              <FooterLink to="#">Terms</FooterLink>
              <FooterLink to="#">Security</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Novaforge AI. All rights reserved.
          </p>
          
          <div className="flex space-x-6 hidden">
            <SocialLink href="#" ariaLabel="Twitter">
              <TwitterIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href="#" ariaLabel="LinkedIn">
              <LinkedInIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href="#" ariaLabel="GitHub">
              <GitHubIcon className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>;
};
const FooterLink = ({
  to,
  section,
  children
}: {
  to: string;
  section?: string;
  children: React.ReactNode;
}) => {
  if (section) {
    return <li>
        <a href={`${to}#${section}`} className="text-gray-400 hover:text-teal-500 transition-colors duration-300 text-sm" onClick={e => {
        e.preventDefault();
        if (window.location.pathname === '/') {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        } else {
          window.location.href = `/${section ? '#' + section : ''}`;
        }
      }}>
          {children}
        </a>
      </li>;
  }
  return <li className="hidden">
      <Link to={to} className="text-gray-400 hover:text-teal-500 transition-colors duration-300 text-sm">
        {children}
      </Link>
    </li>;
};
const SocialLink = ({
  href,
  ariaLabel,
  children
}: {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}) => <a href={href} aria-label={ariaLabel} className="text-gray-400 hover:text-teal-500 transition-colors duration-300">
    {children}
  </a>;
const TwitterIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-8.9 8-5 1.6-1 3-2.2 4-3z" />
  </svg>;
const LinkedInIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 14v7h4v-7M4 7a2 2 0 114 0 2 2 0 01-4 0z" />
  </svg>;
const GitHubIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2c.1-.3.6-1.6-.2-3.2 0 0-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1c-.8 1.6-.3 2.9-.2 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>;
export default Footer;