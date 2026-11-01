"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WorkCarousel from "@/components/WorkCarousel";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";

const approachSteps = ["Understand", "Design", "Implement", "Improve"];

const OakssConsultWebsite = () => {
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
            <p className="md:text-lg mb-4 font-medium">
              Digital Skills Training | Management Systems
            </p>
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Helping Experienced Professionals Stay Relevant.
              <br />
              <span className="text-amber-300">Helping Businesses Scale.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8  leading-relaxed md:w-3/4">
              Oakss Consult helps experienced professionals build the digital
              skills they need to thrive in a changing workplace, while helping
              small and medium-sized businesses build the management systems
              they need to grow.
            </p>
            <div className="flex  gap-4">
              <Link
                href="#services"
                className="bg-white text-amber-900 hover:bg-amber-50 md:text-lg px-4 md:px-8 py-2 md:py-4 flex"
              >
                Explore Our Services
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
      <section id="services" className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl  text-amber-900 mb-6">
              What We Do
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader className="px-3 md:px-6">
                <div className="h-52 md:h-72">
                  <img
                    src="/cloudinary/18.jpg"
                    alt="Digital Skills Training"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </CardHeader>
              <CardContent className="px-3 md:px-6 flex flex-col flex-1">
                <CardTitle className="text-xl md:text-2xl text-amber-900">
                  Digital Skills Training
                </CardTitle>
                <p className="font-semibold text-gray-800 mt-2 mb-3">
                  Helping Experienced Professionals Stay Relevant.
                </p>
                <div className="space-y-3 text-gray-600 mb-6">
                  <p>
                    The workplace is changing, and digital skills now play a
                    bigger role in how professionals work, communicate and
                    deliver results.
                  </p>
                  <p>
                    Our digital skills training helps experienced professionals
                    build the confidence and practical skills to use
                    today&rsquo;s digital tools, adapt to new technologies and
                    remain effective in a changing world of work.
                  </p>
                </div>
                <Button asChild className="mt-auto bg-amber-600 hover:bg-amber-700">
                  <Link href="/digital-skills-training">
                    Explore Digital Skills Training
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader className="px-3 md:px-6">
                <div className="h-52 md:h-72">
                  <img
                    src="/cloudinary/23.jpg"
                    alt="Management Systems"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </CardHeader>
              <CardContent className="px-3 md:px-6 flex flex-col flex-1">
                <CardTitle className="text-xl md:text-2xl text-amber-900">
                  Management Systems
                </CardTitle>
                <p className="font-semibold text-gray-800 mt-2 mb-3">
                  Helping Small &amp; Medium-Sized Businesses Scale With
                  Structure.
                </p>
                <div className="space-y-3 text-gray-600 mb-6">
                  <p>Growth can expose gaps in the way a business operates.</p>
                  <p>
                    Unclear roles, inconsistent processes, weak accountability
                    and overdependence on the business owner can make growth
                    difficult to sustain.
                  </p>
                  <p>
                    Oakss Consult helps small and medium-sized businesses
                    develop practical management systems that bring structure
                    to their people, processes and operations, creating a
                    stronger foundation for sustainable growth.
                  </p>
                </div>
                <Button asChild className="mt-auto bg-amber-600 hover:bg-amber-700">
                  <Link href="/management-systems">
                    Explore Management Systems
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Oakss */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <img
            src="/cloudinary/15.jpg"
            alt="Why Oakss"
            className="w-full h-80 md:h-[420px] object-cover rounded-md"
          />
          <div>
            <h2 className="text-3xl md:text-5xl text-amber-900 mb-2">
              Why Oakss
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
              Better Skills. Better Systems. Better Performance.
            </p>
            <div className="space-y-3 text-sm md:text-xl text-gray-700 leading-relaxed">
              <p>
                People need the right skills to perform in a changing workplace.
              </p>
              <p>
                Businesses need the right systems to grow without losing
                control.
              </p>
              <p>Oakss Consult works across both.</p>
              <p>
                We provide practical training and management solutions designed
                around the realities of today&rsquo;s professionals and growing
                businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl text-amber-900 mb-6">
              Who We Serve
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-amber-600 shadow-lg">
              <CardContent className="px-3 md:px-6 flex flex-col h-full">
                <img
                  src="/cloudinary/5.jpg"
                  alt="Experienced professional"
                  className="w-full h-52 md:h-72 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl md:text-2xl text-amber-900 mb-3">
                  Professionals Who Want to Stay Relevant
                </h3>
                <p className="text-gray-700 mb-6">
                  You have years of experience. We help you build the digital
                  confidence to bring that experience into today&rsquo;s
                  workplace.
                </p>
                <Button asChild className="mt-auto bg-amber-600 hover:bg-amber-700">
                  <Link href="/digital-skills-training">
                    Digital Skills Training
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-green-600 shadow-lg">
              <CardContent className="px-3 md:px-6 flex flex-col h-full">
                <img
                  src="/cloudinary/22.jpg"
                  alt="Business owners"
                  className="w-full h-52 md:h-72 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl md:text-2xl text-green-700 mb-3">
                  Businesses That Are Ready to Grow
                </h3>
                <p className="text-gray-700 mb-6">
                  You have built the business. We help you build the systems
                  that allow it to grow beyond the way you currently operate.
                </p>
                <Button asChild className="mt-auto bg-amber-600 hover:bg-amber-700">
                  <Link href="/management-systems">
                    Management Systems
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <WorkCarousel />

      {/* Our Approach */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl text-amber-900 mb-2">
            Our Approach
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            Practical. Relevant. Built Around You.
          </p>
          <div className="max-w-4xl mx-auto text-sm md:text-xl text-gray-700 leading-relaxed mb-8 md:mb-12">
            <p>
              We start by understanding where you are, what is getting in the
              way and where you want to go.
            </p>
            <p>
              From there, we develop the training or management solution that
              fits your needs.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
            {approachSteps.map((step, i) => (
              <React.Fragment key={step}>
                <span className="w-full md:w-48 bg-white border-l-4 border-l-amber-600 shadow-lg rounded-md px-6 py-4 md:text-xl text-amber-900">
                  {step}
                </span>
                {i < approachSteps.length - 1 && (
                  <ArrowRight className="h-6 w-6 flex-shrink-0 text-amber-600 rotate-90 md:rotate-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

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

      <CtaSection
        title="Ready to Strengthen Your Skills or Your Systems?"
        body="Whether you are an experienced professional adapting to a changing workplace or a growing business looking for better ways to operate, Oakss Consult is here to help."
        label="Talk to Oakss"
      />
    </div>
  );

  return (
    <div className="min-h-screen">
      <HomePage />
    </div>
  );
};

export default OakssConsultWebsite;
