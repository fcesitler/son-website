import Hero from "@/components/Hero";
import ArtStyles from "@/components/ArtStyles";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ArtStyles />
      <HowItWorks />
      <Testimonials />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
