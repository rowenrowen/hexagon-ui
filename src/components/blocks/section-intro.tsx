export type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  className?: string;
};

export const sectionIntroDefaults: Omit<SectionIntroProps, "title"> & { title: string } = {
  eyebrow: "Section spine",
  title: "Use this block between heavy sections",
  body: "Keeps rhythm predictable — eyebrow, title, supporting sentence. Swap background on the parent section for contrast bands.",
};

export function SectionIntro(props: Partial<SectionIntroProps> = {}) {
  const p = { ...sectionIntroDefaults, ...props };
  return (
    <section className={`py-12 ${p.className ?? ""}`}>
      <div className="site-grid max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">{p.eyebrow}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{p.title}</h2>
        {p.body ? <p className="mt-4 text-muted-foreground">{p.body}</p> : null}
      </div>
    </section>
  );
}
