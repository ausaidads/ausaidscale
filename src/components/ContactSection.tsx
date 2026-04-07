import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Linkedin, Mail, ExternalLink } from "lucide-react";

const budgetOptions = ["Under $1K", "$1K – $5K", "$5K – $15K", "$15K – $50K", "$50K+"];

const ContactSection = () => {
  const [budget, setBudget] = useState("");

  return (
    <section id="contact" className="section-container">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Ready to Scale Your Brand with <span className="gradient-text">Ausaid</span>?
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Let's discuss how Meta Ads can grow your business.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="max-w-xl mx-auto">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Your Name" className="bg-secondary border-border focus:border-primary" />
            <Input type="email" placeholder="Your Email" className="bg-secondary border-border focus:border-primary" />
            <Input placeholder="Business Type" className="bg-secondary border-border focus:border-primary" />
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="" disabled>Monthly Ad Budget</option>
              {budgetOptions.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
            <Textarea placeholder="Your Message" rows={4} className="bg-secondary border-border focus:border-primary" />
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Send size={16} /> Send Message
            </Button>
          </form>
          <div className="flex justify-center gap-4 mt-8">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/ausaid-raza-419a67400" },
              { icon: ExternalLink, href: "https://www.upwork.com/freelancers/~012b4dbb32d7677f9e", label: "Upwork" },
              { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=rajpootusaid@gmail.com" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default ContactSection;
