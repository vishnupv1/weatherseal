import { motion } from "framer-motion";
import Features from "./Features";
import WorkCarousel from "./WorkCarousel";

const LandingSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-90">
      <section className="relative py-20 px-4 text-center text-secondary overflow-hidden">
        <div className="absolute inset-0  -z-10" />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-[#00838f]  mb-6"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Premium UPVC <span className="text-teal-600">Solutions </span> for
            Modern Living
          </h1>
        </motion.h1>
        <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
          Energy efficient, durable, and stylish UPVC windows and doors crafted
          to perfection.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="border border-purple-400 text-purple-600 rounded-full px-6 py-2 hover:bg-purple-50 transition">
            Explore our products
          </button>
        </div>
      </section>
      <WorkCarousel />
      <Features />
    </div>
  );
};

export default LandingSection;
