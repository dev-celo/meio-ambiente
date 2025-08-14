import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(true);
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    // Detecta se estamos na página inicial
    setIsHome(window.location.pathname === "/");

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setShowSubmenu(window.scrollY <= 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainLinks = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/about" },
    { label: "Contato", href: "/contact" },
  ];

  const subLinks = [
    { label: "Licenciamento", href: "/licenciamento-ambiental" },
    { label: "Outorgas", href: "/outorgas" },
    { label: "CAR/CEFiR", href: "/car-cefir" },
    { label: "Mapeamento", href: "/mapeamento" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-900 shadow-md" : "bg-gray-900/80 backdrop-blur-sm"}`}>
      
      {/* Top Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src="/logo_com_o_nome_ambitrade.png" alt="Ambitrade" className="h-10 md:h-12 w-auto transition-transform duration-300 hover:scale-105" />
        </a>

        {/* Desktop Main Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {mainLinks.map(link => (
            <a key={link.href} href={link.href} className="text-white hover:text-emerald-300 font-medium text-sm uppercase relative group">
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* CTA sempre visível */}
          <a href="/enquadramentos" className="ml-4 px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all duration-300">
            Meus Enquadramentos
          </a>
        </nav>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white hover:text-emerald-300 focus:outline-none">
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

      {/* Submenu desktop – só na home */}
      {isHome && showSubmenu && (
        <div className="hidden md:flex justify-center w-full bg-gray-800/90 py-2 backdrop-blur-sm transition-all duration-300">
          <div className="flex space-x-4">
            {subLinks.map(link => (
              <a key={link.href} href={link.href} className="px-4 py-1 text-sm text-gray-100 hover:text-emerald-300 border border-gray-700 rounded-lg transition-all duration-300">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} bg-gray-800 transition-all duration-300`}>
        <div className="px-4 py-3 flex flex-col gap-1">
          {mainLinks.map(link => (
            <a key={link.href} href={link.href} className="text-white py-2 rounded hover:bg-gray-700 text-center">{link.label}</a>
          ))}

          <a href="/enquadramentos" className="py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded text-center">Meus Enquadramentos</a>

          {/* Submenu mobile – só na home */}
          {isHome && (
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {subLinks.map(link => (
                <a key={link.href} href={link.href} className="px-2 py-1 text-xs text-gray-200 hover:text-emerald-300 rounded">{link.label}</a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
