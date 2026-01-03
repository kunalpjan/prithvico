import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground mt-auto border-t-2 border-dashed border-primary/30">
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo size="lg" linkTo="" />
            <p className="font-body text-foreground/80 leading-relaxed">
              Named after a mother's love, protecting Earth like the child it is. 
              We match sustainable solutions with those who need them.
            </p>
            <p className="font-body text-sm text-foreground/70 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 fill-heart-pink text-heart-pink" /> in India
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="font-body text-foreground/80 hover:text-primary hover:underline transition-all">
                About Us
              </Link>
              <Link to="/services" className="font-body text-foreground/80 hover:text-primary hover:underline transition-all">
                Our Services
              </Link>
              <Link to="/mission" className="font-body text-foreground/80 hover:text-primary hover:underline transition-all">
                Our Mission
              </Link>
              <Link to="/contact" className="font-body text-foreground/80 hover:text-primary hover:underline transition-all">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-foreground">Get In Touch</h3>
            <div className="space-y-3 font-body text-foreground/80">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>India</span>
              </div>
              <a href="mailto:hello@taraprithvico.com" className="flex items-center gap-3 hover:text-primary hover:underline transition-all">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>hello@taraprithvico.com</span>
              </a>
              <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-3 hover:text-primary hover:underline transition-all">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>+91 XXX XXX XXXX</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-dashed border-primary/30 text-center font-body text-sm text-foreground/70">
          <p>© {new Date().getFullYear()} Tara PrithviCo. All rights reserved.</p>
          <p className="mt-1 font-display text-lg text-foreground">
            🌱 Together, we save Earth 🌱
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
