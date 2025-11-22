import { Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-32">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">Vedic Luxe</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where ancient wisdom meets modern science for timeless beauty.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Bestsellers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Bundles</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Ingredients</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Vedic Luxe. All rights reserved. Crafted with care for your skin.</p>
        </div>
      </div>
    </footer>
  );
};
