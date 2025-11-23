import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    quote: "I cried when I saw it! This portrait captured my Luna's spirit perfectly. It's hanging proudly in our living room!",
    name: "Sarah",
    pet: "Luna",
  },
  {
    quote: "Best gift ever! My mom was speechless when she opened her birthday present. The detail and quality exceeded all expectations.",
    name: "Michael",
    pet: "Max",
  },
  {
    quote: "After losing Bella, this portrait helps keep her memory alive. The artists truly understood her gentle soul. Forever grateful!",
    name: "Jennifer",
    pet: "Bella",
  },
  {
    quote: "The Christmas themed portrait arrived just in time for the holidays. It's the centerpiece of our home now!",
    name: "David",
    pet: "Cooper",
  },
  {
    quote: "I've ordered three portraits now for different family members. Each one is a masterpiece. Absolutely love this service!",
    name: "Emma",
    pet: "Charlie",
  },
  {
    quote: "The royal renaissance style made my cat look like the queen she thinks she is! Such incredible artistry and attention to detail.",
    name: "Rachel",
    pet: "Whiskers",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What Pet Lovers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers who've transformed their pet photos into art
          </p>
        </motion.div>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6 testimonials-marquee"
          animate={{
            x: [0, -2000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <BadgeCheck className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Verified Buyer</span>
              </div>

              <p className="text-foreground mb-4 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Owner of '{testimonial.pet}'</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
