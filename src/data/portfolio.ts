export type SectionId =
  | "profile"
  | "experience"
  | "projects"
  | "skills"
  | "education"
  | "contact"
  | "resume";

export interface Experience {
  role: string;
  company: string;
  mode: string;
  period: string;
  bullets: string[];
}

export interface Project {
  name: string;
  period: string;
  bullets: string[];
  stack: string[];
}

export const profile = {
  name: "Ana Marisa",
  title: "Fullstack Developer",
  location: "West Jakarta, Banten, Indonesia",
  email: "ana.marisa.mf@gmail.com",
  phone: "+62 851-5733-9847",
  linkedin: "https://linkedin.com/in/ana-m-039135131",
  github: "https://github.com/anamarisa",
  summary:
    "Fullstack developer with 2.5+ years of experience building production-grade web and mobile applications end-to-end — from backend APIs and database design to frontend UI and cloud deployment. Proficient in Laravel and NestJS on the backend, React and Next.js on the frontend, with hands-on experience deploying via Docker on GCP. Demonstrated ability to deliver complex features including real-time WebSocket systems, OAuth 2.0 authentication, iOS mobile apps, microservices architecture, and CI/CD pipelines.",
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Backend", items: ["PHP", "Laravel", "NestJS", "Java Springboot"] },
  { group: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "shadCN", "Tanstack Query", "Jotai"] },
  { group: "Database", items: ["MySQL", "PostgreSQL", "Stored Procedures", "Schema Design"] },
  { group: "DevOps & Tools", items: ["Docker", "GCP", "CI/CD", "Git", "GitHub", "GitLab", "Postman", "Swagger", "Keycloak"] },
  { group: "Mobile", items: ["Capacitor.js (iOS)", "App Store Deployment"] },
  { group: "Architecture", items: ["REST API", "MVC", "Service-Repository", "Microservices"] },
  { group: "Languages", items: ["Bahasa Indonesia (native)", "English (intermediate)"] },
];

export const experience: Experience[] = [
  {
    role: "Fullstack Developer",
    company: "PT. Altindo Teknologi Indonesia",
    mode: "Hybrid",
    period: "Jun 2025 – Present",
    bullets: [
      "Led frontend development for a Transport Management System (TMS) using React.js, TypeScript, Tanstack Query, React Hook Form, shadCN, and Tailwind — architected routing, state management (Jotai + React Context), and CI/CD on GCP.",
      "Improved frontend performance via lazy loading, Suspense, and memoization, reducing initial load time.",
      "Contributed to microservices ERP (Altitude ERP) using Java Springboot and Next.js — built Asset service module, set up Keycloak auth, Spring Config, and service discovery.",
      "Integrated NestJS and React with Microsoft Business Central 365 as the main logic for the ERP product.",
      "Created and maintained API documentation using Postman and Swagger.",
    ],
  },
  {
    role: "Backend Developer",
    company: "PT. Aneka Dasuib Jaya",
    mode: "WFO",
    period: "Nov 2023 – Apr 2025",
    bullets: [
      "Built and maintained fullstack web and mobile apps including an iOS app shipped to the App Store via Capacitor.js.",
      "Designed and optimized MySQL schemas; significantly improved query performance using stored procedures.",
      "Implemented secure auth flows: Laravel Sanctum, OAuth 2.0 (Google), WhatsApp auth via Fonnte API, and role-based access with Gates and Middleware.",
      "Integrated real-time data sync using WebSocket (Ably) for live updates across the app.",
    ],
  },
  {
    role: "Lab Instructor",
    company: "Laboratorium Teknik Informatika Gunadarma",
    mode: "On-site",
    period: "Nov 2019 – Sep 2021",
    bullets: [
      "Taught database and algorithm concepts to undergraduate students — SQL, data structures, programming logic.",
      "Produced instructional video content on database management for coursework.",
      "Assessed assignments and provided written feedback to support learning outcomes.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "TMS — Indofresh",
    period: "Dec 2025 – Mar 2026",
    bullets: [
      "Sole frontend developer responsible for full architecture: design system in Whimsical, routing (React Router), caching (Tanstack Query), state (Jotai + React Context).",
      "Developed all UI modules using shadCN + Tailwind and refactored into reusable components and custom hooks.",
      "Set up CI/CD on GCP VPS and optimized performance with lazy loading, Suspense, and memoization.",
    ],
    stack: ["TypeScript", "React.js", "NestJS", "PostgreSQL", "Tanstack Query", "Docker", "GCP", "Vite"],
  },
  {
    name: "Javasuperfood Grosir",
    period: "Dec 2024 – Apr 2025",
    bullets: [
      "Built and deployed iOS app to the App Store using Capacitor.js.",
      "Full auth system: Laravel Sanctum, Google OAuth 2.0, WhatsApp login via Fonnte API, role-based middleware with Gates.",
      "Integrated WebSocket via Ably for real-time data; optimized DB with stored procedures; built core CMS modules.",
    ],
    stack: ["PHP", "Laravel 10", "MySQL", "React.js", "TypeScript", "Tailwind", "Tanstack Query"],
  },
  {
    name: "Freshco — Indofresh",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "Maintained vendor codebase, resolved bugs, and shipped new product features.",
      "Managed server infrastructure and deployment on GCP; integrated POS printer on backend; implemented reseller module on frontend.",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Tanstack Query", "Docker", "GCP"],
  },
  {
    name: "Altitude ERP — Microservices",
    period: "Apr 2026 – Present",
    bullets: [
      "Contributed to a microservices ERP: built Asset service (Java Springboot) and Asset UI (Next.js).",
      "Implemented REST communication between services; set up Spring Config, API Gateway, service discovery, and Keycloak SSO.",
    ],
    stack: ["Java Springboot", "Next.js", "Tanstack Query", "PostgreSQL", "Docker"],
  },
];

export const education = {
  degree: "Bachelor of Information Technology",
  school: "Gunadarma University",
  period: "2018 – 2022",
  gpa: "3.55 / 4.00",
};
