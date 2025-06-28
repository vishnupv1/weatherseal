import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Aarav",
    title: "Architect, Urban Designs",
    content:
      "The UPVC windows from Weatherseal Interiors completely transformed our projects. They're sleek, energy-efficient, and our clients love the premium finish!",
    rating: 5,
  },
  {
    name: "Meera",
    title: "Interior Designer, HomeGlow Interiors",
    content:
      "Absolutely impressed with the durability and aesthetics. The installation process was seamless, and the customer service was exceptional. Highly recommend!",
    rating: 5,
  },
  {
    name: "Rahul",
    title: "Homeowner",
    content:
      "I've noticed a significant drop in outside noise and better insulation since installing their UPVC doors. The quality is outstanding and worth every penny.",
    rating: 5,
  },
  {
    name: "Priya",
    title: "Property Developer",
    content:
      "Weatherseal Interiors has been our go-to partner for all UPVC solutions. Their products meet the highest standards and their team is incredibly professional.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <div className="bg-gradient-to-br from-light via-white to-neutral-50">
      <section className="relative  py-4 px-4 text-center text-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent -z-10" />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark mb-6">
            What Our{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Customers
            </span>{" "}
            Say
          </h2>

          <p className="text-xl text-secondary mb-16 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued customers
            have to say about their experience with Weatherseal Interiors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-enterprise p-8 text-left border border-neutral-200 hover:shadow-enterprise-lg hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-neutral-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-neutral-200 pt-4">
                  <h4 className="text-lg font-semibold text-dark mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-secondary font-medium">
                    {testimonial.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20"
          >
            <h3 className="text-2xl font-display font-semibold text-dark mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-secondary mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who have transformed their
              spaces with our premium UPVC solutions.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white font-semibold rounded-xl shadow-enterprise hover:shadow-enterprise-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Your Free Quote
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default TestimonialSection;
