import type { SectionId } from "@/data/portfolio";

interface Props {
  section: SectionId;
}

const Line = ({ w = "100%", h = "h-3" }: { w?: string; h?: string }) => (
  <div
    className={`${h} shimmer-skeleton rounded-md bg-secondary/50`}
    style={{ width: w }}
  />
);

const Block = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border border-border/60 bg-secondary/30 p-5">{children}</div>
);

const ProfileSkeleton = () => (
  <div className="space-y-5">
    <div className="flex items-start gap-5">
      <div className="h-20 w-20 shrink-0 rounded-2xl shimmer-skeleton bg-secondary/50" />
      <div className="flex-1 space-y-2.5 pt-1">
        <Line w="120px" h="h-4" />
        <Line w="60%" h="h-6" />
        <Line w="40%" h="h-3" />
      </div>
    </div>
    <Line w="100%" h="h-9" />
    <div className="space-y-2">
      <Line />
      <Line w="95%" />
      <Line w="80%" />
      <Line w="70%" />
    </div>
    <div className="grid gap-2 sm:grid-cols-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <Line key={i} w="100%" h="h-9" />
      ))}
    </div>
  </div>
);

const ListSkeleton = ({ rows = 3, bullets = 3 }: { rows?: number; bullets?: number }) => (
  <div className="space-y-5">
    {Array.from({ length: rows }).map((_, i) => (
      <Block key={i}>
        <div className="mb-3 flex items-start justify-between gap-2">
          <div className="space-y-2">
            <Line w="180px" h="h-4" />
            <Line w="140px" h="h-3" />
          </div>
          <Line w="90px" h="h-5" />
        </div>
        <div className="space-y-2">
          {Array.from({ length: bullets }).map((_, j) => (
            <Line key={j} w={`${95 - j * 8}%`} />
          ))}
        </div>
      </Block>
    ))}
  </div>
);

const SkillsSkeleton = () => (
  <div className="grid gap-4 sm:grid-cols-2">
    {Array.from({ length: 6 }).map((_, i) => (
      <Block key={i}>
        <Line w="80px" h="h-3" />
        <div className="mt-3 flex flex-wrap gap-1.5">
          {Array.from({ length: 5 }).map((_, j) => (
            <div
              key={j}
              className="h-6 shimmer-skeleton rounded-md bg-secondary/50"
              style={{ width: `${40 + (j * 13) % 40}px` }}
            />
          ))}
        </div>
      </Block>
    ))}
  </div>
);

const EducationSkeleton = () => (
  <Block>
    <div className="flex items-start gap-4">
      <div className="h-12 w-12 shrink-0 rounded-xl shimmer-skeleton bg-secondary/50" />
      <div className="flex-1 space-y-2">
        <Line w="60%" h="h-5" />
        <Line w="40%" />
        <div className="mt-2 flex gap-2">
          <Line w="90px" h="h-5" />
          <Line w="70px" h="h-5" />
        </div>
      </div>
    </div>
  </Block>
);

const ContactSkeleton = () => (
  <div className="space-y-5">
    <div className="space-y-2">
      <Line />
      <Line w="80%" />
    </div>
    <div className="space-y-2.5">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 rounded-xl border border-border/60 bg-secondary/30 p-4">
          <div className="h-10 w-10 shrink-0 rounded-lg shimmer-skeleton bg-secondary/50" />
          <div className="flex-1 space-y-2">
            <Line w="80px" h="h-3" />
            <Line w="60%" h="h-3" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ResumeSkeleton = () => (
  <div className="space-y-5">
    <div className="flex items-center gap-4 rounded-2xl border border-primary/20 bg-secondary/30 p-5">
      <div className="h-14 w-14 shrink-0 rounded-xl shimmer-skeleton bg-secondary/50" />
      <div className="flex-1 space-y-2">
        <Line w="60%" h="h-4" />
        <Line w="40%" h="h-3" />
      </div>
      <Line w="100px" h="h-9" />
    </div>
    <Block>
      <Line w="80px" h="h-3" />
      <div className="mt-3 space-y-2">
        <Line w="95%" />
        <Line w="85%" />
        <Line w="75%" />
      </div>
    </Block>
  </div>
);

export const SectionSkeleton = ({ section }: Props) => {
  switch (section) {
    case "profile": return <ProfileSkeleton />;
    case "experience": return <ListSkeleton rows={3} bullets={4} />;
    case "projects": return <ListSkeleton rows={3} bullets={3} />;
    case "skills": return <SkillsSkeleton />;
    case "education": return <EducationSkeleton />;
    case "contact": return <ContactSkeleton />;
    case "resume": return <ResumeSkeleton />;
  }
};
