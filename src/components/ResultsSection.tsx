import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const metrics = [
  { icon: "💰", value: "$500K+", label: "Total Ad Spend Managed" },
  { icon: "📈", value: "4.2x", label: "Average ROAS Delivered" },
  { icon: "🎯", value: "30+", label: "Successful Campaigns" },
  { icon: "🏪", value: "10+", label: "Brands Scaled" },
  { icon: "📉", value: "45%", label: "CPL Reduction (Up To)" },
  { icon: "🔁", value: "80%", label: "Repeat Client Rate" },
];

const Counter = ({ value }: { value: string }) => {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          // Simple number animation
          const numMatch = value.match(/[\d.]+/);
          if (numMatch) {
            const target = parseFloat(numMatch[0]);
            const prefix = value.slice(0, value.indexOf(numMatch[0]));
            const suffix = value.slice(value.indexOf(numMatch[0]) + numMatch[0].length);
            const duration = 1500;
            const start = performance.now();
            const animate = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = target * eased;
              setDisplay(`${prefix}${target >= 100 ? Math.round(current) : current.toFixed(1)}${suffix}`);
              if (progress < 1) requestAnimationFrame(animate);
              else setDisplay(value);
            };
            requestAnimationFrame(animate);
          }
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <div ref={ref} className="text-3xl md:text-4xl font-black gradient-text">{display}</div>;
};

const ResultsSection = () => (
  <section id="results" className="section-container">
    <AnimatedSection>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Numbers That <span className="gradient-text">Speak</span>
      </h2>
    </AnimatedSection>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {metrics.map((m, i) => (
        <AnimatedSection key={m.label} delay={i * 0.1}>
          <div className="glow-card counter-card p-6 text-center">
            <div className="text-3xl mb-3">{m.icon}</div>
            <Counter value={m.value} />
            <p className="text-sm text-muted-foreground mt-2">{m.label}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default ResultsSection;
