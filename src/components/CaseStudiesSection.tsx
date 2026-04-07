import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    niche: "E-commerce Fashion Brand",
    challenge: "Low ROAS with high CPP on cold audiences, struggling to scale beyond $5K/month.",
    strategy: "Full-funnel restructure with lookalike audiences, UGC creatives, and dynamic retargeting.",
    results: "Scaled from $5K to $50K/month spend. Achieved 5.1x ROAS in 60 days.",
    tags: ["Prospecting", "Retargeting", "Budget Scaling"],
  },
  {
    niche: "Health & Wellness Brand",
    challenge: "High cost per purchase and underperforming ad creatives on Meta.",
    strategy: "UGC creative testing with hook variations, optimized for purchase conversions.",
    results: "Reduced CPP by 38% with UGC creative testing. 3x ROAS on cold traffic.",
    tags: ["Creative Testing", "A/B Testing", "Cold Traffic"],
  },
  {
    niche: "Local Service Business",
    challenge: "Needed consistent lead flow at an affordable cost per lead.",
    strategy: "Facebook Lead Ads combined with Messenger funnel for instant qualification.",
    results: "Generated 200+ leads/month at $6 CPL with 80% qualification rate.",
    tags: ["Lead Generation", "Messenger Funnel", "Retargeting"],
  },
];

const CaseStudiesSection = () => (
  <section id="cases" className="section-container">
    <AnimatedSection>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Ausaid's Campaign <span className="gradient-text">Case Studies</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
        Real results from real campaigns. Here's how Ausaid has helped brands grow.
      </p>
    </AnimatedSection>
    <div className="grid md:grid-cols-3 gap-6">
      {cases.map((c, i) => (
        <AnimatedSection key={c.niche} delay={i * 0.15}>
          <div className="glow-card p-6 h-full flex flex-col">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{c.niche}</span>
            <h3 className="text-lg font-bold mb-3">Challenge</h3>
            <p className="text-sm text-muted-foreground mb-4">{c.challenge}</p>
            <h3 className="text-lg font-bold mb-3">Strategy</h3>
            <p className="text-sm text-muted-foreground mb-4">{c.strategy}</p>
            <h3 className="text-lg font-bold mb-3 text-primary">Results</h3>
            <p className="text-sm text-foreground font-medium mb-4">{c.results}</p>
            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              {c.tags.map((t) => (
                <span key={t} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">{t}</span>
              ))}
            </div>
            <Button variant="outline" size="sm" className="border-primary/40 hover:bg-primary/10 gap-1 w-fit">
              View Case Study <ArrowRight size={14} />
            </Button>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default CaseStudiesSection;
