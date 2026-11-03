"use client";
import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/PageBanner";
import ConsultationForm from "@/components/ConsultForm";
import BookCallForm from "@/components/BookCallForm";

export default function ContactPage() {
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);
  const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);

  return (
    <>
      <PageBanner
        title="Contact"
        subtitle="Let’s Talk About What You Need to Build."
      />

      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="space-y-4 text-sm md:text-xl text-gray-700 leading-relaxed">
            <p>
              Whether you need digital skills training for experienced
              professionals or management systems to support your growing
              business, tell us what you&rsquo;re working on.
            </p>
            <p>We&rsquo;ll help you identify the right place to start.</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                className="bg-amber-600 hover:bg-amber-700"
                onClick={() => setIsConsultationFormOpen(true)}
              >
                Book a Consultation
              </Button>
              <Button
                className="bg-amber-600 hover:bg-amber-700"
                onClick={() => setIsEnquiryFormOpen(true)}
              >
                Send an Enquiry
              </Button>
            </div>
            <a
              href="mailto:office@oakssconsult.co.uk"
              className="flex items-center gap-2 text-amber-700 hover:text-amber-900 text-base pt-2"
            >
              <Mail className="h-4 w-4" />
              office@oakssconsult.co.uk
            </a>
          </div>
          <img
            src="/cloudinary/1.jpg"
            alt="A conversation at an Oakss workshop"
            className="w-full h-80 md:h-[420px] object-cover rounded-md"
          />
        </div>
      </section>

      <ConsultationForm
        isOpen={isConsultationFormOpen}
        onClose={() => setIsConsultationFormOpen(false)}
      />
      <BookCallForm
        isOpen={isEnquiryFormOpen}
        onClose={() => setIsEnquiryFormOpen(false)}
      />
    </>
  );
}
