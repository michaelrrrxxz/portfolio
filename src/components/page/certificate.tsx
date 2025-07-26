"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { CertificationCard } from "./../CertificationCard";
import type { CertificationCardProps } from "./../CertificationCard";

const CERTIFICATIONS: CertificationCardProps[] = [
  {
    image: "/images/certs/cert4.png",
    title: "Udemy Php Masterclass",
    description:
      "Mastered advanced PHP concepts and best practices through a comprehensive Udemy course.",
  },
  {
    description:"Cursor Vibe Codinf Pro: Bulding any App from Scratch using AI",
    image: "/images/certs/cert5.png",
    title: "Cursor Vibe Coding Pro",
  },
  {
    image: "/images/certs/cert1.png",
    title: "Escaping Tutorial Hell",
    description:
      "Completed a course on breaking free from passive learning cycles and building real-world projects with confidence.",
  },
  {
    image: "/images/certs/cert2.png",
    title: "Choosing Methodologies, Tools, and Techniques",
    description:
      "Certified in evaluating and selecting the right development workflows, tools, and best practices tailored to project needs.",
  },
  {
    image: "/images/certs/cert3.png",
    title: "Exploring the Power of the Laravel Framework",
    description:
      "In-depth exploration of Laravel’s features — including routing, Eloquent ORM, middleware, and API development.",
  },
];

export function Certifications() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="px-8 py-20 bg-gray-50">
      <div
        className="container mx-auto mb-16 text-center max-w-4xl"
        data-aos="fade-up"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Certifications
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What I've Achieved
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Verified expertise and continued learning through professional
          certification programs.
        </p>
      </div>

    <div
  data-aos="fade-up"
  className="relative max-w-screen-xl mx-auto  px-4 overflow-visible"
>
  <Carousel className="w-full overflow-visible">
    <CarouselContent className="items-stretch">
      {CERTIFICATIONS.map((cert, idx) => (
        <CarouselItem
          key={idx}
          className="md:basis-[55%] lg:basis-[35%] px-4 flex"
        >
          <CertificationCard {...cert} />
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
</div>

    </section>
  );
}
