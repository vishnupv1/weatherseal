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
    </Router>
  );
};

export default App;
