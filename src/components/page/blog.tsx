"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ExternalLinkIcon } from "lucide-react";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function BlogPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Laravel CRUD Generator",
      subtitle: "Recent Blog Project",
      description:
        "A handy tool that scaffolds Laravel CRUD logic with just a few inputs — no repetitive boilerplate.",
      image: "/images/laravel-crud-generator.png",
      details:
        "This tool simplifies Laravel development by auto-generating models, migrations, controllers, and routes — speeding up backend workflows.",
      link: "https://laravelcrudgenerator.vercel.app/",
    },
    {
      id: 2,
      title: "NSCAT",
      subtitle: "Capstone Project",
      description: "Freshmen Examination Aptitude",
      image: "/images/ncsat.png",
      details:
        "Examination for freshmen students.",
      link: "#",
    },
    {
      id: 3,
      title: "Gym Management System",
      subtitle: "College Project",
      description:
        "A comprehensive system to manage gym memberships, trainers, and schedules.",
      image: "/images/gym.png",
      details:
        "Developed a full-stack application to streamline gym operations, including member tracking.",
      link: "#",
    },
    {
      id: 4,
      title: "Tax Expense System",
      subtitle: "OJT Project",
      description:
        "A system to manage and calculate tax expenses for individuals and businesses.",
      image: "/images/tax.png",
      details:
        "Built a web application that automates tax calculations and generates reports for better financial management.",
      link: "#",
    },
    {
      id: 5,
      title: "Online Quotation System",
      subtitle: "Project",
      description:
        "A platform for generating and managing quotations online.",
      image: "/images/q.png",
      details:
        "Created a user-friendly system that allows businesses to create, send, and track quotations efficiently.",
      link: "#",
    },
  ];

  return (
    <section className="px-8 py-20 bg-gray-50">
      {/* Section Header */}
      <div
        className="container mx-auto mb-16 text-center max-w-4xl"
        data-aos="fade-up"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Featured Projects
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          My Blog Projects
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Explore some of my key web development projects — each designed to
          solve real-world problems with clean, scalable solutions.
        </p>
      </div>

      {/* Carousel */}
      <div
        data-aos="fade-up"
        className="relative max-w-screen-xl mx-auto px-4 overflow-visible"
      >
        <Carousel className="w-full overflow-visible">
          <CarouselContent className="items-stretch">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="md:basis-[55%] lg:basis-[35%] px-4 flex"
              >
                <Card className="flex flex-col w-full rounded-2xl shadow-xl border bg-white hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-semibold text-gray-900">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-primary mt-1 font-medium">
                      {project.subtitle}
                    </p>
                  </CardHeader>

                  <CardContent className="flex flex-col gap-4 text-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover rounded-xl border"
                    />

                    {/* <p className="text-gray-600 text-base">{project.description}</p> */}
                    <p className="text-muted-foreground text-sm">
                      {project.details}
                    </p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2"
                    >
                      {/* <Button
                        variant="default"
                        className="flex gap-2 items-center mx-auto"
                      >
                        Visit Project
                        <ExternalLinkIcon className="w-4 h-4" />
                      </Button> */}
                    </a>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
