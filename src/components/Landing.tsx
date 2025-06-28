import { motion } from "framer-motion";
// import Features from "./Features";
import WorkCarousel from "./WorkCarousel";
import EmployeeEngagement from "./Advantages";

const LandingSection = () => {
  const openCatalogDialog = () => {
    // Trigger the catalog download dialog by dispatching a custom event
    window.dispatchEvent(new CustomEvent('openCatalogDialog'));
  };

  return (
    <div className="bg-gradient-to-br from-light via-white to-neutral-50">
      <section className="relative py-24 px-4 text-center text-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent -z-10" />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark mb-6 leading-tight">
            Premium UPVC{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Solutions
            </span>{" "}
            for Modern Living
          </h1>
          
          <p className="text-xl text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            Energy efficient, durable, and stylish UPVC windows and doors crafted
            to perfection with cutting-edge technology and premium materials.
          </p>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-enterprise">
            <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
              Located in Panamaram, Wayanad, Kerala, we are proud to be the{" "}
              <span className="font-semibold text-primary">No.1 provider</span> of UPVC solutions. 
              Our products are designed to enhance the aesthetics and functionality of your spaces.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Our UPVC windows and doors are not just about looks; they are built to last. 
              Whether you're looking for energy-efficient windows or durable doors,
              our UPVC offerings are tailored to meet your needs with unmatched
              quality and style.
            </p>
          </div>
          
          <div className="flex justify-center gap-6 flex-wrap">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-enterprise hover:shadow-enterprise-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Our Products
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openCatalogDialog}
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
            >
              View Our Portfolio
            </motion.button>
          </div>
        </motion.div>
      </section>
      <WorkCarousel />
      <EmployeeEngagement />
      {/* <Features /> */}
    </div>
  );
};

export default LandingSection;
