import { motion } from "framer-motion";
import styleRoyal from "@/assets/style-royal.jpg";
import styleOil from "@/assets/styles-oil.jpg";
import styleChristmas from "@/assets/style-christmas.jpg";
import styleWatercolor from "@/assets/style-watercolor.jpg";
import stylePop from "@/assets/style-pop.jpg";
import styleMinimal from "@/assets/style-minimal.jpg";

const styles = [
  { name: "Royal Renaissance", image: styleRoyal, description: "Regal & majestic" },
  { name: "Oil Painting", image: styleOil, description: "Classic & timeless" },
  { name: "Christmas Magic", image: styleChristmas, description: "Festive & warm" },
  { name: "Watercolor Dream", image: styleWatercolor, description: "Soft & ethereal" },
  { name: "Pop Art", image: stylePop, description: "Bold & vibrant" },
  { name: "Minimalist Line", image: styleMinimal, description: "Clean & elegant" },
];

const ArtStyles = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Art Styles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from a variety of stunning artistic styles to perfectly capture your pet's personality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {styles.map((style, index) => (
            <motion.a
              key={style.name}
              href="https://creaidesign.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={style.image} 
                    alt={`${style.name} pet portrait style`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    {style.name}
                  </h3>
                  <p className="text-muted-foreground">{style.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a 
            href="https://creaidesign.etsy.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Shop All Styles
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ArtStyles;
