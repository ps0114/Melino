import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-2xl font-serif font-semibold tracking-wider hover:text-muted-foreground transition-colors"
          >
            MELINO
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("products")}
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("values")}
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Our Values
            </button>
            <button
              onClick={() => scrollToSection("bestsellers")}
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Best Sellers
            </button>
            <button
              onClick={() => scrollToSection("concerns")}
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Skin Concerns
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
