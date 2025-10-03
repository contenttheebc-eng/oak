"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

// Form schema for event registration
const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
      message: "Phone number must be at least 10 characters.",
    }),
    location: z.string().min(2, {
      message: "Location must be at least 2 characters.",
    }),
    status: z.string().min(1, {
      message: "Please select your status.",
    }),
    otherStatus: z.string().optional(),
    event: z.string().min(1, {
      message: "Please select an event.",
    }),
  })
  .refine(
    (data) => {
      // If status is "other", otherStatus must be provided
      if (data.status === "other") {
        return data.otherStatus && data.otherStatus.trim().length > 0;
      }
      return true;
    },
    {
      message: "Please specify your status.",
      path: ["otherStatus"],
    }
  );

const events = [
  {
    id: "managing-humans",
    title: "Managing Humans, Not Just Roles, to Deliver Goals",
    date: "Thursday, 16th October, 2025 - Online Workshop",
  },
  {
    id: "scaling-smes",
    title: "Scaling Strategies for SMEs",
    date: "12 November 2025 - Online Webinar",
  },
  {
    id: "student-bootcamp",
    title: "Student Business Readiness Bootcamp",
    date: "15 December 2025 - Virtual",
  },
];

const statusOptions = [
  { value: "investor", label: "Investor" },
  { value: "business-owner", label: "Business Owner(s)" },
  { value: "student", label: "Student" },
  { value: "professional", label: "Professional" },
  { value: "other", label: "Other" },
];

interface EventRegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedEventId?: string;
}

export default function EventRegistrationForm({
  isOpen,
  onClose,
  selectedEventId = "",
}: EventRegistrationFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      status: "",
      otherStatus: "",
      event: selectedEventId,
    },
  });

  const selectedStatus = form.watch("status");

  // Reset form when selectedEventId changes
  React.useEffect(() => {
    if (selectedEventId) {
      form.setValue("event", selectedEventId);
    }
  }, [selectedEventId, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Prepare the final status value
      const finalStatus =
        values.status === "other" ? values.otherStatus : values.status;

      const payload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        location: values.location,
        status: finalStatus,
        event: values.event,
      };

      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        // Handle specific error for duplicate email
        if (res.status === 409) {
          toast.error(data.error || "This email is already registered.");
        } else {
          toast.error(data.error || "Registration failed. Please try again.");
        }
        return;
      }

      toast.success(
        `Thank you ${data.attendee.fullName}! You have successfully registered.`
      );

      // Close modal and reset form
      onClose();
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again later.");
    }
  }

  const handleClose = () => {
    onClose();
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="md:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Event Registration</DialogTitle>
          <DialogDescription>
            Please fill out the form below to register for your selected event.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {statusOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {selectedStatus === "other" && (
              <FormField
                control={form.control}
                name="otherStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Please Specify *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your status" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="event"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Event *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose an event" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      {events.map((event) => (
                        <SelectItem key={event.id} value={event.id}>
                          <div className="w-full max-w-[300px]">
                            <div className="font-medium text-sm break-words">
                              {event.title}
                            </div>
                            <div className="text-xs text-gray-500 break-words">
                              {event.date}
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                onClick={form.handleSubmit(onSubmit)}
                className="flex-1 bg-amber-600 hover:bg-amber-700"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting
                  ? "Registering..."
                  : "Register Now"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="flex-1"
                disabled={form.formState.isSubmitting}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
