import { useState, useEffect } from "react";
import weatherseal from "../assets/images/weatherseal.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Effect to lock scroll when the mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll when menu is open
    } else {
      document.body.style.overflow = "auto"; // Enable scroll when menu is closed
    }

    return () => {
      document.body.style.overflow = "auto"; // Clean up when the component is unmounted or menu is closed
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
          <a
            href="#features"
            className="hover:text-secondary text-primary transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#products"
            className="hover:text-secondary text-primary transition-colors duration-200"
          >
            Products
          </a>
          <a
            href="#contact"
            className="hover:text-secondary text-primary transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <a href="#features" className="block py-2 text-primary">
            Features
          </a>
          <a href="#products" className="block py-2 text-primary">
            Products
          </a>
          <a href="#contact" className="block py-2 text-primary">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
