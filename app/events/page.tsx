// "use client";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// import {
//   Calendar,
//   ChevronRight,
//   ArrowRight,
//   Phone,
//   Target,
//   Users,
// } from "lucide-react";
// import EventRegistrationForm from "@/components/Form";
// import ConsultationForm from "@/components/ConsultForm";
// import { useState } from "react";
// export default function PageEvent() {
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   const [selectedEventId, setSelectedEventId] = useState("");
//   const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);
//   const [selectedServiceType, setSelectedServiceType] = useState("");

//   const handleRegisterClick = (eventId: string) => {
//     setSelectedEventId(eventId);
//     setIsFormOpen(true);
//   };
//   const handleConsultationClick = (serviceType: string) => {
//     setSelectedServiceType(serviceType);
//     setIsConsultationFormOpen(true);
//   };
//   return (
//     <>
//       <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white  py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-3xl md:text-5xl font-bold mb-4">
//             Events & Consultation
//           </h1>
//           <p className="md:text-xl text-amber-100">
//             Stay connected with our workshops and book your consultation
//             sessions
//           </p>
//         </div>
//       </section>
//       <section className="py-10 md:py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-12">
//             Upcoming Trainings & Events
//           </h2>

//           <div className="space-y-8">
//             <Card className="border-l-4 border-l-amber-600 shadow-lg">
//               <CardHeader className="px-3 md:px-6">
//                 <div className=" mb-4 grid grid-cols-2 gap-2">
//                   <img
//                     src="/cloudinary/workshop.jpg"
//                     alt="Managing Humans, Not Just Roles, to Deliver Goals"
//                     className="w-full h-full object-cover rounded-md object-top"
//                   />
//                   <img
//                     src="/cloudinary/hat.jpg"
//                     alt="Managing Humans, Not Just Roles, to Deliver Goals"
//                     className="w-full h-full object-cover rounded-md object-top"
//                   />
//                 </div>
//                 <div className="flex items-center justify-between mb-4">
//                   <Badge className="bg-amber-100 text-amber-800">
//                     Featured Event
//                   </Badge>
//                   <Badge
//                     variant="outline"
//                     className="text-green-600 border-green-600"
//                   >
//                     FREE
//                   </Badge>
//                 </div>
//               </CardHeader>
//               <CardContent className="px-3 md:px-6">
//                 <CardTitle className="text-lg md:text-2xl text-amber-900 mb-2">
//                   Managing Humans, Not Just Roles, to Deliver Goals
//                 </CardTitle>
//                 <CardDescription className="text-sm md:text-lg mb-4">
//                   <div className="flex items-center text-gray-600 mb-2">
//                     <Calendar className="h-5 w-5 mr-2" />
//                     Thursday, 16th October, 2025 - Online Workshop
//                   </div>
//                 </CardDescription>

//                 <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
//                   In today&apos;s business world, success is not about assigning
//                   tasks, it is about empowering people. Many managers and
//                   business owners fall into the trap of managing roles instead
//                   of leading humans, which often leads to burnout,
//                   disengagement, and missed opportunities.
//                 </p>

//                 <div className="mb-6 text-sm md:text-base">
//                   <h4 className="font-semibold text-gray-900 mb-3">
//                     This interactive workshop will help you:
//                   </h4>
//                   <ul className="space-y-2 text-gray-700">
//                     <li className="flex items-start">
//                       <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
//                       Build stronger connections with your team
//                     </li>
//                     <li className="flex items-start">
//                       <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
//                       Motivate people beyond their job descriptions
//                     </li>
//                     <li className="flex items-start">
//                       <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
//                       Create a culture where individuals thrive and business
//                       goals are consistently achieved
//                     </li>
//                     <li className="flex items-start">
//                       <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
//                       Transform management into leadership that inspires
//                       loyalty, productivity, and innovation
//                     </li>
//                   </ul>
//                 </div>

//                 <Button
//                   className="bg-amber-600 hover:bg-amber-700 text-white"
//                   onClick={() => handleRegisterClick("managing-humans")}
//                 >
//                   Register Now
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Other Events */}
//             <div className="grid md:grid-cols-2 gap-8">
//               <Card className="hover:shadow-lg transition-shadow duration-300">
//                 <CardHeader className="px-3 md:px-6">
//                   <div className="h-52 md:h-64">
//                     <img
//                       src="/cloudinary/clarity.jpg"
//                       alt="Business Growth Strategy"
//                       className="w-full h-full object-cover rounded-md"
//                     />
//                   </div>
//                 </CardHeader>
//                 <CardContent className="px-3 md:px-6">
//                   <CardTitle className="md:text-xl text-gray-900 mb-2">
//                     Scaling Strategies for SMEs
//                   </CardTitle>
//                   <CardDescription className="mb-4 text-sm md:text-base">
//                     <div className="flex items-center text-gray-600">
//                       <Calendar className="h-4 w-4 mr-2" />
//                       12 November 2025 - Online Webinar
//                     </div>
//                   </CardDescription>
//                   <p className="text-gray-700 mb-4 text-sm md:text-base">
//                     Learn proven strategies to scale your small to medium
//                     enterprise effectively and sustainably.
//                   </p>
//                   <Button
//                     variant="outline"
//                     className="w-full"
//                     onClick={() => handleRegisterClick("scaling-smes")}
//                   >
//                     Register Here
//                   </Button>
//                 </CardContent>
//               </Card>

