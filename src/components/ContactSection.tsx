import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageCircle } from "lucide-react";

const budgetOptions = ["Under $1K", "$1K – $5K", "$5K – $15K", "$15K – $50K", "$50K+"];

const contactLinks = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l-.228-.2-1.086 1.067-.09-.076a8.154 8.154 0 0 1-2.093-3.106l-.048-.13.96-1.1-.145-.218c-.677-1.016-1.1-2.08-1.1-3.108 0-.944.358-1.682.978-2.017.247-.134.514-.2.794-.2h.016c1.004.013 2.157 1.202 2.97 2.543.27.447.508.907.707 1.37.138.32.505 1.238.505 2.066 0 .372-.07.715-.209 1.02-.207.458-.557.826-.97 1.043l-.126.063.104.09c.646.56 1.38.87 2.134.87.27 0 .536-.046.79-.138l.073-.027.023-.074c.103-.334.156-.685.156-1.044 0-2.942-2.39-5.332-5.332-5.332-2.942 0-5.332 2.39-5.332 5.332 0 2.942 2.39 5.332 5.332 5.332 1.345 0 2.573-.5 3.51-1.323l.072-.063-.063-.072a3.37 3.37 0 0 1-.348-.503z" />
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18.5c-4.687 0-8.5-3.813-8.5-8.5S7.313 3.5 12 3.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z" />
      </svg>
    ),
    href: "https://www.upwork.com/freelancers/~012b4dbb32d7677f9e",
    label: "Upwork",
  },
  { icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>, href: "https://www.linkedin.com/in/ausaid-raza-419a67400?utm_source=share&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
  { icon: <MessageCircle size={20} />, href: "https://wa.me/923037257305", label: "WhatsApp" },
];

const ContactSection = () => {
  const [budget, setBudget] = useState("");
  const [formStatus, setFormStatus] = useState("");

  return (
    <section id="contact" className="section-container">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Ready to Scale Your Brand with <span className="gradient-text">Ausaid</span>?
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Let's discuss how Meta Ads can grow your business.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="max-w-xl mx-auto">
          <form
            className="space-y-4"
            action="https://formspree.io/f/xqegjwbw"
            method="POST"
            onSubmit={() => setFormStatus("Thank you! Your message has been sent.")}
          >
            <Input name="name" placeholder="Your Name" className="bg-secondary border-border focus:border-primary" required />
            <Input type="email" name="email" placeholder="Your Email" className="bg-secondary border-border focus:border-primary" required />
            <Input name="company" placeholder="Business Type" className="bg-secondary border-border focus:border-primary" />
            <select
              name="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="" disabled>
                Monthly Ad Budget
              </option>
              {budgetOptions.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            <Textarea name="message" placeholder="Your Message" rows={4} className="bg-secondary border-border focus:border-primary" required />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Send size={16} /> Send Message
            </Button>
            {formStatus && <p className="text-green-500 mt-2">{formStatus}</p>}
          </form>

          <div className="flex justify-center gap-8 mt-10">
            {contactLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-110"
              >
                <span className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition-colors duration-200">
                  {icon}
                </span>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-200">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default ContactSection;
