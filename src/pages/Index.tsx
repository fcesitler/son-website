import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ArtStyles from "@/components/ArtStyles";
import FormatSelector from "@/components/FormatSelector";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  const [currentView, setCurrentView] = useState("home");

  return (
    <div className="min-h-screen">
      <Navbar currentView={currentView} onViewChange={setCurrentView} />
      
      <AnimatePresence mode="wait">
        {currentView === "home" ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Hero />
            <ArtStyles />
            <FormatSelector />
            <HowItWorks />
            <Testimonials />
            <WhyChooseUs />
          </motion.div>
        ) : (
          <motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <About />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Index;
