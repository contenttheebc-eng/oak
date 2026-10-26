import type { Metadata } from "next";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ContactButtons from "@/components/sections/ContactButtons";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact | Oakss Consult",
};

const channels = [
  { icon: Mail, label: "Email", value: "office@oakssconsult.co.uk", href: "mailto:office@oakssconsult.co.uk" },
  { icon: Instagram, label: "Instagram", value: "@oakssconsult", href: "https://www.instagram.com/oakssconsult?igsh=MTgyeGpubjVldDZ0bw==" },
  { icon: Linkedin, label: "LinkedIn", value: "Oakss Consult Ltd", href: "https://www.linkedin.com/company/oakss-consult-ltd/posts/?feedView=all&viewAsMember=true" },
  { icon: Facebook, label: "Facebook", value: "Oakss Consult", href: "https://www.facebook.com/profile.php?id=6157975197762" },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let’s Talk About What You"
        accent="Need to Build."
        body={[
          "Whether you need digital skills training for experienced professionals or management systems to support your growing business, tell us what you’re working on.",
          "We’ll help you identify the right place to start.",
        ]}
        image={images.workshopConversation}
      >
        <ContactButtons />
      </PageHero>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <channel.icon className="h-6 w-6" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-gray-500">{channel.label}</span>
                <span className="block font-semibold text-amber-950 break-words">{channel.value}</span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
