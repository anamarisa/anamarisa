import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { desktopIcons } from "@/data/icons";
import type { SectionId } from "@/data/portfolio";

import { ProfileSection } from "@/components/sections/ProfileSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ResumeSection } from "@/components/sections/ResumeSection";

const VALID: SectionId[] = ["profile", "experience", "projects", "skills", "education", "contact", "resume"];

const SUBTITLES: Record<SectionId, string> = {
  profile: "About Ana — fullstack developer",
  experience: "Roles, teams, and shipped impact",
  projects: "Selected production work",
  skills: "Stack, tools and architecture",
  education: "Academic background",
  contact: "Let's build something together",
  resume: "Download ATS-friendly resume",
};

const renderSection = (id: SectionId) => {
  switch (id) {
    case "profile": return <ProfileSection />;
    case "experience": return <ExperienceSection />;
    case "projects": return <ProjectsSection />;
    case "skills": return <SkillsSection />;
    case "education": return <EducationSection />;
    case "contact": return <ContactSection />;
    case "resume": return <ResumeSection />;
  }
};

export const SectionModal = () => {
  const { section } = useParams<{ section?: string }>();
  const navigate = useNavigate();

  // Default route "/" => profile modal
  const id = useMemo<SectionId>(() => {
    if (!section) return "profile";
    return (VALID as string[]).includes(section) ? (section as SectionId) : "profile";
  }, [section]);

  // Normalize unknown routes back to /
  useEffect(() => {
    if (section && !(VALID as string[]).includes(section)) {
      navigate("/", { replace: true });
    }
  }, [section, navigate]);

  const meta = desktopIcons.find((i) => i.id === id);
  const Icon = meta?.icon;

  return (
    <Dialog
      open
      onOpenChange={(o) => {
        if (!o) navigate("/");
      }}
    >
      <DialogContent
        className="glass max-w-2xl gap-0 overflow-hidden border-white/10 bg-card/70 p-0 shadow-glow data-[state=open]:animate-scale-in"
      >
        <DialogHeader className="border-b border-border/60 bg-background/40 px-6 py-4 text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl glass-pink">
              {Icon && <Icon className="h-5 w-5 text-primary" strokeWidth={1.7} />}
            </div>
            <div className="min-w-0 flex-1">
              <DialogTitle className="font-display text-lg font-semibold tracking-tight">
                {meta?.label ?? "Profile.app"}
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                {SUBTITLES[id]}
              </DialogDescription>
            </div>
            <div className="hidden gap-1.5 sm:flex">
              <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted" />
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[70vh]">
          <div className="px-6 py-6">{renderSection(id)}</div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
