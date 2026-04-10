import { motion } from "framer-motion";
import { ArrowDown, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  { text: "ROAS 4.2x", top: "15%", left: "10%", delay: 0 },
  { text: "CTR 3.8%", top: "25%", right: "12%", delay: 1.5 },
  { text: "CPC $0.42", bottom: "30%", left: "8%", delay: 3 },
  { text: "CPM $12.50", top: "60%", right: "15%", delay: 2 },
  { text: "CVR 5.1%", bottom: "20%", right: "25%", delay: 4 },
  { text: "CPL $6.00", top: "40%", left: "20%", delay: 1 },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-[1]">
    {/* Floating metrics */}
    {metrics.map((m, i) => (
      <span
        key={i}
        className="floating-metric text-lg md:text-2xl"
        style={{
          top: m.top,
          left: m.left,
          right: m.right,
          bottom: m.bottom,
          animationDelay: `${m.delay}s`,
        }}
      >
        {m.text}
      </span>
    ))}

    {/* Glow orb */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] bg-primary pointer-events-none" />

    <div className="relative z-10 text-center px-4 max-w-4xl">
      <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-6">
        <span className="gradient-text">Ausaid Raza</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
        Meta Ads Performance Marketer | Scaling Brands with Data-Driven Paid Social Strategies
      </p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2" asChild>
          <a href="#cases">
            <ArrowDown size={18} /> See My Work
          </a>
        </Button>
        <Button size="lg" variant="outline" className="border-primary/40 text-foreground hover:bg-primary/10 gap-2" asChild>
          <a href="#contact">
            <Briefcase size={18} /> Let's Work Together
          </a>
        </Button>
      </motion.div>
    </div>

    {/* Wave transition at bottom */}
    <div className="wave-bg" />
  </section>
);

export default HeroSection;
