import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-void/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-mono font-bold text-xl text-off-white hover:text-saffron transition-colors"
        >
          MH
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-mono uppercase tracking-wider text-slate hover:text-saffron transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-off-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-void/95 backdrop-blur-xl border-b border-white/5">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm font-mono uppercase tracking-wider text-slate hover:text-saffron transition-colors py-2"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
