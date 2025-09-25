// import { ChevronRight } from "lucide-react";
// import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,

// } from "@/components/ui/carousel";

// const features = [
//   {
//     title: "Experienced Team",
//     description:
//       "Led by consultants who have worked across industries, with diverse business environments.",
//     image: "/cloudinary/1.jpg", // Replace with actual image URL
//   },
//   {
//     title: "Flexible Offerings",
//     description:
//       "In-person and online workshops; one-off training & ongoing coaching.",
//     image: "/cloudinary/2.jpg", // Replace with actual image URL
//   },
//   {
//     title: "Client-Centred Approach",
//     description:
//       "We tailor programs to your needs; focus on measurable outcomes.",
//     image: "/cloudinary/3.jpg", // Replace with actual image URL
//   },
//   {
//     title: "Proven Results",
//     description:
//       "We have supported clients to increase team productivity, reduce turnover, scale operations.",
//     image: "/cloudinary/4.jpg", // Replace with actual image URL
//   },
//   {
//     title: "Practical & Actionable",
//     description:
//       "Our trainings are hands-on, real-world tools, not just theory.",
//     image: "/cloudinary/10.jpg", // Replace with actual image URL
//   },
// ];

// export default function WorkCarousel() {
//   return (
//     <section className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl text-amber-900 mb-6">Why Work With Us</h2>
//         </div>
//         <Carousel opts={{ align: "start", loop: true }}>
//           <CarouselContent className="gap-x-4">
//             {features.map((feature, index) => (
//               <CarouselItem key={index} className=" h-[450px] w-full">
//                 <div className="p-3  grid grid-cols-[1.8fr_1.2fr] gap-6">
//                   <div>
//                     <img
//                       src={feature.image}
//                       alt={feature.title}
//                       className="object-cover w-full h-96 object-top rounded-md"
//                     />
//                   </div>
//                   <div className="flex flex-col justify-center space-y-4">
//                     <div className="text-amber-900 text-3xl">
//                       {feature.title}
//                     </div>
//                     <div className=" font-light text-xl">
//                       {feature.description}
//                     </div>
//                   </div>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           {/* <CarouselPrevious />
//           <CarouselNext /> */}
//         </Carousel>
//       </div>
//     </section>
//   );
// }

import React, { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CarouselApi } from "@/components/ui/carousel";

interface Feature {
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    title: "Experienced Team",
    description:
      "Led by consultants who have worked across industries, with diverse business environments.",
    image: "/cloudinary/22.jpg",
  },
  {
    title: "Flexible Offerings",
    description:
      "In-person and online workshops; one-off training & ongoing coaching.",
    image: "/cloudinary/2.jpg",
  },
  {
    title: "Client-Centred Approach",
    description:
      "We tailor programs to your needs; focus on measurable outcomes.",
    image: "/cloudinary/3.jpg",
  },
  {
    title: "Proven Results",
    description:
      "We have supported clients to increase team productivity, reduce turnover, scale operations.",
    image: "/cloudinary/4.jpg",
  },
  {
    title: "Practical & Actionable",
    description:
      "Our trainings are hands-on, real-world tools, not just theory.",
    image: "/cloudinary/10.jpg",
  },
];

const WorkCarousel: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollPrev = useCallback((): void => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback((): void => {
    api?.scrollNext();
  }, [api]);

  const scrollTo = useCallback(
    (index: number): void => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section id="work-with-us" className="py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center  md:mb-16">
          <h2 className="text-3xl md:text-5xl text-amber-900 mb-3 md:mb-6">
            Why Work With Us
          </h2>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="gap-x-4">
              {features.map((feature: Feature, index: number) => (
                <CarouselItem key={index} className="md:h-[450px] w-full">
                  <div className="p-3 grid md:grid-cols-[1.8fr_1.2fr] gap-6">
                    <div>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="object-cover w-full h-48 md:h-96 object-top "
                      />
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="text-amber-900 text-xl md:text-3xl">
                        {feature.title}
                      </div>
                      <div className="font-light md:text-xl">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Custom Navigation Controls */}
          <div className="flex items-center justify-center md:mt-8 gap-6">
            {/* Previous Button */}
            <button
              onClick={scrollPrev}
              className="flex items-center justify-center w-10 h-10 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors duration-300 disabled:opacity-50"
              disabled={current === 1}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dot Indicators */}
            <div className="flex space-x-2">
              {Array.from({ length: count }, (_, index: number) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    current === index + 1
                      ? "bg-amber-600"
                      : "bg-amber-200 hover:bg-amber-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={scrollNext}
              className="flex items-center justify-center w-10 h-10 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors duration-300 disabled:opacity-50"
              disabled={current === count}
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCarousel;
