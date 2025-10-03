"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Calendar,
  ChevronRight,
  ArrowRight,
  Phone,
  Target,
  Users,
  Clock,
} from "lucide-react";
import ConsultationForm from "@/components/ConsultForm";
import { useState } from "react";

export default function PageEvent() {
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState("");

  const handleConsultationClick = (serviceType: string) => {
    setSelectedServiceType(serviceType);
    setIsConsultationFormOpen(true);
  };

  return (
    <>
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Consultation</h1>
          <p className="md:text-xl text-amber-100">
            Stay connected with our workshops and book your consultation
            sessions
          </p>
        </div>
      </section>

      {/* Past Events Section */}

      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">
              Consultation & Coaching
            </h2>
            <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our consultation portal allows you to connect with our expert
              consultants for personalized guidance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="px-3 md:px-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl">
                  30-Minute Discovery Call
                </CardTitle>
                <CardDescription>FREE</CardDescription>
              </CardHeader>
              <CardContent className="px-3 md:px-6">
                <p className="text-gray-600 mb-6">
                  Start with a complimentary consultation to explore how we can
                  help your business grow.
                </p>
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700"
                  onClick={() => handleConsultationClick("discovery-call")}
                >
                  Book Discovery Call
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="px-3 md:px-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">One-on-One Coaching</CardTitle>
                <CardDescription>Personalized Sessions</CardDescription>
              </CardHeader>
              <CardContent className="px-3 md:px-6">
                <p className="text-gray-600 mb-6">
                  Schedule individual coaching sessions tailored to your
                  specific leadership and business challenges.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleConsultationClick("coaching")}
                >
                  Schedule Session
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Custom Packages</CardTitle>
                <CardDescription>Team & Company Solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Comprehensive packages designed for your team or
                  company&apos;s specific needs and objectives.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleConsultationClick("custom-package")}
                >
                  Get Custom Quote
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4"
              onClick={() => handleConsultationClick("")}
            >
              Access Consultation Portal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <ConsultationForm
        isOpen={isConsultationFormOpen}
        onClose={() => setIsConsultationFormOpen(false)}
        selectedServiceType={selectedServiceType}
      />
    </>
  );
}
