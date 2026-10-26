"use client";
import { useState } from "react";
import { CalendarDays, Mail } from "lucide-react";
import ConsultationForm from "@/components/ConsultForm";
import BookCallForm from "@/components/BookCallForm";

export default function ContactButtons() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsConsultationOpen(true)}
        className="inline-flex items-center gap-2 rounded-md bg-amber-600 px-5 py-3 text-sm md:text-base font-semibold text-white hover:bg-amber-700 transition-colors"
      >
        <CalendarDays className="h-4 w-4" />
        Book a Consultation
      </button>
      <button
        onClick={() => setIsEnquiryOpen(true)}
        className="inline-flex items-center gap-2 rounded-md border border-amber-600 px-5 py-3 text-sm md:text-base font-semibold text-amber-700 hover:bg-amber-50 transition-colors"
      >
        <Mail className="h-4 w-4" />
        Send an Enquiry
      </button>
      <ConsultationForm
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
      <BookCallForm isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  );
}
