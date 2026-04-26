import { FileText, Download, ExternalLink } from "lucide-react";

const RESUME_URL = "/Ana_Marisa_CV_ATS.pdf";
const RESUME_FILENAME = "Ana_Marisa_CV_ATS.pdf";

export const ResumeSection = () => {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-primary/30 glass-pink p-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-background/40">
          <FileText className="h-7 w-7 text-primary" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-base font-semibold">Ana_Marisa_CV_ATS.pdf</h3>
          <p className="text-xs text-muted-foreground">ATS-friendly resume · Updated 2026</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 rounded-lg border border-border/60 bg-background/40 px-3 py-2 text-xs font-medium text-foreground/90 transition-colors hover:border-primary/40 hover:text-primary"
            aria-label="Open resume in new tab"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            View
          </a>
          <a
            href={RESUME_URL}
            download={RESUME_FILENAME}
            className="flex items-center gap-2 rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            <Download className="h-3.5 w-3.5" />
            Download
          </a>
        </div>
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
