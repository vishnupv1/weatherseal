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

  return (
    <div className="relative bg-gradient-to-br from-light via-white to-neutral-50 min-h-screen py-20 px-4">
      {/* Full screen loader */}
      {isSending && (
        <div className="absolute inset-0 z-50 bg-white/80 backdrop-blur-sm flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <motion.div
        className={`max-w-4xl mx-auto bg-white rounded-2xl shadow-enterprise-lg p-10 transition-all duration-300 ${
          isSending ? "blur-sm" : ""
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark mb-4">
            Contact{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            Have questions or want to learn more about our premium UPVC solutions? 
            Reach out to us for expert consultation and personalized quotes.
          </p>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 mb-10">
          <h3 className="text-2xl font-display font-semibold text-dark mb-4">
            Welcome to the No.1 UPVC Solution Provider in Kerala!
          </h3>
          <div className="space-y-4 text-neutral-700 leading-relaxed">
            <p>
              Located in the serene district of Wayanad, our Panamaram-based facility is dedicated
              to delivering top-notch UPVC products that redefine quality and durability. 
              Whether you're looking for windows, doors, or other UPVC solutions, we have you covered.
            </p>
            <p>
              At our Wayanad facility, we pride ourselves on being the trusted name
              for UPVC in Kerala. Our Panamaram branch ensures that every product is
              crafted with precision and care, making us the go-to choice for
              homeowners and businesses alike.
            </p>
            <p>
              Discover why we are the No.1 UPVC provider in Kerala. From energy
              efficiency to unmatched durability, our UPVC solutions are designed to
              meet your needs. Visit us in Panamaram, Wayanad, and experience the
              difference today!
            </p>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-sm font-semibold text-dark mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-dark mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-dark mb-2">
              Message *
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              placeholder="Tell us about your project requirements..."
            />
          </div>
          <div className="md:col-span-2 text-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-white px-10 py-4 rounded-xl font-semibold shadow-enterprise hover:shadow-enterprise-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSending}
            >
              {isSending ? "Sending Message..." : "Send Message"}
            </motion.button>
          </div>
        </form>

        {status && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8 p-4 rounded-lg font-medium"
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
    </div>
  );
};

export default ContactPage;
