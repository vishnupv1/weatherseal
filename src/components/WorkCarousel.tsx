import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import image1 from "/images/image1.jpg";
import image2 from "/images/image2.jpg";
import image3 from "/images/image3.jpg";
import image4 from "/images/image4.jpg";

const images = [
  {
    src: image1,
    title: "Modern UPVC Windows",
    description: "Energy-efficient sliding windows for residential projects",
    alt: "Modern UPVC sliding windows installation in residential home",
  },
  {
    src: image2,
    title: "Premium Door Solutions",
    description: "Contemporary entrance doors with superior insulation",
    alt: "Premium UPVC entrance door with superior thermal insulation",
  },
  {
    src: image3,
    title: "Commercial Installations",
    description: "Large-scale UPVC solutions for commercial buildings",
    alt: "Large-scale UPVC window installation for commercial building",
  },
  {
    src: image4,
    title: "Custom Design Projects",
    description: "Tailored UPVC solutions for unique architectural needs",
    alt: "Custom designed UPVC windows for unique architectural project",
  },
];

const WorkCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds for better visibility

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
  };

  return (
    <section
      className="bg-gradient-to-br from-light via-white to-neutral-50 py-16 px-4"
      aria-label="Our UPVC Work Portfolio"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark mb-6">
            Our{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Explore some of our exceptional UPVC projects that showcase our
            commitment to quality, innovation, and customer satisfaction.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-enterprise-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={images[index].src}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <img
                  src={images[index].src}
                  alt={images[index].alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />

                {/* Enhanced Overlay with Project Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                    <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-bold mb-2 text-white drop-shadow-lg leading-tight">
                        {images[index].title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-2xl drop-shadow-md leading-relaxed">
                        {images[index].description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail Navigation */}
          {/* <nav 
            className="flex justify-center mt-8 space-x-2"
            aria-label="Portfolio navigation"
          >
            {images.map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`h-1 w-12 sm:w-16 transition-all duration-300 ${
                  slideIndex === index
                    ? "bg-primary scale-110"
                    : "bg-neutral-300 hover:bg-neutral-400"
                }`}
                aria-label={`Go to slide ${slideIndex + 1}: ${images[slideIndex].title}`}
                aria-current={slideIndex === index ? "true" : "false"}
              />
            ))}
          </nav> */}

          {/* Slide Counter */}
          {/* <div className="text-center mt-4">
            <span className="text-sm text-secondary font-medium">
              {index + 1} of {images.length}
            </span>
          </div> */}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-semibold text-dark mb-4">
              Inspired by Our Work?
            </h3>
            <p className="text-secondary mb-6">
              Let us bring your vision to life with our premium UPVC solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("openCatalogDialog"))
                }
                className="px-8 py-3 bg-primary text-white font-semibold rounded-xl shadow-enterprise hover:shadow-enterprise-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
                aria-label="View our complete UPVC portfolio catalog"
              >
                View Full Portfolio
              </button>
              <a
                href="/contact"
                className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Start your UPVC project with us"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkCarousel;
