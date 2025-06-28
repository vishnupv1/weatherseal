import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FiShield, 
  FiZap, 
  FiTool, 
  FiAward, 
  FiHome, 
  FiTrendingUp 
} from "react-icons/fi";

const features = [
  {
    icon: <FiShield className="w-8 h-8" />,
    title: "Durability & Weather Resistance",
    description: "Built to withstand extreme weather conditions with superior corrosion resistance",
    points: [
      "Highly resistant to weather conditions, corrosion, and chemicals",
      "Ensures long-term performance with minimal maintenance",
      "UV-resistant materials prevent fading and degradation",
      "Withstands temperature fluctuations from -40°C to +80°C"
    ],
    color: "from-primary/10 to-primary/5"
  },
  {
    icon: <FiZap className="w-8 h-8" />,
    title: "Energy Efficiency & Sustainability",
    description: "Reduce energy costs while contributing to environmental conservation",
    points: [
      "Excellent thermal insulation reduces energy bills by up to 30%",
      "Environmentally friendly and 100% recyclable material",
      "Superior sound insulation for peaceful living",
      "Helps achieve green building certifications"
    ],
    color: "from-accent/10 to-accent/5"
  },
  {
    icon: <FiTool className="w-8 h-8" />,
    title: "Low Maintenance & Versatility",
    description: "Designed for convenience and adaptability to various applications",
    points: [
      "No need for frequent painting, sealing, or refinishing",
      "Can be used in windows, doors, facades, and more",
      "Easy to clean with just soap and water",
      "Available in multiple colors and finishes"
    ],
    color: "from-success/10 to-success/5"
  },
  {
    icon: <FiAward className="w-8 h-8" />,
    title: "Premium Quality & Standards",
    description: "Meeting international quality standards with certified materials",
    points: [
      "ISO 9001:2015 certified manufacturing process",
      "BIS approved materials and components",
      "10+ years warranty on all products",
      "Rigorous quality control at every stage"
    ],
    color: "from-warning/10 to-warning/5"
  },
  {
    icon: <FiHome className="w-8 h-8" />,
    title: "Custom Design Solutions",
    description: "Tailored solutions to match your architectural vision perfectly",
    points: [
      "Custom sizing and design options available",
      "Professional consultation and design support",
      "3D visualization of your project",
      "Seamless integration with existing architecture"
    ],
    color: "from-primary/10 to-accent/5"
  },
  {
    icon: <FiTrendingUp className="w-8 h-8" />,
    title: "Value & Investment",
    description: "Smart investment that increases property value and comfort",
    points: [
      "Increases property resale value significantly",
      "Long-term cost savings on energy and maintenance",
      "Modern aesthetic appeal enhances curb appeal",
      "ROI typically achieved within 3-5 years"
    ],
    color: "from-success/10 to-primary/5"
  }
];

const EmployeeEngagement: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-light via-white to-neutral-50  py-4 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark mb-6">
            Why Choose{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Weatherseal Interiors
            </span>{" "}
            ?
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology with premium materials to deliver 
            UPVC solutions that exceed expectations in every aspect.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-enterprise p-8 border border-neutral-200 hover:shadow-enterprise-lg hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-2 h-full">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-display font-semibold text-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Points */}
                <ul className="space-y-3">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-neutral-700 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-display font-semibold text-dark mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-secondary mb-6 max-w-2xl mx-auto">
              Experience the perfect blend of style, durability, and energy efficiency 
              with our premium UPVC solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary text-white font-semibold rounded-xl shadow-enterprise hover:shadow-enterprise-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get Free Consultation
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.dispatchEvent(new CustomEvent('openCatalogDialog'))}
                className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                View Our Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EmployeeEngagement;
