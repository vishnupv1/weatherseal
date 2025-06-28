import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_aen5cmd",
          "template_f2cdjyd",
          formRef.current,
          "-Wd7j_Rriar5kDGol"
        )
        .then(
          () => {
            setStatus("Message sent successfully!");
            formRef.current?.reset();
          },
          () => {
            setStatus("Failed to send message. Please try again.");
          }
        )
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Location",
      details: "Panamaram, Wayanad, Kerala",
      description: "Visit our showroom",
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+91 70258 98422",
      description: "Call us anytime",
    },
    {
      icon: "⏰",
      title: "Hours",
      details: "Mon-Sat: 9AM-6PM",
      description: "Sunday: Closed",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: "Available 24/7",
      description: "Quick responses",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-light via-white to-neutral-50 min-h-screen py-4 px-4 overflow-hidden">
      {/* Floating Background Elements */}
      {[0, 1, 2, 3].map((index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.2, 0],
            scale: [0, 1, 0],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            delay: index * 0.5,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className="absolute text-3xl pointer-events-none"
          style={{
            left: `${15 + index * 25}%`,
            top: `${20 + index * 20}%`,
          }}
        >
          {["🏠", "🪟", "🚪", "✨"][index]}
        </motion.div>
      ))}

      {/* Full screen loader */}
      {isSending && (
        <div className="absolute inset-0 z-50 bg-white/80 backdrop-blur-sm flex items-center justify-center">
          <motion.div
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}

      <motion.div
        className={`max-w-6xl mx-auto transition-all duration-300 ${
          isSending ? "blur-sm" : ""
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark mb-4">
            Contact{" "}
            <motion.span
              className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Us
            </motion.span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            Have questions or want to learn more about our premium UPVC
            solutions? Reach out to us for expert consultation and personalized
            quotes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            className="lg:col-span-1 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-enterprise hover:shadow-enterprise-lg transition-all duration-300 border border-white/20"
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  boxShadow: "0 20px 40px rgba(15, 118, 110, 0.15)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-3xl mb-3">{info.icon}</div>
                <h3 className="text-lg font-semibold text-dark mb-1">
                  {info.title}
                </h3>
                <p className="text-primary font-medium mb-1">{info.details}</p>
                <p className="text-sm text-secondary">{info.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-enterprise-lg p-8 border border-white/20"
              whileHover={{
                boxShadow: "0 25px 50px rgba(15, 118, 110, 0.1)",
              }}
            >
              {/* Form Header */}
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h3 className="text-2xl font-display font-semibold text-dark mb-2">
                  Reach Us Through{" "}
                  <span className="text-primary">Email</span>
                </h3>
                <p className="text-secondary">
                  Send us a message and we'll get back to you within 24 hours
                </p>
              </motion.div>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <label className="block text-sm font-semibold text-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                      placeholder="Enter your full name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <label className="block text-sm font-semibold text-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                      placeholder="Enter your email address"
                    />
                  </motion.div>
                </div>

                <input
                  type="hidden"
                  name="time"
                  value={new Date().toLocaleString()}
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <label className="block text-sm font-semibold text-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="Tell us about your project requirements..."
                  />
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 15px 30px rgba(15, 118, 110, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-primary text-white px-10 py-4 rounded-xl font-semibold shadow-enterprise hover:shadow-enterprise-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                    disabled={isSending}
                  >
                    <span className="relative z-10">
                      {isSending ? "Sending Message..." : "Send Message"}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.div>
              </form>

              {status && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mt-6 p-4 rounded-lg font-medium"
                >
                  {status.includes("successfully") ? (
                    <div className="text-success bg-success/10 border border-success/20 rounded-lg p-4">
                      ✅ {status}
                    </div>
                  ) : (
                    <div className="text-error bg-error/10 border border-error/20 rounded-lg p-4">
                      ❌ {status}
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Welcome Message - Moved to Bottom */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{
            scale: 1.01,
            boxShadow: "0 25px 50px rgba(15, 118, 110, 0.1)",
          }}
        >
          <h3 className="text-2xl font-display font-semibold text-dark mb-4 text-center">
            Welcome to the{" "}
            <motion.span
              className="text-primary"
              animate={{
                textShadow: [
                  "0 0 0px rgba(15, 118, 110, 0)",
                  "0 0 20px rgba(15, 118, 110, 0.3)",
                  "0 0 0px rgba(15, 118, 110, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              No.1 UPVC Solution Provider
            </motion.span>{" "}
            in Kerala!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-neutral-700 leading-relaxed">
            <div>
              <p className="mb-3">
                Located in the serene district of Wayanad, our Panamaram-based
                facility is dedicated to delivering top-notch UPVC products that
                redefine quality and durability. Whether you're looking for
                windows, doors, or other UPVC solutions, we have you covered.
              </p>
              <p>
                At our Wayanad facility, we pride ourselves on being the trusted
                name for UPVC in Kerala. Our Panamaram branch ensures that every
                product is crafted with precision and care.
              </p>
            </div>
            <div>
              <p className="mb-3">
                Discover why we are the No.1 UPVC provider in Kerala. From
                energy efficiency to unmatched durability, our UPVC solutions
                are designed to meet your needs.
              </p>
              <p>
                Visit us in Panamaram, Wayanad, and experience the difference
                today! Our team is ready to help you transform your space with
                premium UPVC solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
