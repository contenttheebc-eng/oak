import { Action, ActionLink, Eyebrow } from "./SectionHeading";

export default function PageHero({
  eyebrow,
  title,
  accent,
  body,
  image,
  actions = [],
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  body: string[];
  image: string;
  actions?: Action[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-4xl md:text-5xl xl:text-[3.5rem] font-bold text-gray-900 leading-tight">
            {title} {accent && <span className="text-amber-600">{accent}</span>}
          </h1>
          <div className="mt-6 space-y-4 text-base md:text-lg text-gray-600 leading-relaxed">
            {body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {children ??
              actions.map((action) => (
                <ActionLink key={action.label} action={action} />
              ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-6 -top-6 h-2/3 w-2/3 rounded-3xl bg-amber-100 hidden md:block" />
          <img
            src={image}
            alt=""
            className="relative w-full h-72 md:h-[520px] object-cover rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
