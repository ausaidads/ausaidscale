import AnimatedSection from "./AnimatedSection";

const timeline = [
  {
    role: "Senior Meta Ads Specialist",
    company: "Freelance / Agency Clients",
    duration: "2023 – Present",
    points: [
      "Managed $20K+/month budgets across multiple accounts",
      "Achieved consistent 4x+ ROAS for e-commerce clients",
      "Led creative testing strategy for 10+ brands",
    ],
  },
  {
    role: "Performance Marketer",
    company: "Digital Marketing Agency",
    duration: "2022 – 2023",
    points: [
      "Scaled Facebook & Instagram ad campaigns for DTC brands",
      "Reduced CPL by 40% through audience segmentation",
      "Implemented Conversions API for accurate tracking",
    ],
  },
  {
    role: "Junior Media Buyer",
    company: "E-commerce Startup",
    duration: "2021 – 2022",
    points: [
      "Launched and managed first $100K in ad spend",
      "Built retargeting funnels that doubled conversion rates",
      "Collaborated with creative team on ad production",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-container">
    <AnimatedSection>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Experience <span className="gradient-text">Timeline</span>
      </h2>
    </AnimatedSection>
    <div className="relative max-w-2xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2" />
      {timeline.map((t, i) => (
        <AnimatedSection key={t.role} delay={i * 0.15}>
          <div className={`relative pl-12 md:pl-0 mb-12 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"}`}>
            {/* Dot */}
            <div className="absolute left-4 md:left-auto top-1 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2 md:translate-x-0"
              style={i % 2 === 0 ? { right: "-6px", left: "auto" } : { left: "-6px" }}
            />
            <div className="glow-card p-5">
              <span className="text-xs text-primary font-semibold">{t.duration}</span>
              <h3 className="font-bold mt-1">{t.role}</h3>
              <p className="text-sm text-muted-foreground mb-3">{t.company}</p>
              <ul className="space-y-1">
                {t.points.map((p) => (
                  <li key={p} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1">•</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
