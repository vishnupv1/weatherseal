import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// import Features from "./Features";
import WorkCarousel from "./WorkCarousel";
import EmployeeEngagement from "./Advantages";

const LandingSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const openCatalogDialog = () => {
    // Trigger the catalog download dialog by dispatching a custom event
    window.dispatchEvent(new CustomEvent("openCatalogDialog"));
  };

  const stats = [
    { number: "50+", label: "Happy Customers", icon: "🏠" },
    { number: "100+", label: "Projects Completed", icon: "✨" },
    { number: "2+", label: "Years Experience", icon: "⭐" },
    { number: "24/7", label: "Support Available", icon: "📞" },
  ];

  const floatingElements = [
    { icon: "🪟", delay: 0, x: 20, y: -20 },
    { icon: "🚪", delay: 0.5, x: -30, y: 10 },
    { icon: "🏡", delay: 1, x: 25, y: 15 },
    { icon: "💎", delay: 1.5, x: -20, y: -10 },
  ];

  return (
    <div className="bg-gradient-to-br from-light via-white to-neutral-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0, 1, 0],
            x: element.x,
            y: element.y,
          }}
          transition={{
            duration: 4,
            delay: element.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="absolute text-4xl pointer-events-none"
          style={{
            left: `${20 + index * 20}%`,
            top: `${30 + index * 15}%`,
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      {/* Mouse-following gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(15, 118, 110, 0.1), transparent 40%)`,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />

      <section className="relative  py-4 px-4 text-center text-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent -z-10" />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Premium UPVC{" "}
            <motion.span
              className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Solutions
            </motion.span>{" "}
            for Modern Living
          </motion.h1>

          <motion.p
            className="text-xl text-secondary mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Energy efficient, durable, and stylish UPVC windows and doors
            crafted to perfection with cutting-edge technology and premium
            materials.
          </motion.p>

          {/* Interactive Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-enterprise hover:shadow-enterprise-lg transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(15, 118, 110, 0.2)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-secondary font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-16 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-primary rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <p className="text-sm text-secondary mt-2">Scroll to explore</p>
          </motion.div>
        </motion.div>
      </section>
      <WorkCarousel />
      <EmployeeEngagement />
      {/* <Features /> */}
    </div>
  );
};

export default LandingSection;
