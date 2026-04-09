import AnimatedSection from "./AnimatedSection";
import { Clock, DollarSign, Store, UserCheck, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.webp";

const highlights = [
  { icon: Clock, label: "2+ Years Experience" },
  { icon: DollarSign, label: "$50K+ Ad Spend Managed" },
  { icon: Store, label: "5+ Brands Scaled" },
  { icon: UserCheck, label: "Available for Freelance" },
];

const AboutSection = () => (
  <section id="about" className="section-container">
    <AnimatedSection>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Photo */}
        <div className="flex justify-center">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-primary/30 overflow-hidden">
            <img
              src={profilePhoto}
              alt="Ausaid Raza"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* About Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Ausaid Raza</span> – Meta Ads Expert
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Hi, I'm <strong>Ausaid Raza</strong>, a <strong>Meta Ads specialist</strong> helping
            <strong> e-commerce brands</strong> and businesses scale profitably through
            high-performing campaigns. I focus on <strong>ad campaign strategy</strong>,
            <strong> creative testing</strong>, <strong>audience research</strong>, and
            <strong> funnel optimization</strong> to maximize ROI.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {highlights.map((h) => (
              <div key={h.label} className="glow-card p-4 flex items-center gap-3">
                <h.icon className="text-primary shrink-0" size={20} />
                <span className="text-sm font-medium">{h.label}</span>
              </div>
            ))}
          </div>

         
        </div>
      </div>
    </AnimatedSection>
  </section>
);

export default AboutSection;
