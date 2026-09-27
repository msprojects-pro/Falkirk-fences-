import React, { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
import { BUSINESS_INFO } from "../data/websiteData";

interface NavbarProps {
  onEstimateClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onEstimateClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#transformations" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#182016]/95 backdrop-blur-md border-b border-[#2d3a2a] py-3 shadow-md"
          : "bg-[#182016] border-b border-white/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Lockup: Clean Combination of Landscaping/Home Icon with Text */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            aria-label="Falkirk Fences Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#809618] text-[#182016] flex items-center justify-center shrink-0 group-hover:bg-white transition-colors duration-200">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4.5 h-4.5 sm:w-5 sm:h-5"
                aria-hidden="true"
              >
                {/* Clean Home / Garden Building gable with timber fence slats */}
                <path d="M3 9.5L12 2.5L21 9.5" />
                <path d="M4.5 9.5V21H19.5V9.5" />
                <line x1="8.5" y1="21" x2="8.5" y2="12" />
                <line x1="12" y1="21" x2="12" y2="9.5" />
                <line x1="15.5" y1="21" x2="15.5" y2="12" />
              </svg>
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase group-hover:text-[#809618] transition-colors leading-none">
              Falkirk Fences
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-neutral-200 hover:text-[#809618] transition-colors relative py-1 hover:border-b-2 hover:border-[#809618]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Direct Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-semibold text-neutral-200 hover:text-[#809618] transition-colors"
              title="Call Falkirk Fences"
            >
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#809618]">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              type="button"
              onClick={onEstimateClick}
              className="px-5 py-2.5 bg-[#809618] text-white hover:bg-[#6e8214] font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer whitespace-nowrap"
            >
              Free Estimate
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={onEstimateClick}
              className="px-3 py-1.5 bg-[#809618] text-white text-xs font-semibold uppercase tracking-wider"
            >
              Free Estimate
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#809618] focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#182016] border-b border-neutral-800 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-white hover:text-[#809618] transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-white/10 text-white font-medium text-sm hover:border-[#809618]"
              >
                <Phone className="w-4 h-4 text-[#809618]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onEstimateClick();
                }}
                className="w-full py-3 bg-[#809618] text-white font-bold text-sm uppercase tracking-wider text-center"
              >
                Request Free Estimate
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
