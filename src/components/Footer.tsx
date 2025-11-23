import { Facebook, Instagram, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div>
            <h3 className="font-serif text-3xl font-bold mb-2">CreAIDesign</h3>
            <p className="text-secondary-foreground/80">
              Transforming pet photos into timeless art
            </p>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="https://creaidesign.etsy.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="https://creaidesign.etsy.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Visit our Instagram page"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://creaidesign.etsy.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Visit our Twitter page"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>

          <div className="pt-8 border-t border-secondary-foreground/20">
            <a 
              href="https://creaidesign.etsy.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-semibold hover:text-accent transition-colors"
            >
              Visit Our Official Etsy Shop
              <span className="text-2xl">→</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-secondary-foreground/70">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-current text-primary" />
            <span>for pet lovers everywhere</span>
          </div>

          <p className="text-sm text-secondary-foreground/70">
            © 2024 CreAIDesign. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
