import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon: Icon, color, delay = 0 }: ServiceCardProps) => {
  return (
    <Link
      to="/services"
      className="group block p-6 bg-card rounded-2xl crayon-border hover:scale-105 transition-all duration-300 doodle-shadow"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div 
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${color} group-hover:animate-wiggle transition-transform`}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="font-body text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </Link>
  );
};

export default ServiceCard;
