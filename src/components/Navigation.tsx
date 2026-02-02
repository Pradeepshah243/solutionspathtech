import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Company Name */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 group"
          >
            {/* Logo Placeholder - Replace with actual logo */}
            {/* TReplace with actual logo */}
            {/* To adddd youyour own logo: R own logo: Replace the de div belowv below with <img src="path-to-<img src="path-to-your-logo.png"-logo.png" allt="Sol="Solutions Ptions Pathth TechnoTechnology"y" cclassNamssName="w-12 h-12" />="w-12 h-12" /> */}
            <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#6D28D9] rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">SP</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl text-[#1E3A8A] group-hover:text-[#6D28D9] transition-colors">
                Solutions Path Technology
              </h1>
              <p className="text-xs text-gray-600">Innovative IT Solutions</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={scrollToTop}
              className="text-gray-700 hover:text-[#6D28D9] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#6D28D9] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#6D28D9] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-gradient-to-r from-[#1E3A8A] to-[#6D28D9] text-white rounded-full hover:shadow-lg transition-all duration-300"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={scrollToTop}
                className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="mx-4 px-6 py-2 bg-gradient-to-r from-[#1E3A8A] to-[#6D28D9] text-white rounded-full hover:shadow-lg transition-all duration-300 text-center"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}