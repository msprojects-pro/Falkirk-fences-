import { Phone, ArrowRight, MapPin } from "lucide-react";
import { BUSINESS_INFO, IMAGES } from "../data/websiteData";

interface HeroProps {
  onEstimateClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEstimateClick }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#182016]">
      {/* Background Image with Clean Flat Alpha Overlay (NO gradients) */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Completed Falkirk garden transformation with bespoke slatted fencing, green lawn and modern timber decking"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Anti-gradient solid tint overlay with controlled opacity for contrast */}
        <div className="absolute inset-0 bg-[#182016]/75" aria-hidden="true" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">


        {/* Small Category Label */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="h-px w-6 bg-[#809618]" aria-hidden="true" />
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#809618] uppercase">
            Fencing • Garden Buildings • Landscaping
          </span>
          <span className="h-px w-6 bg-[#809618]" aria-hidden="true" />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl [text-wrap:balance]">
          Transform Your Garden Into Something You’ll Love.
        </h1>

        {/* Supporting Text */}
        <p className="text-lg sm:text-xl text-neutral-200 font-normal max-w-2xl mb-10 leading-relaxed [text-wrap:balance]">
          Professional fencing, garden buildings and landscaping services in Falkirk, backed by 30 years of experience.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            type="button"
            onClick={onEstimateClick}
            className="w-full sm:w-auto px-8 py-4 bg-[#809618] text-white hover:bg-[#6f8214] font-bold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <span>Get a Free Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/80 hover:border-white hover:bg-white/10 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#809618]" />
            <span>Call Falkirk Fences</span>
          </a>
        </div>

        {/* Credibility Row & Serving Falkirk */}
        <div className="pt-8 border-t border-white/15 w-full max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-neutral-300">
          <div className="flex items-center gap-6 flex-wrap justify-center font-medium">
            <span className="flex items-center gap-1.5 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#809618]" />
              30 Years Experience
            </span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#809618]" />
              Free Estimates
            </span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#809618]" />
              No Deposit
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-neutral-300 font-semibold uppercase tracking-wider text-xs">
            <MapPin className="w-4 h-4 text-[#809618]" />
            <span>Serving Falkirk, UK</span>
          </div>
        </div>
      </div>
    </section>
  );
};
