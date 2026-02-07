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
import { Calendar } from "lucide-react";

interface EventRegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const statusOptions = [
  { value: "business-owner", label: "Business Owner" },
  { value: "founder", label: "Founder" },
  { value: "manager", label: "Manager" },
  { value: "professional", label: "Professional" },
  { value: "student", label: "Student" },
  { value: "other", label: "Other" },
];

export default function EventRegistrationForm({
  isOpen,
  onClose,
}: EventRegistrationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    status: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = "Invite - Business & Beyond II Registration";
    const body = `
Registration for Business & Beyond II

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Status: ${statusOptions.find(s => s.value === formData.status)?.label || formData.status}
    `.trim();

    window.location.href = `mailto:bookings@oakssconsult.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setIsSubmitting(false);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", status: "" });
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-amber-900">
            <Calendar className="h-5 w-5" />
            Register for Business & Beyond II
          </DialogTitle>
          <DialogDescription>
            📅 Thursday, 26th February 2026 | 📍 London | ⏰ 11am GMT
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="text-green-600 text-lg font-semibold mb-2">
              ✓ Registration Submitted!
            </div>
            <p className="text-gray-600 text-sm">
              We&apos;ll confirm your spot shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="reg-name">Name *</Label>
              <Input
                id="reg-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reg-phone">Phone Number *</Label>
              <Input
                id="reg-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+44 7XXX XXXXXX"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reg-email">Email *</Label>
              <Input
                id="reg-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reg-status">Status *</Label>
              <Select
                value={formData.status}
                onValueChange={(value) => setFormData({ ...formData, status: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your status" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((option) => (
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
              {isSubmitting ? "Submitting..." : "Register Now"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
