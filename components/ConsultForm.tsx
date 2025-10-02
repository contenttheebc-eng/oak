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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

// Form schema with conditional validation
const baseSchema = {
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  serviceType: z.string().min(1, {
    message: "Please select a service type.",
  }),
};

const formSchema = z
  .object({
    ...baseSchema,
    preferredDate: z.date().optional(),
    customRequirements: z.string().optional(),
  })
  .refine(
    (data) => {
      // If discovery call or coaching is selected, date is required
      if (
        data.serviceType === "discovery-call" ||
        data.serviceType === "coaching"
      ) {
        return data.preferredDate !== undefined;
      }
      // If custom package is selected, requirements are required
      if (data.serviceType === "custom-package") {
        return data.customRequirements && data.customRequirements.length >= 10;
      }
      return true;
    },
    {
      message: "Please fill in the required fields for your selected service.",
      path: ["serviceType"],
    }
  );

const serviceTypes = [
  {
    id: "discovery-call",
    title: "30-Minute Discovery Call",
    description: "FREE - Complimentary consultation",
    requiresDate: true,
  },
  {
    id: "coaching",
    title: "One-on-One Coaching",
    description: "Personalized coaching session",
    requiresDate: true,
  },
  {
    id: "custom-package",
    title: "Custom Packages",
    description: "Team & Company solutions",
    requiresDate: false,
  },
];

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceType?: string;
}

export default function ConsultationForm({
  isOpen,
  onClose,
  selectedServiceType = "",
}: ConsultationFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: selectedServiceType,
      preferredDate: undefined,
      customRequirements: "",
    },
  });

  const watchedServiceType = form.watch("serviceType");

  // Reset form when selectedServiceType changes
  React.useEffect(() => {
    if (selectedServiceType) {
      form.setValue("serviceType", selectedServiceType);
    }
  }, [selectedServiceType, form]);

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   console.log("Consultation booking submitted:", values);

  //   // Get the service title for confirmation
  //   const selectedService = serviceTypes.find(
  //     (s) => s.id === values.serviceType
  //   );
  //   const serviceTitle = selectedService
  //     ? selectedService.title
  //     : "the selected service";

  //   let confirmationMessage = `Thank you ${values.name}! Your request for ${serviceTitle} has been submitted.`;

  //   if (values.preferredDate) {
  //     confirmationMessage += ` We'll contact you at ${
  //       values.email
  //     } to confirm your appointment for ${format(
  //       values.preferredDate,
  //       "PPP"
  //     )}.`;
  //   } else if (values.customRequirements) {
  //     confirmationMessage += ` We'll review your requirements and send you a custom quote at ${values.email} within 24-48 hours.`;
  //   } else {
  //     confirmationMessage += ` We'll contact you at ${values.email} with next steps.`;
  //   }

  //   // Here you would typically send the data to your backend
  //   alert(confirmationMessage);

  //   // Close modal and reset form
  //   onClose();
  //   form.reset();
  // }
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        // Handle specific error for duplicate booking
        if (res.status === 409) {
          toast.error(data.error || "You have already booked this service.");
        } else {
          toast.error(data.error || "Booking failed. Please try again.");
        }
        return;
      }

      // Get the service title for confirmation
      const selectedService = serviceTypes.find(
        (s) => s.id === values.serviceType
      );
      const serviceTitle = selectedService
        ? selectedService.title
        : "the selected service";

      let confirmationMessage = `Thank you ${values.name}! Your request for ${serviceTitle} has been submitted.`;

      if (values.preferredDate) {
        confirmationMessage += ` We'll contact you at ${
          values.email
        } to confirm your appointment for ${format(
          values.preferredDate,
          "PPP"
        )}.`;
      } else if (values.customRequirements) {
        confirmationMessage += ` We'll review your requirements and send you a custom quote at ${values.email} within 24-48 hours.`;
      } else {
        confirmationMessage += ` We'll contact you at ${values.email} with next steps.`;
      }

      toast.success(confirmationMessage);

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

  // Get minimum date (today)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const requiresDate =
    watchedServiceType &&
    serviceTypes.find((s) => s.id === watchedServiceType)?.requiresDate;
  const requiresCustomRequirements = watchedServiceType === "custom-package";

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book Consultation</DialogTitle>
          <DialogDescription>
            Please fill out the form below to book your consultation or request
            a custom quote.
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
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Service *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          <div>
                            <div className="font-medium text-sm">
                              {service.title}
                            </div>
                            <div className="text-xs text-gray-500">
                              {service.description}
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

            {/* Conditional Date Picker for Discovery Call and Coaching */}
            {requiresDate && (
              <FormField
                control={form.control}
                name="preferredDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Preferred Date *</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < today}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* Conditional Text Area for Custom Packages */}
            {requiresCustomRequirements && (
              <FormField
                control={form.control}
                name="customRequirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tell us about your requirements *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please describe your team size, specific challenges, goals, and what you're looking to achieve. This helps us create a tailored package and provide an accurate quote."
                        className="min-h-[100px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <div className="text-xs text-gray-500">
                      {field.value?.length || 0} characters (minimum 10
                      required)
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                onClick={form.handleSubmit(onSubmit)}
                className="flex-1 bg-amber-600 hover:bg-amber-700"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting
                  ? "Submitting..."
                  : watchedServiceType === "custom-package"
                    ? "Request Quote"
                    : watchedServiceType === "discovery-call"
                      ? "Book Free Call"
                      : "Schedule Session"}
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
