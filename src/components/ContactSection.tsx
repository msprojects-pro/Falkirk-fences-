import React, { useState, forwardRef } from "react";
import { Phone, MapPin, Star, ThumbsUp, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "../data/websiteData";

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection = forwardRef<HTMLDivElement, ContactSectionProps>(
  ({ initialService }, ref) => {
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
      service: initialService || "Garden Fencing",
      message: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Sync if initialService updates from other buttons
    React.useEffect(() => {
      if (initialService) {
        setFormData((prev) => ({ ...prev, service: initialService }));
      }
    }, [initialService]);

    const serviceOptions = [
      "Garden Fencing",
      "Garden Building",
      "Garden Room",
      "Decking",
      "Landscaping",
      "Garden Transformation",
      "Not Sure Yet",
    ];

    const validate = () => {
      const errs: Record<string, string> = {};
      if (!formData.name.trim()) {
        errs.name = "Please enter your full name";
      }
      if (!formData.phone.trim()) {
        errs.phone = "Please enter your phone number";
      } else if (!/^[0-9+() \-]{7,20}$/.test(formData.phone.trim())) {
        errs.phone = "Please enter a valid phone number";
      }
      if (!formData.email.trim()) {
        errs.email = "Please enter your email address";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        errs.email = "Please enter a valid email address";
      }
      return errs;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      setErrors({});
      setIsSubmitting(true);

      // Simulate clean submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 600);
    };

    return (
      <section
        id="contact"
        ref={ref}
        className="py-24 bg-[#182016] text-white border-t border-[#263523] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#809618]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#809618] uppercase">
                Contact &amp; Free Estimate
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white [text-wrap:balance]">
              Ready To Transform Your Garden?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed">
              Whether you need new fencing, a garden building, decking or a complete garden transformation, get in touch with Falkirk Fences for a free estimate.
            </p>
          </div>

          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* LEFT COLUMN: Contact Details & Trust Badges */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white mb-6 uppercase">
                  Get In Touch
                </h3>

                <div className="space-y-6 mb-10">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#809618] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                        Direct Phone
                      </p>
                      <a
                        href={`tel:${BUSINESS_INFO.phoneRaw}`}
                        className="text-lg sm:text-xl font-bold text-white hover:text-[#809618] transition-colors block mt-0.5"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        Free estimates · Fast response
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#809618] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                        Service Area
                      </p>
                      <p className="text-base sm:text-lg font-bold text-white mt-0.5">
                        {BUSINESS_INFO.location}
                      </p>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        Serving Falkirk and surrounding Central Scotland areas
                      </p>
                    </div>
                  </div>

                  {/* Rating Block */}
                  <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#809618] shrink-0">
                      <ThumbsUp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                        Customer Feedback
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex text-[#809618]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-base font-bold text-white">
                          {BUSINESS_INFO.ratingPercent}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 mt-0.5 font-medium">
                        Based on {BUSINESS_INFO.reviewCount}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/10">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="flex-1 py-3.5 px-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors text-center"
                  >
                    <Phone className="w-4 h-4 text-[#809618]" />
                    <span>Call Falkirk Fences</span>
                  </a>

                  <a
                    href="#estimate-form"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("form-name-input")?.focus();
                    }}
                    className="flex-1 py-3.5 px-6 bg-[#809618] hover:bg-[#6f8214] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors text-center cursor-pointer"
                  >
                    <span>Request Free Estimate</span>
                  </a>
                </div>
              </div>

              {/* Genuine selling points banner */}
              <div className="mt-8 p-4 bg-white/5 border border-white/10 text-xs text-neutral-300">
                <span className="text-[#809618] font-bold uppercase tracking-wider block mb-1">
                  Our Policy
                </span>
                <p>
                  No deposit required to get scheduled. All quotations and site surveys in Falkirk are 100% free and without obligation.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Premium Enquiry Form */}
            <div className="lg:col-span-7" id="estimate-form">
              <div className="bg-[#1f291c] border border-white/10 p-6 sm:p-10 shadow-xl">
                {isSubmitted ? (
                  <div className="py-8 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#809618]/20 border border-[#809618] flex items-center justify-center text-[#809618] mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Estimate Request Received
                    </h3>
                    <p className="text-neutral-300 text-sm max-w-md mb-6 leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{formData.name}</span>. We have logged your request for <span className="text-[#809618] font-semibold">{formData.service}</span> in Falkirk. We will review your details and contact you shortly at <span className="text-white font-semibold">{formData.phone}</span>.
                    </p>
                    <div className="bg-white/5 border border-white/10 p-4 text-xs text-neutral-400 w-full max-w-md text-left mb-6">
                      <p><strong className="text-neutral-200">Selected Service:</strong> {formData.service}</p>
                      <p className="mt-1"><strong className="text-neutral-200">Email:</strong> {formData.email}</p>
                      {formData.message && (
                        <p className="mt-1"><strong className="text-neutral-200">Note:</strong> {formData.message}</p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          service: "Garden Fencing",
                          message: "",
                        });
                      }}
                      className="px-6 py-2.5 bg-[#809618] text-white hover:bg-[#6f8214] font-semibold text-xs uppercase tracking-wider"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="border-b border-white/10 pb-4 mb-2">
                      <h3 className="text-xl font-bold text-white">
                        Request a Free Estimate
                      </h3>
                      <p className="text-xs text-neutral-300 mt-1">
                        Fill in your details and we will arrange a site consultation in Falkirk.
                      </p>
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="form-name-input" className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-[#809618]">*</span>
                      </label>
                      <input
                        id="form-name-input"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Henderson"
                        className={`w-full px-4 py-3 bg-[#182016] border ${
                          errors.name ? "border-red-400" : "border-white/20 focus:border-[#809618]"
                        } text-white placeholder-neutral-500 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone & Email Dual Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label htmlFor="form-phone-input" className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-1.5">
                          Phone Number <span className="text-[#809618]">*</span>
                        </label>
                        <input
                          id="form-phone-input"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 07562 103406"
                          className={`w-full px-4 py-3 bg-[#182016] border ${
                            errors.phone ? "border-red-400" : "border-white/20 focus:border-[#809618]"
                          } text-white placeholder-neutral-500 text-sm focus:outline-none transition-colors`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-400 mt-1">{errors.phone}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="form-email-input" className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-1.5">
                          Email Address <span className="text-[#809618]">*</span>
                        </label>
                        <input
                          id="form-email-input"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. name@example.co.uk"
                          className={`w-full px-4 py-3 bg-[#182016] border ${
                            errors.email ? "border-red-400" : "border-white/20 focus:border-[#809618]"
                          } text-white placeholder-neutral-500 text-sm focus:outline-none transition-colors`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* What do you need? Dropdown */}
                    <div>
                      <label htmlFor="form-service-input" className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-1.5">
                        What do you need? <span className="text-[#809618]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="form-service-input"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 bg-[#182016] border border-white/20 text-white text-sm focus:outline-none focus:border-[#809618] transition-colors appearance-none cursor-pointer"
                        >
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-[#182016] text-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-400">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="form-message-input" className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-1.5">
                        Message / Project Details (Optional)
                      </label>
                      <textarea
                        id="form-message-input"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about the approximate size, current condition, or what you'd like to achieve..."
                        className="w-full px-4 py-3 bg-[#182016] border border-white/20 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#809618] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#809618] hover:bg-[#6f8214] text-white font-bold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <span>Request Free Estimate</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="pt-2 flex items-center justify-center gap-4 text-xs text-neutral-400">
                      <span>✓ 100% Free Consultation</span>
                      <span>•</span>
                      <span>✓ No Deposit Required</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ContactSection.displayName = "ContactSection";
