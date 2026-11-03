import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection({
  title,
  body,
  label,
  href = "/contact",
}: {
  title: string;
  body?: string;
  label: string;
  href?: string;
}) {
  return (
    <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{title}</h2>
        {body && <p className="md:text-xl leading-relaxed mb-8">{body}</p>}
        <Link
          href={href}
          className="inline-flex bg-white text-amber-900 hover:bg-amber-50 md:text-lg px-4 md:px-8 py-2 md:py-4"
        >
          {label}
          <ArrowRight className="ml-2 h-5 w-5 self-center" />
        </Link>
      </div>
    </section>
  );
}
