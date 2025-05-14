import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import image1 from "/images/image1.jpg";
import image2 from "/images/image2.jpg";
import image3 from "/images/image3.jpg";
import image4 from "/images/image4.jpg";

const images = [image1, image2, image3, image4];

const WorkCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds for better visibility
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto overflow-hidden rounded-xl p-4">
      {/* Title Section */}
      <div className="text-center mb-4">
        <h2 className="text-4xl font-bold text-teal-600">Our Works</h2>
        <p className="text-lg text-gray-600">
          Explore some of our amazing projects
        </p>
      </div>

      <div className="relative aspect-[16/9]">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Work image ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WorkCarousel;
