"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone } from "lucide-react";

interface BookCallFormProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

const serviceOptions = [
  { value: "bpm", label: "BPM (Business Portfolio Marketing)" },
  { value: "digital-consultation", label: "Digital Consultation" },
  { value: "staff-performance", label: "Staff Performance Training" },
  { value: "professional-student", label: "Professional and Student Training" },
];

export default function BookCallForm({
  isOpen,
  onClose,
  preselectedService,
}: BookCallFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    service: preselectedService || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = `Book a Call Request - ${serviceOptions.find(s => s.value === formData.service)?.label || formData.service}`;
    const body = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Location: ${formData.location}
Service: ${serviceOptions.find(s => s.value === formData.service)?.label || formData.service}
    `.trim();

    window.location.href = `mailto:bookings@oakssconsult.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setIsSubmitting(false);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", location: "", service: preselectedService || "" });
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-amber-900">
            <Phone className="h-5 w-5" />
            Book a Call
          </DialogTitle>
          <DialogDescription>
            Fill in your details and we&apos;ll get back to you to schedule a call.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="text-green-600 text-lg font-semibold mb-2">
              ✓ Request Submitted!
            </div>
            <p className="text-gray-600 text-sm">
              We&apos;ll be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+44 7XXX XXXXXX"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="City, Country"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Service *</Label>
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData({ ...formData, service: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Book a Call"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
