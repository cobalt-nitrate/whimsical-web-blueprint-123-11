import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      // If already on homepage, just scroll to the section
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else {
      // If on another page, navigate to homepage with the section hash
      window.location.href = `/#${sectionId}`;
    }
  };

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  return <nav className={cn("fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ease-in-out", isScrolled ? "bg-dark-800/80 backdrop-blur-md shadow-md" : "bg-transparent")}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-2">
            <span className="font-bold text-xl text-white">novaforge.ai</span>
            <span className="text-teal-500 font-bold text-xl">.</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" onClick={scrollToTop}>Home</NavLink>
          <button onClick={() => scrollToSection('research')} className="text-gray-300 hover:text-teal-500 transition-colors duration-300 text-sm font-medium">
            Research
          </button>
          <button onClick={() => scrollToSection('tools')} className="text-gray-300 hover:text-teal-500 transition-colors duration-300 text-sm font-medium">
            For Enterprises
          </button>
          <NavLink to="/case-studies">Case Studies</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="px-5 py-2 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300 text-sm" onClick={scrollToContact}>Schedule Discovery Call</button>
          
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-dark-800/95 backdrop-blur-lg py-4 border-t border-white/10">
          <div className="flex flex-col space-y-4 px-6">
            <NavLink to="/" onClick={scrollToTop} mobile>Home</NavLink>
            <button onClick={() => {
          scrollToSection('research');
          setIsMobileMenuOpen(false);
        }} className="text-gray-300 hover:text-teal-500 transition-colors duration-300 text-base py-2 text-left">
              Research
            </button>
            <button onClick={() => {
          scrollToSection('tools');
          setIsMobileMenuOpen(false);
        }} className="text-gray-300 hover:text-teal-500 transition-colors duration-300 text-base py-2 text-left">
              For Enterprises
            </button>
            <NavLink to="/case-studies" mobile>Case Studies</NavLink>
            <NavLink to="/about" mobile>About Us</NavLink>
            <button className="text-left text-gray-300 hover:text-teal-500 transition-colors duration-300 text-base py-2" onClick={() => {
          scrollToContact();
          setIsMobileMenuOpen(false);
        }}>
              Contact Us
            </button>
          </div>
        </div>}
    </nav>;
};
const NavLink = ({
  to,
  children,
  mobile = false,
  onClick
}: {
  to: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}) => <Link to={to} onClick={onClick} className={cn("text-gray-300 hover:text-teal-500 transition-colors duration-300 text-sm font-medium", mobile && "text-base py-2")}>
    {children}
  </Link>;
export default Navbar;