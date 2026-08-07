# Portfolio Website — Master Build Document

## INSTRUCTIONS FOR CLAUDE CODE

Build a personal developer portfolio website for Oghenetega Stephen Ukpe. This should be a clean, modern, fully responsive Next.js site ready to deploy on Vercel. Build it end-to-end — all pages, components, styling, content — and deploy to Vercel when done.

---

## TECH STACK

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (subtle, not distracting)
- **Icons:** Lucide React
- **Deployment:** Vercel
- **No database needed** — this is a static portfolio site

### Installation

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
npm install framer-motion lucide-react
```

---

## DESIGN DIRECTION

- White background, soft gray accents, deep navy (#1a2332) as primary highlight color
- Clean typography — use Inter via `next/font/google`
- Smooth scroll between sections
- Rounded cards with subtle shadows
- Subtle hover animations on cards and buttons (framer-motion — scale, fade, slide-in)
- Dark mode toggle (dark bg: #0f172a, dark card bg: #1e293b, dark text: #e2e8f0)
- Mobile-first responsive design
- Think Apple's clean presentation meets GitHub's developer aesthetic
- NO generic black-and-neon developer template look
- Generous whitespace between sections (py-20 to py-28)
- Max content width: 1100px

---

## SITE STRUCTURE

Single-page scrolling layout with a sticky navbar. Sections in this order:

### 1. Hero Section

**Name:** Oghenetega Stephen Ukpe

**Tagline:** Fullstack Developer | AI & Automation Enthusiast

**Intro paragraph:**
"I build practical software solutions and explore how AI and automation can make everyday processes faster and smarter. My experience spans fullstack web development, network engineering, and digital marketing — and I'm always building something new."

**CTA Buttons:**
- Download CV → links to `/cv.pdf` (create an empty placeholder file at `public/cv.pdf` — user will replace with real CV later)
- View Projects → smooth scroll to `#projects` section
- Contact Me → smooth scroll to `#contact` section

**Social Links (icon buttons using Lucide icons):**
- GitHub: https://github.com/JT-TEGA
- LinkedIn: https://linkedin.com/in/oghenetega-ukpe
- Email: mailto:ukpeoghenetega1@gmail.com

**Animation:** Name and tagline fade in + slide up on load. Buttons stagger in after.

---

### 2. About Me (`#about`)

**Photo:** Use a placeholder div (w-48 h-48 rounded-full bg-navy) with initials "OU" centered in white text. User will replace with a real photo later using next/image.

**Bio text:**
"I recently graduated with a B.Sc. in Computer Science from Pan-Atlantic University, Lagos. I've completed internships at both Cyberspace Limited and MTN Nigeria, working on everything from network operations center monitoring to fiber optic transmission systems.

Beyond engineering, I run Retro Locker — a Gen Z streetwear brand on Instagram — which taught me digital marketing, branding, and building a business from scratch. I'm currently focused on fullstack development and AI automation, and I'm actively looking for opportunities where I can build, ship, and grow."

**Layout:** Two-column on desktop (photo left, text right). Stack on mobile.

---

### 3. Technical Skills (`#skills`)

Display as a grid of categorized skill cards. Each category is a card with the category name as a heading and skills as styled tags/badges inside it. Cards should animate in (fade + slide up) when scrolled into view.

**Languages:**
JavaScript, TypeScript, Python, Java, C++, Rust, HTML, CSS, SQL

**Frontend:**
React, React Native, Next.js, Tailwind CSS, Vite, Responsive Design

**Backend:**
Node.js, Express.js, NestJS, REST APIs

**Databases:**
MySQL, PostgreSQL

**Tools & Platforms:**
Git & GitHub, VS Code, Apache NetBeans, MySQL Workbench, Streamlit, Vercel, CorelDRAW

**Networking & Infrastructure:**
LTE Network Monitoring, Fiber Optic & Microwave Transmission, WhatsUp Gold, MobaXterm, Huawei iManager, Ericsson ENM

**Other Interests:**
AI & Automation, Cybersecurity, Digital Marketing, SEO, Google Business Profile Optimization

---

### 4. Featured Projects (`#projects`)

