const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-display font-semibold text-white mb-4">
              Weatherseal Interiors
            </h3>
            <p className="text-neutral-300 mb-4 leading-relaxed">
              Leading provider of premium UPVC windows and doors in Panamaram,
              Wayanad, Kerala. We deliver excellence in every project with
              cutting-edge technology and unmatched quality.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:+917025898422"
                className="text-accent hover:text-white transition-colors duration-200"
              >
                📞 +91 70258 98422
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-neutral-300 hover:text-accent transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/features"
                  className="text-neutral-300 hover:text-accent transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-neutral-300 hover:text-accent transition-colors duration-200"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/testimonials"
                  className="text-neutral-300 hover:text-accent transition-colors duration-200"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-accent transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-300 hover:text-accent transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-neutral-300 hover:text-accent transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-neutral-400 mb-4 sm:mb-0">
              © 2025 Weatherseal Interiors. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-neutral-400">
                Made with ❤️ in Wayanad, Kerala
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
