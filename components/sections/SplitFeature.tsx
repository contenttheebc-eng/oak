import { CheckCircle2 } from "lucide-react";
import { Action, ActionLink, Eyebrow } from "./SectionHeading";

export default function SplitFeature({
  eyebrow,
  title,
  body,
  bullets,
  image,
  reverse = false,
  action,
  muted = false,
}: {
  eyebrow?: string;
  title: string;
  body: string[];
  bullets?: string[];
  image: string;
  reverse?: boolean;
  action?: Action;
  muted?: boolean;
}) {
  return (
    <section className={`py-16 md:py-24 ${muted ? "bg-gray-50" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className={reverse ? "lg:order-2" : ""}>
          <img
            src={image}
            alt=""
            className="w-full h-72 md:h-[460px] object-cover rounded-3xl shadow-lg"
          />
        </div>
        <div className="border-l-4 border-amber-600 pl-6 md:pl-8">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="text-3xl md:text-4xl font-bold text-amber-950 leading-tight">
            {title}
          </h2>
          <div className="mt-6 space-y-4 text-base md:text-lg text-gray-600 leading-relaxed">
            {body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {bullets && (
            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-gray-800">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-amber-600 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          )}
          {action && (
            <div className="mt-8">
              <ActionLink action={action} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
