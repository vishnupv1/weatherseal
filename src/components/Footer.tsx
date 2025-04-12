const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-200/30 via-pink-100/40 to-white/30 backdrop-blur-lg text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-teal-600">
            © 2025 Weatherseal Interiors. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-teal-600 hover:text-secondary transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-teal-600 hover:text-secondary transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#contact"
              className="text-teal-600 hover:text-secondary transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
