import AnimatedSection from "./AnimatedSection";
import { Clock, DollarSign, Store, UserCheck, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

const highlights = [
  { icon: Clock, label: "3+ Years Experience" },
  { icon: DollarSign, label: "$500K+ Ad Spend Managed" },
  { icon: Store, label: "10+ Brands Scaled" },
  { icon: UserCheck, label: "Available for Freelance" },
];

const AboutSection = () => (
  <section id="about" className="section-container">
    <AnimatedSection>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-primary/30 overflow-hidden">
            <img src={profilePhoto} alt="Ausaid Raza" className="w-full h-full object-cover object-top" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Ausaid</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Hi, I'm Ausaid Raza. I help e-commerce brands and businesses scale profitably using Meta Ads. Specialized in campaign strategy, creative testing, audience research, and funnel optimization.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {highlights.map((h) => (
              <div key={h.label} className="glow-card p-4 flex items-center gap-3">
                <h.icon className="text-primary shrink-0" size={20} />
                <span className="text-sm font-medium">{h.label}</span>
              </div>
            ))}
          </div>
          <Button variant="outline" className="border-primary/40 hover:bg-primary/10 gap-2">
            <Download size={16} /> Download Resume
          </Button>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

export default AboutSection;
