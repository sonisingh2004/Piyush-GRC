/** Categories for filtering projects */
export const categories = ["All", "Facade", "Interior", "Commercial", "Residential"];

/** All projects data */
export const projects = [
  {
    id: 1,
    title: "Name",
    category: "Facade",
    location: "location",
    year: "2025",
    tag: "tag name",
    desc: "Full exterior facade featuring custom jali screens, ornamental arches, Mughal-inspired balustrades, and GRC dome finials across a multi-storey building.",
    products: ["Jali Panels", "Dome Finials", "Balustrades", "Arched Frames"],
    image: "/img4.jpeg",
    featured: true,
  },
  {
    id: 2,
    title: "Name",
    category: "Commercial",
    location: "Eastern India",
    year: "2025",
    tag: "Classical Column Facade",
    desc: "Fluted pilasters, Ionic column capitals, and ornamental cornices installed across the entrance facade of a premium banquet and event venue.",
    products: ["Fluted Pilasters", "Ionic Capitals", "Cornices", "Corbels"],
    image: "/img6.jpeg",
    featured: false,
  },
  {
    id: 3,
    title: "Name",
    category: "Residential",
    location: "Patna, Bihar",
    year: "2025",
    tag: "tag name",
    desc: "Custom GRC jali panels and window surrounds designed for a modern luxury villa, blending contemporary lines with traditional lattice motifs.",
    products: ["Jali Panels", "Window Surrounds", "Column Bases"],
    image: "/img7.jpeg",
    featured: false,
  },
  {
    id: 4,
    title: "Name",
    category: "Interior",
    location: "Deoghar, Jharkhand",
    year: "2025",
    tag: "Interior Décor Elements",
    desc: "Ornamental corbels, ceiling medallions, and classical pilasters used throughout a heritage hotel lobby to create a grand colonial aesthetic.",
    products: ["Corbels", "Ceiling Medallions", "Pilasters", "Column Capitals"],
    image: "/img3.jpeg",
    featured: false,
  },
  {
    id: 5,
    title: "Name",
    category: "Commercial",
    location: "Bhubaneswar, Odisha",
    year: "2025",
    tag: "Modern Facade System",
    desc: "Large-scale GRC panel cladding for a multi-tenant commercial complex featuring custom geometric screen panels for sun shading and aesthetics.",
    products: ["Screen Panels", "Cladding Panels", "Decorative Grilles"],
    image: "/img5.jpeg",
    featured: false,
  },
  {
    id: 6,
    title: "Name",
    category: "Commercial",
    location: "Patna, Bihar",
    year: "2025",
    tag: "Ornamental Interiors",
    desc: "Elaborate GRC decorative elements including floral motif panels, arch surrounds, and column capitals installed for a luxury wedding venue.",
    products: ["Floral Panels", "Arch Surrounds", "Column Capitals"],
    image: "/img8.jpeg",
    featured: false,
  },
];

/** Statistics displayed in the strip */
export const stats = [
  { num: "10+",  label: "Projects Completed" },
  { num: "3",    label: "States Served"       },
  { num: "100%", label: "Custom Built"        },
  { num: "24H",  label: "Support"             },
];

/** Process steps */
export const processSteps = [
  { step: "01", title: "Consultation",  desc: "We discuss your project requirements, style preferences, and technical specifications in detail." },
  { step: "02", title: "Design & Mold", desc: "Custom molds are designed and fabricated in-house to your exact dimensions and design." },
  { step: "03", title: "GRC Casting",   desc: "Elements are cast using premium GRC mix, carefully cured and hand-finished to perfection." },
  { step: "04", title: "Installation",  desc: "Our team handles delivery and on-site installation across all project locations." },
];
