import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-900 shadow-lg" : "bg-gray-900/90 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/logo_com_o_nome_ambitrade.png" 
              alt="Ambitrade Logo" 
              className="h-10 md:h-12 w-auto transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              <li>
                <a 
                  href="#home" 
                  className="text-white hover:text-emerald-300 transition-colors duration-300 font-medium text-sm uppercase tracking-wider relative group"
                >
                  Início
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-white hover:text-emerald-300 transition-colors duration-300 font-medium text-sm uppercase tracking-wider relative group"
                >
                  Sobre
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-white hover:text-emerald-300 transition-colors duration-300 font-medium text-sm uppercase tracking-wider relative group"
                >
                  Contato
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>

            <button className="ml-4 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-md hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-emerald-500/20 text-sm font-medium">
              Login
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-emerald-300 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} bg-gray-800 transition-all duration-300`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#home"
            className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md text-base font-medium"
          >
            Início
          </a>
          <a
            href="#about"
            className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md text-base font-medium"
          >
            Sobre
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 text-white hover:bg-gray-700 rounded-md text-base font-medium"
          >
            Contato
          </a>
          <button className="w-full mt-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-md hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 text-sm font-medium">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;