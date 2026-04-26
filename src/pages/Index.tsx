import { DesktopIconTile } from "@/components/desktop/DesktopIconTile";
import { SectionModal } from "@/components/desktop/SectionModal";
import { desktopIcons } from "@/data/icons";
import { profile } from "@/data/portfolio";
import { Wifi, BatteryFull, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useClock = () => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const Desktop = () => {
  const time = useClock();
  const location = useLocation();
  const navigate = useNavigate();

  // Auto-open the Profile modal on the very first visit only, so users land on
  // the intended default view but can still close it without it springing back.
  useEffect(() => {
    if (location.pathname !== "/") return;
    if (sessionStorage.getItem("ana-default-opened") === "1") return;
    sessionStorage.setItem("ana-default-opened", "1");
    navigate("/profile", { replace: true });
  }, [location.pathname, navigate]);


  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Aurora & grid backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-aurora" />
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[700px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, hsl(327 100% 58% / 0.35), transparent)" }}
      />

      {/* Top status bar */}
      <header className="relative z-10 flex items-center justify-between border-b border-white/5 px-5 py-2.5 text-xs text-muted-foreground backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
          <span className="font-mono tracking-wider text-foreground/80">ANA·OS</span>
          <span className="text-border">/</span>
          <span className="hidden sm:inline">portfolio v1.0</span>
        </div>
        <div className="flex items-center gap-3 font-mono">
          <Search className="h-3.5 w-3.5" />
          <Wifi className="h-3.5 w-3.5" />
          <BatteryFull className="h-3.5 w-3.5" />
          <span className="tabular-nums text-foreground/80">{time}</span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-2 pt-10 text-center sm:pt-14">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          Available for new projects
        </div>
        <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          Hi, I'm <span className="text-gradient-pink">{profile.name.split(" ")[0]}</span>.
          <br />
          <span className="text-foreground/90">I build things end-to-end.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
          Fullstack developer · Laravel · NestJS · React · Next.js. <br className="hidden sm:block" />
          Click any icon to open a window — or just hang out.
        </p>
      </section>

      {/* Desktop canvas */}
      <section className="relative z-10 mx-auto mt-6 h-[560px] w-full max-w-6xl sm:h-[640px]">
        {desktopIcons.map((icon) => (
          <DesktopIconTile key={icon.id} icon={icon} />
        ))}
      </section>

      {/* Dock */}
      <footer className="relative z-10 flex justify-center pb-6 pt-2">
        <div className="glass flex items-center gap-1 rounded-2xl px-2 py-1.5">
          {desktopIcons.slice(0, 5).map((i) => {
            const Icon = i.icon;
            return (
              <a
                key={i.id}
                href={`/${i.id}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all hover:scale-110 hover:bg-primary/10 hover:text-primary"
                aria-label={i.label}
              >
                <Icon className="h-4.5 w-4.5" strokeWidth={1.6} />
              </a>
            );
          })}
        </div>
      </footer>

      <SectionModal />
    </main>
  );
};

export default Desktop;
