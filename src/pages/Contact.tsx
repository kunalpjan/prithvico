import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const services = [
  "Metal Scrap Procurement",
  "Waste Management Solutions",
  "Renewable Energy Consulting",
  "Plastic Credits & EPR",
  "ESG Reporting Services",
  "Alternative Raw Material Procurement",
  "Corporate Lending / Unsecured Loans",
  "Other / General Inquiry"
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent! 🌱",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });

    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-20 right-20 text-9xl">💬</div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <span className="text-6xl">📬</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground">
              Let's Connect!
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to make a difference? Have questions about our services? 
              We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card rounded-3xl crayon-border p-8 md:p-10">
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-body font-semibold">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="What should we call you?"
                    required
                    className="font-body crayon-border focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-body font-semibold">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="font-body crayon-border focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-body font-semibold">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXX XXX XXXX"
                    className="font-body crayon-border focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="font-body font-semibold">
                    Which service interests you?
                  </Label>
                  <Select 
                    value={formData.service} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                  >
                    <SelectTrigger className="font-body crayon-border">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service} className="font-body">
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-body font-semibold">
                    Your Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your sustainability goals or questions..."
                    required
                    rows={5}
                    className="font-body crayon-border focus:ring-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full hand-drawn-btn bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-muted/50 rounded-3xl crayon-border p-8">
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-foreground">Location</h3>
                      <p className="font-body text-muted-foreground">India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-foreground">Email</h3>
                      <a 
                        href="mailto:kunal@prithvico.in" 
                        className="font-body text-muted-foreground hover:text-primary transition-colors"
                      >
                        kunal@prithvico.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-foreground">Phone</h3>
                      <a 
                        href="tel:+916382389585" 
                        className="font-body text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 63823 89585
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-earth-green/20 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-earth-green" />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-foreground">WhatsApp</h3>
                      <a 
                        href="https://wa.me/916382389585" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-muted-foreground hover:text-primary transition-colors"
                      >
                        Message us on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-primary text-primary-foreground rounded-3xl p-8 text-center">
                <span className="text-5xl mb-4 block">⚡</span>
                <h3 className="font-display text-2xl font-bold mb-2">Quick Response Promise</h3>
                <p className="font-body text-primary-foreground/90">
                  We respond to all inquiries within 24 hours. 
                  Your sustainability journey starts here!
                </p>
              </div>

              {/* Social Proof */}
              <div className="text-center space-y-4">
                <p className="font-display text-2xl text-foreground">
                  🌍 Serving businesses across India
                </p>
                <p className="font-body text-muted-foreground">
                  From startups to corporations, we're here to help every business 
                  reduce its carbon footprint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
