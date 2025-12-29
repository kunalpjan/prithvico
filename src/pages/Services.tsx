import { Recycle, Leaf, Zap, FileText, Package, Banknote, Trash2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const services = [
  {
    id: "metal-scrap",
    title: "Metal Scrap Procurement",
    description: "We connect metal scrap suppliers with recyclers and manufacturers, ensuring efficient processing and reduced environmental impact.",
    icon: Recycle,
    color: "bg-earth-green",
    benefits: [
      "Direct connections with verified recyclers",
      "Fair market pricing",
      "Reduced waste to landfills",
      "Complete documentation support"
    ]
  },
  {
    id: "waste-management",
    title: "Waste Management Solutions",
    description: "Comprehensive waste management strategies that minimize environmental impact while maximizing resource recovery.",
    icon: Trash2,
    color: "bg-ocean-blue",
    benefits: [
      "Waste audits and assessments",
      "Customized disposal solutions",
      "Recycling program implementation",
      "Regulatory compliance support"
    ]
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy Consulting",
    description: "Expert guidance on transitioning to solar, wind, and other sustainable energy sources for your business.",
    icon: Zap,
    color: "bg-sun-yellow",
    benefits: [
      "Energy audits and analysis",
      "Solar/wind feasibility studies",
      "Vendor selection assistance",
      "ROI projections and planning"
    ]
  },
  {
    id: "plastic-credits",
    title: "Plastic Credits & EPR",
    description: "Navigate plastic credits and Extended Producer Responsibility regulations with our specialized expertise.",
    icon: Leaf,
    color: "bg-primary",
    benefits: [
      "EPR compliance management",
      "Plastic credit procurement",
      "Documentation and reporting",
      "Regulatory liaison services"
    ]
  },
  {
    id: "esg-reporting",
    title: "ESG Reporting Services",
    description: "Comprehensive Environmental, Social, and Governance reporting to showcase your sustainability commitment.",
    icon: FileText,
    color: "bg-secondary",
    benefits: [
      "ESG framework alignment",
      "Data collection and analysis",
      "Report drafting and design",
      "Stakeholder communication support"
    ]
  },
  {
    id: "alternative-materials",
    title: "Alternative Raw Material Procurement",
    description: "Source eco-friendly and sustainable raw materials for your manufacturing and production needs.",
    icon: Package,
    color: "bg-warm-orange",
    benefits: [
      "Sustainable supplier network",
      "Quality assurance",
      "Cost-effective alternatives",
      "Supply chain optimization"
    ]
  },
  {
    id: "corporate-lending",
    title: "Corporate Lending / Unsecured Loans",
    description: "Access financing to fuel your sustainable business initiatives and green projects.",
    icon: Banknote,
    color: "bg-heart-pink",
    benefits: [
      "Unsecured loan options",
      "Competitive interest rates",
      "Quick processing",
      "Flexible repayment terms"
    ]
  }
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-20 left-20 text-9xl">🔗</div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <span className="text-6xl">🌿</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground">
              Our Services
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              We match sustainable solutions with businesses that need them. 
              From metal recycling to renewable energy — we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`bg-card rounded-3xl crayon-border p-8 md:p-12 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${service.color}`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                      {service.title}
                    </h2>
                    <p className="font-body text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <Link to="/contact">
                      <Button className="hand-drawn-btn bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                        Get Started <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>

                  <div className={`space-y-4 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      What You Get
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                          <span className="font-body text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-5xl">🤝</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Need a Custom Solution?
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Every business is unique. Let's discuss your specific needs and create 
              a tailored sustainability strategy together.
            </p>
            <Link to="/contact">
              <Button size="lg" className="hand-drawn-btn bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg">
                Let's Talk! 💬
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
