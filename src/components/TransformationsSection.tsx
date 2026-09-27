import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, X, ZoomIn, CheckCircle2 } from "lucide-react";
import { GALLERY_PROJECTS, GalleryProject } from "../data/websiteData";

interface TransformationsSectionProps {
  onDiscussClick: (preferredService?: string) => void;
}

export const TransformationsSection: React.FC<TransformationsSectionProps> = ({ onDiscussClick }) => {
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const marqueeProject = GALLERY_PROJECTS.find((p) => p.isMarquee) || GALLERY_PROJECTS[0];
  const secondaryProjects = GALLERY_PROJECTS.filter((p) => p.id !== marqueeProject.id);

  const categories = ["All", "Transformations", "Fencing", "Garden Room", "Decking", "Landscaping"];

  const filteredSecondary = secondaryProjects.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Transformations") return project.category.toLowerCase().includes("trans");
    if (activeCategory === "Fencing") return project.category.toLowerCase().includes("fence");
    if (activeCategory === "Garden Room") return project.category.toLowerCase().includes("room") || project.category.toLowerCase().includes("building");
    if (activeCategory === "Decking") return project.category.toLowerCase().includes("deck");
    if (activeCategory === "Landscaping") return project.category.toLowerCase().includes("land");
    return true;
  });

  return (
    <section id="transformations" className="py-24 bg-white text-[#182016]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#809618]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#809618] uppercase">
                Recent Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#182016] [text-wrap:balance]">
              From Unused Space To A Garden You’ll Enjoy.
            </h2>
            <p className="mt-4 text-base text-neutral-600 leading-relaxed">
              Showcase portfolio demonstrating outdoor transformations, bespoke boundary fencing, handcrafted garden rooms and multi-tier decking.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer border ${
                  activeCategory === cat
                    ? "bg-[#182016] text-white border-[#182016]"
                    : "bg-[#F7F7F2] text-neutral-600 border-neutral-200 hover:border-[#809618] hover:text-[#182016]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* MARQUEE FEATURE (Left large column - spans 7 cols) */}
          <div
            onClick={() => setSelectedProject(marqueeProject)}
            className="lg:col-span-7 group cursor-pointer relative bg-[#F7F7F2] border border-neutral-200 hover:border-[#809618] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-lg"
          >
            <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-neutral-900">
              <img
                src={marqueeProject.image}
                alt={marqueeProject.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-[#809618] text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 shadow-sm">
                {marqueeProject.label}
              </div>
              <div className="absolute top-4 right-4 bg-[#182016]/80 backdrop-blur-xs text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ZoomIn className="w-4 h-4 text-[#809618]" />
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#809618] uppercase tracking-wider mb-2">
                  <span>{marqueeProject.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>Featured Transformation</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#182016] mb-3 group-hover:text-[#809618] transition-colors">
                  {marqueeProject.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {marqueeProject.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-200 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#182016] flex items-center gap-1.5 group-hover:text-[#809618] transition-colors">
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-4 h-4 text-[#809618]" />
                </span>
                <span className="text-xs text-neutral-600">Full Garden Overhaul</span>
              </div>
            </div>
          </div>

          {/* SECONDARY EDITORIAL COLUMN (Right side - spans 5 cols, 2 stacked cards) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            {filteredSecondary.slice(0, 2).map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-[#F7F7F2] border border-neutral-200 hover:border-[#809618] transition-all duration-300 flex flex-col overflow-hidden shadow-xs hover:shadow-md flex-1"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#182016] text-[#809618] text-[10px] font-bold tracking-widest uppercase px-2.5 py-1">
                    {project.label}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#182016]/80 backdrop-blur-xs text-white p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ZoomIn className="w-3.5 h-3.5 text-[#809618]" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#182016] group-hover:text-[#809618] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-neutral-200/80 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#809618] flex items-center gap-1">
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs text-neutral-600">{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW: Remaining items in asymmetric 3-column strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {filteredSecondary.slice(2, 5).map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-[#F7F7F2] border border-neutral-200 hover:border-[#809618] transition-all duration-300 flex flex-col overflow-hidden shadow-xs hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#182016] text-[#809618] text-[10px] font-bold tracking-widest uppercase px-2.5 py-1">
                  {project.label}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#182016] group-hover:text-[#809618] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-neutral-200/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#809618] flex items-center gap-1">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                  <span className="text-xs text-neutral-600">{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Demo Notice Note */}
        <div className="bg-[#F7F7F2] border-l-2 border-[#809618] p-4 text-xs text-neutral-600 mb-14 max-w-4xl mx-auto">
          <p className="font-semibold text-[#182016] mb-0.5">Demo Showcase Portfolio</p>
          <p>
            Demonstrative garden transformations and installations representing Falkirk Fences service offerings. Client photography can be inserted directly via the centralized project data structure.
          </p>
        </div>

        {/* Bottom CTA Block */}
        <div className="bg-[#182016] text-white p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-b-4 border-[#809618]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#809618] block mb-2">
              Start Your Transformation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Have a garden project in mind?
            </h3>
            <p className="text-neutral-300 text-sm mt-1">
              From boundary replacement to complete outdoor design, we are ready to help.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onDiscussClick()}
            className="w-full sm:w-auto px-8 py-4 bg-[#809618] text-white hover:bg-[#6f8214] font-bold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md whitespace-nowrap shrink-0"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Project Lightbox Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#182016]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white max-w-3xl w-full border border-neutral-300 overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-neutral-200 bg-[#F7F7F2]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#809618] block">
                  {selectedProject.label}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#182016]">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 text-neutral-500 hover:text-[#182016] focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] bg-neutral-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-200">
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <CheckCircle2 className="w-4 h-4 text-[#809618]" />
                  <span>Free on-site estimate available across Falkirk</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const category = selectedProject.category;
                    setSelectedProject(null);
                    onDiscussClick(category);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#809618] text-white hover:bg-[#6f8214] font-bold text-xs uppercase tracking-wider"
                >
                  Enquire About Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