Each project is a card with: title, description, tech stack tags, and a GitHub link button (where available). Include a placeholder image area per project (gray div with project icon, user will add screenshots later). Cards animate in on scroll.

**Project 1: XL Billboards Website** *(highlight this as featured/pinned)*
Corporate website for an outdoor advertising company featuring a searchable billboard inventory database with 25+ locations, vacant site finder with cascading filters, interactive Leaflet maps with GPS coordinates, admin panel with full CRUD, blog system, and email notifications via Resend. Full-stack application deployed on Vercel.
- Tech: Next.js, TypeScript, Tailwind CSS, Prisma, Neon PostgreSQL, Cloudinary, Leaflet/OpenStreetMap, Resend, NextAuth.js
- Link: https://xlbillboardsng.com
- Status badge: "Live"
- Make this card larger/featured — it's the most impressive project

**Project 2: Clinic Management System**
Full-stack clinic management system with a React frontend, NestJS backend, and PostgreSQL database. Features CRUD operations for patient records, appointment management, and a responsive UI.
- Tech: React, NestJS, PostgreSQL
- GitHub: https://github.com/JT-TEGA

**Project 3: Cafeteria Ordering System**
Ordering platform with separate admin and customer dashboards. Admins manage meals and track orders; customers browse menus and place orders. Built with Streamlit for rapid prototyping and PostgreSQL for data persistence.
- Tech: Streamlit, PostgreSQL
- GitHub: https://github.com/JT-TEGA

**Project 4: Biometric Attendance System**
Desktop application with a login system, biometric attendance tracking, and shift management. Features a GUI for registering employees, recording attendance, and generating shift reports.
- Tech: Java, Swing, MySQL
- GitHub: https://github.com/JT-TEGA

**Project 5: ToothFixers Web App**
Full-stack dental clinic management system with appointment booking, patient records, and an admin panel for clinic staff. Built as a complete CRUD application with authentication.
- Tech: React, Node.js, Express, MySQL
- GitHub: https://github.com/JT-TEGA

**Project 6: Word Scrambler Game**
Interactive spelling game where players unscramble letters to form words. Features a scoring system, letter reveal hints, and multiple difficulty levels.
- Tech: Java, Swing
- GitHub: https://github.com/JT-TEGA

**Project 7: Google Business Profile Optimization**
Helped businesses improve their local online presence through Google Business Profile optimization, local SEO strategy, Google Reviews management, and tailored business descriptions. Demonstrates business understanding alongside technical skills.
- Type: Digital Marketing / SEO
- Display this differently from code projects — use a distinct "Business & Marketing" badge instead of tech tags. Different card style or accent color to distinguish it.

**Layout:** XL Billboards card spans full width at top as featured project. Other 6 projects in a 2-column grid on desktop (1 column mobile). The Google Business card should stand out as a non-code project.

---

### 5. Experience (`#experience`)

Timeline-style layout — vertical line on the left with dots/nodes at each role. Most recent first. Animate each node in on scroll.

**Transmission Intern — MTN Nigeria, Lagos**
2025

- Worked within the Network Department's Transmission Team at MTN headquarters in Ikoyi, Lagos
- Gained hands-on exposure to fiber optic and microwave transmission networks forming MTN's national backbone
- Participated in site inspections including a site relocation project and fiber rerouting exercises
- Observed OTDR tools for fiber testing and assisted in analyzing fiber performance reports (attenuation, latency)
- Learned network topologies (ring, mesh, star), 1+1 protection for redundancy, and QoS/MPLS traffic prioritization
- Used Huawei iManager and Ericsson ENM for real-time network monitoring
- Technologies: Fiber Optics, Microwave Links, Huawei iManager, Ericsson ENM, OTDR

**IT Intern — Cyberspace Limited, Lagos**
Jul 2024 – Sep 2024

- Worked in the Network Operations Center (NOC) monitoring real-time network status across multiple client locations
- Diagnosed and resolved LTE and routing issues using command-line interfaces, ping tests, and route tracing
- Monitored LTE base station uptime using WhatsUp Gold, identified signal degradation and latency issues
- Used MobaXterm for remote access to HQ sites and diagnostic testing
- Handled customer support tickets — remotely accessed client devices, diagnosed and resolved connectivity issues
- Prepared weekly incident reports and contributed to network documentation
- Technologies: WhatsUp Gold, MobaXterm, LTE, Routers, Switches, Firewalls

