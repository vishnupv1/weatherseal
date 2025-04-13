// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingSection from "./components/Landing";
import TestimonialSection from "./components/Testimonials";
import ContactPage from "./components/Contact";
import ProductsPage from "./components/Advantages";
import FeaturesPage from "./components/Advantages";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingSection />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/testimonials" element={<TestimonialSection />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <a
        href="https://wa.me/917510208562" // replace with your number
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "teal",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
        }}
      >
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/whatsapp.svg"
          alt="WhatsApp"
          style={{
            width: "30px",
            height: "30px",
            color: "white",
            filter: "invert(1)",
          }}
        />
      </a>
    </Router>
  );
};

export default App;
