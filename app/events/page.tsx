"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Calendar, Users, Clock, MapPin } from "lucide-react";

export default function PageEvent() {
  const pastEvents = [
    {
      id: 0,
      title: "Oakss Consult – Business & Beyond II",
      date: "February 26, 2026",
      image:
        "https://res.cloudinary.com/di2bodp6u/image/upload/v1771964095/poster-image_oaq74j.jpg",
      description:
        "Business & Beyond II builds on that momentum, focusing on current business trends, emerging tools, and practical strategies required to build future-ready organisations.",
      attendees: "500+",
    },
    {
      id: 1,
      title: "Scaling Strategies for SMEs",
      date: "November 13, 2025",
      image: "/cloudinary/clarity.jpg",
      description:
        "Unlock the potential of your business with proven growth and scaling strategies for sustainable success.",
      attendees: "500+",
    },
    {
      id: 2,
      title: "Managing Humans, Not Just Roles, to Deliver Goals",
      date: "October 16, 2025",
      image: "/cloudinary/workshop.jpg",
      description:
        "In today's business world, success is not about assigning tasks, it is about empowering people.",
      attendees: "500+",
    },
    {
      id: 3,
      title: "Avoid Tax Traps",
      date: "June 13, 2025",
      image: "/cloudinary/24.jpg",
      description: "What every business & individual must know",
      attendees: "500+",
    },
    {
      id: 4,
      title: "Business & Beyond",
      date: "May 29, 2025",
      image: "/cloudinary/25.jpg",
      description:
        "Exploring digital tools and strategies to transform traditional business operations.",
      attendees: 355,
    },
    {
      id: 5,
      title: "Business & Beyond",
      date: "May 29, 2025",
      image: "/cloudinary/26.jpg",
      description:
        "Practical strategies for recruiting, developing, and retaining top talent.",
      attendees: 355,
    },
    {
      id: 6,
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
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1783071430/Picture_2_eluej1.jpg",
      alt: "Event moment 11",
      caption: "Event Highlight",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1783071432/Picture_1_ltt8ey.png",
      alt: "Event moment 12",
      caption: "Event Highlight",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1783071436/BNG05146_agnokv.jpg",
      alt: "Event moment 13",
      caption: "Event Highlight",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1783861520/BNG05285_wd4hpr.jpg",
      alt: "Event moment 14",
      caption: "Event Highlight",
    },

    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1783861521/Staff_performance_hiohte.jpg",
      alt: "Staff Performance",
      caption: "Staff Performance",
    },
    {
      src: "https://res.cloudinary.com/di2bodp6u/image/upload/v1783861521/Training_mhxkan.jpg",
      alt: "Training Session",
      caption: "Training Session",
    },
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

  // Distribute images row-first across columns for masonry layout
  const distributeToColumns = (
    images: typeof galleryImages,
    colCount: number,
  ) => {
    const columns: (typeof galleryImages)[] = Array.from(
      { length: colCount },
      () => [],
    );
    images.forEach((image, i) => {
      columns[i % colCount].push(image);
    });
    return columns;
  };

  const galleryColumns = distributeToColumns(galleryImages, 3);

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

      <section className="py-10 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-12">
            Upcoming Events
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <div className="h-52 md:h-64">
                  <img
                    src="https://res.cloudinary.com/di2bodp6u/image/upload/v1783071437/BNG05285_fvnycf.jpg"
                    alt="Upcoming Event"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 mb-3">
                  Upcoming
                </Badge>
                <CardTitle className="text-lg md:text-xl text-gray-900 mb-2">
                  Title: TBA
                </CardTitle>
                <CardDescription className="space-y-2 mt-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    September 24, 2026
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    Virtual
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    TBA
                  </div>
                </CardDescription>
                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-amber-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-800 transition-colors duration-200 cursor-pointer"
                >
                  Register Here
                </button>
              </CardContent>
            </Card>
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

          {/* Masonry Grid - row-first distribution */}
          <div className="flex flex-col md:flex-row gap-4">
            {galleryColumns.map((colImages, colIndex) => (
              <div key={colIndex} className="flex-1 flex flex-col gap-4">
                {colImages.map((image, index) => (
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
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
