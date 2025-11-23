import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const Navbar = ({ currentView, onViewChange }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", view: "home" },
    { label: "Create Portrait", href: "https://creaidesign.etsy.com", external: true },
    { label: "About", view: "about" },
    { label: "Gift Cards", href: "https://creaidesign.etsy.com", external: true },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onViewChange("home")}
          >
            <Sparkles className="w-8 h-8 text-primary" />
            <span className="font-serif text-2xl font-bold text-foreground">
              CreAIDesign
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.label}
                  onClick={() => onViewChange(link.view!)}
                  className={`text-foreground/80 hover:text-primary transition-colors font-medium ${
                    currentView === link.view ? "text-primary" : ""
                  }`}
                >
                  {link.label}
                </button>
              )
            )}
            <a
              href="https://creaidesign.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                Start Transformation
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => {
                      onViewChange(link.view!);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left text-foreground/80 hover:text-primary transition-colors font-medium py-2 ${
                      currentView === link.view ? "text-primary" : ""
                    }`}
                  >
                    {link.label}
                  </button>
                )
              )}
              <a
                href="https://creaidesign.etsy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                  Start Transformation
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
