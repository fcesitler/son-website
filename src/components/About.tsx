import { motion } from "framer-motion";
import { Heart, Palette, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Pet-First Philosophy",
      description: "Every portrait is crafted with love and respect for your furry family member. We believe pets deserve to be celebrated as the cherished companions they are.",
    },
    {
      icon: Palette,
      title: "Artistic Excellence",
      description: "Our AI technology is trained on classical art techniques, ensuring each portrait captures not just a likeness, but the soul and personality of your pet.",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "We blend cutting-edge AI with traditional artistic principles to create something truly unique - affordable custom art without compromising quality.",
    },
  ];

  const milestones = [
    { year: "2022", title: "The Beginning", description: "Sarah started CreAIDesign with a simple idea: make custom pet portraits accessible to everyone." },
    { year: "2023", title: "10,000 Portraits", description: "Reached a major milestone, bringing joy to pet parents worldwide." },
    { year: "2024", title: "Etsy Bestseller", description: "Became one of the top-rated custom pet portrait shops on Etsy." },
    { year: "2025", title: "Global Community", description: "Building a worldwide community of pet lovers who celebrate their companions through art." },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/30 to-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6"
          >
            Our Story: Where AI Meets Art
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A journey inspired by love, powered by innovation, and dedicated to celebrating the bond between pets and their people.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-8 text-center">
                How It All Began
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg leading-relaxed">
                  CreAIDesign was born from a deeply personal moment. Our founder, Sarah, wanted to honor her beloved golden retriever, Max, after he crossed the rainbow bridge. She searched everywhere for a custom portrait that captured his playful spirit and soulful eyes, but traditional commissions were either too expensive or didn't quite feel right.
                </p>
                <p className="text-lg leading-relaxed">
                  That's when inspiration struck. What if cutting-edge AI technology could democratize custom pet art? What if every pet parent could afford a museum-quality portrait of their furry companion? Sarah combined her background in design with her love for pets and emerging AI art technology to create CreAIDesign.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we've transformed over 10,000 pet photos into stunning works of art. Each portrait tells a story, celebrates a unique personality, and becomes a cherished keepsake. Whether it's a gift for a fellow pet lover or a tribute to your own companion, we pour heart and innovation into every creation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-12 text-center"
          >
            What Drives Us
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 rounded-3xl border-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-16 text-center"
          >
            Our Journey
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative mb-12 pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-5 top-2 w-6 h-6 bg-primary rounded-full border-4 border-background flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-primary-foreground" />
                  </div>
                  
                  <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border-2 hover:shadow-lg transition-all">
                    <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/20 to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Become Part of Our Story
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Join thousands of pet lovers who've immortalized their companions in art. Let's create something beautiful together.
            </p>
            <a
              href="https://creaidesign.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Your Pet's Portrait Today
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
