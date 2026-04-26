import { profile } from "@/data/portfolio";
import { Github, Linkedin, Mail, MapPin, Phone, Sparkles } from "lucide-react";

export const ProfileSection = () => (
  <div className="space-y-6">
    <div className="flex items-start gap-5">
      <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl glass-pink shimmer">
        <span className="font-display text-2xl font-bold text-gradient-pink">AM</span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          Open to opportunities
        </div>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">{profile.name}</h2>
        <p className="text-sm text-muted-foreground">
          <span className="text-gradient-pink font-semibold">{profile.title}</span>
          <span className="mx-2 text-border">/</span>
          2.5+ years shipping production apps
        </p>
      </div>
    </div>

    <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-secondary/40 px-3 py-2 text-xs text-muted-foreground">
      <Sparkles className="h-3.5 w-3.5 text-primary" />
      Backend → Frontend → Deploy. End-to-end ownership.
    </div>

    <p className="text-sm leading-relaxed text-foreground/85">{profile.summary}</p>

    <div className="grid gap-2 text-sm sm:grid-cols-2">
      <ContactRow icon={MapPin} label={profile.location} />
      <ContactRow icon={Mail} label={profile.email} href={`mailto:${profile.email}`} />
      <ContactRow icon={Phone} label={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
      <ContactRow icon={Linkedin} label="LinkedIn" href={profile.linkedin} />
      <ContactRow icon={Github} label="GitHub" href={profile.github} />
    </div>
  </div>
);

const ContactRow = ({ icon: Icon, label, href }: { icon: typeof Mail; label: string; href?: string }) => {
  const inner = (
    <span className="flex items-center gap-2.5 rounded-lg border border-border/60 bg-secondary/30 px-3 py-2 text-foreground/90 transition-colors hover:border-primary/40 hover:text-primary">
      <Icon className="h-4 w-4 text-primary" />
      <span className="truncate">{label}</span>
    </span>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer noopener">
      {inner}
    </a>
  ) : (
    inner
  );
};
