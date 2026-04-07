import AnimatedSection from "./AnimatedSection";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Ausaid completely transformed our Meta Ads performance. We went from bleeding money to a 5x ROAS in just two months. Highly recommend!",
    name: "Sarah M.",
    business: "E-commerce Fashion",
    stars: 5,
  },
  {
    quote: "The level of detail in Ausaid's campaign strategy is unmatched. He truly understands data-driven marketing and delivers real results.",
    name: "James K.",
    business: "Health & Wellness",
    stars: 5,
  },
  {
    quote: "We were struggling to get leads under $15. Ausaid brought it down to $6 and tripled our monthly lead volume. Absolute game-changer.",
    name: "Maria L.",
    business: "Local Services",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-container">
    <AnimatedSection>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        What Clients Say About <span className="gradient-text">Ausaid</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
        Trusted by brands and businesses across industries.
      </p>
    </AnimatedSection>
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <AnimatedSection key={t.name} delay={i * 0.15}>
          <div className="glow-card p-6 h-full flex flex-col">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic mb-6 flex-1">"{t.quote}"</p>
            <div>
              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.business}</p>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
