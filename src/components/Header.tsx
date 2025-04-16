import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiAlignLeft, FiAlignJustify } from "react-icons/fi";
import weatherseal from "../assets/images/weatherseal.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount to check if already scrolled

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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-purple-200/30 via-pink-100/30 to-white/30 backdrop-blur-lg shadow-md border-b border-white/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
        <div className="text-2xl flex items-center font-bold text-primary">
          <img
            src={weatherseal}
            className="w-20 h-20 hidden md:inline"
            alt="logo"
          />
          <span className="text-primary mr-2">Weatherseal</span>
          <span className="text-secondary">Interiors</span>
        </div>

        <nav className="hidden md:flex gap-6 text-teal-600">
          {["/", "/features", "/products", "/contact", "/testimonials"].map(
            (path, idx) => (
              <Link
                key={path}
                to={path}
                className="hover:text-secondary text-teal-600 transition-colors duration-200"
              >
                {
                  ["Home", "Features", "Products", "Contact", "Testimonials"][
                    idx
                  ]
                }
              </Link>
            )
          )}
        </nav>

        <button
          className="md:hidden text-gray-700 text-xl transition-colors duration-200
             focus:outline-none bg-transparent"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiAlignLeft size={24} /> : <FiAlignJustify size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed top-24 left-0 w-full bg-white/90 backdrop-blur-md z-40 px-4 pb-4">
          {["/", "/features", "/products", "/contact", "/testimonials"].map(
            (path, idx) => (
              <Link
                key={path}
                to={path}
                className="block py-2 text-teal-600"
                onClick={() => setMenuOpen(false)}
              >
                {
                  ["Home", "Features", "Products", "Contact", "Testimonials"][
                    idx
                  ]
                }
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
