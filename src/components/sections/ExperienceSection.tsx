import { experience } from "@/data/portfolio";
import { Building2 } from "lucide-react";

export const ExperienceSection = () => (
  <div className="space-y-5">
    {experience.map((exp, i) => (
      <article key={i} className="group rounded-2xl border border-border/60 bg-secondary/30 p-5 transition-colors hover:border-primary/40">
        <header className="mb-3 flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-lg font-semibold leading-tight">{exp.role}</h3>
            <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted-foreground">
              <Building2 className="h-3.5 w-3.5 text-primary" />
              {exp.company}
              <span className="text-border">·</span>
              <span>{exp.mode}</span>
            </p>
          </div>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] text-primary">
            {exp.period}
          </span>
        </header>
        <ul className="space-y-2 text-sm text-foreground/85">
          {exp.bullets.map((b, j) => (
            <li key={j} className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </article>
    ))}
  </div>
);
