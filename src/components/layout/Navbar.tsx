import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Our Mission", path: "/mission" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-dashed border-primary/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-primary-foreground" strokeWidth={3} />
            </div>
            <div className="flex flex-col">
              <span className="font-logo text-xl md:text-2xl font-bold text-primary leading-none">
                तारा पृथ्वीको
              </span>
              <span className="font-logo text-lg md:text-xl font-semibold text-foreground leading-tight">
                Tara PrithviCo
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-body font-semibold text-sm transition-all hover:bg-primary/10 ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10 hand-drawn-btn"
                    : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="ml-2 hand-drawn-btn bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
                Let's Talk! 💬
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-dashed border-primary/30 pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg font-body font-semibold transition-all ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:bg-primary/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-2 hand-drawn-btn bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
                  Let's Talk! 💬
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
