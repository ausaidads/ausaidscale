import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    title: "Meta Ads Expertise",
    skills: ["Campaign Strategy", "Creative Testing", "A/B Testing", "Retargeting", "Lookalike Audiences", "Funnel Building", "Conversion Optimization", "Budget Scaling"],
  },
  {
    title: "Analytics & Tracking",
    skills: ["Meta Ads Manager", "Meta Business Suite", "Meta Pixel", "Conversions API", "Google Analytics 4", "UTM Tracking"],
  },
  {
    title: "Creative & Tools",
    skills: ["Ad Copywriting", "Hook Writing", "Canva", "CapCut", "Notion", "Slack", "Shopify"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-container">
    <AnimatedSection>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        What <span className="gradient-text">Ausaid</span> Brings to the Table
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
        A comprehensive skill set built for Meta Ads performance at scale.
      </p>
    </AnimatedSection>
    <div className="grid md:grid-cols-3 gap-8">
      {categories.map((cat, i) => (
        <AnimatedSection key={cat.title} delay={i * 0.15}>
          <div className="glow-card p-6 h-full">
            <h3 className="text-lg font-semibold mb-4 text-primary">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default SkillsSection;
