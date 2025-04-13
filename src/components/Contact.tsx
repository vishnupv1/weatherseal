import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
            setStatus("Failed to send message.Please try again.");
          }
        );
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-teal-100 min-h-screen py-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10"
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
            >
              Send Message
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