**Founder — Retro Locker**
2022 – Present

- Founded and run a streetwear clothing brand targeting Gen Z, marketed primarily through Instagram
- Handle product sourcing, brand identity, social media marketing, and customer engagement
- Built the brand from scratch with no external funding

**Marketing & Sales Assistant — Maxmode Gadgets, Lagos**
2022

- Managed product promotions and social media marketing, increasing product visibility by 30%
- Assisted in tech product sales (in-person and online) with tailored customer recommendations
- Supported digital branding efforts and customer engagement strategies

---

### 6. Education (`#education`)

Simple card or section.

**Pan-Atlantic University, Lagos**
Bachelor of Science in Computer Science — 2026

Relevant Coursework: Software Engineering, Systems Programming, Web Development, Computer Networks, Telecommunications Systems, Network Security

---

### 7. What I'm Building Now (`#building`)

A short section showing active growth. Display as simple cards or a list with subtle pulse/glow animation on the dots.

- Building full-stack web applications with Next.js and PostgreSQL
- Exploring AI automation — how to use AI to streamline business workflows
- Developing a billboard company website (XL Billboards) as a freelance project
- Growing Retro Locker through digital marketing and Instagram strategy

---

### 8. Contact (`#contact`)

Simple centered section.

**Heading:** "Let's Connect"

**Subtext:** "I'm open to fullstack developer roles, AI/automation-focused positions, freelance projects, and interesting collaborations."

**Contact details (with Lucide icons):**
- Email: ukpeoghenetega1@gmail.com
- GitHub: https://github.com/JT-TEGA
- LinkedIn: https://linkedin.com/in/oghenetega-ukpe
- Location: Lagos, Nigeria

**Contact form:** Simple form with Name, Email, Message fields, and a Send button. The Send button uses a `mailto:` link that opens the user's email client with the form data pre-filled:
```
mailto:ukpeoghenetega1@gmail.com?subject=Portfolio Contact from {name}&body={message}%0A%0AFrom: {name} ({email})
```
No backend needed. Show a toast/message: "Opening your email client..." on click.

---

## NAVBAR

Sticky top navbar with blur backdrop on scroll (like the XLBillboards site):
- Left: "Tega Ukpe" or initials logo "TU" in a small navy circle
- Center/Right: nav links — About, Skills, Projects, Experience, Contact
- Far right: dark mode toggle button (sun/moon icon)
- Mobile: hamburger menu → slide-out or dropdown with all links
- Clicking a nav link smooth-scrolls to that section
- Active section highlighted in nav based on scroll position (use Intersection Observer)

---

## FOOTER

Simple footer:
- "© 2026 Oghenetega Ukpe. Built with Next.js."
- Social icon links (GitHub, LinkedIn, Email)
- Centered layout, small text, subtle

---

## DEPLOYMENT

1. Create a new GitHub repository called `tega-portfolio` under the `JT-TEGA` account
2. Push all code to that repo
3. Deploy to Vercel from the GitHub repo
4. Make sure `npm run build` succeeds with zero errors before deploying

---

## IMPORTANT NOTES

1. **All content above is final copy** — use it exactly as written, do not generate placeholder lorem ipsum text
2. **Leave image placeholders where noted** — use styled divs with icons or initials. The user will add real photos/screenshots later
3. **Keep the site fast** — no heavy libraries beyond what's listed. Optimize for Core Web Vitals
4. **All section IDs must match navbar links** — smooth scroll must work correctly
5. **The CV download button must link to `/cv.pdf`** — create an empty placeholder PDF in the public folder
6. **Dark mode must work properly** across ALL sections and components — test both modes
7. **Framer Motion animations should be subtle** — fade in, slide up, stagger. No bouncing, spinning, or flashy effects
8. **XL Billboards project should be visually prominent** — it's the biggest project and demonstrates real-world fullstack capability
9. **The Google Business Profile project needs a distinct visual treatment** — it's not a code project, so don't display it the same way as the dev projects

**START BUILDING. Begin with project setup and work through each section in order.**
