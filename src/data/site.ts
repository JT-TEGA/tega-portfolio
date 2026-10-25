import {
  BellRing,
  BrainCircuit,
  Clapperboard,
  Code2,
  Database,
  LayoutDashboard,
  Megaphone,
  Network,
  Server,
  Shirt,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Tega Ukpe",
  shortName: "Tega Ukpe",
  initials: "OU",
  navInitials: "TU",
  tagline: "Fullstack Developer | AI & Automation Enthusiast",
  intro:
    "I build practical software solutions and explore how AI and automation can make everyday processes faster and smarter. My experience spans fullstack web development, network engineering, and digital marketing and I'm always building something new.",
  email: "ukpeoghenetega1@gmail.com",
  github: "https://github.com/JT-TEGA",
  linkedin: "https://linkedin.com/in/oghenetega-ukpe",
  location: "Lagos, Nigeria",
  cv: "/cv.pdf",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const aboutParagraphs = [
  "I completed my B.Sc. in Computer Science at Pan-Atlantic University, Lagos, with graduation set for December 2026. I've completed internships at both Cyberspace Limited and MTN Nigeria, working on everything from network operations center monitoring to fiber optic transmission systems.",
  "Beyond engineering, I run Retro Locker a Gen Z streetwear brand on Instagram which taught me digital marketing, branding, and building a business from scratch. I'm currently focused on fullstack development and AI automation, and I'm actively looking for opportunities where I can build and grow.",
];

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C++",
      "Rust",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    title: "Frontend",
    icon: LayoutDashboard,
    skills: [
      "React",
      "React Native",
      "Next.js",
      "Tailwind CSS",
      "Vite",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "FastAPI",
      "pandas",
      "Claude API",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "SQLite"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "Git & GitHub",
      "VS Code",
      "Apache NetBeans",
      "MySQL Workbench",
      "Streamlit",
      "Vercel",
      "Render",
      "CorelDRAW",
    ],
  },
  {
    title: "Networking & Infrastructure",
    icon: Network,
    skills: [
      "LTE Network Monitoring",
      "Fiber Optic & Microwave Transmission",
      "WhatsUp Gold",
      "MobaXterm",
      "Huawei iManager",
      "Ericsson ENM",
    ],
  },
  {
    title: "Other Interests",
    icon: Sparkles,
    skills: [
      "AI & Automation",
      "Cybersecurity",
      "Digital Marketing",
      "SEO",
      "Google Business Profile Optimization",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  icon: LucideIcon;
  tech?: string[];
  href?: string;
  linkLabel?: string;
  status?: string;
  kind: "code" | "business";
  badge?: string;
  /** Private client work: no public link; the card opens a details modal. */
  caseStudy?: boolean;
  /** Screenshot paths under /public, shown in order in the case-study modal. */
  media?: string[];
  /** Media are phone screens: the modal shows them in a row, uncropped. */
  portraitMedia?: boolean;
  /** Card thumbnail path under /public; the card shows no image area without it. */
  image?: string;
};

export const featuredProject: Project = {
  title: "LeadFlow AI",
  description:
    "AI-powered lead qualification tool that turns a messy sales CSV into a ranked pipeline. It normalizes inconsistent dates, budgets, and employee counts, then uses the Claude API to read unstructured conversation notes and extract buying signals — urgency, budget, and decision authority. Each lead is scored across three weighted categories (firmographic fit, behavioral signals, engagement quality) and sorted into Contact Now / Nurture / Disqualify tiers, surfaced through a Bloomberg Terminal-inspired dashboard with a pipeline funnel, score distribution chart, per-lead AI reasoning panel, run history, and Excel export.",
  icon: BrainCircuit,
  tech: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Python",
    "FastAPI",
    "pandas",
    "Claude API",
    "SQLite",
    "Vercel",
    "Render",
  ],
  href: "https://leadflow-ai-peach.vercel.app/",
  linkLabel: "Live Demo",
  status: "Live",
  kind: "code",
  image: "/leadflow.png",
};

