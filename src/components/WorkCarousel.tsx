import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://www.eewindows.com.au/wp-content/uploads/2019/02/What-is-uPVC-and-why-is-it-used-for-doors-and-windows-FEAT.jpg",
  "https://eumaxupvc.com/images/New/Certificates/designerdoors.png",
  "https://th.bing.com/th/id/R.bd14aaf74854b8ea16dece887c33cb6d?rik=8Xhh1Vz7jbsiAA&riu=http%3a%2f%2fedamari.com%2fwp-content%2fuploads%2f2017%2f04%2fupwdw.jpg&ehk=1qieFQUrl5BTRGkWvjwgMhsMiNKaYJlEUUZwzy0s4VA%3d&risl=&pid=ImgRaw&r=0",
  "https://en.lesso.com/blogs/wp-content/uploads/2021/03/all-you-need-to-know-about-upvc-windows.jpg",
];

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
        <h2 className="text-3xl font-semibold text-teal-600">Our Works</h2>
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
