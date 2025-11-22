import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-product.jpg";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight">
              Where Vedic Wisdom Meets Modern Science
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Experience the perfect harmony of ancient Ayurvedic traditions and cutting-edge scientific innovation. 
              Our luxurious formulations blend time-honored botanicals with clinically proven actives for radiant, 
              healthy skin.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-8">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Explore Ingredients
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Luxury skincare products with natural botanicals"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