//               <Card className="hover:shadow-lg transition-shadow duration-300">
//                 <CardHeader className="px-3 md:px-6">
//                   <div className="h-52 md:h-64">
//                     <img
//                       src="/cloudinary/23.jpg"
//                       alt="Student Business Readiness Bootcamp"
//                       className="w-full h-full object-cover rounded-md"
//                     />
//                   </div>
//                 </CardHeader>
//                 <CardContent className="px-3 md:px-6">
//                   <CardTitle className="md:text-xl text-gray-900 mb-2">
//                     Student Business Readiness Bootcamp
//                   </CardTitle>
//                   <CardDescription className="mb-4 text-sm md:text-base">
//                     <div className="flex items-center text-gray-600">
//                       <Calendar className="h-4 w-4 mr-2" />
//                       15 December 2025 - Virtual
//                     </div>
//                   </CardDescription>
//                   <p className="text-gray-700 mb-4 text-sm md:text-base">
//                     Comprehensive bootcamp preparing students for the business
//                     world with essential skills and knowledge.
//                   </p>
//                   <Button
//                     variant="outline"
//                     className="w-full"
//                     onClick={() => handleRegisterClick("student-bootcamp")}
//                   >
//                     Register Here
//                   </Button>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-10 md:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">
//               Consultation & Coaching
//             </h2>
//             <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
//               Our consultation portal allows you to connect with our expert
//               consultants for personalized guidance
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <Card className="text-center hover:shadow-lg transition-shadow duration-300">
//               <CardHeader className="px-3 md:px-6">
//                 <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Phone className="h-8 w-8 text-amber-600" />
//                 </div>
//                 <CardTitle className="text-xl">
//                   30-Minute Discovery Call
//                 </CardTitle>
//                 <CardDescription>FREE</CardDescription>
//               </CardHeader>
//               <CardContent className="px-3 md:px-6">
//                 <p className="text-gray-600 mb-6">
//                   Start with a complimentary consultation to explore how we can
//                   help your business grow.
//                 </p>
//                 <Button
//                   className="w-full bg-amber-600 hover:bg-amber-700"
//                   onClick={() => handleConsultationClick("discovery-call")}
//                 >
//                   Book Discovery Call
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="text-center hover:shadow-lg transition-shadow duration-300">
//               <CardHeader className="px-3 md:px-6">
//                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Users className="h-8 w-8 text-green-600" />
//                 </div>
//                 <CardTitle className="text-xl">One-on-One Coaching</CardTitle>
//                 <CardDescription>Personalized Sessions</CardDescription>
//               </CardHeader>
//               <CardContent className="px-3 md:px-6">
//                 <p className="text-gray-600 mb-6">
//                   Schedule individual coaching sessions tailored to your
//                   specific leadership and business challenges.
//                 </p>
//                 <Button
//                   variant="outline"
//                   className="w-full"
//                   onClick={() => handleConsultationClick("coaching")}
//                 >
//                   Schedule Session
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="text-center hover:shadow-lg transition-shadow duration-300">
//               <CardHeader>
//                 <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Target className="h-8 w-8 text-purple-600" />
//                 </div>
//                 <CardTitle className="text-xl">Custom Packages</CardTitle>
//                 <CardDescription>Team & Company Solutions</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600 mb-6">
//                   Comprehensive packages designed for your team or
//                   company&apos;s specific needs and objectives.
//                 </p>
//                 <Button
//                   variant="outline"
//                   className="w-full"
//                   onClick={() => handleConsultationClick("custom-package")}
//                 >
//                   Get Custom Quote
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>

