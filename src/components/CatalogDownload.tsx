import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiX, FiFileText, FiCheck } from "react-icons/fi";

const CatalogDownload = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const catalogUrl = "https://drive.google.com/file/d/1k1mU2eKPCXBNERdrKvBiiwZKVnwK4W-o/view?usp=drivesdk";

  // Listen for custom event to open catalog dialog
  useEffect(() => {
    const handleOpenCatalog = () => {
      setIsOpen(true);
    };

    window.addEventListener('openCatalogDialog', handleOpenCatalog);
    
    return () => {
      window.removeEventListener('openCatalogDialog', handleOpenCatalog);
    };
  }, []);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = catalogUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Simulate download time
      setTimeout(() => {
        setIsDownloading(false);
        setDownloadComplete(true);
        
        // Reset after showing success message
        setTimeout(() => {
          setDownloadComplete(false);
          setIsOpen(false);
        }, 2000);
      }, 1500);
      
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
    }
  };

  return (
    <>
      {/* Floating Download Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-4 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-accent text-white rounded-full shadow-enterprise-lg hover:shadow-enterprise hover:bg-accent/90 transition-all duration-300 flex items-center justify-center z-40"
        aria-label="Download Catalog"
      >
        <FiFileText size={20} className="sm:w-6 sm:h-6" />
      </motion.button>

      {/* Popup Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
            onClick={() => !isDownloading && setIsOpen(false)}
          >
            {/* Popup Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-enterprise-lg w-full max-w-sm sm:max-w-md mx-4 p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => !isDownloading && setIsOpen(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-neutral-400 hover:text-neutral-600 transition-colors duration-200"
                disabled={isDownloading}
              >
                <FiX size={18} className="sm:w-5 sm:h-5" />
              </button>

              {/* Content */}
              <div className="text-center">
                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <FiFileText size={24} className="sm:w-8 sm:h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-dark mb-3 sm:mb-4">
                  Download Our Catalog
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-secondary mb-6 sm:mb-8 leading-relaxed">
                  Get our comprehensive UPVC solutions catalog featuring our latest products, 
                  specifications, and design inspirations.
                </p>

                {/* Features */}
                <div className="bg-neutral-50 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                  <h4 className="font-semibold text-dark mb-3 sm:mb-4 text-sm sm:text-base">What's Inside:</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span>Complete product range</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span>Technical specifications</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span>Installation guidelines</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span>Design inspirations</span>
                    </li>
                  </ul>
                </div>

                {/* Download Button */}
                {!downloadComplete ? (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="w-full bg-primary text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold shadow-enterprise hover:shadow-enterprise-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                  >
                    {isDownloading ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Downloading...</span>
                      </>
                    ) : (
                      <>
                        <FiDownload size={18} className="sm:w-5 sm:h-5" />
                        <span>Download Catalog</span>
                      </>
                    )}
                  </motion.button>
                ) : (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-full bg-success text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
                  >
                    <FiCheck size={18} className="sm:w-5 sm:h-5" />
                    <span>Download Complete!</span>
                  </motion.div>
                )}

                {/* Additional Info */}
                <p className="text-xs text-neutral-500 mt-3 sm:mt-4">
                  PDF format • Free download • No registration required
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CatalogDownload; 