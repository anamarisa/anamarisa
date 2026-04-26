import { useNavigate } from "react-router-dom";
import type { DesktopIcon } from "@/data/icons";

interface Props {
  icon: DesktopIcon;
}

export const DesktopIconTile = ({ icon }: Props) => {
  const navigate = useNavigate();
  const Icon = icon.icon;

  return (
    <button
      onClick={() => navigate(`/${icon.id}`)}
      className="icon-tile group absolute -translate-x-1/2 -translate-y-1/2 animate-fade-in"
      style={{
        left: `${icon.pos.x}%`,
        top: `${icon.pos.y}%`,
        animationDelay: `${icon.delay * 0.15}s`,
      }}
      aria-label={`Open ${icon.label}`}
    >
      <div
        className="icon-tile-bg glass shimmer relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 transition-all sm:h-20 sm:w-20"
        style={{ animation: `float-slow 5s ease-in-out ${icon.delay}s infinite` }}
      >
        <Icon className="h-7 w-7 text-foreground transition-colors group-hover:text-primary sm:h-8 sm:w-8" strokeWidth={1.6} />
        <span className="pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-inset ring-white/5" />
      </div>
      <span className="font-mono text-[11px] text-muted-foreground/90 transition-colors group-hover:text-foreground sm:text-xs">
        {icon.label}
      </span>
    </button>
  );
};
