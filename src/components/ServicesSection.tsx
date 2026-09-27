import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, ServiceItem } from "../data/websiteData";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-[#F7F7F2] text-[#182016]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-[#809618]" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#809618] uppercase">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#182016] [text-wrap:balance]">
            Everything Your Garden Needs.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
            From single bespoke installations to complete multi-stage garden transformations across Falkirk and surrounding areas.
          </p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceItem) => (
            <article
              key={service.id}
              className="group bg-white border border-neutral-200/80 hover:border-[#809618] transition-all duration-300 flex flex-col overflow-hidden shadow-xs hover:shadow-md"
            >
              {/* Photo Area */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {/* Clean Top Number Accent */}
                <div className="absolute top-3 left-3 bg-[#182016] text-[#809618] font-mono font-bold text-xs px-2.5 py-1 tracking-wider uppercase">
                  {service.number}
                </div>
              </div>

              {/* Text & Details Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#182016] group-hover:text-[#809618] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Direct Action Link */}
                <div className="pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#182016] group-hover:text-[#809618] transition-colors cursor-pointer"
                  >
                    <span>Request Estimate</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#809618] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <span className="text-xs text-neutral-600 font-medium">Free quote</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
