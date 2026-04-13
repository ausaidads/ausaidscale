import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-screen bg-background border-b border-border z-50">

      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 w-full">

        {/* Logo */}
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

          <a
            href="#contact"
            className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
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
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden w-full border-t border-border bg-background px-4 py-4 flex flex-col gap-4">

          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>

          <a
            href="#contact"
            className="bg-primary text-white px-4 py-2 rounded-lg text-sm w-fit"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
