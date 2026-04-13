import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

      {/* Logo / Brand */}
      <div className="font-bold text-lg text-foreground">
        Ausaid Raza
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">

        <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">
          About
        </a>

        <a href="#services" className="text-sm text-muted-foreground hover:text-foreground">
          Services
        </a>

        <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
          Contact
        </a>

        {/* CTA Button (FIXED ALIGNMENT) */}
        <a
          href="#contact"
          className="ml-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
        >
          Get in Touch
        </a>
      </div>

      {/* Mobile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-sm"
      >
        Menu
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-background border-t border-border flex flex-col items-start gap-4 p-4 md:hidden">

          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>

          <a
            href="#contact"
            className="bg-primary text-white px-4 py-2 rounded-lg text-sm"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
