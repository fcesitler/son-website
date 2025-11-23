import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Image, Palette, ExternalLink } from "lucide-react";

type FormatType = "digital" | "print" | "canvas";

interface FormatContent {
  icon: React.ReactNode;
  title: string;
  features: string[];
  buttonText: string;
}

const formatData: Record<FormatType, FormatContent> = {
  digital: {
    icon: <FileText className="w-12 h-12 text-primary" />,
    title: "High-res Digital File",
    features: [
      'Ready for printing up to 24x36"',
      "Fastest delivery by email",
      "Unlimited revisions included",
    ],
    buttonText: "Order Digital on Etsy",
  },
  print: {
    icon: <Image className="w-12 h-12 text-primary" />,
    title: "Premium Print",
    features: [
      "Archival matte paper with rich color",
      "Multiple sizes available",
      "Gift-ready packaging",
    ],
    buttonText: "Order Print on Etsy",
  },
  canvas: {
    icon: <Palette className="w-12 h-12 text-primary" />,
    title: "Stretched Canvas",
    features: [
      "Gallery-wrapped, ready to hang",
      "Vibrant, long-lasting inks",
      "Free secure shipping",
    ],
    buttonText: "Order Canvas on Etsy",
  },
};

const FormatSelector = () => {
  const [activeFormat, setActiveFormat] = useState<FormatType>("digital");
  const currentContent = formatData[activeFormat];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Choose your format
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Switch between Digital, Print, or Canvas
          </p>
        </motion.div>

        {/* Tab Controller */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1.5 bg-muted rounded-full shadow-sm">
            {(["digital", "print", "canvas"] as FormatType[]).map((format) => (
              <button
                key={format}
                onClick={() => setActiveFormat(format)}
                className={`
                  px-6 py-3 rounded-full font-sans font-medium text-sm md:text-base
                  transition-all duration-300 capitalize
                  ${
                    activeFormat === format
                      ? "bg-background text-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                {format}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFormat}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-card rounded-[2rem] p-8 md:p-12 shadow-xl border border-border"
          >
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="mb-6">{currentContent.icon}</div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-card-foreground mb-8">
                {currentContent.title}
              </h3>

              {/* Features List */}
              <ul className="space-y-4 mb-10 max-w-md">
                {currentContent.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-left"
                  >
                    <span className="text-primary text-xl mt-0.5">✓</span>
                    <span className="text-muted-foreground font-sans">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="https://creaidesign.etsy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-sans font-semibold text-lg hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                {currentContent.buttonText}
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FormatSelector;
