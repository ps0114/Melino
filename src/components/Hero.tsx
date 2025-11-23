import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.latest.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Hero = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation();

  return (
    <section className="min-h-screen flex items-center pt-20 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div
              ref={titleRef}
              className={`transition-all duration-700 ${
                titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight">
                Where Vedic Wisdom Meets Modern Science
              </h1>
            </div>
            <div
              ref={textRef}
              className={`transition-all duration-700 delay-150 ${
                textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
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
              <Button size="lg" variant="outline" className="px-6 md:px-8 w-full sm:w-auto">
                Explore Ingredients
              </Button>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div 
              className="rounded-2xl overflow-hidden w-full sm:w-[90%] md:w-[85%] lg:w-[80%]"
              style={{
                boxShadow: '0 25px 50px -12px rgba(107, 114, 128, 0.4), 0 10px 20px -5px rgba(107, 114, 128, 0.2)'
              }}
            >
              <img 
                src={heroImage} 
                alt="Luxury skincare products with natural botanicals"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 h-32 md:w-48 md:h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