//           <div className="text-center mt-12">
//             <Button
//               size="lg"
//               className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4"
//               onClick={() => handleConsultationClick("")} // Empty string shows all options
//             >
//               Access Consultation Portal
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       <EventRegistrationForm
//         isOpen={isFormOpen}
//         onClose={() => setIsFormOpen(false)}
//         selectedEventId={selectedEventId}
//       />
//       <ConsultationForm
//         isOpen={isConsultationFormOpen}
//         onClose={() => setIsConsultationFormOpen(false)}
//         selectedServiceType={selectedServiceType}
//       />
//     </>
//   );
// }

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

  const pastEvents = [
    {
      id: 1,
      title: "Managing Humans, Not Just Roles, to Deliver Goals",
      date: "October 16, 2025",
      image: "/cloudinary/workshop.jpg",
      description:
        "In today's business world, success is not about assigning tasks, it is about empowering people.",
      attendees: "500+",
    },
    {
      id: 2,
      title: "Avoid Tax Traps",
      date: "June 13, 2025",
      image: "/cloudinary/24.jpg",
      description: "What every business & individual must know",
      attendees: "500+",
    },
    {
      id: 3,
      title: "Business & Beyond",
      date: "May 29, 2025",
      image: "/cloudinary/25.jpg",
      description:
        "Exploring digital tools and strategies to transform traditional business operations.",
      attendees: 355,
    },
    {
      id: 4,
      title: "Business & Beyond",
      date: "May 29, 2025",
      image: "/cloudinary/26.jpg",
      description:
        "Practical strategies for recruiting, developing, and retaining top talent.",
      attendees: 355,
    },
    {
      id: 5,
      title: "Business & Beyond",
      date: "May 29, 2025",
      image: "/cloudinary/27.jpg",
      description:
        "Learn to create and implement effective strategic plans for sustainable growth.",
      attendees: 355,
    },
  ];

  const galleryImages = [
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310409/2_eohv52.jpg",
      alt: "Event moment 2",
      caption: "Business & Beyond Summit",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310407/10_s4yndf.jpg",
      alt: "Event moment 1",
      caption: "Avoid Tax Traps Workshop",
    },

    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310407/13_dullte.jpg",
      alt: "Event moment 2",
      caption: "Business & Beyond Summit",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310407/1_xipbor.jpg",
      alt: "Event moment 3",
      caption: "Networking Session",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310407/12_nipeel.jpg",
      alt: "Event moment 4",
      caption: "Interactive Workshop",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310407/11_cqrzaa.jpg",
      alt: "Event moment 5",
      caption: "Leadership Training",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310407/14_diuhzb.jpg",
      alt: "Event moment 6",
      caption: "Panel Discussion",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310408/16_ltkcbj.jpg",
      alt: "Event moment 7",
      caption: "Strategic Planning Session",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310409/17_vqxgno.jpg",
      alt: "Event moment 8",
      caption: "Student Bootcamp",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310409/15_iapk0q.jpg",
      alt: "Event moment 9",
      caption: "Team Building",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310409/19_tphze5.jpg",
      alt: "Event moment 10",
      caption: "Professional Development",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310409/18_xvaneu.jpg",
      alt: "Event moment 1",
      caption: "Avoid Tax Traps Workshop",
    },

    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310409/20_tvmpcn.jpg",
      alt: "Event moment 3",
      caption: "Networking Session",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310410/21_w53ztt.jpg",
      alt: "Event moment 4",
      caption: "Interactive Workshop",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310410/23_yxmcpb.jpg",
      alt: "Event moment 5",
      caption: "Leadership Training",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310412/22_uxew4v.jpg",
      alt: "Event moment 6",
      caption: "Panel Discussion",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310419/3_jnkhpo.jpg",
      alt: "Event moment 7",
      caption: "Strategic Planning Session",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310419/4_nsxj8t.jpg",
      alt: "Event moment 8",
      caption: "Student Bootcamp",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310420/5_plpjah.jpg",
      alt: "Event moment 9",
      caption: "Team Building",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310420/9_fwpqtf.jpg",
      alt: "Event moment 10",
      caption: "Professional Development",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310420/6_nkvber.jpg",
      alt: "Event moment 8",
      caption: "Student Bootcamp",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310421/8_fzpjsv.jpg",
      alt: "Event moment 9",
      caption: "Team Building",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1759310421/7_vmihjc.jpg",
      alt: "Event moment 10",
      caption: "Professional Development",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="md:text-xl text-amber-100">
            Stay updated with our latest events and be part of the experience.
          </p>
        </div>
      </section>

      {/* <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-12">
            Upcoming Trainings & Events
          </h2>

          <div className="space-y-8">
            <Card className="border-l-4 border-l-amber-600 shadow-lg">
              <CardHeader className="px-3 md:px-6">
                <div className="mb-4 grid grid-cols-2 gap-2">
                  <img
                    src="/cloudinary/workshop.jpg"
                    alt="Managing Humans, Not Just Roles, to Deliver Goals"
                    className="w-full h-full object-cover rounded-md object-top"
                  />
                  <img
                    src="/cloudinary/hat.jpg"
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

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="px-3 md:px-6">
                  <div className="h-52 md:h-64">
                    <img
                      src="/cloudinary/clarity.jpg"
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
                      13 November 2025 - Online Webinar
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
                      26 January 2026 - Virtual
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
      </section> */}

      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-12">
            Upcoming Trainings & Events
          </h2>

          <div className="space-y-8">
            {/* Featured Event (Updated) */}
            <Card className="border-l-4 border-l-amber-600 shadow-lg">
              <CardHeader className="px-3 md:px-6">
                <div className="mb-4 grid md:grid-cols-2 gap-2">
                  <img
                    src="/cloudinary/clarity.jpg"
                    alt="Scaling Strategies for SMEs"
                    className="w-full h-full object-cover rounded-md object-top"
                  />
                  {/* <img
                    src="/cloudinary/workshop.jpg"
                    alt="Scaling Strategies for SMEs"
                    className="w-full h-full object-cover rounded-md object-top"
                  /> */}
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
                  Scaling Strategies for SMEs
                </CardTitle>
                <CardDescription className="text-sm md:text-lg mb-4">
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="h-5 w-5 mr-2" />
                    Thursday, 13th November, 2025 - Online Webinar
                  </div>
                </CardDescription>

                <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
                  Unlock the potential of your business with proven growth and
                  scaling strategies. This webinar is designed to help SME
                  owners identify scalable models, optimize operations, and
                  leverage modern tools for sustainable success.
                </p>

                <div className="mb-6 text-sm md:text-base">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    In this session, you will learn how to:
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      Build scalable business systems and processes
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      Identify growth bottlenecks and overcome them effectively
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      Leverage technology and digital strategies for expansion
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                      Develop leadership and team structures that support
                      scaling
                    </li>
                  </ul>
                </div>

                <Button
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() => handleRegisterClick("scaling-smes")}
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
                      26 January 2026 - Virtual
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

      {/* Past Events Section */}
      {/* <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900">
              Past Events
            </h2>
            <Badge variant="outline" className="text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              Archive
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event) => (
              <Card
                key={event.id}
                className="hover:shadow-lg transition-shadow duration-300 opacity-90"
              >
                <CardHeader className="px-3 md:px-6">
                  <div className="h-40 md:h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </CardHeader>
                <CardContent className="px-3 md:px-6">
                  <CardTitle className="text-base md:text-lg text-gray-900 mb-2">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="mb-3 text-sm">
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-3 w-3 mr-2" />
                      {event.date}
                    </div>
                  </CardDescription>
                  <p className="text-gray-600 mb-3 text-xs md:text-sm line-clamp-2">
                    {event.description}
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Users className="h-3 w-3 mr-1" />
                    {event.attendees} attendees
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900">
              Past Events
            </h2>
            <Badge variant="outline" className="text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              Archive
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Embedded YouTube Video (spans 2 columns) */}
            <div className="md:col-span-2 lg:col-span-2">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/sJ2b_AhHNRQ?si=_nH5eWhfpJ2FONl9"
                  title="Past Event Highlights"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-[300px] md:h-[400px] rounded-lg"
                ></iframe>
              </div>
              <p className="text-gray-700 text-sm md:text-base mt-3 text-center">
                🎥 Highlights from our recent training session — watch the
                recap!
              </p>
            </div>

            {/* Render remaining past events */}
            {pastEvents.map((event) => (
              <Card
                key={event.id}
                className="hover:shadow-lg transition-shadow duration-300 opacity-90"
              >
                <CardHeader className="px-3 md:px-6">
                  <div className="h-40 md:h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </CardHeader>
                <CardContent className="px-3 md:px-6">
                  <CardTitle className="text-base md:text-lg text-gray-900 mb-2">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="mb-3 text-sm">
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-3 w-3 mr-2" />
                      {event.date}
                    </div>
                  </CardDescription>
                  <p className="text-gray-600 mb-3 text-xs md:text-sm line-clamp-2">
                    {event.description}
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Users className="h-3 w-3 mr-1" />
                    {event.attendees} attendees
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
              London Events Gallery
            </h2>
            <p className="text-gray-600 md:text-lg">
              Highlights and memorable moments from our events
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {image.caption && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <EventRegistrationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        selectedEventId={selectedEventId}
      />
      {/* <ConsultationForm
        isOpen={isConsultationFormOpen}
        onClose={() => setIsConsultationFormOpen(false)}
        selectedServiceType={selectedServiceType}
      /> */}
    </>
  );
}
