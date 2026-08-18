import {
  Code2,
  Database,
  Fingerprint,
  Gamepad2,
  LayoutDashboard,
  Megaphone,
  Network,
  Server,
  Shirt,
  ShoppingBag,
  Smile,
  Sparkles,
  Stethoscope,
  TrendingUp,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Oghenetega Stephen Ukpe",
  shortName: "Tega Ukpe",
  initials: "OU",
  navInitials: "TU",
  tagline: "Fullstack Developer | AI & Automation Enthusiast",
  intro:
    "I build practical software solutions and explore how AI and automation can make everyday processes faster and smarter. My experience spans fullstack web development, network engineering, and digital marketing — and I'm always building something new.",
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
  "Beyond engineering, I run Retro Locker — a Gen Z streetwear brand on Instagram — which taught me digital marketing, branding, and building a business from scratch. I'm currently focused on fullstack development and AI automation, and I'm actively looking for opportunities where I can build, ship, and grow.",
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
    skills: ["Node.js", "Express.js", "NestJS", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL"],
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
};

export const featuredProject: Project = {
  title: "XL Billboards Website",
  description:
    "Corporate website for an outdoor advertising company featuring a searchable billboard inventory database with 25+ locations, vacant site finder with cascading filters, interactive Leaflet maps with GPS coordinates, admin panel with full CRUD, blog system, and email notifications via Resend. Full-stack application deployed on Vercel.",
  icon: Megaphone,
  tech: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "Neon PostgreSQL",
    "Cloudinary",
    "Leaflet/OpenStreetMap",
    "Resend",
    "NextAuth.js",
  ],
  href: "https://xlbillboards.vercel.app",
  linkLabel: "Visit Site",
  status: "Live",
  kind: "code",
};

export const projects: Project[] = [
  {
    title: "Clinic Management System",
    description:
      "Full-stack clinic management system with a React frontend, NestJS backend, and PostgreSQL database. Features CRUD operations for patient records, appointment management, and a responsive UI.",
    icon: Stethoscope,
    tech: ["React", "NestJS", "PostgreSQL"],
    href: profile.github,
    linkLabel: "GitHub",
    kind: "code",
  },
  {
    title: "Cafeteria Ordering System",
    description:
      "Ordering platform with separate admin and customer dashboards. Admins manage meals and track orders; customers browse menus and place orders. Built with Streamlit for rapid prototyping and PostgreSQL for data persistence.",
    icon: UtensilsCrossed,
    tech: ["Streamlit", "PostgreSQL"],
    href: profile.github,
    linkLabel: "GitHub",
    kind: "code",
  },
  {
    title: "Biometric Attendance System",
    description:
      "Desktop application with a login system, biometric attendance tracking, and shift management. Features a GUI for registering employees, recording attendance, and generating shift reports.",
    icon: Fingerprint,
    tech: ["Java", "Swing", "MySQL"],
    href: profile.github,
    linkLabel: "GitHub",
    kind: "code",
  },
  {
    title: "ToothFixers Web App",
    description:
      "Full-stack dental clinic management system with appointment booking, patient records, and an admin panel for clinic staff. Built as a complete CRUD application with authentication.",
    icon: Smile,
    tech: ["React", "Node.js", "Express", "MySQL"],
    href: profile.github,
    linkLabel: "GitHub",
    kind: "code",
  },
  {
    title: "Word Scrambler Game",
    description:
      "Interactive spelling game where players unscramble letters to form words. Features a scoring system, letter reveal hints, and multiple difficulty levels.",
    icon: Gamepad2,
    tech: ["Java", "Swing"],
    href: profile.github,
    linkLabel: "GitHub",
    kind: "code",
  },
  {
    title: "Google Business Profile Optimization",
    description:
      "Helped businesses improve their local online presence through Google Business Profile optimization, local SEO strategy, Google Reviews management, and tailored business descriptions. Demonstrates business understanding alongside technical skills.",
    icon: TrendingUp,
    kind: "business",
    badge: "Business & Marketing",
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
