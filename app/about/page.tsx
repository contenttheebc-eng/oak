import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CardGrid from "@/components/sections/CardGrid";
import SplitFeature from "@/components/sections/SplitFeature";
import CtaBand from "@/components/sections/CtaBand";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About | Oakss Consult",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Oakss"
        title="Helping People Work Better."
        accent="Helping Businesses Grow Better."
        body={[
          "Oakss Consult is a professional training and business consultancy focused on developing people and strengthening businesses.",
        ]}
        image={images.workshopTeam}
        actions={[{ label: "Talk to Oakss", href: "/contact" }]}
      />

      <CardGrid
        eyebrow="What We Do"
        title="We work across two core areas."
        cols={2}
        muted
        items={[
          {
            title: "Digital Skills Training",
            image: images.laptopColleagues,
            body: [
              "For experienced professionals who want to remain confident, capable and relevant in a changing workplace.",
            ],
            action: {
              label: "Explore Digital Skills Training",
              href: "/digital-skills-training",
            },
          },
          {
            title: "Management Systems",
            image: images.teamwork,
            body: [
              "For small and medium-sized businesses that want to create stronger structures, improve how they operate and build a foundation for sustainable growth.",
            ],
            action: {
              label: "Explore Management Systems",
              href: "/management-systems",
            },
          },
        ]}
      />

      <SplitFeature
        eyebrow="How We Work"
        title="Practical. People-focused. Built to last."
        image={images.workshopConversation}
        body={[
          "Our work is practical, people-focused and designed to create skills and systems that can be applied beyond the training room or consulting session.",
        ]}
      />

      <CtaBand
        title="Let’s Talk About What You Need to Build."
        image={images.workshopAudience}
        body={["Tell us what you’re working on and we’ll help you identify the right place to start."]}
        actions={[{ label: "Talk to Oakss", href: "/contact" }]}
      />
    </main>
  );
}
