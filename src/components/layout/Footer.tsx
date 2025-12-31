import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      {/* Wavy top border */}
      <div className="h-4 bg-background" style={{
        clipPath: "polygon(0 100%, 2% 80%, 4% 100%, 6% 80%, 8% 100%, 10% 80%, 12% 100%, 14% 80%, 16% 100%, 18% 80%, 20% 100%, 22% 80%, 24% 100%, 26% 80%, 28% 100%, 30% 80%, 32% 100%, 34% 80%, 36% 100%, 38% 80%, 40% 100%, 42% 80%, 44% 100%, 46% 80%, 48% 100%, 50% 80%, 52% 100%, 54% 80%, 56% 100%, 58% 80%, 60% 100%, 62% 80%, 64% 100%, 66% 80%, 68% 100%, 70% 80%, 72% 100%, 74% 80%, 76% 100%, 78% 80%, 80% 100%, 82% 80%, 84% 100%, 86% 80%, 88% 100%, 90% 80%, 92% 100%, 94% 80%, 96% 100%, 98% 80%, 100% 100%)"
      }} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo size="lg" showIcon={false} linkTo="" className="text-primary-foreground [&_span]:text-primary-foreground" />
            <p className="font-body text-primary-foreground/90 leading-relaxed">
              Named after a mother's love, protecting Earth like the child it is. 
              We match sustainable solutions with those who need them.
            </p>
            <p className="font-body text-sm text-primary-foreground/80 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 fill-heart-pink text-heart-pink" /> in India
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="font-body hover:underline transition-all">
                About Us
              </Link>
              <Link to="/services" className="font-body hover:underline transition-all">
                Our Services
              </Link>
              <Link to="/mission" className="font-body hover:underline transition-all">
                Our Mission
              </Link>
              <Link to="/contact" className="font-body hover:underline transition-all">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">Get In Touch</h3>
            <div className="space-y-3 font-body">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>India</span>
              </div>
              <a href="mailto:hello@taraprithvico.com" className="flex items-center gap-3 hover:underline">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>hello@taraprithvico.com</span>
              </a>
              <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-3 hover:underline">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+91 XXX XXX XXXX</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-dashed border-primary-foreground/30 text-center font-body text-sm text-primary-foreground/80">
          <p>© {new Date().getFullYear()} Tara PrithviCo. All rights reserved.</p>
          <p className="mt-1 font-display text-lg">
            🌱 Together, we save Earth 🌱
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
