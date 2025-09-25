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
} from "lucide-react";
import EventRegistrationForm from "@/components/Form";
import ConsultationForm from "@/components/ConsultForm";
import { useState } from "react";
export default function PageEvent() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState("");
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState("");

  const handleRegisterClick = (eventId: string) => {
    setSelectedEventId(eventId);
    setIsFormOpen(true);
  };
  const handleConsultationClick = (serviceType: string) => {
    setSelectedServiceType(serviceType);
    setIsConsultationFormOpen(true);
  };
  return (
    <>
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white  py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Events & Consultation
          </h1>
          <p className="md:text-xl text-amber-100">
            Stay connected with our workshops and book your consultation
            sessions
          </p>
        </div>
      </section>
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-12">
            Upcoming Trainings & Events
          </h2>

          <div className="space-y-8">
            {/* Featured Event */}
            {/* <Card className="border-l-4 border-l-amber-600 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-amber-100 text-amber-800">
                    Featured Event
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-green-600 border-green-600"
                  >
                    FREE
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-amber-900">
                  Managing Humans, Not Just Roles, to Deliver Goals
                </CardTitle>
                <CardDescription className="text-lg">
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-5 w-5 mr-2" />
                    Thursday, 16th October, 2025 - Online Workshop
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  In today&apos;s business world, success is not about assigning
                  tasks, it is about empowering people. Many managers and
                  business owners fall into the trap of managing roles instead
                  of leading humans, which often leads to burnout,
                  disengagement, and missed opportunities.
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    This interactive workshop will help you:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      Build stronger connections with your team
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      Motivate people beyond their job descriptions
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      Create a culture where individuals thrive and business
                      goals are consistently achieved
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      Transform management into leadership that inspires
                      loyalty, productivity, and innovation
                    </li>
                  </ul>
                </div>

                <Button
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() => handleRegisterClick("managing-humans")}
                >
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card> */}
            <Card className="border-l-4 border-l-amber-600 shadow-lg">
              <CardHeader className="px-3 md:px-6">
                <div className="h-52 md:h-64 mb-4">
                  <img
                    src="/cloudinary/8.jpg"
                    alt="Managing Humans, Not Just Roles, to Deliver Goals"
                    className="w-full h-full object-cover rounded-md object-top"
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-amber-100 text-amber-800">
                    Featured Event
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-green-600 border-green-600"
                  >
                    FREE
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="px-3 md:px-6">
                <CardTitle className="text-lg md:text-2xl text-amber-900 mb-2">
                  Managing Humans, Not Just Roles, to Deliver Goals
                </CardTitle>
                <CardDescription className="text-sm md:text-lg mb-4">
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-5 w-5 mr-2" />
                    Thursday, 16th October, 2025 - Online Workshop
                  </div>
                </CardDescription>

                <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
                  In today&apos;s business world, success is not about assigning
                  tasks, it is about empowering people. Many managers and
                  business owners fall into the trap of managing roles instead
                  of leading humans, which often leads to burnout,
                  disengagement, and missed opportunities.
                </p>

                <div className="mb-6 text-sm md:text-base">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    This interactive workshop will help you:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      Build stronger connections with your team
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      Motivate people beyond their job descriptions
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      Create a culture where individuals thrive and business
                      goals are consistently achieved
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      Transform management into leadership that inspires
                      loyalty, productivity, and innovation
                    </li>
                  </ul>
                </div>

                <Button
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() => handleRegisterClick("managing-humans")}
                >
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Other Events */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="px-3 md:px-6">
                  <div className="h-52 md:h-64">
                    <img
                      src="/cloudinary/17.jpg"
                      alt="Business Growth Strategy"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </CardHeader>
                <CardContent className="px-3 md:px-6">
                  <CardTitle className="md:text-xl text-gray-900 mb-2">
                    Scaling Strategies for SMEs
                  </CardTitle>
                  <CardDescription className="mb-4 text-sm md:text-base">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      12 November 2025 - Online Webinar
                    </div>
                  </CardDescription>
                  <p className="text-gray-700 mb-4 text-sm md:text-base">
                    Learn proven strategies to scale your small to medium
                    enterprise effectively and sustainably.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleRegisterClick("scaling-smes")}
                  >
                    Register Here
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="px-3 md:px-6">
                  <div className="h-52 md:h-64">
                    <img
                      src="/cloudinary/23.jpg"
                      alt="Student Business Readiness Bootcamp"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </CardHeader>
                <CardContent className="px-3 md:px-6">
                  <CardTitle className="md:text-xl text-gray-900 mb-2">
                    Student Business Readiness Bootcamp
                  </CardTitle>
                  <CardDescription className="mb-4 text-sm md:text-base">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      15 December 2025 - Virtual
                    </div>
                  </CardDescription>
                  <p className="text-gray-700 mb-4 text-sm md:text-base">
                    Comprehensive bootcamp preparing students for the business
                    world with essential skills and knowledge.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleRegisterClick("student-bootcamp")}
                  >
                    Register Here
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-white">
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
              onClick={() => handleConsultationClick("")} // Empty string shows all options
            >
              Access Consultation Portal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <EventRegistrationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        selectedEventId={selectedEventId}
      />
      <ConsultationForm
        isOpen={isConsultationFormOpen}
        onClose={() => setIsConsultationFormOpen(false)}
        selectedServiceType={selectedServiceType}
      />
    </>
  );
}
