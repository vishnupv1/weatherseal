import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiAlignLeft, FiAlignJustify } from "react-icons/fi";
import weatherseal from "../assets/images/weatherseal.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="bg-gradient-to-r from-purple-200/30 via-pink-100/30 to-white/30 backdrop-blur-lg shadow-md sticky top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
        <div className="text-2xl flex items-center font-bold text-primary">
          <img src={weatherseal} className="w-20 h-20" alt="logo" />
          <span className="text-primary mr-2 hidden md:inline">
            Weatherseal
          </span>
          <span className="text-secondary hidden md:inline">Interiors</span>
        </div>

        <nav className="hidden md:flex gap-6 text-primary">
          {["/", "/features", "/products", "/contact", "/testimonials"].map(
            (path, idx) => (
              <Link
                key={path}
                to={path}
                className="hover:text-secondary text-primary transition-colors duration-200"
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-xl transition-colors duration-200 
             focus:outline-none focus:ring-0  focus:border-0"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiAlignLeft size={20} /> : <FiAlignJustify size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
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
