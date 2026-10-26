import type { Metadata } from "next";
import {
  Building2,
  ClipboardList,
  Gauge,
  Settings2,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CardGrid from "@/components/sections/CardGrid";
import SplitFeature from "@/components/sections/SplitFeature";
import CtaBand from "@/components/sections/CtaBand";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Management Systems | Oakss Consult",
};

export default function ManagementSystemsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Management Systems"
        title="Helping Small & Medium-Sized Businesses"
        accent="Scale With Structure."
        body={[
          "Your business is growing.",
          "But growth can become difficult when the systems supporting the business haven’t grown with it.",
          "When responsibilities aren’t clear, processes aren’t documented, performance isn’t measured and too many decisions depend on the business owner, growth becomes harder to manage.",
          "Oakss Consult helps small and medium-sized businesses put the right management systems in place so they can operate with greater clarity, consistency and accountability.",
        ]}
        image={images.businessLeaders}
        actions={[{ label: "Talk to Us About Your Business", href: "/contact" }]}
      />

      <CardGrid
        eyebrow="What We Help You Build"
        title="The systems that support sustainable growth."
        cols={3}
        muted
        items={[
          {
            icon: Building2,
            title: "Business Structure",
            body: ["Create clarity around roles, responsibilities, reporting and how your business operates."],
          },
          {
            icon: ClipboardList,
            title: "Processes & SOPs",
            body: ["Document the key processes your business relies on so work can happen consistently."],
          },
          {
            icon: Gauge,
            title: "Performance Management",
            body: ["Establish clear expectations, performance measures and accountability."],
          },
          {
            icon: UsersRound,
            title: "People & Team Management",
            body: ["Create stronger structures for managing, developing and supporting your team."],
          },
          {
            icon: Settings2,
            title: "Operational Systems",
            body: ["Improve the way work moves through your business and identify areas where processes need to become more efficient."],
          },
          {
            icon: TrendingUp,
            title: "Growth Systems",
            body: ["Build systems that can support a growing team, increasing workload and business expansion."],
          },
        ]}
      />

      <SplitFeature
        title="Build a Business That Can Grow Beyond You."
        image={images.teamWhiteboard}
        body={["A scalable business needs more than customers.", "It needs structure."]}
        bullets={[
          "It needs processes people can follow.",
          "It needs teams that understand what is expected of them.",
          "It needs systems that allow the business to keep moving without every decision returning to the owner.",
        ]}
      />

      <SplitFeature
        eyebrow="Our Focus"
        title="That’s what we help you build."
        image={images.teamCelebration}
        reverse
        muted
        body={[
          "Structure for your people, processes and operations, so your business can operate with greater clarity, consistency and accountability.",
        ]}
        action={{ label: "Build Your Management System", href: "/contact" }}
      />

      <CtaBand
        title="Ready to Build Your Management System?"
        image={images.processPlanning}
        body={["Tell us about your business and where growth is getting harder to manage."]}
        actions={[{ label: "Build Your Management System", href: "/contact" }]}
      />
    </main>
  );
}
