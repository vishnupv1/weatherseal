import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiAlignLeft, FiAlignJustify, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import weatherseal from "../assets/images/weatherseal.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const navItems = [
    { path: "/", label: "Home", title: "Weatherseal Interiors Homepage" },
    { path: "/features", label: "Features", title: "UPVC Window and Door Features" },
    { path: "/products", label: "Products", title: "UPVC Windows and Doors Products" },
    { path: "/testimonials", label: "Testimonials", title: "Customer Reviews and Testimonials" },
    { path: "/contact", label: "Contact", title: "Contact Weatherseal Interiors" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-enterprise-lg border-b border-neutral-200/50"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            aria-label="Weatherseal Interiors - Home"
            title="Weatherseal Interiors - Best UPVC Windows and Doors in Wayanad"
          >
            <div className="relative">
              <img
                src={weatherseal}
                className="w-12 h-12 rounded-lg shadow-enterprise transition-transform duration-300 group-hover:scale-105"
                alt="Weatherseal Interiors Logo - UPVC Windows and Doors Specialist"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-primary leading-tight">
                Weatherseal
              </span>
              <span className="text-sm font-medium text-secondary leading-tight">
                Interiors
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                title={item.title}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-primary bg-primary/5"
                    : "text-neutral-600 hover:text-primary hover:bg-neutral-50"
                }`}
                aria-current={isActive(item.path) ? "page" : undefined}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" aria-hidden="true"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-primary text-white font-medium rounded-lg shadow-enterprise hover:bg-primary/90 hover:shadow-enterprise-lg transition-all duration-300 transform hover:-translate-y-0.5"
              title="Get Free Quote for UPVC Windows and Doors"
              aria-label="Get free quote for UPVC windows and doors installation"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-neutral-600 hover:text-primary hover:bg-neutral-100 transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiAlignJustify size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/50"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-enterprise-lg"
              id="mobile-menu"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-neutral-200 bg-white">
                <div className="flex items-center space-x-3">
                  <img
                    src={weatherseal}
                    className="w-10 h-10 rounded-lg"
                    alt="Weatherseal Interiors Logo"
                    loading="eager"
                    decoding="async"
                  />
                  <div>
                    <span className="text-lg font-display font-bold text-primary">
                      Weatherseal
                    </span>
                    <span className="text-sm font-medium text-secondary block">
                      Interiors
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-lg text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-colors duration-200"
                  aria-label="Close mobile menu"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Mobile Menu Content */}
              <div className="p-6 bg-white">
                <nav className="space-y-2 mb-8" role="navigation" aria-label="Mobile navigation">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        title={item.title}
                        className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                          isActive(item.path)
                            ? "text-primary bg-primary/10 border border-primary/20"
                            : "text-neutral-600 hover:text-primary hover:bg-neutral-50"
                        }`}
                        onClick={() => setMenuOpen(false)}
                        aria-current={isActive(item.path) ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10"
                >
                  <h3 className="text-lg font-display font-semibold text-dark mb-3">
                    Ready to Get Started?
                  </h3>
                  <p className="text-sm text-secondary mb-4">
                    Get your free quote and consultation today.
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full px-6 py-3 bg-primary text-white font-semibold rounded-xl text-center shadow-enterprise hover:shadow-enterprise-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
                    onClick={() => setMenuOpen(false)}
                    title="Get Free Quote for UPVC Installation"
                    aria-label="Get free quote for UPVC windows and doors installation"
                  >
                    Get Free Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
