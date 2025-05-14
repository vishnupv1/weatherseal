import { motion } from "framer-motion";
// import Features from "./Features";
import WorkCarousel from "./WorkCarousel";
import EmployeeEngagement from "./Advantages";

const LandingSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-teal-100 opacity-90">
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
        <p className="text-gray-600 mt-4">
          Located in Panamaram, Wayanad, Kerala, we are proud to be the No.1
          provider of UPVC solutions. Our products are designed to enhance the
          aesthetics and functionality of your spaces.
        </p>
        <p className="text-gray-600 mb-6">
          Our UPVC windows and doors are not just about looks; they are built to
          Whether you're looking for energy-efficient windows or durable doors,
          our UPVC offerings are tailored to meet your needs with unmatched
          quality and style.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="border border-purple-400 text-purple-600 rounded-full px-6 py-2 hover:bg-purple-50 transition">
            Explore our products
          </button>
        </div>
      </section>
      <WorkCarousel />
      <EmployeeEngagement />
      {/* <Features /> */}
    </div>
  );
};

export default LandingSection;
