import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { desktopIcons } from "@/data/icons";
import type { SectionId } from "@/data/portfolio";
import { SectionSkeleton } from "@/components/desktop/SectionSkeleton";

// Lazy-load every section so its mount triggers a Suspense fallback.
const ProfileSection = lazy(() =>
  import("@/components/sections/ProfileSection").then((m) => ({ default: m.ProfileSection })),
);
const ExperienceSection = lazy(() =>
  import("@/components/sections/ExperienceSection").then((m) => ({ default: m.ExperienceSection })),
);
const ProjectsSection = lazy(() =>
  import("@/components/sections/ProjectsSection").then((m) => ({ default: m.ProjectsSection })),
);
const SkillsSection = lazy(() =>
  import("@/components/sections/SkillsSection").then((m) => ({ default: m.SkillsSection })),
);
const EducationSection = lazy(() =>
  import("@/components/sections/EducationSection").then((m) => ({ default: m.EducationSection })),
);
const ContactSection = lazy(() =>
  import("@/components/sections/ContactSection").then((m) => ({ default: m.ContactSection })),
);
const ResumeSection = lazy(() =>
  import("@/components/sections/ResumeSection").then((m) => ({ default: m.ResumeSection })),
);

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

// Minimum skeleton dwell so transitions don't flash for a frame.
const MIN_SKELETON_MS = 220;

export const SectionModal = () => {
  const { section } = useParams<{ section?: string }>();
  const navigate = useNavigate();

  // Modal is open whenever the URL has a valid section segment.
  // Root "/" = desktop view (no modal). Profile is reached via "/profile".
  const isOpen = !!section && (VALID as string[]).includes(section);

  const id = useMemo<SectionId>(() => {
    return isOpen ? (section as SectionId) : "profile";
  }, [isOpen, section]);

  // Bounce unknown section slugs back to the desktop.
  useEffect(() => {
    if (section && !(VALID as string[]).includes(section)) {
      navigate("/", { replace: true });
    }
  }, [section, navigate]);

  // Force the skeleton to show briefly when the section changes — even after
  // the lazy chunk has been cached — so route switches always feel smooth.
  const [showSkeleton, setShowSkeleton] = useState(true);
  useEffect(() => {
    if (!isOpen) return;
    setShowSkeleton(true);
    const t = setTimeout(() => setShowSkeleton(false), MIN_SKELETON_MS);
    return () => clearTimeout(t);
  }, [id, isOpen]);

  const meta = desktopIcons.find((i) => i.id === id);
  const Icon = meta?.icon;

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(o) => {
        if (!o) navigate("/");
      }}
    >
      <DialogContent className="glass max-w-2xl gap-0 border-white/10 bg-card/70 p-0 shadow-glow">
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
          <div key={id} className="px-6 py-6">
            {showSkeleton ? (
              <div className="animate-fade-in" aria-busy="true" aria-live="polite">
                <SectionSkeleton section={id} />
              </div>
            ) : (
              <Suspense fallback={<SectionSkeleton section={id} />}>
                <div className="animate-fade-in">{renderSection(id)}</div>
              </Suspense>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
