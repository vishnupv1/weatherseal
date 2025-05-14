import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false); // 🔁 New state

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
    <div className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-teal-100 min-h-screen py-20 px-4">
      {/* 🔁 Full screen loader */}
      {isSending && (
        <div className="absolute inset-0 z-50 bg-white bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <motion.div
        className={`max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10 transition-all duration-300 ${
          isSending ? "blur-sm" : ""
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center text-[#00838f] mb-6">
          Contact <span className="text-black">Us</span>
        </h2>
        <p className="text-center text-gray-700 mb-10">
          Have questions or want to learn more about our UPVC solutions? Reach
          out to us!
        </p>

        <p className="text-gray-700 mb-6">
          Welcome to the No.1 UPVC solution provider in Kerala! Located in the
          serene district of Wayanad, our Panamaram-based facility is dedicated
          to delivering top-notch UPVC products that redefine quality and
          durability. Whether you're looking for windows, doors, or other UPVC
          solutions, we have you covered.
        </p>
        <p className="text-gray-700 mb-6">
          At our Wayanad facility, we pride ourselves on being the trusted name
          for UPVC in Kerala. Our Panamaram branch ensures that every product is
          crafted with precision and care, making us the go-to choice for
          homeowners and businesses alike.
        </p>
        <p className="text-gray-700 mb-6">
          Discover why we are the No.1 UPVC provider in Kerala. From energy
          efficiency to unmatched durability, our UPVC solutions are designed to
          meet your needs. Visit us in Panamaram, Wayanad, and experience the
          difference today!
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
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
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {status && (
          <div className="text-center mt-6 text-lg font-medium text-green-600">
            {status}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ContactPage;
