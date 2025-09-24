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

// Form schema for event registration
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  event: z.string().min(1, {
    message: "Please select an event.",
  }),
});

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
      event: selectedEventId,
    },
  });

  // Reset form when selectedEventId changes
  React.useEffect(() => {
    if (selectedEventId) {
      form.setValue("event", selectedEventId);
    }
  }, [selectedEventId, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Registration submitted:", values);

    // Get the event title for confirmation
    const selectedEvent = events.find((e) => e.id === values.event);
    const eventTitle = selectedEvent
      ? selectedEvent.title
      : "the selected event";

    // Here you would typically send the data to your backend
    alert(
      `Thank you ${values.name}! You have successfully registered for: ${eventTitle}. We'll send you more details at ${values.email}.`
    );

    // Close modal and reset form
    onClose();
    form.reset();
  }

  const handleClose = () => {
    onClose();
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
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
                          <div>
                            <div className="font-medium text-sm">
                              {event.title}
                            </div>
                            <div className="text-xs text-gray-500">
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
