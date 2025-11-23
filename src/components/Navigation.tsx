import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
  };

  const menuItems = [
    { label: "Products", id: "products" },
    { label: "Our Values", id: "values" },
    { label: "Best Sellers", id: "bestsellers" },
    { label: "Skin Concerns", id: "concerns" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            // className="hover:opacity-80 transition-opacity"
          >
            <img 
              src={logo} 
              alt="Melino" 
              className="h-15 md:h-16 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "md:hidden p-2 rounded-md hover:bg-accent transition-all duration-300",
                  "transform hover:scale-110 active:scale-95",
                  isOpen && "rotate-90"
                )}
                aria-label="Open menu"
              >
                <Menu className={cn(
                  "h-6 w-6 transition-transform duration-300",
                  isOpen && "rotate-180"
                )} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85vw] sm:w-[400px] bg-background/95 backdrop-blur-lg border-l-2 border-primary/20 p-0 [&>button:last-child]:hidden"
            >
              <div className="flex flex-col h-full px-6 py-6">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-border/40 animate-in fade-in slide-in-from-top-4 duration-500">
                  <img 
                    src={logo} 
                    alt="Melino" 
                    className="h-12 w-auto"
                  />
                  <SheetTrigger asChild>
                    <button
                      className="p-2 rounded-md hover:bg-accent transition-all duration-300 hover:rotate-90 active:scale-95"
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </SheetTrigger>
                </div>

                {/* Mobile Menu Items */}
                <nav className="flex flex-col mt-4">
                  {menuItems.map((item, index) => (
                    <SheetTrigger key={item.id} asChild>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          "group text-left px-5 py-4 rounded-xl text-base font-medium",
                          "hover:bg-accent hover:text-accent-foreground",
                          "transition-all duration-300 ease-out",
                          "transform hover:translate-x-3 hover:scale-[1.02]",
                          "border-b border-border/40",
                          "animate-in fade-in slide-in-from-right-8",
                          "bg-gradient-to-r from-transparent to-transparent hover:from-accent/50 hover:to-transparent",
                          "active:scale-95"
                        )}
                        style={{
                          animationDelay: `${index * 80 + 100}ms`,
                          animationFillMode: "both",
                        }}
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          {item.label}
                        </span>
                      </button>
                    </SheetTrigger>
                  ))}
                </nav>

                {/* Mobile Menu Footer */}
                <div className="mt-auto pt-8 border-t border-border/40 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
                  <p className="text-sm text-muted-foreground text-center">
                    Discover your perfect skincare
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
