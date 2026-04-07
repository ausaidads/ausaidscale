import AnimatedSection from "./AnimatedSection";
import { Target, Lightbulb, BarChart3, Search } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Meta Ads Strategy & Setup",
    desc: "Full funnel campaign build for cold, warm & hot audiences.",
  },
  {
    icon: Lightbulb,
    title: "Creative Testing & Ad Copy",
    desc: "Data-backed hook testing, copy frameworks, UGC briefs.",
  },
  {
    icon: BarChart3,
    title: "Campaign Management & Optimization",
    desc: "Daily monitoring, scaling, budget management & reporting.",
  },
  {
    icon: Search,
    title: "Audit & Consulting",
    desc: "In-depth account audit + actionable growth roadmap.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-container">
    <AnimatedSection>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        How <span className="gradient-text">Ausaid</span> Can Help You
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
        End-to-end Meta Ads services designed to drive measurable growth.
      </p>
    </AnimatedSection>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((s, i) => (
        <AnimatedSection key={s.title} delay={i * 0.1}>
          <div className="glow-card p-6 text-center h-full">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <s.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default ServicesSection;
