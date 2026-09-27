import React from "react";
import { Phone, MapPin, ArrowUp } from "lucide-react";
import { BUSINESS_INFO } from "../data/websiteData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#121911] text-white border-t border-[#222e20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 bg-[#809618] text-[#182016] flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4.5 h-4.5"
                  aria-hidden="true"
                >
                  <path d="M3 9.5L12 2.5L21 9.5" />
                  <path d="M4.5 9.5V21H19.5V9.5" />
                  <line x1="8.5" y1="21" x2="8.5" y2="12" />
                  <line x1="12" y1="21" x2="12" y2="9.5" />
                  <line x1="15.5" y1="21" x2="15.5" y2="12" />
                </svg>
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase block leading-none">
                Falkirk Fences
              </span>
            </div>
            <span className="text-xs font-semibold tracking-wider text-[#809618] uppercase block mt-1">
              Garden Buildings · Fencing · Landscaping
            </span>

            <p className="mt-4 text-sm text-neutral-400 max-w-sm leading-relaxed">
              {BUSINESS_INFO.tagline} Backed by {BUSINESS_INFO.experienceYears.toLowerCase()} providing high quality garden transformations across Falkirk.
            </p>

            <div className="mt-6 flex flex-col gap-2.5 text-xs text-neutral-300">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2 hover:text-[#809618] transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#809618]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#809618]" />
                <span>{BUSINESS_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#hero" className="text-neutral-400 hover:text-[#809618] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-[#809618] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#transformations" className="text-neutral-400 hover:text-[#809618] transition-colors">
                  Our Work &amp; Gallery
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-neutral-400 hover:text-[#809618] transition-colors">
                  Why Falkirk Fences
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-[#809618] transition-colors">
                  Get Free Estimate
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quick Reference */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-neutral-200 uppercase tracking-widest mb-4">
              Core Capabilities
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-neutral-400">
              <span>• Garden Fencing</span>
              <span>• Garden Buildings</span>
              <span>• Garden Rooms</span>
              <span>• Timber Decking</span>
              <span>• Hard Landscaping</span>
              <span>• Garden Makeovers</span>
            </div>

            <div className="mt-6 p-4 bg-white/5 border border-white/10 text-xs text-neutral-300">
              <span className="text-[#809618] font-bold block mb-1">
                Zero Deposit Guarantee
              </span>
              <span>
                Start your project with complete peace of mind. No deposit required.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Falkirk Fences &amp; Falkirk Fences Garden Buildings. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Serving Falkirk, Scotland</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-300 hover:text-[#809618] transition-colors font-medium"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#809618]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
