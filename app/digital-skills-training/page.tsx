import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Laptop,
  MessagesSquare,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageBanner from "@/components/PageBanner";
import IconCards from "@/components/IconCards";
import CtaSection from "@/components/CtaSection";

const audience = [
  "Become more confident using digital tools",
  "Improve their productivity at work",
  "Adapt to new workplace technologies",
  "Understand and use AI effectively",
  "Communicate and collaborate more confidently online",
  "Prepare for changing workplace expectations",
  "Stay competitive and relevant in their careers",
];

const topics = [
  {
    icon: Laptop,
    title: "Digital Workplace Skills",
    text: "Build confidence with the essential digital tools used in modern workplaces.",
  },
  {
    icon: Users,
    title: "Productivity & Collaboration",
    text: "Learn how to use digital tools to organise work, collaborate with colleagues and get more done.",
  },
  {
    icon: MessagesSquare,
    title: "Digital Communication",
    text: "Develop confidence communicating professionally across digital platforms.",
  },
  {
    icon: Bot,
    title: "AI for Professionals",
    text: "Understand how AI can support research, productivity, communication and everyday professional tasks.",
  },
  {
    icon: Search,
    title: "Digital Research & Information Management",
    text: "Find, evaluate, organise and use information effectively.",
  },
  {
    icon: ShieldCheck,
    title: "Digital Safety",
    text: "Understand the essentials of protecting your information and working safely online.",
  },
];

export default function DigitalSkillsTrainingPage() {
  return (
    <>
      <PageBanner
        title="Digital Skills Training"
        subtitle="Helping Experienced Professionals Stay Relevant."
      />

      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="space-y-4 text-sm md:text-xl text-gray-700 leading-relaxed">
            <p className="text-2xl md:text-3xl text-amber-900">
              Your experience has value.
            </p>
            <p>
              But the way we work continues to change. Digital tools, AI, online
              collaboration and new workplace technologies now influence how
              professionals communicate, manage information and get work done.
            </p>
            <p>
              Oakss Consult helps experienced professionals develop the
              practical digital skills and confidence they need to work
              effectively in today&rsquo;s workplace.
            </p>
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">
                Enquire About Training
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <img
            src="/cloudinary/5.jpg"
            alt="Experienced professional"
            className="w-full h-80 md:h-[420px] object-cover rounded-md"
          />
        </div>
      </section>

      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <img
            src="/cloudinary/4.jpg"
            alt="Professionals at an Oakss workshop"
            className="w-full h-80 md:h-[480px] object-cover rounded-md"
          />
          <Card className="border-l-4 border-l-amber-600 shadow-lg">
            <CardHeader className="px-3 md:px-6">
              <CardTitle className="text-2xl md:text-3xl font-normal text-amber-900">
                Who Is This For?
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 md:px-6">
              <p className="text-gray-700 mb-4">
                Our digital skills training is designed for experienced
                professionals who want to:
              </p>
              <ul className="space-y-3">
                {audience.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-amber-600 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl text-amber-900 mb-6">
              What We Cover
            </h2>
          </div>
          <IconCards items={topics} />
        </div>
      </section>

      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div>
            <p className="md:text-xl text-gray-800 font-semibold mb-2">
              More Than Learning Technology
            </p>
            <h2 className="text-3xl md:text-5xl text-amber-900 mb-6">
              We Build Confidence.
            </h2>
            <div className="space-y-3 text-sm md:text-xl text-gray-700 leading-relaxed">
              <p>
                Our goal isn&rsquo;t simply to teach you how to use another
                digital tool.
              </p>
              <p>
                It is to help you feel capable of learning, adapting and working
                confidently as technology continues to change.
              </p>
            </div>
          </div>
          <img
            src="/cloudinary/18.jpg"
            alt="Confident participants at an Oakss workshop"
            className="w-full h-80 md:h-[420px] object-cover rounded-md"
          />
        </div>
      </section>

      <CtaSection
        title="Ready to Get Started?"
        label="Start Your Digital Skills Journey"
      />
    </>
  );
}
