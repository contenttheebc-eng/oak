"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Menu,
  X,
  ChevronRight,
  Users,
  TrendingUp,
  Target,
  BookOpen,
  Calendar,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import WorkCarousel from "@/components/WorkCarousel";
import Link from "next/link";

const OakssConsultWebsite = () => {
  const HomePage = () => (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative text-white px-10 bg-no-repeat bg-cover bg-blend-overlay bg-neutral-500"
        style={{
          backgroundImage: `url("/cloudinary/1.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Scaling Businesses,
              <br />
              <span className="text-amber-300">Building Leaders</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8  leading-relaxed md:w-3/4">
              Practical management, training & consulting for entrepreneurs,
              teams & institutions
            </p>
            <div className="flex  gap-4">
              <Link
                href="/events"
                className="bg-white text-amber-900 hover:bg-amber-50 text-lg px-8 py-4 flex"
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5 self-center" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-5xl  text-amber-900 mb-6">Who We Are</h2>
            <div className="max-w-4xl mx-auto">
              <div className="text-xl text-gray-700 leading-relaxed mb-8">
                <p>
                  Oakss Consult Ltd is a high-impact business growth and
                  management consultancy.
                </p>
                <p>
                  We help companies (small, medium, We help companies (small,
                  medium, large), team leaders, founders, undergraduate
                  students, and professionals to scale, manage their people for
                  results, and deliver sustainable performance.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 h-[420px] gap-x-2 ">
            <div className="md:col-span-2">
              <img
                src="/cloudinary/20.jpg"
                alt="Who We Are"
                className="object-cover h-full "
              />
            </div>
            <div>
              <img
                src="/cloudinary/7.jpg"
                alt="Who We Are"
                className="w-full h-full "
              />
            </div>

            <div>
              <img
                src="/cloudinary/15.jpg"
                alt="Who We Are"
                className="w-full h-full "
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center pt-20">
            <div>
              <Card className="border-l-4 border-l-amber-600 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-900">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=" text-gray-700">
                    To empower organisations and individuals with the skills,
                    strategies, and mindset to grow with purpose, lead with
                    clarity, and perform at scale.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="border-l-4 border-l-green-600 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-700">
                    Our Values
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Practicality",
                      "Integrity",
                      "Growth",
                      "Collaboration",
                      "Excellence",
                    ].map((value) => (
                      <Badge
                        key={value}
                        variant="outline"
                        className="text-base py-1"
                      >
                        {value}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl  text-amber-900 mb-6">What We Do</h2>
            <p className="text-xl text-gray-600  mx-auto">
              Our comprehensive suite of services designed to accelerate your
              growth and leadership development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="hover:shadow-lg transition-shadow duration-300 ">
              <CardHeader>
                <div className="h-32">
                  <img
                    src="/cloudinary/22.jpg"
                    alt="Business Growth Strategy"
                    className="w-full  object-cover rounded-md"
                  />
                </div>
                {/* <CardTitle className="text-lg pt-4">
                  Business Growth Strategy
                </CardTitle> */}
              </CardHeader>
              <CardHeader>
                <CardTitle className="text-lg pt-4">
                  Business Growth Strategy & Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Workshops, short courses, and bespoke training for team
                  managers, leaders, behavioural leadership, and performance
                  management.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="h-32">
                  <img
                    src="/cloudinary/23.jpg"
                    alt="Business Growth Strategy"
                    className="w-full  object-cover rounded-md"
                  />
                </div>
              </CardHeader>
              <CardHeader>
                <CardTitle className="text-lg pt-4">Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Personal coaching, strategy review, problem-solving sessions,
                  and long-term consultancy engagements for founders, CEOs, and
                  leaders.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="h-32">
                  <img
                    src="/cloudinary/8.jpg"
                    alt="Business Growth Strategy"
                    className="w-full  object-cover rounded-md"
                  />
                </div>
              </CardHeader>
              <CardHeader>
                <CardTitle className="text-lg pt-4">
                  Staff Performance Operations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Build effective structures, processes, KPI setting, and staff
                  accountability systems for your business.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="h-32">
                  <img
                    src="/cloudinary/11.jpg"
                    alt="Business Growth Strategy"
                    className="w-full  object-cover rounded-md"
                  />
                </div>
              </CardHeader>
              <CardHeader>
                <CardTitle className="text-lg pt-4">
                  Training for Students & Emerging Professionals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Undergraduate workshops, soft skills, early leadership, career
                  preparation, and business fundamentals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <WorkCarousel />

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-amber-900 mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-amber-600 shadow-lg">
              <CardContent className="">
                <div>
                  <img
                    src="/cloudinary/customer.jpg"
                    alt="Client 1"
                    className="w-full h-60 object-cover  rounded-md"
                  />
                </div>

                <p className="text-lg text-gray-700 mb-4 italic">
                  &quot;Through Oakss Consult&apos;s training our management
                  team aligned on performance metrics and improved our
                  output.&quot;
                </p>
                <p className="text-sm text-gray-500">— CEO, Hairs Company</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600 shadow-lg">
              <CardContent className="">
                <div>
                  <img
                    src="/cloudinary/customer2.jpg"
                    alt="Client 1"
                    className="w-full h-60 object-cover object-top rounded-md"
                  />
                </div>

                <p className="text-lg text-gray-700 mb-4 italic">
                  &quot;The student workshop helped me feel much more confident
                  stepping into leadership roles.&quot;
                </p>
                <p className="text-sm text-gray-500">— Student, ONI I.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );

  const EventsPage = () => (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Events & Consultation
          </h1>
          <p className="text-xl text-amber-100">
            Stay connected with our workshops and book your consultation
            sessions
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Upcoming Trainings & Events
          </h2>

          <div className="space-y-8">
            {/* Featured Event */}
            <Card className="border-l-4 border-l-amber-600 shadow-lg">
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

                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Other Events */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    Scaling Strategies for SMEs
                  </CardTitle>
                  <CardDescription>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      12 November 2025 - Online Webinar
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Learn proven strategies to scale your small to medium
                    enterprise effectively and sustainably.
                  </p>
                  <Button variant="outline" className="w-full">
                    Register Here
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">
                    Student Business Readiness Bootcamp
                  </CardTitle>
                  <CardDescription>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      15 December 2025 - Virtual
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Comprehensive bootcamp preparing students for the business
                    world with essential skills and knowledge.
                  </p>
                  <Button variant="outline" className="w-full">
                    Register Here
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Consultation & Coaching
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our consultation portal allows you to connect with our expert
              consultants for personalized guidance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl">
                  30-Minute Discovery Call
                </CardTitle>
                <CardDescription>FREE</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Start with a complimentary consultation to explore how we can
                  help your business grow.
                </p>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Book Discovery Call
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">One-on-One Coaching</CardTitle>
                <CardDescription>Personalized Sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Schedule individual coaching sessions tailored to your
                  specific leadership and business challenges.
                </p>
                <Button variant="outline" className="w-full">
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
                <Button variant="outline" className="w-full">
                  Get Custom Quote
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4"
            >
              Access Consultation Portal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Ready to transform your business? Contact us today.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center text-gray-600">
              <Mail className="h-6 w-6 mr-3 text-amber-600" />
              <span>info@oakssconsult.co</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="h-6 w-6 mr-3 text-amber-600" />
              <span>+234 XXX XXX XXXX</span>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/oakssconsult?igsh=MTgyeGpubjVldDZ0bw=="
              className="text-gray-400 hover:text-pink-500 transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/oakss-consult-ltd/posts/?feedView=all&viewAsMember=true"
              className="text-gray-400 hover:text-amber-600 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=6157975197762"
              className="text-gray-400 hover:text-amber-600 transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Oakss Consult Ltd</h3>
            <p className="text-gray-300 mb-4">
              Scaling Businesses, Building Leaders. Practical management,
              training & consulting for entrepreneurs, teams & institutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/oakssconsult?igsh=MTgyeGpubjVldDZ0bw=="
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/oakss-consult-ltd/posts/?feedView=all&viewAsMember=true"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=6157975197762"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Business Growth Strategy</li>
              <li>Consulting & Coaching</li>
              <li>Staff Performance</li>
              <li>Student Training</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>info@oakssconsult.co</li>
              <li>+234 XXX XXX XXXX</li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="text-center text-gray-400">
          <p>&copy; 2025 Oakss Consult Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen">
      <HomePage />
    </div>
  );
};

export default OakssConsultWebsite;
