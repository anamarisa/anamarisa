import { projects } from "@/data/portfolio";

export const ProjectsSection = () => (
  <div className="grid gap-4">
    {projects.map((p, i) => (
      <article key={i} className="group relative overflow-hidden rounded-2xl border border-border/60 bg-secondary/30 p-5 transition-all hover:border-primary/40 hover:shadow-glow">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <header className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-lg font-semibold">{p.name}</h3>
          <span className="font-mono text-[11px] text-muted-foreground">{p.period}</span>
        </header>
        <ul className="mb-3 space-y-1.5 text-sm text-foreground/85">
          {p.bullets.map((b, j) => (
            <li key={j} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span key={s} className="rounded-md border border-border/70 bg-background/40 px-2 py-0.5 font-mono text-[10.5px] text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
      </article>
    ))}
  </div>
);
