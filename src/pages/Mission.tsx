import { Link } from "react-router-dom";
import { ArrowRight, Heart, Handshake, Globe, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import EarthMascot from "@/components/EarthMascot";

const Mission = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <span className="text-6xl">🎯</span>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground">
                Our Mission
              </h1>
              <p className="font-body text-xl text-muted-foreground leading-relaxed">
                To reduce carbon emissions by matching sustainable solutions with businesses 
                that need them. We're building bridges between supply and demand for a greener world.
              </p>
            </div>
            <div className="flex justify-center">
              <EarthMascot />
            </div>
          </div>
        </div>
      </section>

      {/* Why Earth Needs Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Why Earth Needs Us
            </h2>
            <div className="font-body text-lg text-muted-foreground space-y-4 leading-relaxed">
              <p>
                Our planet is warming. Carbon emissions are rising. And yet, solutions exist — 
                they're just not reaching the people who need them.
              </p>
              <p>
                <span className="font-semibold text-foreground">That's where we come in.</span>
              </p>
              <p>
                We're the matchmakers. The connectors. The bridge between those who have 
                sustainable solutions and those who need them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              How We Make a Difference
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Our approach is simple but powerful
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 stagger-children">
            {/* Step 1 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-display text-4xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">Listen</h3>
              <p className="font-body text-muted-foreground">
                We understand your sustainability challenges and goals
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="font-display text-4xl font-bold text-secondary">2</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">Match</h3>
              <p className="font-body text-muted-foreground">
                We connect you with the right solutions from our network
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
                <span className="font-display text-4xl font-bold text-accent-foreground">3</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">Implement</h3>
              <p className="font-body text-muted-foreground">
                We guide you through seamless adoption
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-earth-green/20 flex items-center justify-center">
                <span className="font-display text-4xl font-bold text-earth-green">4</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">Impact</h3>
              <p className="font-body text-muted-foreground">
                Together, we reduce carbon emissions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
            What We Believe
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <Heart className="w-12 h-12 mx-auto" />
              <h3 className="font-display text-2xl font-bold">Love First</h3>
              <p className="font-body text-primary-foreground/90">
                Everything we do is driven by love — for our planet, for future generations, for each other.
              </p>
            </div>

            <div className="text-center space-y-4">
              <Handshake className="w-12 h-12 mx-auto" />
              <h3 className="font-display text-2xl font-bold">Collaboration</h3>
              <p className="font-body text-primary-foreground/90">
                No one can save the planet alone. We believe in the power of partnerships.
              </p>
            </div>

            <div className="text-center space-y-4">
              <Globe className="w-12 h-12 mx-auto" />
              <h3 className="font-display text-2xl font-bold">Accessibility</h3>
              <p className="font-body text-primary-foreground/90">
                Sustainability should be accessible to every business, big or small.
              </p>
            </div>

            <div className="text-center space-y-4">
              <TrendingDown className="w-12 h-12 mx-auto" />
              <h3 className="font-display text-2xl font-bold">Impact</h3>
              <p className="font-body text-primary-foreground/90">
                Every action matters. Every emission reduced is a win for Earth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-5xl">🌱</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Be Part of the Change
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Whether you're a corporation looking to reduce emissions or a solution provider 
              wanting to make an impact — we'd love to connect with you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="hand-drawn-btn bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                  Contact Us <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="hand-drawn-btn font-bold">
                  Explore Services 🔗
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Mission;
