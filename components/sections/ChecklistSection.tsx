import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function ChecklistSection({
  eyebrow,
  title,
  intro,
  items,
  image,
  muted = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: string[];
  image: string;
  muted?: boolean;
}) {
  return (
    <section className={`py-16 md:py-24 ${muted ? "bg-gray-50" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
          <ul className="grid sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl bg-white border border-gray-200 p-4 text-gray-800 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-amber-600 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={image}
          alt=""
          className="w-full h-72 md:h-[560px] object-cover rounded-3xl shadow-lg"
        />
      </div>
    </section>
  );
}
