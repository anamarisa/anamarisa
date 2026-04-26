import { skills } from "@/data/portfolio";

export const SkillsSection = () => (
  <div className="grid gap-4 sm:grid-cols-2">
    {skills.map((s) => (
      <div key={s.group} className="rounded-2xl border border-border/60 bg-secondary/30 p-4">
        <h3 className="mb-2.5 font-mono text-[11px] uppercase tracking-widest text-primary">{s.group}</h3>
        <div className="flex flex-wrap gap-1.5">
          {s.items.map((it) => (
            <span
              key={it}
              className="rounded-md border border-border/70 bg-background/40 px-2 py-1 text-xs text-foreground/90 transition-colors hover:border-primary/40 hover:text-primary"
            >
              {it}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);
