// src/App.tsx
import Header from "./components/Header";
import LandingSection from "./components/Landing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <LandingSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
