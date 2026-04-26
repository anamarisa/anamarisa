import { profile, experience, projects, skills, education } from "@/data/portfolio";
import { FileText, Download } from "lucide-react";

export const ResumeSection = () => {
  const handleDownload = () => {
    const lines: string[] = [];
    lines.push(profile.name.toUpperCase());
    lines.push(`${profile.location} | ${profile.phone} | ${profile.email}`);
    lines.push(`${profile.linkedin} | ${profile.github}`);
    lines.push("\nPROFESSIONAL SUMMARY\n" + profile.summary);
    lines.push("\nTECHNICAL SKILLS");
    skills.forEach((s) => lines.push(`- ${s.group}: ${s.items.join(", ")}`));
    lines.push("\nWORK EXPERIENCE");
    experience.forEach((e) => {
      lines.push(`\n${e.role} | ${e.company} • ${e.mode} ${e.period}`);
      e.bullets.forEach((b) => lines.push(`  • ${b}`));
    });
    lines.push("\nPROJECTS");
    projects.forEach((p) => {
      lines.push(`\n${p.name} ${p.period}`);
      p.bullets.forEach((b) => lines.push(`  • ${b}`));
      lines.push(`  Tech: ${p.stack.join(", ")}`);
    });
    lines.push("\nEDUCATION");
    lines.push(`${education.degree} | ${education.school} ${education.period} | GPA ${education.gpa}`);

    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Ana_Marisa_Resume.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-4 rounded-2xl border border-primary/30 glass-pink p-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-background/40">
          <FileText className="h-7 w-7 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-base font-semibold">Ana_Marisa_CV_ATS.pdf</h3>
          <p className="text-xs text-muted-foreground">ATS-friendly resume · Updated 2026</p>
        </div>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
        >
          <Download className="h-3.5 w-3.5" />
          Download
        </button>
      </div>

      <div className="rounded-2xl border border-border/60 bg-secondary/30 p-5 text-sm leading-relaxed text-foreground/85">
        <h4 className="mb-2 font-mono text-[11px] uppercase tracking-widest text-primary">Highlights</h4>
        <ul className="space-y-1.5">
          <li className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />2.5+ years building production web & mobile apps end-to-end.</li>
          <li className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />Shipped iOS app to the App Store with Capacitor.js.</li>
          <li className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />Real-time WebSocket, OAuth 2.0, microservices, CI/CD on GCP.</li>
          <li className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />Sole frontend architect on a Transport Management System.</li>
        </ul>
      </div>
    </div>
  );
};
