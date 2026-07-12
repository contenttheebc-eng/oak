"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronDown, ChevronUp, Phone } from "lucide-react";
import WorkCarousel from "@/components/WorkCarousel";
import Link from "next/link";
import BookCallForm from "@/components/BookCallForm";

const CollapsibleSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors"
      >
        <h4 className="font-semibold text-gray-800 text-left">{title}</h4>
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-gray-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-600 flex-shrink-0" />
        )}
      </button>
      {isOpen && <div className="px-3 pb-3 pt-1 bg-gray-50">{children}</div>}
    </div>
  );
};

const OakssConsultWebsite = () => {
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleBookCall = (service: string) => {
    setSelectedService(service);
    setIsBookCallOpen(true);
  };

  const HomePage = () => (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative text-white  md:px-10 bg-no-repeat bg-cover bg-blend-overlay bg-neutral-500"
        style={{
          backgroundImage: `url("/cloudinary/2.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative md:max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Scaling Organisation,
              <br />
              <span className="text-amber-300">Building People</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8  leading-relaxed md:w-3/4">
              Strategic Management and Business Consultancy, Training, and
              Advisory Services for Organisations, Institutions, and Teams
            </p>
            <div className="flex  gap-4">
              <Link
                href="/events"
                className="bg-white text-amber-900 hover:bg-amber-50 md:text-lg px-4 md:px-8 py-2 md:py-4 flex"
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5 self-center" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="py-10 md:py-20 bg-gray-50">
        <div className="md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left md:text-center mb-8">
            <h2 className="text-3xl md:text-5xl  text-amber-900 mb-6">
              Who We Are
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="text-sm md:text-xl text-gray-700 leading-relaxed mb-8 ">
                <p>
                  We are a strategic business growth and management consultancy
                  dedicated to helping organisations achieve sustainable
                  success. Through executive training, strategic advisory,
                  management consulting, and tailored growth solutions, we
                  empower organisations, institutions, businesses, teams, and
                  professionals to enhance performance, align strategy with
                  execution, and accelerate measurable results.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4  gap-x-2  ">
            <div className="col-span-2 h-80 md:h-[420px]">
              <img
                src="https://res.cloudinary.com/di2bodp6u/image/upload/v1783071430/Picture_2_eluej1.jpg"
                alt="Who We Are"
                className="object-cover h-full "
              />
            </div>
            <div className="h-80 md:h-[420px]">
              <img
                src="https://res.cloudinary.com/di2bodp6u/image/upload/v1783861537/Picture_1_ixtr9x.png"
                alt="Who We Are"
                className="object-cover h-full "
              />
            </div>

            <div className="h-80 md:h-[420px]">
              <img
                src="https://res.cloudinary.com/di2bodp6u/image/upload/v1783861520/BNG05285_wd4hpr.jpg"
                alt="Who We Are"
                className="object-cover h-full "
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center pt-20">
            <div>
              <Card className="border-l-4 border-l-amber-600 shadow-lg ">
                <CardHeader className="px-3 md:px-6">
                  <CardTitle className="text-2xl text-amber-900">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-3 md:px-6">
                  <p className=" text-gray-700">
                    To empower organisations, institutions, businesses, teams,
                    professionals, and individuals through strategic advisory,
                    practical training, and tailored growth solutions that
                    optimise performance, align vision with execution, and
                    accelerate sustainable success.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="border-l-4 border-l-green-600 shadow-lg">
                <CardHeader className="px-3 md:px-6">
                  <CardTitle className="text-2xl text-green-700">
                    Our Values
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-3 md:px-6">
                  <p className="text-gray-700">
                    {" "}
                    We are guided by excellence, integrity, innovation,
                    collaboration, impact, and continuous growth. These values
                    shape the way we think, lead, and deliver - driving us to
                    build trusted partnerships, provide practical and strategic
                    solutions, and create measurable, sustainable outcomes for
                    every organisation, business, team, and individual we serve
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className=" md:pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl  text-amber-900 mb-6">
              What We Do
            </h2>
            <p className="text-sm md:text-xl text-gray-600  mx-auto">
              Our comprehensive suite of services is designed to accelerate
              growth and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader className="px-3 md:px-6">
                <div className="h-52 md:h-64">
                  <img
                    src="/cloudinary/22.jpg"
                    alt="Business Growth Strategy"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </CardHeader>
              <CardContent className="px-3 md:px-6 flex flex-col flex-1">
                <CardTitle className="text-lg md:pt-4">
                  Business Growth Strategy & Management
                </CardTitle>
                <CardDescription className="space-y-3 mt-3">
                  <CollapsibleSection title="1. Strategic Management Training">
                    <p className="text-gray-600 text-sm">
                      Workshops, short courses, and bespoke training for team
                      managers, leaders, behavioural leadership, and performance
                      management.
                    </p>
                  </CollapsibleSection>

                  <CollapsibleSection title="2. Brand/Business Portfolio Marketing [BPM]">
                    <div className="space-y-3 text-sm">
                      <div className="border-l-2 border-amber-500 pl-3">
                        <h5 className="font-medium text-gray-800">
                          Basic Package
                        </h5>
                        <p className="text-gray-600 text-xs">
                          Essential tools to boost visibility and attract
                          customers. Ideal for new businesses, brands, and
                          start-ups.
                        </p>
                      </div>

                      <div className="border-l-2 border-gray-400 pl-3">
                        <h5 className="font-medium text-gray-800">
                          Silver Package
                        </h5>
                        <p className="text-gray-600 text-xs">
                          For new and growing brands ready to scale. Expand
                          reach and engage customers with richer content.
                        </p>
                      </div>

                      <div className="border-l-2 border-green-500 pl-3">
                        <h5 className="font-medium text-gray-800">
                          Advanced Package
                        </h5>
                        <p className="text-gray-600 text-xs">
                          For ambitious businesses seeking growth. Stay
                          consistent with monthly marketing support.
                        </p>
                      </div>

                      <div className="border-l-2 border-blue-500 pl-3">
                        <h5 className="font-medium text-gray-800">
                          Premium Package
                        </h5>
                        <p className="text-gray-600 text-xs">
                          For established brands seeking personalization. A
                          fully tailored plan to match your goals and audience.
                        </p>
                      </div>
                    </div>
                  </CollapsibleSection>
                </CardDescription>
                <button
                  onClick={() => handleBookCall("bpm")}
                  className="mt-auto pt-4 flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium text-sm"
                >
                  <Phone className="h-4 w-4" />
                  Book a Call
                </button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader className="px-3 md:px-6">
                <div className="h-52 md:h-64">
                  <img
                    src="/cloudinary/23.jpg"
                    alt="Business Growth Strategy"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </CardHeader>

              <CardContent className="px-3 md:px-6 flex flex-col flex-1">
                <CardTitle className="text-lg md:pt-4">
                  Consultation Services
                </CardTitle>
                <CardDescription className="space-y-3 mt-3">
                  <CollapsibleSection title="1. One-on-One Consultation">
                    <p className="text-gray-600 text-sm">
                      Personal coaching, strategy review, problem-solving
                      sessions, and consultancy engagements for founders, CEOs,
                      and leaders.
                    </p>
                  </CollapsibleSection>

                  <CollapsibleSection title="2. Digital Consultation">
                    <p className="text-gray-600 text-sm">
                      We provide strategic digital management solutions that
                      align with your business goals. Our consultation helps you
                      assess your current digital presence, identify growth
                      opportunities, and design actionable strategies for
                      improved visibility, engagement, and revenue. Through
                      expert guidance and a structured digital roadmap, we equip
                      your business with the tools to manage its online
                      performance effectively and achieve measurable results.
                    </p>
                  </CollapsibleSection>
                </CardDescription>
                <button
                  onClick={() => handleBookCall("digital-consultation")}
                  className="mt-auto pt-4 flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium text-sm"
                >
                  <Phone className="h-4 w-4" />
                  Book a Call
                </button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader className="px-3 md:px-6">
                <div className="h-52 md:h-64">
                  <img
                    src="/cloudinary/8.jpg"
                    alt="Staff Performance Operations"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </CardHeader>

              <CardContent className="px-3 md:px-6 flex flex-col flex-1">
                <CardTitle className="text-lg md:pt-4">
                  Staff Performance Operations
                </CardTitle>
                <CardDescription className="">
                  <p className="text-gray-600">
                    Build effective structures, processes, KPI setting, and
                    staff accountability systems for your business.
                  </p>
                </CardDescription>
                <button
                  onClick={() => handleBookCall("staff-performance")}
                  className="mt-auto pt-4 flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium text-sm"
                >
                  <Phone className="h-4 w-4" />
                  Book a Call
                </button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader className="px-3 md:px-6">
                <div className="h-52 md:h-64">
                  <img
                    src="/cloudinary/11.jpg"
                    alt="Training for Students & Emerging Professionals"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </CardHeader>

              <CardContent className="px-3 md:px-6 flex flex-col flex-1">
                <CardTitle className="text-lg md:pt-4">
                  Training for Students & Emerging Professionals
                </CardTitle>
                <CardDescription className="">
                  <p className="text-gray-600">
                    Undergraduate workshops, soft skills, early leadership,
                    career preparation, and business fundamentals.
                  </p>
                </CardDescription>
                <button
                  onClick={() => handleBookCall("professional-student")}
                  className="mt-auto pt-4 flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium text-sm"
                >
                  <Phone className="h-4 w-4" />
                  Book a Call
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <WorkCarousel />

      {/* Testimonials */}
      <section id="reviews" className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl text-amber-900 mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-amber-600 shadow-lg">
              <CardContent className="px-3 md:px-6">
                <div>
                  <img
                    src="/cloudinary/client2.jpg"
                    alt="Client 1"
                    className="w-full h-52 md:h-72 object-cover  rounded-md"
                  />
                </div>

                <p className="text-sm md:text-lg text-gray-700 mb-4 italic">
                  &quot;Through Oakss Consult&apos;s training our management
                  team aligned on performance metrics and improved our
                  output.&quot;
                </p>
                <p className="text-xs md:text-sm text-gray-500">
                  — CEO, Hairs Company
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600 shadow-lg">
              <CardContent className="px-3 md:px-6">
                <div>
                  <img
                    src="https://res.cloudinary.com/di2bodp6u/image/upload/v1760086451/clientele_m66saw.jpg"
                    alt="Client 1"
                    className="w-full h-52 md:h-72 object-cover  rounded-md"
                  />
                </div>

                <p className="text-sm md:text-lg text-gray-700 mb-4 italic">
                  &quot;The student workshop helped me feel much more confident
                  in my digital skills.&quot;
                </p>
                <p className="text-xs md:text-sm text-gray-500">
                  — Student, ONI I.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen">
      <HomePage />
      <BookCallForm
        isOpen={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
        preselectedService={selectedService}
      />
    </div>
  );
};

export default OakssConsultWebsite;
