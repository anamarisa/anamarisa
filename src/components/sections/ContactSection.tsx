import { profile } from "@/data/portfolio";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone / WhatsApp", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: "ana-m-039135131", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "anamarisa", href: profile.github },
];

export const ContactSection = () => (
  <div className="space-y-5">
    <p className="text-sm text-foreground/85">
      Open to fullstack roles, freelance projects, and collaborations. Fastest response via email or WhatsApp.
    </p>
    <div className="grid gap-2.5">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer noopener"
          className="group flex items-center gap-4 rounded-xl border border-border/60 bg-secondary/30 p-4 transition-all hover:border-primary/40 hover:shadow-glow"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg glass-pink">
            <l.icon className="h-4.5 w-4.5 text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-mono text-[10.5px] uppercase tracking-widest text-muted-foreground">
              {l.label}
            </div>
            <div className="truncate text-sm text-foreground group-hover:text-primary">{l.value}</div>
          </div>
          <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">→</span>
        </a>
      ))}
    </div>
  </div>
);
