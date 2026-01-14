import { Link } from "react-router-dom";
import { TrendingDown } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  linkTo?: string;
  className?: string;
}

const Logo = ({ size = "md", showIcon = true, linkTo = "/", className = "" }: LogoProps) => {
  const sizeClasses = {
    sm: {
      icon: "w-8 h-8",
      iconInner: "w-4 h-4",
      text: "text-lg",
      shirorekha: "h-[2px]",
    },
    md: {
      icon: "w-12 h-12",
      iconInner: "w-6 h-6",
      text: "text-xl md:text-2xl",
      shirorekha: "h-[2.5px]",
    },
    lg: {
      icon: "w-14 h-14",
      iconInner: "w-7 h-7",
      text: "text-2xl md:text-3xl",
      shirorekha: "h-[3px]",
    },
  };

  const sizes = sizeClasses[size];

  const LogoContent = () => (
    <div className={`flex items-end gap-2 ${className}`}>
      {showIcon && (
        <div className={`${sizes.icon} rounded-full bg-primary flex items-center justify-center flex-shrink-0`}>
          <TrendingDown className={`${sizes.iconInner} text-primary-foreground`} strokeWidth={3} />
        </div>
      )}
      <span className={`font-logo ${sizes.text} font-bold flex flex-col items-start leading-none`}>
        <span className="text-foreground font-devanagari font-semibold -mb-2">तारा</span>
        <span className="text-foreground tracking-wider">PrithviCo</span>
      </span>
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="group">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
};

export default Logo;
