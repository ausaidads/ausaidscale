import AnimatedSection from "./AnimatedSection";
import { Clock, DollarSign, Store, UserCheck } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.webp";

const highlights = [
  { icon: Clock, label: "2+ Years Experience" },
  { icon: DollarSign, label: "$50K+ Ad Spend Managed" },
  { icon: Store, label: "5+ Brands Scaled" },
  { icon: UserCheck, label: "Available for Freelance" },
];

const AboutSection = () => (
  <section id="about" className="relative py-20 md:py-28 overflow-hidden">
    {/* Spotlight glow behind the section */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Top-center radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full bg-primary/[0.07] blur-[120px]" />
      {/* Secondary accent glow */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[100px]" />
    </div>

    {/* Subtle top/bottom gradient fade borders */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

    <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo with spotlight ring */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Animated glow ring behind photo */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 to-accent/20 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-2 border-primary/40 overflow-hidden shadow-[0_0_40px_-10px_hsl(190_100%_55%/0.4)]">
                <img
                  src={profilePhoto}
                  alt="Ausaid Raza"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* About Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Ausaid Raza</span> – Meta Ads Expert
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Hi, I'm <strong className="text-foreground">Ausaid Raza</strong>, a <strong className="text-foreground">Meta Ads specialist</strong> helping
              <strong className="text-foreground"> e-commerce brands</strong> and businesses scale profitably through
              high-performing campaigns. I focus on <strong className="text-foreground">ad campaign strategy</strong>,
              <strong className="text-foreground"> creative testing</strong>, <strong className="text-foreground">audience research</strong>, and
              <strong className="text-foreground"> funnel optimization</strong> to maximize ROI.
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
    </div>
  </section>
);

export default AboutSection;
