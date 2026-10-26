import { Action, ActionLink } from "./SectionHeading";

export default function CtaBand({
  title,
  body,
  actions,
  image,
}: {
  title: string;
  body: string[];
  actions: Action[];
  image?: string;
}) {
  return (
    <section
      className="relative bg-amber-950 bg-cover bg-center text-white"
      style={image ? { backgroundImage: `url("${image}")` } : undefined}
    >
      <div className="absolute inset-0 bg-amber-950/85" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">{title}</h2>
        <div className="mt-6 space-y-3 text-base md:text-xl text-amber-50/90 leading-relaxed">
          {body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {actions.map((action) => (
            <ActionLink key={action.label} action={{ variant: "light", ...action }} />
          ))}
        </div>
      </div>
    </section>
  );
}
