import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { ValueCard } from "@/components/ValueCard";
import { ConcernCard } from "@/components/ConcernCard";
import { Footer } from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Eye, Leaf, Heart, Microscope, Droplet } from "lucide-react";

import foamingFacewash from "@/assets/foaming-facewash.jpg";
import skinToner from "@/assets/skin-toner.jpg";
import collagenElixir from "@/assets/collagen-elixir.jpg";
import moisturizer from "@/assets/moisturizer.jpg";

const Index = () => {
  const { ref: productsRef, isVisible: productsVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: bestsellersRef, isVisible: bestsellersVisible } = useScrollAnimation();
  const { ref: concernsRef, isVisible: concernsVisible } = useScrollAnimation();

  const products = [
    {
      image: foamingFacewash,
      name: "Foaming Facewash",
      price: "$28",
      description: "Gentle cleansing foam enriched with neem and turmeric extracts to purify and brighten skin.",
      ingredients: ["Neem Extract", "Turmeric", "Aloe Vera", "Glycerin"],
    },
    {
      image: skinToner,
      name: "Skin Toner",
      price: "$32",
      description: "Balancing rose water toner with witch hazel to refine pores and restore natural pH.",
      ingredients: ["Rose Water", "Witch Hazel", "Hyaluronic Acid", "Vitamin B5"],
    },
    {
      image: collagenElixir,
      name: "Collagen Booster Elixir",
      price: "$68",
      description: "Advanced peptide serum with ashwagandha to boost collagen production and reduce fine lines.",
      ingredients: ["Peptide Complex", "Ashwagandha", "Vitamin C", "Squalane"],
      isBestseller: true,
    },
    {
      image: moisturizer,
      name: "Hydrating Moisturizer",
      price: "$45",
      description: "Rich cream with sandalwood and ceramides for deep hydration and lasting moisture.",
      ingredients: ["Sandalwood Oil", "Ceramides", "Shea Butter", "Niacinamide"],
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest botanicals and scientifically proven actives in every formula.",
    },
    {
      icon: Eye,
      title: "Complete Transparency",
      description: "Full ingredient disclosure with detailed sourcing information for every product.",
    },
    {
      icon: Heart,
      title: "Suitable for All Skin",
      description: "Gentle formulations designed to work harmoniously with every skin type.",
    },
    {
      icon: Leaf,
      title: "Sustainable & Ethical",
      description: "Eco-conscious packaging and cruelty-free practices throughout our supply chain.",
    },
    {
      icon: Microscope,
      title: "Science-Backed",
      description: "Clinical studies and dermatological testing ensure safety and efficacy.",
    },
    {
      icon: Droplet,
      title: "Gentle & Effective",
      description: "Powerful results without harsh chemicals or unnecessary irritants.",
    },
  ];

  const concerns = [
    {
      concern: "Acne & Breakouts",
      solution: "Try our Foaming Facewash with neem and salicylic acid to purify pores and prevent breakouts.",
    },
    {
      concern: "Aging & Fine Lines",
      solution: "Our Collagen Booster Elixir with peptides and retinol reduces wrinkles and firms skin.",
    },
    {
      concern: "Dryness & Dehydration",
      solution: "Hydrating Moisturizer with ceramides and hyaluronic acid restores moisture balance.",
    },
    {
      concern: "Pigmentation & Dark Spots",
      solution: "Vitamin C serum and turmeric extracts brighten and even out skin tone naturally.",
    },
    {
      concern: "Redness & Sensitivity",
      solution: "Soothing toner with rose water and chamomile calms irritation and reduces redness.",
    },
    {
      concern: "Large Pores",
      solution: "Skin Toner with witch hazel and niacinamide minimizes pore appearance effectively.",
    },
    {
      concern: "Dull Complexion",
      solution: "Exfoliating serum with AHAs and botanical extracts reveals brighter, radiant skin.",
    },
    {
      concern: "Environmental Damage",
      solution: "Antioxidant-rich formulas with vitamin E and green tea protect against free radicals.",
    },
    {
      concern: "Loss of Elasticity",
      solution: "Peptide treatments with ashwagandha restore firmness and improve skin structure.",
    },
    {
      concern: "Uneven Texture",
      solution: "Gentle exfoliation with natural enzymes smooths and refines skin texture beautifully.",
    },
    {
      concern: "Under-Eye Circles",
      solution: "Caffeine-infused eye cream with peptides reduces puffiness and dark circles.",
    },
    {
      concern: "Sun Damage",
      solution: "Repairing serums with niacinamide and antioxidants help reverse sun-induced damage.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Products Section */}
      <section id="products" className="py-20 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-6">
          <header
            ref={productsRef}
            className={`text-center mb-16 transition-all duration-700 ${
              productsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thoughtfully crafted formulations that merge Ayurvedic botanicals with modern skincare science.
            </p>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-6">
          <header
            ref={valuesRef}
            className={`text-center mb-16 transition-all duration-700 ${
              valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4">What We Believe In</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision, from ingredient sourcing to packaging design.
            </p>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section id="bestsellers" className="py-20 bg-secondary/20 scroll-mt-20">
        <div className="container mx-auto px-6">
          <header
            ref={bestsellersRef}
            className={`text-center mb-16 transition-all duration-700 ${
              bestsellersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Best Sellers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most loved products, trusted by thousands for visible results.
            </p>
          </header>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProductCard
              image={collagenElixir}
              name="Collagen Booster Elixir"
              price="$68"
              description="Advanced peptide serum with ashwagandha to boost collagen production and reduce fine lines."
              ingredients={["Peptide Complex", "Ashwagandha", "Vitamin C", "Squalane"]}
              isBestseller
            />
            <ProductCard
              image={foamingFacewash}
              name="Foaming Facewash"
              price="$28"
              description="Gentle cleansing foam enriched with neem and turmeric extracts to purify and brighten skin."
              ingredients={["Neem Extract", "Turmeric", "Aloe Vera", "Glycerin"]}
              isBestseller
            />
          </div>
        </div>
      </section>

      {/* Skin Concerns Section */}
      <section id="concerns" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-6">
          <header
            ref={concernsRef}
            className={`text-center mb-16 transition-all duration-700 ${
              concernsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Common Skin Concerns We Address</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find targeted solutions for your specific skincare needs and concerns.
            </p>
          </header>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {concerns.map((item) => (
              <ConcernCard key={item.concern} {...item} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
