import { Heart, Target, Eye, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-20 right-20 text-9xl">💚</div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <span className="text-6xl">👩‍👧</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground">
              Our Story
            </h1>
            <p className="font-body text-xl text-muted-foreground">
              A company born from love, dedicated to protecting our planet.
            </p>
          </div>
        </div>
      </section>

      {/* The Tara Story */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl crayon-border p-8 md:p-12 space-y-6">
              <div className="flex justify-center">
                <div className="w-24 h-24 rounded-full bg-heart-pink/20 flex items-center justify-center">
                  <Heart className="w-12 h-12 text-heart-pink fill-heart-pink" />
                </div>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-foreground">
                Tara is My Mother's Name
              </h2>

              <div className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
                <p className="text-center text-xl font-semibold text-primary">
                  And I love my mom. ❤️
                </p>

                <p>
                  Just as my mother nurtured and protected me through every step of my life, 
                  I wanted to create something that nurtures and protects the world we all share.
                </p>

                <p>
                  <span className="text-primary font-semibold">"Prithvi"</span> means Earth in Sanskrit. 
                  When I think of our planet, I see it as a child — vulnerable, precious, and deserving 
                  of all the love and care we can give.
                </p>

                <p>
                  <span className="font-semibold text-foreground">Tara PrithviCo</span> was born from this 
                  simple yet powerful idea: to protect Earth the way a mother protects her child. 
                  We're not just a business — we're a mission to reduce carbon emissions and create 
                  a sustainable future for generations to come.
                </p>

                <p className="text-center pt-4">
                  <span className="font-display text-2xl text-primary">
                    "Earth is a child, and we are its protectors."
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 crayon-border-green doodle-shadow text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground">Our Mission</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                To reduce carbon emissions by connecting sustainable solutions with businesses 
                that need them. We're matchmakers for a greener planet.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 crayon-border-green doodle-shadow text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-secondary/20 flex items-center justify-center">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground">Our Vision</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                A world where every business, big or small, has access to sustainable solutions. 
                A future where commerce and planet thrive together.
              </p>
            </div>

            {/* Values */}
            <div className="bg-card rounded-2xl p-8 crayon-border-green doodle-shadow text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground">Our Values</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Love for the planet, integrity in our work, innovation in our solutions, 
                and partnership with every client we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold">Why We Exist</h2>
            <div className="font-body text-xl leading-relaxed space-y-4">
              <p>
                Climate change isn't just an environmental issue — it's about the world 
                we leave for our children.
              </p>
              <p>
                Many businesses want to be sustainable but don't know where to start. 
                Many solution providers struggle to reach those who need them.
              </p>
              <p className="font-semibold">
                We bridge that gap. We're the matchmakers who bring supply and demand together 
                for a common cause: reducing carbon emissions.
              </p>
            </div>
            <Link to="/contact">
              <Button size="lg" className="hand-drawn-btn bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
                Join Our Mission 🌱
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
