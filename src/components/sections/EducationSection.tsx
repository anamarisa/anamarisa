import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export const EducationSection = () => (
  <div className="rounded-2xl border border-border/60 bg-secondary/30 p-6">
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl glass-pink">
        <GraduationCap className="h-6 w-6 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="font-display text-lg font-semibold">{education.degree}</h3>
        <p className="text-sm text-muted-foreground">{education.school}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-primary">
            {education.period}
          </span>
          <span className="rounded-full border border-border/70 bg-background/40 px-2.5 py-0.5 font-mono text-muted-foreground">
            GPA {education.gpa}
          </span>
        </div>
      </div>
    </div>
  </div>
);
