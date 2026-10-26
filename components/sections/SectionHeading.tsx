import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type Action = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "light";
};

const actionStyles = {
  primary: "bg-amber-600 text-white hover:bg-amber-700",
  secondary: "border border-amber-600 text-amber-700 hover:bg-amber-50",
  light: "bg-white text-amber-950 hover:bg-amber-50",
};

export function ActionLink({ action }: { action: Action }) {
  return (
    <Link
      href={action.href}
      className={`inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm md:text-base font-semibold transition-colors ${
        actionStyles[action.variant ?? "primary"]
      }`}
    >
      {action.label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs md:text-sm font-semibold uppercase tracking-widest text-amber-600">
      {children}
    </p>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 md:mb-14 ${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl md:text-5xl font-bold text-amber-950 leading-tight">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base md:text-xl text-gray-600 leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  );
}
