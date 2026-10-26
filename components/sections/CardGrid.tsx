import type { LucideIcon } from "lucide-react";
import SectionHeading, { Action, ActionLink } from "./SectionHeading";

export type CardItem = {
  title: string;
  subtitle?: string;
  body: string[];
  icon?: LucideIcon;
  image?: string;
  action?: Action;
};

export default function CardGrid({
  id,
  eyebrow,
  title,
  intro,
  items,
  cols,
  muted = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  items: CardItem[];
  cols: 2 | 3;
  muted?: boolean;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${muted ? "bg-gray-50" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        <div
          className={`grid gap-6 md:gap-8 ${
            cols === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {items.map((item) => (
            <article
              key={item.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt=""
                  className={`w-full object-cover ${cols === 2 ? "h-64 md:h-80" : "h-48"}`}
                />
              )}
              <div className="flex flex-1 flex-col p-6 md:p-8">
                {item.icon && (
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <item.icon className="h-6 w-6" />
                  </div>
                )}
                <h3 className="text-xl md:text-2xl font-bold text-amber-950">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="mt-2 font-semibold text-amber-700">{item.subtitle}</p>
                )}
                <div className="mt-3 space-y-3 text-gray-600 leading-relaxed">
                  {item.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                {item.action && (
                  <div className="mt-auto pt-6">
                    <ActionLink action={item.action} />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
