import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Sharma",
    title: "Architect, Urban Designs",
    content:
      "The UPVC windows from this company completely transformed our projects. They're sleek, energy-efficient, and our clients love the finish!",
  },
  {
    name: "Meera Joshi",
    title: "Interior Designer, HomeGlow Interiors",
    content:
      "Absolutely impressed with the durability and aesthetics. The installation process was seamless, and the customer service was top-notch.",
  },
  {
    name: "Rahul Mehta",
    title: "Homeowner",
    content:
      "I've noticed a significant drop in outside noise and better insulation since installing their UPVC doors. Highly recommend!",
  },
];

const TestimonialSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-teal-100 opacity-90">
      <section className="relative py-20 px-4 text-center text-secondary overflow-hidden">
        <div className="absolute inset-0 -z-10" />

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-[#00838f] mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-teal-600">Customers </span> Say
          </h1>
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md p-6 md:w-1/3 text-left border border-gray-200"
            >
              <p className="text-gray-700 mb-4">“{t.content}”</p>
              <h4 className="text-lg font-semibold text-teal-700">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.title}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
