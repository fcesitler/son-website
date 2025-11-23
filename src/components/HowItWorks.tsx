import { motion } from "framer-motion";
import { Camera, Wand2, Gift } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Upload Photo",
    description: "Choose your favorite photo of your beloved pet on our Etsy shop",
  },
  {
    icon: Wand2,
    title: "We Create Art",
    description: "Our artists transform your photo into a stunning masterpiece",
  },
  {
    icon: Gift,
    title: "Receive Masterpiece",
    description: "Get your beautiful custom portrait delivered right to you",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to your perfect pet portrait
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                  <div className="relative bg-primary/10 p-6 rounded-full">
                    <step.icon className="w-12 h-12 text-primary" />
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                  {index + 1}
                </div>

                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
