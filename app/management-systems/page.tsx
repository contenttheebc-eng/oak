import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ClipboardList,
  Gauge,
  Settings2,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/PageBanner";
import IconCards from "@/components/IconCards";
import CtaSection from "@/components/CtaSection";

const systems = [
  {
    icon: Building2,
    title: "Business Structure",
    text: "Create clarity around roles, responsibilities, reporting and how your business operates.",
  },
  {
    icon: ClipboardList,
    title: "Processes & SOPs",
    text: "Document the key processes your business relies on so work can happen consistently.",
  },
  {
    icon: Gauge,
    title: "Performance Management",
    text: "Establish clear expectations, performance measures and accountability.",
  },
  {
    icon: UsersRound,
    title: "People & Team Management",
    text: "Create stronger structures for managing, developing and supporting your team.",
  },
  {
    icon: Settings2,
    title: "Operational Systems",
    text: "Improve the way work moves through your business and identify areas where processes need to become more efficient.",
  },
  {
    icon: TrendingUp,
    title: "Growth Systems",
    text: "Build systems that can support a growing team, increasing workload and business expansion.",
  },
];

export default function ManagementSystemsPage() {
  return (
    <>
      <PageBanner
        title="Management Systems"
        subtitle="Helping Small & Medium-Sized Businesses Scale With Structure."
      />

      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="space-y-4 text-sm md:text-xl text-gray-700 leading-relaxed">
            <p className="text-2xl md:text-3xl text-amber-900">
              Your business is growing.
            </p>
            <p>
              But growth can become difficult when the systems supporting the
              business haven&rsquo;t grown with it.
            </p>
            <p>
              When responsibilities aren&rsquo;t clear, processes aren&rsquo;t
              documented, performance isn&rsquo;t measured and too many
              decisions depend on the business owner, growth becomes harder to
              manage.
            </p>
            <p>
              Oakss Consult helps small and medium-sized businesses put the
              right management systems in place so they can operate with greater
              clarity, consistency and accountability.
            </p>
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">
                Talk to Us About Your Business
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <img
            src="/cloudinary/22.jpg"
            alt="Business owners"
            className="w-full h-80 md:h-[480px] object-cover rounded-md"
          />
        </div>
      </section>

      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl text-amber-900 mb-6">
              What We Help You Build
            </h2>
          </div>
          <IconCards items={systems} />
        </div>
      </section>

      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <img
            src="/cloudinary/23.jpg"
            alt="A team working together"
            className="w-full h-80 md:h-[480px] object-cover rounded-md"
          />
          <div>
            <h2 className="text-3xl md:text-5xl text-amber-900 mb-6">
              Build a Business That Can Grow Beyond You.
            </h2>
            <div className="space-y-3 text-sm md:text-xl text-gray-700 leading-relaxed">
              <p>A scalable business needs more than customers.</p>
              <p>It needs structure.</p>
              <p>It needs processes people can follow.</p>
              <p>It needs teams that understand what is expected of them.</p>
              <p>
                It needs systems that allow the business to keep moving without
                every decision returning to the owner.
              </p>
              <p>That&rsquo;s what we help you build.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Get Started?"
        label="Build Your Management System"
      />
    </>
  );
}
