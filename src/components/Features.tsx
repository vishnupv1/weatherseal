// src/components/Features.tsx
import { motion } from "framer-motion";

const features = [
  {
    title: "Energy Efficient",
    description: "Save on electricity bills with superior insulation.",
  },
  {
    title: "Weather Resistant",
    description: "Built to withstand all seasons and climates.",
  },
  {
    title: "Noise Reduction",
    description: "Peace and quiet with our soundproof design.",
  },
];

const cardVariants = {
  hidden: { rotateY: -90, opacity: 0 },
  visible: (i: number) => ({
    rotateY: 0,
    opacity: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      type: "spring",
    },
  }),
};

const Features = () => {
  return (
    <section id="features" className="py-16 text-secondary px-4  text-center">
      <h2 className="text-4xl font-bold text-[#00838f] mb-12 drop-shadow-lg">
        Why Choose <span className="text-secondary">UPVC?</span>
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="p-6 border-2 border-[#cbc1ff]  rounded-xl shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 perspective-1000"
          >
            <div className="bg-[#cbc1ff] bg-opacity-10 p-4 rounded-md shadow-inner">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
