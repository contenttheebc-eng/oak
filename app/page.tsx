import PageHero from "@/components/sections/PageHero";
import CardGrid from "@/components/sections/CardGrid";
import SplitFeature from "@/components/sections/SplitFeature";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CtaBand from "@/components/sections/CtaBand";
import { images } from "@/lib/images";

export default function HomePage() {
  return (
    <main>
      <PageHero
        eyebrow="Digital Skills Training | Management Systems"
        title="Helping Experienced Professionals Stay Relevant."
        accent="Helping Businesses Scale."
        body={[
          "Oakss Consult helps experienced professionals build the digital skills they need to thrive in a changing workplace, while helping small and medium-sized businesses build the management systems they need to grow.",
        ]}
        image={images.workshopAudience}
        actions={[
          { label: "Explore Our Services", href: "#what-we-do" },
          { label: "Talk to Oakss", href: "/contact", variant: "secondary" },
        ]}
      />

      <CardGrid
        id="what-we-do"
        eyebrow="What We Do"
        title="Better skills for people. Better systems for businesses."
        cols={2}
        muted
        items={[
          {
            title: "Digital Skills Training",
            subtitle: "Helping Experienced Professionals Stay Relevant.",
            image: images.laptopColleagues,
            body: [
              "The workplace is changing, and digital skills now play a bigger role in how professionals work, communicate and deliver results.",
              "Our digital skills training helps experienced professionals build the confidence and practical skills to use today’s digital tools, adapt to new technologies and remain effective in a changing world of work.",
            ],
            action: {
              label: "Explore Digital Skills Training",
              href: "/digital-skills-training",
            },
          },
          {
            title: "Management Systems",
            subtitle: "Helping Small & Medium-Sized Businesses Scale With Structure.",
            image: images.processPlanning,
            body: [
              "Growth can expose gaps in the way a business operates.",
              "Unclear roles, inconsistent processes, weak accountability and overdependence on the business owner can make growth difficult to sustain.",
              "Oakss Consult helps small and medium-sized businesses develop practical management systems that bring structure to their people, processes and operations, creating a stronger foundation for sustainable growth.",
            ],
            action: {
              label: "Explore Management Systems",
              href: "/management-systems",
            },
          },
        ]}
      />

      <SplitFeature
        eyebrow="Why Oakss"
        title="Better Skills. Better Systems. Better Performance."
        image={images.workshopSpeaker}
        body={[
          "People need the right skills to perform in a changing workplace.",
          "Businesses need the right systems to grow without losing control.",
          "Oakss Consult works across both.",
          "We provide practical training and management solutions designed around the realities of today’s professionals and growing businesses.",
        ]}
      />

      <CardGrid
        eyebrow="Who We Serve"
        title="Built for professionals and growing businesses."
        cols={2}
        muted
        items={[
          {
            title: "Professionals Who Want to Stay Relevant",
            image: images.experiencedProfessional,
            body: [
              "You have years of experience. We help you build the digital confidence to bring that experience into today’s workplace.",
            ],
            action: {
              label: "Digital Skills Training",
              href: "/digital-skills-training",
            },
          },
          {
            title: "Businesses That Are Ready to Grow",
            image: images.businessLeaders,
            body: [
              "You have built the business. We help you build the systems that allow it to grow beyond the way you currently operate.",
            ],
            action: { label: "Management Systems", href: "/management-systems" },
          },
        ]}
      />

      <ProcessSteps
        eyebrow="Our Approach"
        title="Practical. Relevant. Built Around You."
        body={[
          "We start by understanding where you are, what is getting in the way and where you want to go.",
          "From there, we develop the training or management solution that fits your needs.",
        ]}
        steps={[
          { title: "Understand", text: "Where you are, what is getting in the way and where you want to go." },
          { title: "Design", text: "The training or management solution that fits your needs." },
          { title: "Implement", text: "Put new skills and systems into practice where the work happens." },
          { title: "Improve", text: "Review what is working and keep building from there." },
        ]}
      />

      <CtaBand
        title="Ready to Strengthen Your Skills or Your Systems?"
        image={images.workshopGroup}
        body={[
          "Whether you are an experienced professional adapting to a changing workplace or a growing business looking for better ways to operate, Oakss Consult is here to help.",
        ]}
        actions={[{ label: "Talk to Oakss", href: "/contact" }]}
      />
    </main>
  );
}
