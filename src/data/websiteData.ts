// Centralized data repository for Falkirk Fences
// Easily replace demo/showcase image paths with actual customer project photographs

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  category: string;
  label: string;
  location: string;
  description: string;
  image: string;
  beforeImage?: string;
  isMarquee?: boolean;
}

export const BUSINESS_INFO = {
  name: "Falkirk Fences",
  alternateName: "Falkirk Fences Garden Buildings",
  tagline: "Garden fences as well as garden buildings and all your landscaping needs.",
  phone: "+44 7562 103406",
  phoneRaw: "+447562103406",
  location: "Falkirk, United Kingdom",
  servingArea: "Serving Falkirk, UK",
  experienceYears: "30 Years Experience",
  ratingPercent: "100% recommend",
  reviewCount: "12 reviews",
  keyPillars: [
    "30 Years Experience",
    "Free Estimates",
    "No Deposit",
    "Fencing, Garden Buildings & Landscaping",
    "Complete Garden Transformations",
    "Serving Falkirk",
  ],
};

// Image assets mapping
export const IMAGES = {
  hero: "/src/assets/images/hero_garden_transformation_1790540843985.jpg",
  fencing: "/src/assets/images/close_up_fencing_1790540867987.jpg",
  gardenBuilding: "/src/assets/images/garden_building_workshop_1790540914670.jpg",
  gardenRoom: "/src/assets/images/garden_room_decking_1790540857219.jpg",
  decking: "/src/assets/images/timber_decking_patio_1790540903952.jpg",
  landscaping: "/src/assets/images/why_falkirk_fenced_garden_1790540890783.jpg",
  marqueeTransformation: "/src/assets/images/garden_transformation_showcase_1790540879922.jpg",
  whyUsFeature: "/src/assets/images/why_falkirk_fenced_garden_1790540890783.jpg",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "fencing",
    number: "01",
    title: "FENCING",
    description: "Garden fencing designed to improve privacy, security and the overall look of your outdoor space.",
    image: IMAGES.fencing,
    imageAlt: "Bespoke timber garden fencing installation in Falkirk",
  },
  {
    id: "garden-buildings",
    number: "02",
    title: "GARDEN BUILDINGS",
    description: "Practical and attractive garden buildings designed to add useful space to your property.",
    image: IMAGES.gardenBuilding,
    imageAlt: "Handcrafted timber garden building and workshop",
  },
  {
    id: "garden-rooms",
    number: "03",
    title: "GARDEN ROOMS",
    description: "Create a dedicated space for relaxing, working or enjoying your garden.",
    image: IMAGES.gardenRoom,
    imageAlt: "Modern bespoke insulated garden room with floor to ceiling glass",
  },
  {
    id: "decking",
    number: "04",
    title: "DECKING",
    description: "Outdoor decking that adds structure and usable space to your garden.",
    image: IMAGES.decking,
    imageAlt: "Smooth timber and composite decking with integrated outdoor living area",
  },
  {
    id: "landscaping",
    number: "05",
    title: "LANDSCAPING",
    description: "Complete landscaping work to turn tired outdoor areas into attractive, usable gardens.",
    image: IMAGES.landscaping,
    imageAlt: "Residential landscaping project with stone borders and lush green turf",
  },
  {
    id: "garden-transformations",
    number: "06",
    title: "GARDEN TRANSFORMATIONS",
    description: "From individual upgrades to complete garden projects, bring your ideas together in one transformation.",
    image: IMAGES.marqueeTransformation,
    imageAlt: "Full garden transformation bringing fencing, decking and lawn together",
  },
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: "p1",
    title: "Complete Garden Transformation",
    category: "Transformation",
    label: "GARDEN TRANSFORMATION",
    location: "Falkirk",
    description: "Complete outdoor overhaul bringing together perimeter acoustic fencing, level sandstone patio terrace, and raised timber sleeper planting beds.",
    image: IMAGES.marqueeTransformation,
    isMarquee: true,
  },
  {
    id: "p2",
    title: "Custom Timber Garden Room & Integrated Decking",
    category: "Garden Room",
    label: "GARDEN ROOM",
    location: "Falkirk Area",
    description: "Bespoke insulated outdoor garden room studio with modern anthracite glazing and seamless timber deck extension.",
    image: IMAGES.gardenRoom,
  },
  {
    id: "p3",
    title: "Precision Slat Acoustic Fencing",
    category: "Fencing",
    label: "NEW FENCING",
    location: "Falkirk",
    description: "Heavy-duty vertical slat privacy fencing with treated gravel boards and sturdy post anchors built to withstand Scottish weather.",
    image: IMAGES.fencing,
  },
  {
    id: "p4",
    title: "Split-Level Dining Deck & Lawn Terrace",
    category: "Decking",
    label: "DECKING",
    location: "Falkirk Area",
    description: "Multi-level timber decking providing clean outdoor entertaining space connecting the house directly to the garden.",
    image: IMAGES.decking,
  },
  {
    id: "p5",
    title: "Practical Timber Garden Workshop",
    category: "Garden Building",
    label: "GARDEN BUILDING",
    location: "Falkirk",
    description: "Solid timber workshop building custom built on-site with reinforced flooring and clean weatherboard cladding.",
    image: IMAGES.gardenBuilding,
  },
  {
    id: "p6",
    title: "Backyard Landscape & Boundary Upgrade",
    category: "Landscaping",
    label: "LANDSCAPING",
    location: "Falkirk",
    description: "Complete boundary fencing replacement paired with fresh turfing and clean paved walkway.",
    image: IMAGES.landscaping,
  },
];
