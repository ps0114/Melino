import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-product.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Hero = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation();

  return (
    <section className="min-h-screen flex items-center pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div
              ref={titleRef}
              className={`transition-all duration-700 ${
                titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight">
                Where Vedic Wisdom Meets Modern Science
              </h1>
            </div>
            <div
              ref={textRef}
              className={`transition-all duration-700 delay-150 ${
                textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Experience the perfect harmony of ancient Ayurvedic traditions and cutting-edge scientific innovation. 
                Our luxurious formulations blend time-honored botanicals with clinically proven actives for radiant, 
                healthy skin.
              </p>
            </div>
            <div
              ref={buttonRef}
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
                buttonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
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
