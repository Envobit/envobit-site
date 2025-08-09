import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: { href: string; label: string; isRoute?: boolean }[] = [
    { href: "#services", label: "Services" },
    { href: "#methodology", label: "Methodology" },
    { href: "#team", label: "Team" },
    { href: "#results", label: "Results" },
    { href: "/contact", label: "Contact", isRoute: true },
  ];

  const handleNavClick = (href: string, isRoute?: boolean) => {
    if (isRoute) {
      setLocation(href);
    } else {
      // If we are already on the homepage, just scroll.
      if (window.location.pathname === "/") {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Otherwise, navigate to the homepage with the hash.
        setLocation(`/${href}`);
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-morphism shadow-medium"
          : "bg-white/95 backdrop-blur-sm border-b border-supporting-gray"
      }`}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center cursor-pointer">
            <h1 className="text-2xl font-semibold text-navy tracking-premium font-montserrat">
              Envobit
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href, link.isRoute)}
                className="text-navy hover:text-light-blue transition-colors duration-200"
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-light-blue hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-medium"
              onClick={() => setLocation("/contact")}
              data-testid="button-book-strategy-call"
            >
              Book Strategy Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-supporting-gray bg-white py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href, link.isRoute)}
                  className="text-left text-navy hover:text-light-blue transition-colors duration-200 px-2"
                  data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="bg-light-blue hover:bg-blue-600 text-white w-full mt-4"
                onClick={() => setLocation("/contact")}
                data-testid="button-mobile-book-strategy-call"
              >
                Book Strategy Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
