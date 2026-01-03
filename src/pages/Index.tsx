import { Link } from "react-router-dom";
import { ArrowRight, Recycle, Leaf, Zap, FileText, Package, Banknote, Trash2, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/ServiceCard";
import EarthMascot from "@/components/EarthMascot";
const services = [{
  title: "Metal Scrap Procurement",
  description: "Connecting suppliers with recyclers for sustainable metal processing.",
  icon: Recycle,
  color: "bg-earth-green"
}, {
  title: "Waste Management",
  description: "Smart solutions to reduce, reuse, and responsibly dispose of waste.",
  icon: Trash2,
  color: "bg-ocean-blue"
}, {
  title: "Renewable Energy",
  description: "Expert consulting for solar, wind, and sustainable energy adoption.",
  icon: Zap,
  color: "bg-sun-yellow"
}, {
  title: "Plastic Credits & EPR",
  description: "Navigate plastic credits and Extended Producer Responsibility with ease.",
  icon: Leaf,
  color: "bg-primary"
}, {
  title: "ESG Reporting",
  description: "Comprehensive environmental, social, and governance reporting services.",
  icon: FileText,
  color: "bg-secondary"
}, {
  title: "Alternative Materials",
  description: "Sourcing eco-friendly raw materials for sustainable manufacturing.",
  icon: Package,
  color: "bg-warm-orange"
}, {
  title: "Corporate Lending",
  description: "Unsecured loans to fuel your sustainable business growth.",
  icon: Banknote,
  color: "bg-heart-pink"
}, {
  title: "Green Logistics",
  description: "Low emission transport with EVs and sustainable delivery solutions.",
  icon: Truck,
  color: "bg-earth-green"
}];
const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">☁️</div>
          <div className="absolute top-40 right-20 text-5xl opacity-20 animate-float" style={{
          animationDelay: "1s"
        }}>☁️</div>
          <div className="absolute bottom-20 left-1/4 text-4xl opacity-20 animate-float" style={{
          animationDelay: "2s"
        }}>🌳</div>
          <div className="absolute bottom-32 right-1/4 text-5xl opacity-20 animate-float" style={{
          animationDelay: "1.5s"
        }}>🌲</div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-6 animate-fade-in-up">

              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Saving Earth,
                <br />
                <span className="text-primary">One Match</span>
                <br />
                at a Time
              </h1>

              <p className="font-body text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              <span className="text-primary font-semibold">Tara</span> means love, 
                and <span className="text-earth-green font-semibold">Prithvi</span> means Earth.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/services">
                  <Button size="lg" className="hand-drawn-btn bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8">
                    Explore Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="hand-drawn-btn font-bold text-lg px-8">
                    Our Story 💚
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right - Earth Mascot */}
            <div className="flex justify-center items-center">
              <EarthMascot />
            </div>
          </div>
        </div>
      </section>

      {/* Story Snippet Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <span className="text-5xl">💝</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              A Company Born from Love
            </h2>
            <blockquote className="font-body text-xl md:text-2xl text-muted-foreground italic leading-relaxed">
              "Tara is my mother's name — and I love my mom. Just as she nurtured and protected me, 
              Tara PrithviCo nurtures and protects our Earth."
            </blockquote>
            <p className="font-body text-lg text-muted-foreground">Like a child, our planet needs love, care, and protection. We're here to make that happen.<span className="text-primary font-semibold">Prithvi</span> means Earth in Sanskrit. Like a child, our planet needs love, care, and protection. We're here to make that happen.
            </p>
            <Link to="/about" className="inline-block">
              <Button variant="link" className="font-body text-primary font-semibold text-lg">
                Read Our Full Story <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-4xl mb-4 block">🔗</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              We Match Solutions with Needs
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              From metal recycling to renewable energy, we connect businesses 
              with sustainable solutions that reduce carbon emissions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
            {services.map((service, index) => <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} color={service.color} delay={index * 100} />)}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="hand-drawn-btn bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
                View All Services <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-10 left-10 text-8xl">🌍</div>
          <div className="absolute bottom-10 right-10 text-8xl">🌱</div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Ready to Make a Difference?
            </h2>
            <p className="font-body text-xl text-primary-foreground/90">
              Whether you're looking for sustainable solutions or have them to offer, 
              let's connect and reduce carbon emissions together.
            </p>
            <Link to="/contact">
              <Button size="lg" className="hand-drawn-btn bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-10 py-6">
                Let's Talk! 💬
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;