import SectionHeading from "./SectionHeading";

export default function ProcessSteps({
  eyebrow,
  title,
  body,
  steps,
}: {
  eyebrow?: string;
  title: string;
  body: string[];
  steps: { title: string; text: string }[];
}) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} intro={body.join(" ")} />
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl bg-white border border-gray-200 p-6 md:p-8 shadow-sm"
            >
              <span className="text-5xl font-bold text-amber-200">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-bold text-amber-950">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
