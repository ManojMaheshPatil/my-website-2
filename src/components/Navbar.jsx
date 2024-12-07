import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0D0D0D] z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between md:justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gray-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-gray-300 transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-white hover:text-gray-300 transition-colors text-left"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-white hover:text-gray-300 transition-colors text-left"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-gray-300 transition-colors text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-gray-300 transition-colors text-left"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;