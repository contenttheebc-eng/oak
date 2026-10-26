import type { Metadata } from "next";
import {
  Bot,
  Laptop,
  MessagesSquare,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ChecklistSection from "@/components/sections/ChecklistSection";
import CardGrid from "@/components/sections/CardGrid";
import SplitFeature from "@/components/sections/SplitFeature";
import CtaBand from "@/components/sections/CtaBand";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Digital Skills Training | Oakss Consult",
};

export default function DigitalSkillsTrainingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Digital Skills Training"
        title="Helping Experienced Professionals"
        accent="Stay Relevant."
        body={[
          "Your experience has value.",
          "But the way we work continues to change. Digital tools, AI, online collaboration and new workplace technologies now influence how professionals communicate, manage information and get work done.",
          "Oakss Consult helps experienced professionals develop the practical digital skills and confidence they need to work effectively in today’s workplace.",
        ]}
        image={images.experiencedProfessional}
        actions={[{ label: "Enquire About Training", href: "/contact" }]}
      />

      <ChecklistSection
        eyebrow="Who Is This For?"
        title="Designed for experienced professionals."
        intro="Our digital skills training is designed for experienced professionals who want to:"
        image={images.laptopMeeting}
        muted
        items={[
          "Become more confident using digital tools",
          "Improve their productivity at work",
          "Adapt to new workplace technologies",
          "Understand and use AI effectively",
          "Communicate and collaborate more confidently online",
          "Prepare for changing workplace expectations",
          "Stay competitive and relevant in their careers",
        ]}
      />

      <CardGrid
        eyebrow="What We Cover"
        title="Practical skills for today’s workplace."
        cols={3}
        items={[
          {
            icon: Laptop,
            title: "Digital Workplace Skills",
            body: ["Build confidence with the essential digital tools used in modern workplaces."],
          },
          {
            icon: Users,
            title: "Productivity & Collaboration",
            body: ["Learn how to use digital tools to organise work, collaborate with colleagues and get more done."],
          },
          {
            icon: MessagesSquare,
            title: "Digital Communication",
            body: ["Develop confidence communicating professionally across digital platforms."],
          },
          {
            icon: Bot,
            title: "AI for Professionals",
            body: ["Understand how AI can support research, productivity, communication and everyday professional tasks."],
          },
          {
            icon: Search,
            title: "Digital Research & Information Management",
            body: ["Find, evaluate, organise and use information effectively."],
          },
          {
            icon: ShieldCheck,
            title: "Digital Safety",
            body: ["Understand the essentials of protecting your information and working safely online."],
          },
        ]}
      />

      <SplitFeature
        eyebrow="More Than Learning Technology"
        title="We Build Confidence."
        image={images.confidentProfessional}
        reverse
        muted
        body={[
          "Our goal isn’t simply to teach you how to use another digital tool.",
          "It is to help you feel capable of learning, adapting and working confidently as technology continues to change.",
        ]}
      />

      <CtaBand
        title="Start Your Digital Skills Journey"
        image={images.workshopConversation}
        body={["Tell us where you are today and we’ll help you take the next step."]}
        actions={[{ label: "Start Your Digital Skills Journey", href: "/contact" }]}
      />
    </main>
  );
}
