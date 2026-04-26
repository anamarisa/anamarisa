import { User, Briefcase, FolderKanban, Sparkles, GraduationCap, Mail, FileText, type LucideIcon } from "lucide-react";
import type { SectionId } from "@/data/portfolio";

export interface DesktopIcon {
  id: SectionId;
  label: string;
  icon: LucideIcon;
  /** position in % of the canvas (left, top) */
  pos: { x: number; y: number };
  /** ms — staggered float */
  delay: number;
}

export const desktopIcons: DesktopIcon[] = [
  { id: "profile",    label: "Profile.app",    icon: User,         pos: { x: 12, y: 18 }, delay: 0 },
  { id: "experience", label: "Experience.app", icon: Briefcase,    pos: { x: 32, y: 38 }, delay: 0.4 },
  { id: "projects",   label: "Projects.app",   icon: FolderKanban, pos: { x: 60, y: 22 }, delay: 0.8 },
  { id: "skills",     label: "Skills.app",     icon: Sparkles,     pos: { x: 78, y: 48 }, delay: 1.2 },
  { id: "education",  label: "Education.app",  icon: GraduationCap, pos: { x: 18, y: 62 }, delay: 1.6 },
  { id: "contact",    label: "Contact.app",    icon: Mail,         pos: { x: 48, y: 70 }, delay: 2.0 },
  { id: "resume",     label: "Resume.pdf",     icon: FileText,     pos: { x: 82, y: 78 }, delay: 2.4 },
];
