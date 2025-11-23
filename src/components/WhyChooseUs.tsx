import { motion } from "framer-motion";
import { Award, Sparkles, Heart, Zap } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Best-seller On Etsy!",
    description: "Trusted by thousands with hundreds of 5-star reviews",
  },
  {
    icon: Sparkles,
    title: "Hand-Crafted Portraits",
    description: "Each piece is uniquely created with artistic care and attention",
  },
  {
    icon: Heart,
    title: "Best Pet Loss Gift",
    description: "A meaningful way to honor and remember your beloved companion",
  },
  {
    icon: Zap,
    title: "Fast Delivery & Unlimited Revisions",
    description: "Quick turnaround time with satisfaction guaranteed",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/20 via-background to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why Choose CreAIDesign?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're passionate about creating art that celebrates the unique bond between you and your pet
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                  <div className="relative bg-primary/10 p-6 rounded-full">
                    <feature.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a 
            href="https://creaidesign.etsy.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