export const projects: Project[] = [
  {
    title: "XL Billboards Website",
    description:
      "Corporate website for an outdoor advertising company featuring a searchable billboard inventory database with 25+ locations, vacant site finder with cascading filters, interactive Leaflet maps with GPS coordinates, admin panel with full CRUD, blog system, and email notifications via Resend. Full-stack application deployed on Vercel.",
    icon: Megaphone,
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Neon PostgreSQL",
      "Cloudinary",
      "Leaflet",
      "NextAuth.js",
    ],
    href: "https://xlbillboards.vercel.app",
    linkLabel: "Visit Site",
    kind: "code",
    image: "/xlbillboards.jpg",
  },
  {
    title: "XL Billboards — Inventory & Booking Dashboard",
    description:
      "A full admin dashboard I built into a live client site (XL Billboards) to run their out-of-home advertising operation. It tracks 70+ billboards across cities, shows a live availability calendar of what's booked, tentative, or free, manages bookings and payments, captures incoming client inquiries with budget and type, and automatically flags campaigns expiring within 30 days so the admin can chase renewals before they lapse.",
    icon: BellRing,
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Scheduled jobs / cron",
      "Email notifications",
    ],
    status: "Live",
    kind: "code",
    caseStudy: true,
    media: [
      "/projects/Dashboard.png",
      "/projects/Availability.png",
      "/projects/Bookings.png",
      "/projects/Recent-inquiries.png",
    ],
  },
  {
    title: "Style Genie",
    description:
      "AI-powered wardrobe and outfit recommendation app for the Nigerian market. Users photograph their clothes to build a digital wardrobe, then get outfit recommendations — designed offline-first to work around local connectivity constraints. My final-year capstone project.",
    icon: Sparkles,
    tech: [
      "React Native",
      "Node.js",
      "Express",
      "Python",
      "ResNet-50",
      "U2-Net",
      "OpenCV",
      "MongoDB Atlas",
      "AWS S3",
    ],
    href: "https://github.com/JT-TEGA/style-genie",
    linkLabel: "GitHub",
    status: "In Progress",
    kind: "code",
    image: "/style-genie.png",
    media: ["/style-genie.png", "/style-genie2.png", "/style-genie3.png"],
    portraitMedia: true,
  },
  {
    title: "Cutroom",
    description:
      "An AI-assisted short-form video editor I built for my own gym, fashion, and vlog content. I write a brief, Claude plans the edit, and the pipeline cuts, captions, and renders the video automatically. Now evolving into a standalone app with its own UI.",
    icon: Clapperboard,
    tech: ["Claude Code", "FFmpeg", "Whisper", "OpenCV", "Puppeteer"],
    href: "https://github.com/JT-TEGA/cutroom",
    linkLabel: "GitHub",
    status: "In Progress",
    kind: "code",
    image: "/cutroom.jpg",
  },
  {
    title: "MAXMODE Gadgets & Accessories",
    description:
      "E-commerce website for a Lagos-based phone and laptop retailer — product catalog and a clean, mobile-first storefront.",
    icon: Smartphone,
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "",
    linkLabel: "GitHub",
    kind: "code",
    image: "/maxmode.png",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  icon: LucideIcon;
  bullets: string[];
  technologies?: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Transmission Intern",
    company: "MTN Nigeria, Lagos",
    period: "2025",
    icon: Network,
    bullets: [
      "Worked within the Network Department's Transmission Team at MTN headquarters in Ikoyi, Lagos",
      "Gained hands-on exposure to fiber optic and microwave transmission networks forming MTN's national backbone",
      "Participated in site inspections including a site relocation project and fiber rerouting exercises",
      "Observed OTDR tools for fiber testing and assisted in analyzing fiber performance reports (attenuation, latency)",
      "Learned network topologies (ring, mesh, star), 1+1 protection for redundancy, and QoS/MPLS traffic prioritization",
      "Used Huawei iManager and Ericsson ENM for real-time network monitoring",
    ],
    technologies: [
      "Fiber Optics",
      "Microwave Links",
      "Huawei iManager",
      "Ericsson ENM",
      "OTDR",
    ],
  },
  {
    role: "IT Intern",
    company: "Cyberspace Limited, Lagos",
    period: "Jul 2024 – Sep 2024",
    icon: Server,
    bullets: [
      "Worked in the Network Operations Center (NOC) monitoring real-time network status across multiple client locations",
      "Diagnosed and resolved LTE and routing issues using command-line interfaces, ping tests, and route tracing",
      "Monitored LTE base station uptime using WhatsUp Gold, identified signal degradation and latency issues",
      "Used MobaXterm for remote access to HQ sites and diagnostic testing",
      "Handled customer support tickets — remotely accessed client devices, diagnosed and resolved connectivity issues",
      "Prepared weekly incident reports and contributed to network documentation",
    ],
    technologies: [
      "WhatsUp Gold",
      "MobaXterm",
      "LTE",
      "Routers",
      "Switches",
      "Firewalls",
    ],
  },
  {
    role: "Founder",
    company: "Retro Locker",
    period: "2022 – Present",
    icon: Shirt,
    bullets: [
      "Founded and run a streetwear clothing brand targeting Gen Z, marketed primarily through Instagram",
      "Handle product sourcing, brand identity, social media marketing, and customer engagement",
      "Built the brand from scratch with no external funding",
    ],
  },
  {
    role: "Marketing & Sales Assistant",
    company: "Maxmode Gadgets, Lagos",
    period: "2022",
    icon: ShoppingBag,
    bullets: [
      "Managed product promotions and social media marketing, increasing product visibility by 30%",
      "Assisted in tech product sales (in-person and online) with tailored customer recommendations",
      "Supported digital branding efforts and customer engagement strategies",
    ],
  },
];

export const education = {
  school: "Pan-Atlantic University, Lagos",
  degree: "Bachelor of Science in Computer Science",
  year: "2026",
  coursework: [
    "Software Engineering",
    "Systems Programming",
    "Web Development",
    "Computer Networks",
    "Telecommunications Systems",
    "Network Security",
  ],
};

export const buildingNow = [
  "Building full-stack web applications with Next.js and PostgreSQL",
  "Exploring AI automation — how to use AI to streamline business workflows",
  "Developing a billboard company website (XL Billboards) as a freelance project",
  "Growing Retro Locker through digital marketing and Instagram strategy",
];
