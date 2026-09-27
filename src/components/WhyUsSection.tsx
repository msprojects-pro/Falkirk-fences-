import React from "react";
import { IMAGES } from "../data/websiteData";

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-[#F7F7F2] text-[#182016]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Large image of a professionally completed fenced garden */}
          <div className="lg:col-span-6">
            <div className="relative border border-neutral-300 bg-white p-2 sm:p-3 shadow-md">
              <div className="relative aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={IMAGES.whyUsFeature}
                  alt="Professionally completed fenced garden with lush lawn and timber outbuilding"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Elegant floating badge on image */}
              <div className="absolute bottom-6 left-6 bg-[#182016] text-white p-4 max-w-xs border-l-4 border-[#809618] shadow-lg hidden sm:block">
                <p className="text-xs uppercase tracking-widest text-[#809618] font-bold">
                  Serving Falkirk
                </p>
                <p className="text-sm font-semibold mt-0.5">
                  Over three decades working on Scottish outdoor spaces
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Why Falkirk Fences details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#809618]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#809618] uppercase">
                Why Falkirk Fences
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#182016] leading-tight mb-6 [text-wrap:balance]">
              30 Years Of Experience. Built Around Your Garden.
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-10">
              With 30 years of experience, Falkirk Fences provides fencing, garden buildings and landscaping services for customers looking to improve and transform their outdoor space.
            </p>

            {/* Three Strong Highlights */}
            <div className="space-y-6 mb-8">
              {/* Highlight 01 */}
              <div className="flex items-start gap-4 p-4 bg-white border border-neutral-200/80">
                <div className="w-9 h-9 bg-[#182016] text-[#809618] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  01
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#182016] tracking-tight uppercase">
                    30 Years Experience
                  </h3>
                  <p className="text-sm text-neutral-600 mt-1 leading-relaxed">
                    Established experience in fencing, garden buildings and landscaping.
                  </p>
                </div>
              </div>

              {/* Highlight 02 */}
              <div className="flex items-start gap-4 p-4 bg-white border border-neutral-200/80">
                <div className="w-9 h-9 bg-[#182016] text-[#809618] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  02
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#182016] tracking-tight uppercase">
                    Free Estimates
                  </h3>
                  <p className="text-sm text-neutral-600 mt-1 leading-relaxed">
                    Discuss your project and get a free estimate.
                  </p>
                </div>
              </div>

              {/* Highlight 03 */}
              <div className="flex items-start gap-4 p-4 bg-white border border-neutral-200/80">
                <div className="w-9 h-9 bg-[#182016] text-[#809618] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  03
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#182016] tracking-tight uppercase">
                    No Deposit
                  </h3>
                  <p className="text-sm text-neutral-600 mt-1 leading-relaxed">
                    Get your project moving without an upfront deposit.
                  </p>
                </div>
              </div>
            </div>

            {/* Small Highlighted Statement */}
            <div className="p-4 bg-[#182016] text-white border-l-4 border-[#809618]">
              <p className="text-sm sm:text-base font-medium">
                “From a new fence to a complete garden transformation.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
